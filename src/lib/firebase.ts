import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, collection, addDoc, doc, getDoc, setDoc, runTransaction } from "firebase/firestore";

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Check if firebase is configured
const isFirebaseConfigured =
  process.env.NEXT_PUBLIC_FIREBASE_API_KEY &&
  process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;

let app;
let db: any = null;

if (isFirebaseConfigured) {
  try {
    app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
    db = getFirestore(app);
  } catch (error) {
    console.error("Firebase initialization failed:", error);
  }
}

// Interfaces
export interface ContactMessage {
  name: string;
  email: string;
  subject?: string;
  message: string;
  timestamp: number;
}

/**
 * Increments the page visitor count.
 * Uses Firestore with an atomic transaction if configured,
 * otherwise falls back to localStorage.
 */
export async function incrementVisitorCount(): Promise<number> {
  if (db) {
    try {
      const visitorDocRef = doc(db, "stats", "visitors");
      let count = 0;
      await runTransaction(db, async (transaction) => {
        const sfDoc = await transaction.get(visitorDocRef);
        if (!sfDoc.exists()) {
          transaction.set(visitorDocRef, { count: 1 });
          count = 1;
        } else {
          const newCount = (sfDoc.data().count || 0) + 1;
          transaction.update(visitorDocRef, { count: newCount });
          count = newCount;
        }
      });
      return count;
    } catch (e) {
      console.warn("Firebase visitor count transaction failed, falling back to mock:", e);
    }
  }

  // Fallback / Mock
  if (typeof window !== "undefined") {
    const localKey = "portfolio_visitor_count";
    const sessionKey = "portfolio_visitor_counted";
    let count = parseInt(localStorage.getItem(localKey) || "124"); // Fun starter number for realism!
    if (!sessionStorage.getItem(sessionKey)) {
      count += 1;
      localStorage.setItem(localKey, count.toString());
      sessionStorage.setItem(sessionKey, "true");
    }
    return count;
  }
  return 124;
}

/**
 * Submits a message from the contact form.
 * Saves to Firestore if configured, otherwise logs to console and stores in localStorage.
 */
export async function submitContactMessage(message: ContactMessage): Promise<boolean> {
  if (db) {
    try {
      await addDoc(collection(db, "messages"), message);
      return true;
    } catch (e) {
      console.error("Firebase submit message failed, falling back to mock:", e);
    }
  }

  // Fallback / Mock
  if (typeof window !== "undefined") {
    const localKey = "portfolio_submitted_messages";
    const existing: ContactMessage[] = JSON.parse(localStorage.getItem(localKey) || "[]");
    existing.push(message);
    localStorage.setItem(localKey, JSON.stringify(existing));
    console.log("Mock saved contact message:", message);
    return true;
  }
  return false;
}
