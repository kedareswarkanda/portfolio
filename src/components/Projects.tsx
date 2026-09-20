"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, ArrowUpRight, CheckCircle2, ShieldAlert, Cpu } from "lucide-react";

interface Project {
  number: string;
  title: string;
  period: string;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  tech: string[];
  image: string;
  github: string;
  liveDemo?: string;
}

const projects: Project[] = [
  {
    number: "01",
    title: "SMART BOREWELL STARTER",
    period: "Aug – Nov 2025",
    description: "Real-time water level monitoring, energy optimization and sustainable farm management.",
    problem: "Traditional farming irrigation suffers from unpredictable water tables, motor burnouts, and energy inefficiencies.",
    solution: "An automated telemetry system that monitors water levels in real-time, optimizes power usage, and enables remote management.",
    features: [
      "Real-time water level monitoring",
      "Energy optimization & motor safety",
      "Sustainable farm management automation",
    ],
    tech: ["Python", "Streamlit", "Firebase"],
    image: "/borewell.png",
    github: "https://github.com/kedareswarkanda/smart-borewell-starter",
  },
  {
    number: "02",
    title: "AI ACADEMIC & CAREER NAVIGATOR",
    period: "Jan – Apr 2026",
    description: "A centralized platform for academic resources, career planning and certification exploration.",
    problem: "Undergraduate students lack structured academic resource routing and data-driven career planning paths.",
    solution: "A centralized ML recommendation engine analyzing course taxonomies, skills, and industry certifications.",
    features: [
      "Academic Resources centralized repository",
      "Career Planning recommendation pathing",
      "Certification Exploration indexing",
    ],
    tech: ["Python", "Streamlit", "Scikit-Learn", "NLP", "TF-IDF"],
    image: "/navigator.png",
    github: "https://github.com/kedareswarkanda/AI-Academic-Career-Navigator",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full py-24 bg-background px-6 border-b border-[#EAEAEA] dark:border-[#222222]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2 mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6B35]">
            04 // FEATURED PROJECTS
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-foreground">
            Selected Work.
          </h2>
          <p className="text-sm text-muted max-w-md mt-1 font-sans">
            Projects built to solve real-world problems in agriculture and academic navigation.
          </p>
        </div>

        {/* Projects List */}
        <div className="flex flex-col gap-12">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4 }}
              className="editorial-card rounded-3xl p-8 lg:p-12 relative overflow-hidden group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Left Column: Project Details */}
                <div className="lg:col-span-7 flex flex-col gap-6">
                  
                  {/* Header Row */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-3xl font-black text-[#FF6B35]">
                      {project.number}
                    </span>
                    <span className="text-xs font-mono font-bold text-muted bg-[#FFF1EB] dark:bg-[#1E1714] px-3 py-1 rounded-full border border-[#FF6B35]/20">
                      {project.period}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-heading text-2xl sm:text-3xl font-black text-foreground group-hover:text-[#FF6B35] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted mt-2 leading-relaxed font-sans">
                      {project.description}
                    </p>
                  </div>

                  {/* Problem & Solution Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-background border border-[#EAEAEA] dark:border-[#2A2A2A] flex flex-col gap-1.5">
                      <div className="flex items-center gap-2 text-[#FF6B35]">
                        <ShieldAlert className="h-4 w-4" />
                        <span className="text-[10px] uppercase font-bold tracking-wider">Problem</span>
                      </div>
                      <p className="text-xs text-muted leading-relaxed">
                        {project.problem}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-background border border-[#EAEAEA] dark:border-[#2A2A2A] flex flex-col gap-1.5">
                      <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                        <Cpu className="h-4 w-4" />
                        <span className="text-[10px] uppercase font-bold tracking-wider">Solution</span>
                      </div>
                      <p className="text-xs text-muted leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* Key Highlights List */}
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted">
                      Key Highlights
                    </span>
                    <div className="flex flex-col gap-1.5">
                      {project.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-foreground/80">
                          <CheckCircle2 className="h-3.5 w-3.5 text-[#FF6B35] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-md bg-background border border-[#EAEAEA] dark:border-[#2A2A2A] text-xs font-mono font-semibold text-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex items-center gap-4 pt-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 items-center gap-2 px-6 rounded-full bg-foreground text-background text-xs font-bold uppercase tracking-wider hover:bg-[#FF6B35] hover:text-white transition-all group/btn focus-visible:outline-2 focus-visible:outline-[#FF6B35]"
                    >
                      <Github className="h-4 w-4" />
                      <span>GitHub Repository</span>
                      <ArrowUpRight className="h-3.5 w-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>

                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-11 items-center gap-2 px-6 rounded-full border border-[#FF6B35] text-[#FF6B35] text-xs font-bold uppercase tracking-wider hover:bg-[#FF6B35] hover:text-white transition-all focus-visible:outline-2 focus-visible:outline-[#FF6B35]"
                      >
                        <span>Live Demo</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>

                </div>

                {/* Right Column: Visual Mockup */}
                <div className="lg:col-span-5 flex justify-center">
                  <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden border border-[#EAEAEA] dark:border-[#2A2A2A] shadow-xs group-hover:border-[#FF6B35] transition-colors">
                    <Image
                      src={project.image}
                      alt={`${project.title} Mockup Preview`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 480px"
                      className="object-cover object-top transition-transform duration-300 group-hover:scale-102"
                    />
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
