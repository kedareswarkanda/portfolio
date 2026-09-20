"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, User, Sparkles } from "lucide-react";

interface Message {
  sender: "user" | "bot";
  text: string;
}

const presetPrompts = [
  "Who is Kedareswar?",
  "What are his projects?",
  "What technologies does he know?",
  "What are his achievements?",
  "Where does he study?",
  "What internships has he completed?",
];

export default function AskKedareswarAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "Hello! I am Kedareswar AI. Ask me about Kedareswar's projects, skills, education, or achievements.",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = { sender: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      let response = "";
      const q = text.toLowerCase();

      if (q.includes("who is") || q.includes("about") || q.includes("identity")) {
        response = "Kedareswar is an AI & ML Undergraduate pursuing B.Tech CSE (AI & ML) at Kalasalingam Academy of Research and Education (2024-2028). He is based in Nandyal, Andhra Pradesh, India.";
      } else if (q.includes("project") || q.includes("borewell") || q.includes("navigator")) {
        response = "Kedareswar has built two major projects:\n1. Smart Borewell Starter (Aug–Nov 2025): Real-time water level monitoring, energy optimization using Python, Streamlit, and Firebase.\n2. AI Academic & Career Navigator (Jan–Apr 2026): Centralized platform for academic resources, career planning, and certification exploration using Python, NLP, and TF-IDF.";
      } else if (q.includes("technolog") || q.includes("skill") || q.includes("python") || q.includes("stack")) {
        response = "Skills from resume:\n• Languages: Python, Java, C, HTML, CSS, JavaScript (Basics), OOPS\n• AI/ML: Supervised Learning, Unsupervised Learning, Regression, Classification, Model Evaluation, NLP (TF-IDF)\n• Databases: SQL, Firebase\n• Tools: VS Code, GitHub, Google Colab\n• Soft Skills: Problem Solving, Team Management, Creative Thinking, Critical Thinking.";
      } else if (q.includes("achievement") || q.includes("award") || q.includes("hackathon") || q.includes("krone")) {
        response = "Achievements:\n1. Winner – KRONE'26 National Level Hackathon.\n2. Shortlisted among Top 15 teams out of 200+ in Smart India Hackathon 2025 internal hackathon.\n3. Published research paper: 'Automated System-based Attendance System' in JETNR.";
      } else if (q.includes("study") || q.includes("college") || q.includes("education") || q.includes("cgpa")) {
        response = "Education:\n• B.Tech CSE (AI & ML): Kalasalingam Academy of Research and Education (2024–2028), CGPA: 8.41\n• Intermediate: SDRs Akanksha Junior College (2024), 88.5%\n• 10th Class: Narayana Group of Schools (2022), 74.13%.";
      } else if (q.includes("intern") || q.includes("experience") || q.includes("work") || q.includes("bytehearts")) {
        response = "Experience & Internships:\n• ByteHearts: Full Stack Development Intern (Worked on web dev projects after hackathon selection)\n• Infosys Springboard: AI & ML Virtual Internship (Training in ML concepts & data analysis)\n• IKSC: Web Developer\n• Coding Blocks: Content Creator.";
      } else if (q.includes("contact") || q.includes("email") || q.includes("phone")) {
        response = "Contact Info:\n• Email: 99240040247@klu.ac.in\n• Phone: 9347651446\n• GitHub: github.com/kedareswarkanda\n• LinkedIn: linkedin.com/in/kedareswarkanda";
      } else {
        response = "I can only answer questions verified by Kedareswar's resume. Try asking about his projects, skills, education, hackathons, or internships!";
      }

      setMessages((prev) => [...prev, { sender: "bot", text: response }]);
      setIsTyping(false);
    }, 450);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="h-13 w-13 rounded-full bg-[#FF6B35] text-white flex items-center justify-center shadow-lg hover:bg-[#E55A27] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF6B35]"
          aria-label="Toggle Kedareswar AI Assistant"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <MessageSquare className="h-5 w-5" />}
        </button>
      </div>

      {/* Chat Window Dialog */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-22 right-6 z-40 w-[340px] sm:w-[380px] h-[480px] bg-background border border-[#EAEAEA] dark:border-[#2A2A2A] rounded-3xl shadow-xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-[#FFF1EB] dark:bg-[#1E1714] border-b border-[#EAEAEA] dark:border-[#2A2A2A] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-7 w-7 rounded-lg bg-[#FF6B35] text-white flex items-center justify-center shadow-xs">
                  <Bot className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-xs text-foreground flex items-center gap-1">
                    Kedareswar AI
                    <Sparkles className="h-3 w-3 text-[#FF6B35]" />
                  </h4>
                  <span className="text-[9px] text-muted font-medium">Resume Verified Knowledge Base</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-muted hover:text-foreground p-1 rounded-md"
                aria-label="Close Assistant"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 font-sans text-xs">
              {messages.map((msg, idx) => {
                const isBot = msg.sender === "bot";
                return (
                  <div key={idx} className={`flex items-start gap-2 max-w-[88%] ${!isBot ? "self-end flex-row-reverse" : ""}`}>
                    <div className={`h-6 w-6 rounded-md flex items-center justify-center shrink-0 ${
                      isBot ? "bg-[#FFF1EB] dark:bg-[#1E1714] text-[#FF6B35]" : "bg-foreground text-background"
                    }`}>
                      {isBot ? <Bot className="h-3.5 w-3.5" /> : <User className="h-3.5 w-3.5" />}
                    </div>

                    <div className={`p-3 rounded-2xl leading-relaxed ${
                      isBot
                        ? "bg-background border border-[#EAEAEA] dark:border-[#2A2A2A] text-foreground"
                        : "bg-[#FF6B35] text-white rounded-tr-xs font-medium"
                    }`}>
                      <p className="whitespace-pre-line">{msg.text}</p>
                    </div>
                  </div>
                );
              })}

              {isTyping && (
                <div className="flex items-center gap-2 text-xs text-muted">
                  <Bot className="h-3.5 w-3.5 text-[#FF6B35]" />
                  <span>Kedareswar AI is responding...</span>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Presets & Form */}
            <div className="p-3 bg-background border-t border-[#EAEAEA] dark:border-[#2A2A2A] flex flex-col gap-2">
              {messages.length < 3 && (
                <div className="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar">
                  {presetPrompts.map((prompt) => (
                    <button
                      key={prompt}
                      onClick={() => handleSend(prompt)}
                      className="px-2.5 py-1 rounded-full bg-[#FFF1EB] dark:bg-[#1E1714] text-[10px] font-semibold text-[#FF6B35] whitespace-nowrap hover:bg-[#FF6B35] hover:text-white transition-colors shrink-0"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              )}

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend(inputValue);
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask a question..."
                  className="flex-1 h-9 rounded-full bg-background border border-[#EAEAEA] dark:border-[#2A2A2A] text-xs px-3.5 outline-none focus:border-[#FF6B35]"
                />
                <button
                  type="submit"
                  className="h-9 w-9 rounded-full bg-[#FF6B35] text-white flex items-center justify-center hover:bg-[#E55A27] transition-colors focus-visible:outline-2 focus-visible:outline-[#FF6B35]"
                  aria-label="Send Message"
                >
                  <Send className="h-3.5 w-3.5" />
                </button>
              </form>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
