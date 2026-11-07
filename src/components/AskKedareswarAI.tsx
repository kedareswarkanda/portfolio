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
  "What projects has he developed?",
  "What is SolarIQ?",
  "What is UniPulse?",
  "What technologies does he use?",
  "What are his achievements?",
  "What internships has he completed?",
  "How can I contact him?",
];

export default function AskKedareswarAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "Hello! I am Kedareswar AI, an interactive assistant built to help you explore Kanda Kedareswar's projects, technical skills, education, and achievements.",
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

      if (q.includes("who is") || q.includes("about") || q.includes("identity") || q.includes("profile")) {
        response = "Kanda Kedareswar is a Computer Science and Engineering undergraduate specializing in Artificial Intelligence & Machine Learning at Kalasalingam Academy of Research and Education (2024–2028, CGPA 8.41). He is from Nandyal, Andhra Pradesh, India.";
      } else if (q.includes("solariq")) {
        response = "SolarIQ is a full-stack solar analysis application developed by Kedareswar that combines physics-based photovoltaic performance calculations with XGBoost machine learning predictions. It includes a performance analysis dashboard and what-if parameter optimization workflows using React, FastAPI, XGBoost, and MongoDB.";
      } else if (q.includes("unipulse")) {
        response = "UniPulse is an AI-powered academic and career guidance platform concept designed by Kedareswar in 2026. It features centralized academic resource management, career roadmaps, certification discovery, and an intelligent chatbot supporting file and photo inquiry uploads using Next.js, FastAPI, and Firebase.";
      } else if (q.includes("project") || q.includes("built") || q.includes("works") || q.includes("solar & wind") || q.includes("wind")) {
        response = "Kedareswar's featured projects:\n1. UniPulse (2026): AI-powered academic & career guidance platform architecture (Next.js, FastAPI, Firebase).\n2. Solar & Wind Deployment Intelligence Platform (Infosys Springboard): Renewable-energy site assessment backend (FastAPI, PostgreSQL, SQLAlchemy, Chart.js).\n3. SolarIQ (2026): AI solar panel performance and efficiency optimizer (React, FastAPI, XGBoost, MongoDB).";
      } else if (q.includes("technolog") || q.includes("skill") || q.includes("stack") || q.includes("language")) {
        response = "Technical skills from resume:\n• Programming: Python, Java (Basics), C (Basics)\n• Web Development: React, Next.js, HTML, CSS, JavaScript (Basics)\n• AI/ML: Supervised & Unsupervised Learning, Regression, Classification, Model Evaluation, NLP (TF-IDF), XGBoost\n• Databases & Backend: SQL, Firebase, MongoDB, FastAPI, PostgreSQL\n• Developer Tools: VS Code, GitHub, Google Colab\n• Soft Skills: Problem Solving, Teamwork, Team Coordination, Creative & Critical Thinking.";
      } else if (q.includes("achievement") || q.includes("award") || q.includes("hackathon") || q.includes("krone") || q.includes("publication")) {
        response = "Key Achievements:\n1. KRONE'26: Winner — National-Level Hackathon.\n2. Smart India Hackathon 2025: Shortlisted among Top 15 teams out of 200+ in the internal hackathon.\n3. Research Publication: 'Automated System-based Attendance System' in the JETNR journal.";
      } else if (q.includes("intern") || q.includes("experience") || q.includes("bytehearts") || q.includes("infosys") || q.includes("work")) {
        response = "Experience & Internships:\n• ByteHearts: Full Stack Development Intern (Selected for 4-month internship following competitive hackathon selection; worked on web development tasks in a team).\n• Infosys Springboard: AI & ML Virtual Intern (Completed AI/ML learning modules and practical activities).\n• IKSC: Web Developer.\n• Coding Blocks: Content Creator.";
      } else if (q.includes("education") || q.includes("study") || q.includes("college") || q.includes("cgpa") || q.includes("degree")) {
        response = "Educational Timeline:\n• B.Tech in CSE (AI & ML): Kalasalingam Academy of Research and Education (2024–2028), CGPA: 8.41.\n• Intermediate (MPC): SDRs Akanksha Junior College, Nandyal (2024), 88.5%.\n• 10th Class: Narayana Group of Schools, Kurnool (2022), 74.13%.";
      } else if (q.includes("contact") || q.includes("email") || q.includes("phone") || q.includes("reach") || q.includes("hire")) {
        response = "You can contact Kedareswar directly:\n• Email: kandakedareswar@gmail.com\n• Phone: +91 9347651446\n• GitHub: https://github.com/kedareswarkanda\n• LinkedIn: https://linkedin.com/in/kedareswarkanda\nOr submit an inquiry using the Contact form below!";
      } else {
        response = "I answer questions based on Kedareswar's verified portfolio and resume data. Try asking about 'SolarIQ', 'UniPulse', 'Skills', 'Achievements', 'Internships', or 'Contact'!";
      }

      setMessages((prev) => [...prev, { sender: "bot", text: response }]);
      setIsTyping(false);
    }, 400);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="h-13 w-13 rounded-full bg-[#7F011F] text-[#F5EBD0] flex items-center justify-center shadow-lg hover:bg-[#4B0015] transition-all cursor-pointer"
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
            className="fixed bottom-22 right-6 z-40 w-[340px] sm:w-[380px] h-[490px] bg-[#FFF9ED] dark:bg-[#321A23] border border-[#E6DCC7] dark:border-[#422631] rounded-3xl shadow-xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-[#F5EBD0] dark:bg-[#24151A] border-b border-[#E6DCC7] dark:border-[#422631] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="h-7 w-7 rounded-lg bg-[#7F011F] text-[#F5EBD0] flex items-center justify-center shadow-2xs">
                  <Bot className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-xs text-[#242124] dark:text-[#F5EBD0] flex items-center gap-1">
                    Kedareswar AI
                    <Sparkles className="h-3 w-3 text-[#7F011F] dark:text-[#F5EBD0]" />
                  </h4>
                  <span className="text-[9px] text-[#77716D] dark:text-[#A89F9A] font-medium">Local Resume Knowledge Base</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-[#77716D] dark:text-[#A89F9A] hover:text-[#242124] dark:hover:text-[#F5EBD0] p-1 rounded-md"
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
                      isBot ? "bg-[#F5EBD0] dark:bg-[#24151A] text-[#7F011F]" : "bg-[#7F011F] text-[#F5EBD0]"
                    }`}>
                      {isBot ? <Bot className="h-3.5 w-3.5" /> : <User className="h-3.5 w-3.5" />}
                    </div>

                    <div className={`p-3 rounded-2xl leading-relaxed ${
                      isBot
                        ? "bg-[#FFF9ED] dark:bg-[#24151A] border border-[#E6DCC7] dark:border-[#422631] text-[#242124] dark:text-[#F5EBD0]"
                        : "bg-[#7F011F] text-[#F5EBD0] rounded-tr-xs font-medium"
                    }`}>
                      <p className="whitespace-pre-line">{msg.text}</p>
                    </div>
                  </div>
                );
              })}

              {isTyping && (
                <div className="flex items-center gap-2 text-xs text-[#77716D] dark:text-[#A89F9A]">
                  <Bot className="h-3.5 w-3.5 text-[#7F011F]" />
                  <span>Kedareswar AI is responding...</span>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Presets & Form */}
            <div className="p-3 bg-[#FFF9ED] dark:bg-[#321A23] border-t border-[#E6DCC7] dark:border-[#422631] flex flex-col gap-2">
              {messages.length < 3 && (
                <div className="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar">
                  {presetPrompts.map((prompt) => (
                    <button
                      key={prompt}
                      onClick={() => handleSend(prompt)}
                      className="px-2.5 py-1 rounded-full bg-[#F5EBD0] dark:bg-[#24151A] text-[10px] font-semibold text-[#7F011F] dark:text-[#F5EBD0] whitespace-nowrap hover:bg-[#7F011F] hover:text-[#F5EBD0] transition-colors shrink-0"
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
                  className="flex-1 h-9 rounded-full bg-[#F5EBD0] dark:bg-[#24151A] border border-[#E6DCC7] dark:border-[#422631] text-xs px-3.5 text-[#242124] dark:text-[#F5EBD0] outline-none focus:border-[#7F011F]"
                />
                <button
                  type="submit"
                  className="h-9 w-9 rounded-full bg-[#7F011F] text-[#F5EBD0] flex items-center justify-center hover:bg-[#4B0015] transition-colors"
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
