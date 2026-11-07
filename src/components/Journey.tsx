"use client";

import { motion } from "framer-motion";
import { Calendar, GraduationCap, Code, Trophy, Briefcase } from "lucide-react";

interface Milestone {
  period: string;
  title: string;
  subtitle: string;
  detail: string;
  type: "edu" | "proj" | "hack" | "intern";
}

const milestones: Milestone[] = [
  {
    period: "2026",
    title: "KRONE'26",
    subtitle: "National-Level Hackathon Winner",
    detail: "Secured 1st place overall in a competitive national hackathon sprint designing real-time automation solutions.",
    type: "hack",
  },
  {
    period: "2026",
    title: "ByteHearts",
    subtitle: "Full Stack Development Intern",
    detail: "Selected for a four-month internship following a hackathon selection process. Worked on web development tasks and collaborated in a team environment.",
    type: "intern",
  },
  {
    period: "2026",
    title: "SolarIQ",
    subtitle: "AI Solar Panel Performance & Efficiency Optimizer",
    detail: "Developed a full-stack solar analysis application combining physics-based performance calculations with XGBoost machine learning predictions.",
    type: "proj",
  },
  {
    period: "2026",
    title: "UniPulse",
    subtitle: "AI-Powered Academic & Career Guidance Platform",
    detail: "Designed a centralized platform concept for academic resources, career roadmaps, and certification discovery.",
    type: "proj",
  },
  {
    period: "2025 – 2026",
    title: "Infosys Springboard",
    subtitle: "AI & ML Virtual Intern & Solar/Wind Platform Project",
    detail: "Completed AI/ML internship modules and worked on a backend platform for renewable-energy site assessment using solar, wind, terrain, and infrastructure data.",
    type: "intern",
  },
  {
    period: "2025",
    title: "Smart India Hackathon 2025",
    subtitle: "Top 15 Shortlisted Team",
    detail: "Shortlisted among the Top 15 teams out of 200+ teams in the internal hackathon.",
    type: "hack",
  },
  {
    period: "2024",
    title: "Started B.Tech CSE – AI & ML",
    subtitle: "Kalasalingam Academy of Research and Education",
    detail: "B.Tech Computer Science and Engineering with specialization in AI & ML (2024 – 2028). Current CGPA: 8.41.",
    type: "edu",
  },
  {
    period: "2024",
    title: "Intermediate (MPC)",
    subtitle: "SDRs Akanksha Junior College, Nandyal",
    detail: "Completed higher secondary education in Mathematics, Physics, and Chemistry with 88.5%.",
    type: "edu",
  },
  {
    period: "2022",
    title: "10th Class",
    subtitle: "Narayana Group of Schools, Kurnool",
    detail: "Completed secondary school certificate with 74.13%.",
    type: "edu",
  },
];

export default function Journey() {
  const getIcon = (type: string) => {
    switch (type) {
      case "edu": return <GraduationCap className="h-4 w-4 text-[#7F011F]" />;
      case "hack": return <Trophy className="h-4 w-4 text-[#7F011F]" />;
      case "proj": return <Code className="h-4 w-4 text-[#7F011F]" />;
      case "intern": return <Briefcase className="h-4 w-4 text-[#7F011F]" />;
      default: return <Calendar className="h-4 w-4 text-[#7F011F]" />;
    }
  };

  return (
    <section id="journey" className="relative w-full py-24 bg-[#F5EBD0] dark:bg-[#24151A] px-6 border-b border-[#E6DCC7] dark:border-[#422631]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2 mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7F011F] dark:text-[#F5EBD0]">
            02 // TIMELINE
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-[#242124] dark:text-[#F5EBD0]">
            Academic & Project Journey.
          </h2>
          <p className="text-sm text-[#77716D] dark:text-[#A89F9A] max-w-md mt-1 font-sans">
            A chronological progression of education, hackathons, projects, and internships.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto pl-6 sm:pl-8 border-l-2 border-[#7F011F]/30 dark:border-[#7F011F]/50 flex flex-col gap-9">
          {milestones.map((item, index) => (
            <motion.div
              key={`${item.title}-${index}`}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: index * 0.04, duration: 0.35 }}
              className="relative group"
            >
              {/* Timeline Wine Red Node Indicator */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 h-5 w-5 rounded-full bg-[#FFF9ED] dark:bg-[#321A23] border-2 border-[#7F011F] flex items-center justify-center transition-transform group-hover:scale-125 shadow-2xs">
                <span className="h-2 w-2 rounded-full bg-[#7F011F]" />
              </div>

              {/* Milestone Card */}
              <div className="editorial-card p-6 rounded-2xl flex flex-col gap-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#F5EBD0] dark:bg-[#24151A] border border-[#E6DCC7] dark:border-[#422631] text-xs font-mono font-bold text-[#7F011F] dark:text-[#F5EBD0]">
                    {getIcon(item.type)}
                    {item.period}
                  </span>
                  <span className="text-xs text-[#77716D] dark:text-[#A89F9A] font-medium">
                    {item.subtitle}
                  </span>
                </div>

                <h3 className="font-heading text-lg font-bold text-[#242124] dark:text-[#F5EBD0] mt-1 group-hover:text-[#7F011F] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-[#77716D] dark:text-[#A89F9A] leading-relaxed font-sans">
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
