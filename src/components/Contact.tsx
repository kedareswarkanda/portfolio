"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { submitContactMessage } from "@/lib/firebase";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const contactChannels = [
    {
      icon: <Mail className="h-4.5 w-4.5 text-[#7F011F]" />,
      label: "Direct Email",
      value: "kandakedareswar@gmail.com",
      href: "mailto:kandakedareswar@gmail.com",
    },
    {
      icon: <Phone className="h-4.5 w-4.5 text-[#7F011F]" />,
      label: "Direct Phone",
      value: "+91 9347651446",
      href: "tel:9347651446",
    },
    {
      icon: <Github className="h-4.5 w-4.5 text-[#7F011F]" />,
      label: "GitHub Profile",
      value: "github.com/kedareswarkanda",
      href: "https://github.com/kedareswarkanda",
    },
    {
      icon: <Linkedin className="h-4.5 w-4.5 text-[#7F011F]" />,
      label: "LinkedIn Profile",
      value: "linkedin.com/in/kedareswarkanda",
      href: "https://linkedin.com/in/kedareswarkanda",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setLoading(true);
    setError(false);

    try {
      const sent = await submitContactMessage({
        name: name.trim(),
        email: email.trim(),
        subject: subject.trim(),
        message: message.trim(),
        timestamp: Date.now(),
      });

      if (sent) {
        setSuccess(true);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setTimeout(() => setSuccess(false), 6000);
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
    <section id="contact" className="relative w-full py-24 bg-[#F5EBD0] dark:bg-[#24151A] px-6 border-b border-[#E6DCC7] dark:border-[#422631]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2 mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7F011F] dark:text-[#F5EBD0]">
            09 // INITIATE DIALOGUE
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-[#242124] dark:text-[#F5EBD0]">
            Have an idea worth building?
          </h2>
          <p className="text-sm text-[#77716D] dark:text-[#A89F9A] max-w-md mt-1 font-sans">
            Let's connect, exchange ideas and create something meaningful.
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
                  className="editorial-card p-5 rounded-2xl flex items-center gap-4 group"
                >
                  <div className="h-10 w-10 rounded-xl bg-[#F5EBD0] dark:bg-[#24151A] border border-[#E6DCC7] dark:border-[#422631] flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div className="truncate">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-[#77716D] dark:text-[#A89F9A]">
                      {item.label}
                    </span>
                    <span className="font-mono text-xs font-semibold text-[#242124] dark:text-[#F5EBD0] group-hover:text-[#7F011F] transition-colors truncate block mt-0.5">
                      {item.value}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="mailto:kandakedareswar@gmail.com"
                className="flex-1 min-w-[140px] h-11 flex items-center justify-center gap-2 rounded-full bg-[#7F011F] text-[#F5EBD0] text-xs font-bold uppercase tracking-wider hover:bg-[#4B0015] transition-colors shadow-xs"
              >
                <Mail className="h-4 w-4" />
                <span>Email Me</span>
              </a>
              <a
                href="https://github.com/kedareswarkanda"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 px-5 items-center justify-center gap-2 rounded-full border border-[#E6DCC7] dark:border-[#422631] bg-[#FFF9ED] dark:bg-[#321A23] text-[#242124] dark:text-[#F5EBD0] hover:border-[#7F011F] hover:text-[#7F011F] text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/kedareswarkanda"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 px-5 items-center justify-center gap-2 rounded-full border border-[#E6DCC7] dark:border-[#422631] bg-[#FFF9ED] dark:bg-[#321A23] text-[#242124] dark:text-[#F5EBD0] hover:border-[#7F011F] hover:text-[#7F011F] text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl border border-[#E6DCC7] dark:border-[#422631] bg-[#FFF9ED] dark:bg-[#321A23] flex flex-col gap-6 shadow-2xs">
              <span className="text-xs font-bold uppercase tracking-wider text-[#77716D] dark:text-[#A89F9A] block">
                Send an inquiry message
              </span>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4 font-sans">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-wider text-[#77716D] dark:text-[#A89F9A]">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="Your name"
                      className="h-11 rounded-xl bg-[#F5EBD0] dark:bg-[#24151A] border border-[#E6DCC7] dark:border-[#422631] text-xs px-4 text-[#242124] dark:text-[#F5EBD0] outline-none focus:border-[#7F011F]"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-wider text-[#77716D] dark:text-[#A89F9A]">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="name@organization.com"
                      className="h-11 rounded-xl bg-[#F5EBD0] dark:bg-[#24151A] border border-[#E6DCC7] dark:border-[#422631] text-xs px-4 text-[#242124] dark:text-[#F5EBD0] outline-none focus:border-[#7F011F]"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="subject" className="text-[10px] font-bold uppercase tracking-wider text-[#77716D] dark:text-[#A89F9A]">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Project inquiry / Collaboration"
                    className="h-11 rounded-xl bg-[#F5EBD0] dark:bg-[#24151A] border border-[#E6DCC7] dark:border-[#422631] text-xs px-4 text-[#242124] dark:text-[#F5EBD0] outline-none focus:border-[#7F011F]"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-wider text-[#77716D] dark:text-[#A89F9A]">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={4}
                    placeholder="Tell me about your idea or project scope..."
                    className="rounded-xl bg-[#F5EBD0] dark:bg-[#24151A] border border-[#E6DCC7] dark:border-[#422631] text-xs p-4 text-[#242124] dark:text-[#F5EBD0] outline-none focus:border-[#7F011F] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex h-12 items-center justify-center gap-2 rounded-full bg-[#7F011F] text-[#F5EBD0] text-xs font-bold uppercase tracking-wider hover:bg-[#4B0015] transition-colors disabled:opacity-50 mt-2 shadow-xs cursor-pointer"
                >
                  {loading ? (
                    <span className="h-4 w-4 border-2 border-[#F5EBD0] border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Transmit Message</span>
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
                    className="flex items-center gap-2 p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-700 dark:text-emerald-400 font-medium"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                    <span>Your message has been received! Kedareswar will get back to you shortly.</span>
                  </motion.div>
                )}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-red-600 dark:text-red-400 font-medium"
                  >
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    <span>There was an issue sending your message. Please reach out directly to kandakedareswar@gmail.com.</span>
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
