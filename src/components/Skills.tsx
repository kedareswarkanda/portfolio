"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Cpu, Database, Wrench, Sparkles } from "lucide-react";

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  skills: { name: string; detail: string }[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming",
    icon: <Terminal className="h-4.5 w-4.5 text-[#FF6B35]" />,
    skills: [
      { name: "Python", detail: "Primary language used for data analysis, machine learning pipelines, and Streamlit apps." },
      { name: "Java", detail: "Object-oriented programming, data structures, and core backend logic." },
      { name: "C", detail: "Foundational programming, memory management, and algorithm implementation." },
      { name: "HTML", detail: "Semantic markup and structured layout architecture." },
      { name: "CSS", detail: "Responsive styling, Flexbox/Grid layouts, and clean visual themes." },
      { name: "JavaScript (Basics)", detail: "Client-side interactivity and basic DOM manipulation." },
      { name: "OOPS", detail: "Object-Oriented Programming concepts: Encapsulation, Inheritance, Polymorphism, Abstraction." },
    ],
  },
  {
    id: "ai_ml",
    title: "AI & Machine Learning",
    icon: <Cpu className="h-4.5 w-4.5 text-[#FF6B35]" />,
    skills: [
      { name: "Supervised Learning", detail: "Training models with labeled datasets for predictive analytics." },
      { name: "Unsupervised Learning", detail: "Clustering algorithms and pattern extraction from unlabeled data." },
      { name: "Regression", detail: "Linear and polynomial regression for numerical estimation." },
      { name: "Classification", detail: "Decision boundaries, Logistic Regression, and Categorical classifiers." },
      { name: "Model Evaluation", detail: "Confusion Matrix, Precision, Recall, F1-Score, and accuracy diagnostics." },
      { name: "NLP", detail: "Natural Language Processing algorithms for text analysis." },
      { name: "TF-IDF", detail: "Term Frequency-Inverse Document Frequency vectorization for text recommendation engines." },
    ],
  },
  {
    id: "database",
    title: "Data Base",
    icon: <Database className="h-4.5 w-4.5 text-[#FF6B35]" />,
    skills: [
      { name: "SQL", detail: "Relational database querying, tables schema, and data aggregation." },
      { name: "Firebase", detail: "Cloud database syncing and real-time data storage." },
    ],
  },
  {
    id: "tools",
    title: "Developer Tools",
    icon: <Wrench className="h-4.5 w-4.5 text-[#FF6B35]" />,
    skills: [
      { name: "VS Code", detail: "Primary IDE for coding, debugging, and extension workflows." },
      { name: "GitHub", detail: "Version control, repository management, and collaboration." },
      { name: "Google Colab", detail: "Jupyter cloud notebook environment for executing Machine Learning scripts." },
    ],
  },
  {
    id: "soft",
    title: "Soft Skills",
    icon: <Sparkles className="h-4.5 w-4.5 text-[#FF6B35]" />,
    skills: [
      { name: "Problem Solving", detail: "Analytical approach to deconstructing complex computational requirements." },
      { name: "Team Management", detail: "Collaborating with team members during hackathons and internship sprints." },
      { name: "Creative Thinking", detail: "Designing unique approaches to agricultural and educational challenges." },
      { name: "Critical Thinking", detail: "Evaluating system performance and optimizing logical pipelines." },
    ],
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState("programming");
  const [hoveredSkill, setHoveredSkill] = useState<{ name: string; detail: string } | null>(null);

  const activeCategory = skillCategories.find((cat) => cat.id === activeTab) || skillCategories[0];

  return (
    <section id="skills" className="relative w-full py-24 bg-background px-6 border-b border-[#EAEAEA] dark:border-[#222222]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2 mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6B35]">
            03 // SKILL ECOSYSTEM
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-foreground">
            Technologies & Competencies.
          </h2>
        </div>

        {/* Tab Controls Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Category Tabs */}
          <div className="lg:col-span-4 flex flex-col gap-2 p-2 rounded-2xl border border-[#EAEAEA] dark:border-[#2A2A2A] bg-background">
            {skillCategories.map((cat) => {
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveTab(cat.id);
                    setHoveredSkill(null);
                  }}
                  className={`flex items-center justify-between px-4 py-3.5 rounded-xl font-heading font-bold text-xs uppercase tracking-wider transition-all ${
                    isActive
                      ? "bg-[#FF6B35] text-white shadow-xs"
                      : "text-muted hover:text-foreground hover:bg-[#FFF1EB] dark:hover:bg-[#1E1714]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={isActive ? "text-white" : "text-[#FF6B35]"}>{cat.icon}</span>
                    <span>{cat.title}</span>
                  </div>
                  <span className="font-mono text-[10px] opacity-70">[{cat.skills.length}]</span>
                </button>
              );
            })}
          </div>

          {/* Interactive Skills Grid */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <AnimatePresence mode="popLayout">
                {activeCategory.skills.map((skill, idx) => {
                  const isHovered = hoveredSkill?.name === skill.name;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ delay: idx * 0.03 }}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onClick={() => setHoveredSkill(isHovered ? null : skill)}
                      className={`p-4 rounded-xl border cursor-pointer transition-all ${
                        isHovered
                          ? "border-[#FF6B35] bg-[#FFF1EB] dark:bg-[#1E1714] shadow-xs"
                          : "border-[#EAEAEA] dark:border-[#2A2A2A] bg-background hover:border-[#FF6B35]/50"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-heading font-bold text-sm text-foreground">
                          {skill.name}
                        </span>
                        <span className="h-2 w-2 rounded-full bg-[#FF6B35] opacity-60" />
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Selected / Hovered Skill Detail Panel */}
            <div className="p-5 rounded-2xl border border-[#FF6B35]/30 bg-[#FFF1EB] dark:bg-[#1E1714] min-h-[100px] flex flex-col justify-center">
              {hoveredSkill ? (
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF6B35]">
                    Skill Overview // {hoveredSkill.name}
                  </span>
                  <p className="text-xs text-foreground/90 leading-relaxed font-sans">
                    {hoveredSkill.detail}
                  </p>
                </div>
              ) : (
                <span className="text-xs text-muted text-center italic">
                  Hover or tap any skill above to view its application detail.
                </span>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
