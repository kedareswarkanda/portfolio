"use client";

import { motion } from "framer-motion";
import { Trophy, Award, BookOpen, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

interface Achievement {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  badge: string;
}

export default function Achievements() {
  const achievements: Achievement[] = [
    {
      id: "krone",
      title: "KRONE'26",
      subtitle: "Winner — National-Level Hackathon",
      description: "Secured 1st place in a competitive national hackathon sprint designing real-time automation solutions. (Click card to celebrate!)",
      icon: <Trophy className="h-6 w-6 text-[#F5EBD0]" />,
      badge: "1st Place Winner",
    },
    {
      id: "sih",
      title: "SMART INDIA HACKATHON 2025",
      subtitle: "Shortlisted Among Top 15 Teams",
      description: "Ranked among the Top 15 teams out of 200+ teams in the internal hackathon evaluation round.",
      icon: <Award className="h-6 w-6 text-[#F5EBD0]" />,
      badge: "Top 15 / 200+ Teams",
    },
    {
      id: "pub",
      title: "RESEARCH PUBLICATION",
      subtitle: "Journal: JETNR",
      description: "Published research paper: 'Automated System-based Attendance System' in the Journal of Emerging Technologies and Innovative Research.",
      icon: <BookOpen className="h-6 w-6 text-[#F5EBD0]" />,
      badge: "JETNR Published",
    },
  ];

  const handleConfetti = (id: string) => {
    if (id === "krone") {
      confetti({
        particleCount: 90,
        spread: 65,
        origin: { y: 0.6 },
        colors: ["#7F011F", "#F5EBD0", "#FFF9ED", "#4B0015"],
      });
    }
  };

  return (
    <section id="achievements" className="relative w-full py-24 bg-[#4B0015] text-[#F5EBD0] px-6 border-b border-[#7F011F]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2 mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5EBD0]/80">
            07 // RECOGNITION & IMPACT
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-[#FFF9ED]">
            Achievements & Publications.
          </h2>
          <p className="text-sm text-[#F5EBD0]/80 max-w-md mt-1 font-sans">
            Verified competitive hackathon victories and academic research publications from my latest resume.
          </p>
        </div>

        {/* Achievements Grid with Deep Burgundy & Cream Theme */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => handleConfetti(item.id)}
              className="p-7 rounded-2xl bg-[#32000E]/70 border border-[#7F011F] hover:border-[#F5EBD0]/60 flex flex-col justify-between gap-6 cursor-pointer relative overflow-hidden group transition-all shadow-md"
            >
              {item.id === "krone" && (
                <div className="absolute top-4 right-4">
                  <Sparkles className="h-4 w-4 text-[#F5EBD0] animate-pulse" />
                </div>
              )}

              <div className="flex flex-col gap-4">
                <div className="h-12 w-12 rounded-xl bg-[#7F011F] flex items-center justify-center group-hover:scale-105 transition-transform shadow-xs">
                  {item.icon}
                </div>

                <div>
                  <h3 className="font-heading font-black text-lg text-[#FFF9ED] group-hover:text-[#F5EBD0] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-bold text-[#F5EBD0] uppercase tracking-wider mt-0.5">
                    {item.subtitle}
                  </p>
                </div>

                <p className="text-xs text-[#F5EBD0]/85 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#7F011F] text-[10px] font-mono text-[#F5EBD0]/80 uppercase tracking-wider flex items-center justify-between">
                <span>{item.badge}</span>
                <span className="text-[#F5EBD0] font-bold">●</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
