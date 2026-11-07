"use client";

import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Github, Star, GitFork, BookOpen, ArrowUpRight } from "lucide-react";

interface Repo {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  category: string;
}

const fallbackRepos: Repo[] = [
  {
    name: "solariq",
    description: "AI Solar Panel Performance and Efficiency Optimizer combining physics equations with XGBoost predictions.",
    html_url: "https://github.com/kedareswarkanda",
    stargazers_count: 5,
    forks_count: 1,
    language: "Python",
    category: "AI / ML",
  },
  {
    name: "solar-wind-deployment-platform",
    description: "Backend service for renewable energy site assessment using environmental and infrastructure telemetry.",
    html_url: "https://github.com/kedareswarkanda",
    stargazers_count: 4,
    forks_count: 1,
    language: "Python",
    category: "FULL STACK",
  },
  {
    name: "unipulse-platform",
    description: "Centralized AI academic resources, career planning roadmaps, and certification discovery platform concept.",
    html_url: "https://github.com/kedareswarkanda",
    stargazers_count: 3,
    forks_count: 0,
    language: "TypeScript",
    category: "WEB DEVELOPMENT",
  },
  {
    name: "automated-attendance-system",
    description: "Attendance management system published in JETNR journal utilizing automated extraction workflows.",
    html_url: "https://github.com/kedareswarkanda",
    stargazers_count: 4,
    forks_count: 0,
    language: "Java",
    category: "AI / ML",
  },
];

function categorizeRepo(name: string, description: string, language: string): string {
  const text = `${name} ${description} ${language}`.toLowerCase();
  if (text.includes("ai") || text.includes("ml") || text.includes("learning") || text.includes("model") || text.includes("xgboost") || text.includes("nlp")) {
    return "AI / ML";
  }
  if (text.includes("full") || text.includes("backend") || text.includes("api") || text.includes("fastapi")) {
    return "FULL STACK";
  }
  if (text.includes("react") || text.includes("next") || text.includes("web") || text.includes("front") || text.includes("html")) {
    return "WEB DEVELOPMENT";
  }
  return "OTHER";
}

export default function GithubSection() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState("ALL");

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch("https://api.github.com/users/kedareswarkanda/repos?sort=updated&per_page=8");
        if (!res.ok) throw new Error("API rate-limit or network failure");
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          const formatted: Repo[] = data.map((item: any) => ({
            name: item.name,
            description: item.description || "Public repository hosted on GitHub by Kanda Kedareswar.",
            html_url: item.html_url,
            stargazers_count: item.stargazers_count || 0,
            forks_count: item.forks_count || 0,
            language: item.language || "Code",
            category: categorizeRepo(item.name, item.description || "", item.language || ""),
          }));
          setRepos(formatted);
        } else {
          setRepos(fallbackRepos);
        }
      } catch (err) {
        setRepos(fallbackRepos);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const availableFilters = useMemo(() => {
    const categories = new Set(repos.map((r) => r.category));
    const list = ["ALL"];
    ["AI / ML", "WEB DEVELOPMENT", "FULL STACK", "OTHER"].forEach((cat) => {
      if (categories.has(cat)) list.push(cat);
    });
    return list;
  }, [repos]);

  const filteredRepos = useMemo(() => {
    if (selectedFilter === "ALL") return repos;
    return repos.filter((r) => r.category === selectedFilter);
  }, [repos, selectedFilter]);

  return (
    <section id="github" className="relative w-full py-24 bg-[#F5EBD0] dark:bg-[#24151A] px-6 border-b border-[#E6DCC7] dark:border-[#422631]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2 mb-10">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7F011F] dark:text-[#F5EBD0]">
            05 // OPEN SOURCE TELEMETRY
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-[#242124] dark:text-[#F5EBD0]">
            From my GitHub.
          </h2>
          <p className="text-sm text-[#77716D] dark:text-[#A89F9A] max-w-md mt-1 font-sans">
            Real repositories, live code commits, and open-source explorations fetched directly from my GitHub profile.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {availableFilters.map((filter) => {
            const isActive = selectedFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#7F011F] text-[#F5EBD0] shadow-xs"
                    : "bg-[#FFF9ED] dark:bg-[#321A23] border border-[#E6DCC7] dark:border-[#422631] text-[#77716D] dark:text-[#A89F9A] hover:text-[#7F011F] hover:border-[#7F011F]/50"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Repos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {loading
            ? Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="editorial-card p-6 rounded-2xl h-36 animate-pulse" />
              ))
            : filteredRepos.map((repo, idx) => (
                <motion.a
                  key={repo.name}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.04 }}
                  className="editorial-card p-6 rounded-2xl flex flex-col justify-between gap-4 group"
                >
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 truncate">
                        <BookOpen className="h-4 w-4 text-[#7F011F] dark:text-[#F5EBD0] shrink-0" />
                        <h3 className="font-heading font-bold text-base text-[#242124] dark:text-[#F5EBD0] group-hover:text-[#7F011F] transition-colors truncate">
                          {repo.name}
                        </h3>
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#7F011F] dark:text-[#F5EBD0] bg-[#F5EBD0] dark:bg-[#24151A] px-2.5 py-0.5 rounded-full border border-[#E6DCC7] dark:border-[#422631] shrink-0">
                        {repo.category}
                      </span>
                    </div>
                    <p className="text-xs text-[#77716D] dark:text-[#A89F9A] leading-relaxed line-clamp-2 font-sans">
                      {repo.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono text-[#77716D] dark:text-[#A89F9A] pt-2 border-t border-[#E6DCC7] dark:border-[#422631]">
                    <span className="flex items-center gap-1.5 font-sans">
                      <span className="h-2 w-2 rounded-full bg-[#7F011F]" />
                      {repo.language}
                    </span>

                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Star className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />
                        {repo.stargazers_count}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork className="h-3.5 w-3.5 text-[#7F011F] dark:text-[#F5EBD0]" />
                        {repo.forks_count}
                      </span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-[#77716D] group-hover:text-[#7F011F] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </motion.a>
              ))}
        </div>

        {/* CTA Link */}
        <div className="flex justify-center">
          <a
            href="https://github.com/kedareswarkanda"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 items-center gap-2.5 px-8 rounded-full bg-[#7F011F] text-[#F5EBD0] text-xs font-bold uppercase tracking-wider hover:bg-[#4B0015] transition-all shadow-xs"
          >
            <Github className="h-4 w-4" />
            <span>Explore my GitHub →</span>
          </a>
        </div>

      </div>
    </section>
  );
}
