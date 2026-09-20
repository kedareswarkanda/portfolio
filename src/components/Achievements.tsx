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
}

export default function Achievements() {
  const achievements: Achievement[] = [
    {
      id: "krone",
      title: "KRONE'26",
      subtitle: "National Level Hackathon Winner",
      description: "Winner – National Level Hackathon. Click card to trigger celebration!",
      icon: <Trophy className="h-6 w-6 text-[#FF6B35]" />,
    },
    {
      id: "sih",
      title: "SMART INDIA HACKATHON 2025",
      subtitle: "Top 15 Shortlisted Team",
      description: "Shortlisted among top 15 teams out of 200+ in internal Hackathon.",
      icon: <Award className="h-6 w-6 text-[#FF6B35]" />,
    },
    {
      id: "pub",
      title: "PUBLICATIONS",
      subtitle: "JETNR Journal Publication",
      description: "Automated System -based Attendance system – JETNR.",
      icon: <BookOpen className="h-6 w-6 text-[#FF6B35]" />,
    },
  ];

  const handleConfetti = (id: string) => {
    if (id === "krone") {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#FF6B35", "#FFF1EB", "#111111"],
      });
    }
  };

  return (
    <section id="achievements" className="relative w-full py-24 bg-background px-6 border-b border-[#EAEAEA] dark:border-[#222222]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2 mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6B35]">
            07 // RECOGNITION
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-foreground">
            Achievements & Publications.
          </h2>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => handleConfetti(item.id)}
              className="editorial-card p-6 rounded-2xl flex flex-col justify-between gap-6 cursor-pointer relative overflow-hidden group"
            >
              {item.id === "krone" && (
                <div className="absolute top-4 right-4">
                  <Sparkles className="h-4 w-4 text-[#FF6B35] animate-pulse" />
                </div>
              )}

              <div className="flex flex-col gap-4">
                <div className="h-12 w-12 rounded-xl bg-[#FFF1EB] dark:bg-[#1E1714] flex items-center justify-center group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>

                <div>
                  <h3 className="font-heading font-black text-base text-foreground group-hover:text-[#FF6B35] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-bold text-[#FF6B35] uppercase tracking-wider mt-0.5">
                    {item.subtitle}
                  </p>
                </div>

                <p className="text-xs text-muted leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#EAEAEA] dark:border-[#2A2A2A] text-[10px] font-mono text-muted uppercase tracking-wider flex items-center justify-between">
                <span>Verified Achievement</span>
                <span className="text-[#FF6B35] font-bold">●</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
