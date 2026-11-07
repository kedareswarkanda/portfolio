"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap, Award, Calendar, Brain, Code, Lightbulb, Wrench } from "lucide-react";

export default function About() {
  const highlights = [
    {
      num: "01",
      icon: <Brain className="h-5 w-5 text-[#7F011F]" />,
      title: "AI & Machine Learning",
      description: "Developing intelligent models, supervised and unsupervised pipelines, regression, classification, and evaluation metrics.",
    },
    {
      num: "02",
      icon: <Code className="h-5 w-5 text-[#7F011F]" />,
      title: "Full Stack Development",
      description: "Building responsive web interfaces and APIs using React, Next.js, and FastAPI connected to real-time databases.",
    },
    {
      num: "03",
      icon: <Wrench className="h-5 w-5 text-[#7F011F]" />,
      title: "Problem Solving",
      description: "Applying algorithm design, analytical thinking, and Python/Java foundations to deconstruct practical requirements.",
    },
    {
      num: "04",
      icon: <Lightbulb className="h-5 w-5 text-[#7F011F]" />,
      title: "Software Innovation",
      description: "Exploring clean software architectures, renewable energy intelligence platforms, and academic recommendation systems.",
    },
  ];

  const infoBlocks = [
    { label: "Location", value: "Nandyal, Andhra Pradesh", sub: "India", icon: <MapPin className="h-4 w-4 text-[#7F011F]" /> },
    { label: "Education", value: "B.Tech CSE – AI & ML", sub: "Kalasalingam Academy (KARE)", icon: <GraduationCap className="h-4 w-4 text-[#7F011F]" /> },
    { label: "Current CGPA", value: "8.41", sub: "Academic Standing", icon: <Award className="h-4 w-4 text-[#7F011F]" /> },
    { label: "Graduation", value: "2024 – 2028", sub: "Undergraduate Batch", icon: <Calendar className="h-4 w-4 text-[#7F011F]" /> },
  ];

  return (
    <section id="about" className="relative w-full py-24 bg-[#F5EBD0] dark:bg-[#24151A] px-6 border-b border-[#E6DCC7] dark:border-[#422631]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2 mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7F011F] dark:text-[#F5EBD0]">
            01 // ABOUT ME
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-[#242124] dark:text-[#F5EBD0]">
            More than just code.
          </h2>
        </div>

        {/* Narrative & Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Authentic Bio Narrative */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex flex-col gap-4 text-base text-[#242124]/90 dark:text-[#F5EBD0]/90 leading-relaxed font-sans">
              <p>
                I am a <strong className="text-[#7F011F] dark:text-[#F5EBD0] font-semibold">Computer Science and Engineering undergraduate specializing in Artificial Intelligence and Machine Learning</strong> at Kalasalingam Academy of Research and Education (2024–2028).
              </p>
              <p>
                My technical foundation centers on <strong className="font-semibold text-[#242124] dark:text-[#F5EBD0]">Python, Java, SQL, machine learning</strong>, and modern full-stack web development. I have hands-on experience building AI-powered applications, predictive models, and contributing to software projects.
              </p>
              <p>
                Driven by practical problem-solving and collaboration, I participate in competitive hackathons—winning 1st place at <strong className="font-semibold text-[#7F011F] dark:text-[#F5EBD0]">KRONE'26</strong> and ranking in the <strong className="font-semibold text-[#7F011F] dark:text-[#F5EBD0]">Top 15 out of 200+ teams in Smart India Hackathon</strong>. I am enthusiastic about applying analytical thinking to real-world software opportunities.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="editorial-card p-5 rounded-2xl flex flex-col gap-2.5"
                >
                  <div className="flex items-center justify-between">
                    <div className="h-9 w-9 rounded-xl bg-[#F5EBD0] dark:bg-[#24151A] border border-[#E6DCC7] dark:border-[#422631] flex items-center justify-center">
                      {item.icon}
                    </div>
                    <span className="font-mono text-xs font-bold text-[#7F011F] dark:text-[#F5EBD0]">
                      {item.num}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-sm text-[#242124] dark:text-[#F5EBD0]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#77716D] dark:text-[#A89F9A] leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Key Details & Resume Objective Summary */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {infoBlocks.map((block) => (
                <div
                  key={block.label}
                  className="p-5 rounded-2xl border border-[#E6DCC7] dark:border-[#422631] bg-[#FFF9ED] dark:bg-[#321A23] flex flex-col gap-2 shadow-2xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#77716D] dark:text-[#A89F9A]">
                      {block.label}
                    </span>
                    {block.icon}
                  </div>
                  <div>
                    <span className="font-heading text-lg font-bold text-[#242124] dark:text-[#F5EBD0] block">
                      {block.value}
                    </span>
                    <span className="text-xs text-[#77716D] dark:text-[#A89F9A] block mt-0.5">
                      {block.sub}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Career Objective Box */}
            <div className="p-6 rounded-2xl bg-[#FFF9ED] dark:bg-[#321A23] border border-[#7F011F]/30 flex flex-col gap-3 mt-2 shadow-2xs">
              <span className="text-xs font-bold uppercase tracking-wider text-[#7F011F] dark:text-[#F5EBD0]">
                Career Focus & Objective
              </span>
              <p className="text-xs text-[#242124]/85 dark:text-[#F5EBD0]/85 leading-relaxed font-sans">
                Undergraduate specializing in AI & ML, seeking software development and AI/ML opportunities where I can apply strong programming, analytical thinking, and collaboration skills.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
