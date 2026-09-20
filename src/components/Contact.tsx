"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { submitContactMessage } from "@/lib/firebase";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const contactChannels = [
    {
      icon: <Mail className="h-4.5 w-4.5 text-[#FF6B35]" />,
      label: "Email",
      value: "99240040247@klu.ac.in",
      href: "mailto:99240040247@klu.ac.in",
    },
    {
      icon: <Phone className="h-4.5 w-4.5 text-[#FF6B35]" />,
      label: "Phone",
      value: "+91 9347651446",
      href: "tel:9347651446",
    },
    {
      icon: <Github className="h-4.5 w-4.5 text-[#FF6B35]" />,
      label: "GitHub Profile",
      value: "github.com/kedareswarkanda",
      href: "https://github.com/kedareswarkanda",
    },
    {
      icon: <Linkedin className="h-4.5 w-4.5 text-[#FF6B35]" />,
      label: "LinkedIn Profile",
      value: "linkedin.com/in/kedareswarkanda",
      href: "https://www.linkedin.com/in/kedareswarkanda",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setLoading(true);
    setError(false);

    try {
      const sent = await submitContactMessage({
        name,
        email,
        message,
        timestamp: Date.now(),
      });

      if (sent) {
        setSuccess(true);
        setName("");
        setEmail("");
        setMessage("");
        setTimeout(() => setSuccess(false), 5000);
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative w-full py-24 bg-background px-6 border-b border-[#EAEAEA] dark:border-[#222222]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2 mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6B35]">
            09 // GET IN TOUCH
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-foreground">
            Let's build something meaningful.
          </h2>
          <p className="text-sm text-muted max-w-md mt-1 font-sans">
            Open to AI & ML internships, machine learning projects, and full-stack engineering collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Links & Channels */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              {contactChannels.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="editorial-card p-4.5 rounded-2xl flex items-center gap-4 group"
                >
                  <div className="h-10 w-10 rounded-xl bg-[#FFF1EB] dark:bg-[#1E1714] flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div className="truncate">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-muted">
                      {item.label}
                    </span>
                    <span className="font-mono text-xs font-semibold text-foreground group-hover:text-[#FF6B35] transition-colors truncate block mt-0.5">
                      {item.value}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* CTA Buttons row */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="mailto:99240040247@klu.ac.in"
                className="flex-1 min-w-[140px] h-11 flex items-center justify-center gap-2 rounded-full bg-[#FF6B35] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#E55A27] transition-colors shadow-xs"
              >
                <Mail className="h-4 w-4" />
                <span>Email Me</span>
              </a>
              <a
                href="https://github.com/kedareswarkanda"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 px-5 items-center justify-center gap-2 rounded-full border border-[#EAEAEA] dark:border-[#2A2A2A] text-foreground hover:border-[#FF6B35] hover:text-[#FF6B35] text-xs font-bold uppercase tracking-wider transition-colors bg-background"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/kedareswarkanda"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 px-5 items-center justify-center gap-2 rounded-full border border-[#EAEAEA] dark:border-[#2A2A2A] text-foreground hover:border-[#FF6B35] hover:text-[#FF6B35] text-xs font-bold uppercase tracking-wider transition-colors bg-background"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl border border-[#EAEAEA] dark:border-[#2A2A2A] bg-background flex flex-col gap-6 shadow-xs">
              <span className="text-xs font-bold uppercase tracking-wider text-muted block">
                Send a message
              </span>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4 font-sans">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-wider text-muted">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="John Doe"
                    className="h-11 rounded-xl bg-background border border-[#EAEAEA] dark:border-[#2A2A2A] text-xs px-4 text-foreground outline-none focus:border-[#FF6B35]"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-wider text-muted">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="john@example.com"
                    className="h-11 rounded-xl bg-background border border-[#EAEAEA] dark:border-[#2A2A2A] text-xs px-4 text-foreground outline-none focus:border-[#FF6B35]"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-wider text-muted">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={4}
                    placeholder="Write your message details..."
                    className="rounded-xl bg-background border border-[#EAEAEA] dark:border-[#2A2A2A] text-xs p-4 text-foreground outline-none focus:border-[#FF6B35] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex h-12 items-center justify-center gap-2 rounded-full bg-[#FF6B35] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#E55A27] transition-colors disabled:opacity-50 mt-2 shadow-xs"
                >
                  {loading ? (
                    <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="h-3.5 w-3.5" />
                    </>
                  )}
                </button>
              </form>

              <AnimatePresence>
                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-600 dark:text-emerald-400"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                    <span>Your message has been sent successfully!</span>
                  </motion.div>
                )}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-red-500"
                  >
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    <span>Failed to send message. Please try again or use direct email.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
