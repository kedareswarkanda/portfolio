"use client";

import { motion } from "framer-motion";
import { Briefcase, Building2, CheckCircle2 } from "lucide-react";

interface Job {
  company: string;
  role: string;
  category: "Internship" | "Role";
  descriptions: string[];
}

const experiences: Job[] = [
  {
    company: "ByteHearts",
    role: "Full Stack Development Intern",
    category: "Internship",
    descriptions: [
      "Selected through a competitive hackathon after project shortlisting.",
      "Worked on web development projects and collaborated in a team environment.",
    ],
  },
  {
    company: "Infosys Springboard",
    role: "AI & ML Virtual Internship",
    category: "Internship",
    descriptions: [
      "Completed AI & ML Internship training and hands-on learning modules.",
      "Gained practical knowledge of machine learning concepts, data analysis and AI applications.",
    ],
  },
  {
    company: "CODING BLOCKS",
    role: "Content Creator",
    category: "Role",
    descriptions: [
      "Authored technical content and programming learning resources.",
    ],
  },
  {
    company: "IKSC",
    role: "Web Developer",
    category: "Role",
    descriptions: [
      "Developed client-facing web templates and responsive frontend components.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative w-full py-24 bg-background px-6 border-b border-[#EAEAEA] dark:border-[#222222]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2 mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6B35]">
            06 // EXPERIENCE
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-foreground">
            Experience & Internships.
          </h2>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((job, idx) => (
            <motion.div
              key={`${job.company}-${job.role}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="editorial-card p-6 rounded-2xl flex flex-col gap-4 justify-between"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg bg-[#FFF1EB] dark:bg-[#1E1714] flex items-center justify-center">
                      <Briefcase className="h-4 w-4 text-[#FF6B35]" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#FF6B35]">
                      {job.category}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="font-heading font-extrabold text-lg text-foreground">
                    {job.role}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-muted font-semibold mt-0.5">
                    <Building2 className="h-3.5 w-3.5 text-[#FF6B35]" />
                    <span>{job.company}</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 pt-2 border-t border-[#EAEAEA] dark:border-[#2A2A2A]">
                  {job.descriptions.map((desc, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-muted leading-relaxed">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#FF6B35] shrink-0 mt-0.5" />
                      <span>{desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
