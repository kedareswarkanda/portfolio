"use client";

import { motion } from "framer-motion";
import { Calendar, GraduationCap, Code, Trophy, Briefcase } from "lucide-react";

interface Milestone {
  year: string;
  title: string;
  institution: string;
  detail: string;
  type: "edu" | "proj" | "hack" | "intern";
}

const milestones: Milestone[] = [
  {
    year: "2026",
    title: "ByteHearts",
    institution: "Full Stack Development Intern",
    detail: "Worked on web development projects and collaborated in a team environment after hackathon shortlisting.",
    type: "intern",
  },
  {
    year: "2026",
    title: "KRONE'26",
    institution: "National Level Hackathon Winner",
    detail: "Won 1st place in the national-level hackathon.",
    type: "hack",
  },
  {
    year: "2026",
    title: "AI Academic & Career Navigator",
    institution: "Project Development",
    detail: "Centralized platform for academic resources, career planning, and certification exploration.",
    type: "proj",
  },
  {
    year: "2025",
    title: "Smart India Hackathon",
    institution: "Top 15 Shortlisted Team",
    detail: "Shortlisted among Top 15 teams out of 200+ teams in the internal hackathon.",
    type: "hack",
  },
  {
    year: "2025",
    title: "Smart Borewell Starter",
    institution: "Project Development (Aug – Nov 2025)",
    detail: "Real-time water level monitoring, energy optimization and sustainable farm management.",
    type: "proj",
  },
  {
    year: "2024",
    title: "Started B.Tech CSE – AI & ML",
    institution: "Kalasalingam Academy of Research and Education",
    detail: "Specialization in Artificial Intelligence & Machine Learning (2024 – 2028). Current CGPA: 8.41.",
    type: "edu",
  },
  {
    year: "2024",
    title: "Intermediate",
    institution: "SDRs Akanksha Junior College",
    detail: "Completed Class XII with 88.5%.",
    type: "edu",
  },
  {
    year: "2022",
    title: "10th Class",
    institution: "Narayana Group of Schools",
    detail: "Completed Class X with 74.13%.",
    type: "edu",
  },
];

export default function Journey() {
  const getIcon = (type: string) => {
    switch (type) {
      case "edu": return <GraduationCap className="h-4 w-4 text-[#FF6B35]" />;
      case "hack": return <Trophy className="h-4 w-4 text-[#FF6B35]" />;
      case "proj": return <Code className="h-4 w-4 text-[#FF6B35]" />;
      case "intern": return <Briefcase className="h-4 w-4 text-[#FF6B35]" />;
      default: return <Calendar className="h-4 w-4 text-[#FF6B35]" />;
    }
  };

  return (
    <section id="journey" className="relative w-full py-24 bg-background px-6 border-b border-[#EAEAEA] dark:border-[#222222]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2 mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6B35]">
            02 // TIMELINE
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-foreground">
            Professional Journey.
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto pl-6 sm:pl-8 border-l-2 border-[#EAEAEA] dark:border-[#2A2A2A] flex flex-col gap-10">
          {milestones.map((item, index) => (
            <motion.div
              key={`${item.title}-${index}`}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="relative group"
            >
              {/* Timeline Orange Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 h-5 w-5 rounded-full bg-background border-2 border-[#FF6B35] flex items-center justify-center transition-transform group-hover:scale-125">
                <span className="h-2 w-2 rounded-full bg-[#FF6B35]" />
              </div>

              {/* Milestone Card */}
              <div className="editorial-card p-6 rounded-2xl flex flex-col gap-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#FFF1EB] dark:bg-[#1E1714] text-xs font-mono font-bold text-[#FF6B35]">
                    {getIcon(item.type)}
                    {item.year}
                  </span>
                  <span className="text-xs text-muted font-medium">
                    {item.institution}
                  </span>
                </div>

                <h3 className="font-heading text-lg font-bold text-foreground mt-1 group-hover:text-[#FF6B35] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-muted leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
