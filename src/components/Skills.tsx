"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Globe, Cpu, Database, Wrench, Sparkles } from "lucide-react";

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
    icon: <Terminal className="h-4.5 w-4.5 text-[#7F011F]" />,
    skills: [
      { name: "Python", detail: "Primary language for data manipulation, machine learning workflows, and backend API integration." },
      { name: "Java (Basics)", detail: "Core object-oriented principles, classes, methods, and standard algorithmic problem solving." },
      { name: "C (Basics)", detail: "Foundational structured programming, logic building, memory concepts, and control flow." },
    ],
  },
  {
    id: "web_dev",
    title: "Web Development",
    icon: <Globe className="h-4.5 w-4.5 text-[#7F011F]" />,
    skills: [
      { name: "HTML", detail: "Semantic document structure, accessibility standards, and SEO-friendly web page layout." },
      { name: "CSS", detail: "Responsive layouts, Flexbox, Grid, custom styling, animations, and clean color systems." },
      { name: "JavaScript (Basics)", detail: "Client-side interactivity, DOM operations, asynchronous calls, and event handling." },
      { name: "React", detail: "Component-based UI architecture, state hooks, props flow, and dynamic frontend applications." },
    ],
  },
  {
    id: "ai_ml",
    title: "AI & Machine Learning",
    icon: <Cpu className="h-4.5 w-4.5 text-[#7F011F]" />,
    skills: [
      { name: "Supervised Learning", detail: "Training predictive models on labeled training datasets with evaluation metrics." },
      { name: "Unsupervised Learning", detail: "Pattern recognition, clustering algorithms, and dimensionality grouping." },
      { name: "Regression", detail: "Linear and polynomial mathematical models for continuous numerical outcome prediction." },
      { name: "Classification", detail: "Categorical decision models, logistic classifiers, and decision boundary optimization." },
      { name: "Model Evaluation", detail: "Confusion matrix, precision, recall, F1-score, accuracy, and error diagnostics." },
      { name: "NLP (TF-IDF)", detail: "Term frequency-inverse document frequency text vectorization and content extraction." },
      { name: "XGBoost", detail: "Extreme gradient boosted decision trees utilized in high-accuracy tabular predictions." },
    ],
  },
  {
    id: "database_backend",
    title: "Databases & Backend",
    icon: <Database className="h-4.5 w-4.5 text-[#7F011F]" />,
    skills: [
      { name: "SQL", detail: "Relational querying, schema definitions, joins, indexing, and structured data queries." },
      { name: "Firebase", detail: "Cloud Firestore data syncing, real-time listener collections, and authentication flows." },
      { name: "MongoDB", detail: "NoSQL document storage, collection schemas, and flexible JSON document pipelines." },
      { name: "FastAPI", detail: "High-performance Python asynchronous RESTful API framework with automatic OpenAPI docs." },
      { name: "PostgreSQL", detail: "Robust relational database system for structured transactional data and GIS telemetry." },
    ],
  },
  {
    id: "tools",
    title: "Developer Tools",
    icon: <Wrench className="h-4.5 w-4.5 text-[#7F011F]" />,
    skills: [
      { name: "VS Code", detail: "Primary code editor, debugging workflows, workspace configuration, and extensions." },
      { name: "GitHub", detail: "Git version control, branches, commits, pull requests, and repository maintenance." },
      { name: "Google Colab", detail: "Jupyter cloud notebook environment for executing data exploration and model training." },
    ],
  },
  {
    id: "soft_skills",
    title: "Soft Skills",
    icon: <Sparkles className="h-4.5 w-4.5 text-[#7F011F]" />,
    skills: [
      { name: "Problem Solving", detail: "Analytical approach to dissecting complex challenges into manageable programming logic." },
      { name: "Teamwork", detail: "Active collaboration, code sharing, and constructive technical discussion with peers." },
      { name: "Team Coordination", detail: "Assisting in organizing deliverables, task milestones, and hackathon project sprints." },
      { name: "Creative Thinking", detail: "Designing unique interface solutions and intelligent system architectures." },
      { name: "Critical Thinking", detail: "Evaluating technical trade-offs, system constraints, and data reliability." },
    ],
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState("programming");
  const [hoveredSkill, setHoveredSkill] = useState<{ name: string; detail: string } | null>(null);

  const activeCategory = skillCategories.find((cat) => cat.id === activeTab) || skillCategories[0];

  return (
    <section id="skills" className="relative w-full py-24 bg-[#F5EBD0] dark:bg-[#24151A] px-6 border-b border-[#E6DCC7] dark:border-[#422631]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2 mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7F011F] dark:text-[#F5EBD0]">
            03 // TECHNICAL COMPETENCIES
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-[#242124] dark:text-[#F5EBD0]">
            Skills Ecosystem.
          </h2>
          <p className="text-sm text-[#77716D] dark:text-[#A89F9A] max-w-md mt-1 font-sans">
            Programming languages, AI/ML concepts, web frameworks, and developer tools from my latest resume.
          </p>
        </div>

        {/* Tab Controls Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Category Tabs */}
          <div className="lg:col-span-4 flex flex-col gap-2 p-2.5 rounded-2xl border border-[#E6DCC7] dark:border-[#422631] bg-[#FFF9ED] dark:bg-[#321A23]">
            {skillCategories.map((cat) => {
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveTab(cat.id);
                    setHoveredSkill(null);
                  }}
                  className={`flex items-center justify-between px-4 py-3.5 rounded-xl font-heading font-bold text-xs uppercase tracking-wider transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#7F011F] text-[#F5EBD0] shadow-2xs"
                      : "text-[#77716D] dark:text-[#A89F9A] hover:text-[#242124] dark:hover:text-[#F5EBD0] hover:bg-[#F5EBD0] dark:hover:bg-[#24151A]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={isActive ? "text-[#F5EBD0]" : "text-[#7F011F]"}>{cat.icon}</span>
                    <span>{cat.title}</span>
                  </div>
                  <span className="font-mono text-[10px] opacity-75">[{cat.skills.length}]</span>
                </button>
              );
            })}
          </div>

          {/* Interactive Skills Grid */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
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
                          ? "border-[#7F011F] bg-[#FFF9ED] dark:bg-[#321A23] shadow-xs"
                          : "border-[#E6DCC7] dark:border-[#422631] bg-[#FFF9ED] dark:bg-[#321A23] hover:border-[#7F011F]/60"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-heading font-bold text-sm text-[#242124] dark:text-[#F5EBD0]">
                          {skill.name}
                        </span>
                        <span className="h-2 w-2 rounded-full bg-[#7F011F] opacity-70" />
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Selected / Hovered Skill Detail Panel */}
            <div className="p-5 rounded-2xl border border-[#7F011F]/30 bg-[#FFF9ED] dark:bg-[#321A23] min-h-[95px] flex flex-col justify-center shadow-2xs">
              {hoveredSkill ? (
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#7F011F] dark:text-[#F5EBD0]">
                    Skill Overview // {hoveredSkill.name}
                  </span>
                  <p className="text-xs text-[#242124]/90 dark:text-[#F5EBD0]/90 leading-relaxed font-sans">
                    {hoveredSkill.detail}
                  </p>
                </div>
              ) : (
                <span className="text-xs text-[#77716D] dark:text-[#A89F9A] text-center italic font-sans">
                  Hover or tap any skill card above to read its application detail.
                </span>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
