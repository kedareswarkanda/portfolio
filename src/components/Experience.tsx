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
      "Selected for a four-month internship following a competitive hackathon selection process.",
      "Worked on full-stack web development tasks, frontend styling, and responsive user interfaces.",
      "Collaborated actively in a team environment to deliver features on schedule.",
    ],
  },
  {
    company: "Infosys Springboard",
    role: "AI & ML Virtual Intern",
    category: "Internship",
    descriptions: [
      "Completed comprehensive AI & ML virtual internship learning modules.",
      "Completed hands-on practical activities and predictive modeling exercises.",
      "Applied machine learning concepts, data preprocessing, and algorithm evaluation techniques.",
    ],
  },
  {
    company: "IKSC",
    role: "Web Developer",
    category: "Role",
    descriptions: [
      "Developed and maintained clean, responsive web page structures and components.",
      "Implemented standards-compliant HTML, CSS, and JavaScript interfaces.",
    ],
  },
  {
    company: "CODING BLOCKS",
    role: "Content Creator",
    category: "Role",
    descriptions: [
      "Created structured programming learning content and technical explanations.",
      "Authored educational guides on foundational algorithms, data structures, and code logic.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative w-full py-24 bg-[#F5EBD0] dark:bg-[#24151A] px-6 border-b border-[#E6DCC7] dark:border-[#422631]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2 mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7F011F] dark:text-[#F5EBD0]">
            06 // PROFESSIONAL TRACK
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-[#242124] dark:text-[#F5EBD0]">
            Experience & Internships.
          </h2>
          <p className="text-sm text-[#77716D] dark:text-[#A89F9A] max-w-md mt-1 font-sans">
            Verified internship and technical roles from my latest resume.
          </p>
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
              className="editorial-card p-7 rounded-2xl flex flex-col gap-4 justify-between"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-8.5 w-8.5 rounded-lg bg-[#F5EBD0] dark:bg-[#24151A] border border-[#E6DCC7] dark:border-[#422631] flex items-center justify-center">
                      <Briefcase className="h-4 w-4 text-[#7F011F]" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#7F011F] dark:text-[#F5EBD0]">
                      {job.category}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="font-heading font-extrabold text-lg text-[#242124] dark:text-[#F5EBD0]">
                    {job.role}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-[#77716D] dark:text-[#A89F9A] font-semibold mt-0.5">
                    <Building2 className="h-3.5 w-3.5 text-[#7F011F]" />
                    <span>{job.company}</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 pt-2 border-t border-[#E6DCC7] dark:border-[#422631]">
                  {job.descriptions.map((desc, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-[#242124]/85 dark:text-[#F5EBD0]/85 leading-relaxed font-sans">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#7F011F] shrink-0 mt-0.5" />
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
