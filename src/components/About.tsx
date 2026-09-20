"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap, Award, Calendar, Code, Brain, Wrench } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: <Brain className="h-5 w-5 text-[#FF6B35]" />,
      title: "Machine Learning & Python",
      description: "Building predictive ML models, regression analysis, data preprocessing, and evaluation metrics.",
    },
    {
      icon: <Code className="h-5 w-5 text-[#FF6B35]" />,
      title: "Streamlit & Full-Stack",
      description: "Creating interactive dashboards with Streamlit and full-stack web features using React/Next.js.",
    },
    {
      icon: <Wrench className="h-5 w-5 text-[#FF6B35]" />,
      title: "Practical Problem Solving",
      description: "Focusing on building practical IoT systems and academic recommendation tools.",
    },
    {
      icon: <Award className="h-5 w-5 text-[#FF6B35]" />,
      title: "Hackathon Competitor",
      description: "National Level Winner at KRONE'26 and Top 15 shortlisted team at Smart India Hackathon.",
    },
  ];

  const infoBlocks = [
    { label: "Location", value: "Nandyal, Andhra Pradesh", sub: "India", icon: <MapPin className="h-4 w-4 text-[#FF6B35]" /> },
    { label: "Education", value: "B.Tech CSE – AI & ML", sub: "Kalasalingam Academy", icon: <GraduationCap className="h-4 w-4 text-[#FF6B35]" /> },
    { label: "CGPA", value: "8.41", sub: "Current Score", icon: <Award className="h-4 w-4 text-[#FF6B35]" /> },
    { label: "Graduation", value: "2028", sub: "Expected Batch", icon: <Calendar className="h-4 w-4 text-[#FF6B35]" /> },
  ];

  return (
    <section id="about" className="relative w-full py-24 bg-background px-6 border-b border-[#EAEAEA] dark:border-[#222222]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2 mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6B35]">
            01 // ABOUT ME
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-foreground">
            A little about me.
          </h2>
        </div>

        {/* Narrative & Info Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Authentic Bio */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex flex-col gap-4 text-base text-muted leading-relaxed font-sans">
              <p>
                I am an <strong className="text-foreground font-semibold">AI & ML undergraduate</strong> currently studying Computer Science and Engineering with a specialization in Artificial Intelligence & Machine Learning at <strong className="text-foreground font-semibold">Kalasalingam Academy of Research and Education</strong> (2024 – 2028).
              </p>
              <p>
                My focus centers on working with Python, data analysis, and building machine learning systems. I have practical experience developing Streamlit applications and full-stack web components.
              </p>
              <p>
                I actively participate in hackathons to solve real-world problems—winning <strong className="text-foreground font-semibold">KRONE'26 National Hackathon</strong> and ranking in the <strong className="text-foreground font-semibold">Top 15 out of 200+ teams in Smart India Hackathon</strong>.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="editorial-card p-5 rounded-2xl flex flex-col gap-2.5"
                >
                  <div className="h-9 w-9 rounded-xl bg-[#FFF1EB] dark:bg-[#1E1714] flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="font-heading font-bold text-sm text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Factual Info Blocks */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {infoBlocks.map((block) => (
                <div
                  key={block.label}
                  className="p-5 rounded-2xl border border-[#EAEAEA] dark:border-[#2A2A2A] bg-background flex flex-col gap-2 shadow-2xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted">
                      {block.label}
                    </span>
                    {block.icon}
                  </div>
                  <div>
                    <span className="font-heading text-lg font-bold text-foreground block">
                      {block.value}
                    </span>
                    <span className="text-xs text-muted block mt-0.5">
                      {block.sub}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Resume Callout Card */}
            <div className="p-6 rounded-2xl bg-[#FFF1EB] dark:bg-[#1E1714] border border-[#FF6B35]/20 flex flex-col gap-3 mt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF6B35]">
                Academic Focus
              </span>
              <p className="text-xs text-foreground/80 leading-relaxed">
                Currently maintaining a CGPA of <strong>8.41</strong>. Exploring practical machine learning implementations, algorithm analysis, and database integrations.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
