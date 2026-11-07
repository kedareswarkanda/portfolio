"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, ArrowUpRight, CheckCircle2, ShieldAlert, Cpu, Sparkles } from "lucide-react";

interface Project {
  number: string;
  title: string;
  subtitle: string;
  period: string;
  tag: string;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  tech: string[];
  image: string;
  github: string;
  liveDemo?: string;
  note?: string;
}

const projects: Project[] = [
  {
    number: "01",
    title: "UNIPULSE",
    subtitle: "AI-Powered Academic and Career Guidance Platform",
    period: "2026",
    tag: "Concept & Platform Architecture",
    description: "Designed a centralized platform concept for academic resources, career roadmaps and certification discovery.",
    problem: "Undergraduates frequently encounter scattered curriculum resources, unclear career milestones, and difficulty discovering relevant industry certifications.",
    solution: "A unified platform architecture centralizing verified academic resources, AI-guided career pathways, and intelligent certification matching.",
    features: [
      "Academic resource management & taxonomy categorization",
      "Dynamic career roadmaps aligned with engineering goals",
      "Certification discovery & skill-gap mapping",
      "AI-assisted guidance & interactive planning",
      "Intelligent chatbot supporting file and photo inquiry uploads",
    ],
    tech: ["Next.js", "FastAPI", "Firebase", "NLP", "Python"],
    image: "/navigator.png",
    github: "https://github.com/kedareswarkanda",
    note: "Designed platform architecture & concept roadmap.",
  },
  {
    number: "02",
    title: "SOLAR & WIND DEPLOYMENT INTELLIGENCE PLATFORM",
    subtitle: "Infosys Springboard Project",
    period: "2025 – 2026",
    tag: "Clean Energy Analytics & Backend",
    description: "Worked on a platform backend for renewable-energy site assessment using solar, wind, terrain and infrastructure data.",
    problem: "Evaluating prospective renewable-energy installation locations requires analyzing complex combinations of solar irradiance, wind velocities, topology, and grid infrastructure.",
    solution: "Engineered scalable backend service APIs to aggregate environmental datasets, calculate geographical feasibility, and visualize site suitability metrics.",
    features: [
      "Renewable-energy site assessment telemetry processing",
      "Multi-variable environmental data synthesis (solar, wind, terrain)",
      "Infrastructure proximity & grid accessibility evaluation",
      "Interactive data visualization endpoints with Chart.js",
    ],
    tech: ["FastAPI", "PostgreSQL", "SQLAlchemy", "Chart.js", "Python"],
    image: "/solar_wind.png",
    github: "https://github.com/kedareswarkanda",
  },
  {
    number: "03",
    title: "SOLARIQ",
    subtitle: "AI Solar Panel Performance & Efficiency Optimizer",
    period: "2026",
    tag: "Full-Stack Machine Learning Application",
    description: "Developed a full-stack solar analysis application combining physics-based performance calculations with AI predictions.",
    problem: "Photovoltaic panel performance varies significantly with temperature coefficients, irradiance angles, shading, and local environmental degradation.",
    solution: "Built a full-stack solution integrating physics-based photovoltaic modeling equations with trained XGBoost machine learning models for predictive performance analysis.",
    features: [
      "Solar performance analysis & real-time telemetry dashboard",
      "Physics-based photovoltaic mathematical calculations",
      "XGBoost machine learning output predictions",
      "What-if optimization workflows for tilt, azimuth & temperature factors",
      "MongoDB document storage for historical evaluation runs",
    ],
    tech: ["React", "FastAPI", "XGBoost", "MongoDB", "Python"],
    image: "/solariq.png",
    github: "https://github.com/kedareswarkanda",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full py-24 bg-[#F5EBD0] dark:bg-[#24151A] px-6 border-b border-[#E6DCC7] dark:border-[#422631]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2 mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7F011F] dark:text-[#F5EBD0]">
            04 // FEATURED WORKS
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-[#242124] dark:text-[#F5EBD0]">
            Featured Projects.
          </h2>
          <p className="text-sm text-[#77716D] dark:text-[#A89F9A] max-w-lg mt-1 font-sans">
            AI-powered platforms, renewable-energy assessment systems, and machine learning optimizers from my latest resume.
          </p>
        </div>

        {/* Alternating Project Showcases */}
        <div className="flex flex-col gap-16">
          {projects.map((project, index) => {
            const isReversed = index % 2 === 1;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4 }}
                className="editorial-card rounded-3xl p-8 lg:p-12 relative overflow-hidden group shadow-xs"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  isReversed ? "lg:flex-row-reverse" : ""
                }`}>
                  
                  {/* Left / Info Column */}
                  <div className={`lg:col-span-7 flex flex-col gap-5 ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}>
                    
                    {/* Header Row */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono text-3xl font-black text-[#7F011F] dark:text-[#F5EBD0]">
                          {project.number}
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#7F011F] dark:text-[#F5EBD0] bg-[#F5EBD0] dark:bg-[#24151A] px-3 py-1 rounded-full border border-[#E6DCC7] dark:border-[#422631]">
                          {project.tag}
                        </span>
                      </div>
                      <span className="text-xs font-mono font-bold text-[#77716D] dark:text-[#A89F9A]">
                        {project.period}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-heading text-2xl sm:text-3xl font-black text-[#242124] dark:text-[#F5EBD0] group-hover:text-[#7F011F] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs font-bold text-[#7F011F] dark:text-[#F5EBD0] uppercase tracking-wider mt-0.5">
                        {project.subtitle}
                      </p>
                      <p className="text-sm text-[#77716D] dark:text-[#A89F9A] mt-2.5 leading-relaxed font-sans">
                        {project.description}
                      </p>
                    </div>

                    {/* Problem & Solution Callouts */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div className="p-4 rounded-xl bg-[#F5EBD0]/70 dark:bg-[#24151A]/70 border border-[#E6DCC7] dark:border-[#422631] flex flex-col gap-1.5">
                        <div className="flex items-center gap-2 text-[#7F011F] dark:text-[#F5EBD0]">
                          <ShieldAlert className="h-4 w-4" />
                          <span className="text-[10px] uppercase font-bold tracking-wider">Problem</span>
                        </div>
                        <p className="text-xs text-[#242124]/85 dark:text-[#F5EBD0]/85 leading-relaxed font-sans">
                          {project.problem}
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-[#F5EBD0]/70 dark:bg-[#24151A]/70 border border-[#E6DCC7] dark:border-[#422631] flex flex-col gap-1.5">
                        <div className="flex items-center gap-2 text-[#4B0015] dark:text-[#F5EBD0]">
                          <Cpu className="h-4 w-4" />
                          <span className="text-[10px] uppercase font-bold tracking-wider">Solution</span>
                        </div>
                        <p className="text-xs text-[#242124]/85 dark:text-[#F5EBD0]/85 leading-relaxed font-sans">
                          {project.solution}
                        </p>
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="flex flex-col gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#77716D] dark:text-[#A89F9A]">
                        Key Capabilities & Architecture
                      </span>
                      <div className="flex flex-col gap-1.5">
                        {project.features.map((feat, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-[#242124]/90 dark:text-[#F5EBD0]/90 font-sans">
                            <CheckCircle2 className="h-3.5 w-3.5 text-[#7F011F] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Note if concept */}
                    {project.note && (
                      <div className="inline-flex items-center gap-1.5 text-[11px] text-[#7F011F] dark:text-[#F5EBD0] italic font-sans">
                        <Sparkles className="h-3.5 w-3.5" />
                        <span>{project.note}</span>
                      </div>
                    )}

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 rounded-md bg-[#F5EBD0] dark:bg-[#24151A] border border-[#E6DCC7] dark:border-[#422631] text-xs font-mono font-semibold text-[#242124] dark:text-[#F5EBD0]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center gap-3 pt-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-11 items-center gap-2 px-6 rounded-full bg-[#7F011F] text-[#F5EBD0] text-xs font-bold uppercase tracking-wider hover:bg-[#4B0015] transition-all group/btn shadow-xs"
                      >
                        <Github className="h-4 w-4" />
                        <span>View on GitHub</span>
                        <ArrowUpRight className="h-3.5 w-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </a>

                      {project.liveDemo && (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-11 items-center gap-2 px-6 rounded-full border border-[#7F011F] text-[#7F011F] text-xs font-bold uppercase tracking-wider hover:bg-[#7F011F] hover:text-[#F5EBD0] transition-all"
                        >
                          <span>Live Demo</span>
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>

                  </div>

                  {/* Right / Visual Column */}
                  <div className={`lg:col-span-5 flex justify-center ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  }`}>
                    <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden border border-[#E6DCC7] dark:border-[#422631] bg-[#F5EBD0] dark:bg-[#24151A] shadow-xs group-hover:border-[#7F011F] transition-colors">
                      <Image
                        src={project.image}
                        alt={`${project.title} Preview`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 480px"
                        className="object-cover object-top transition-transform duration-300 group-hover:scale-102"
                      />
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
