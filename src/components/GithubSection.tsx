"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Star, GitFork, BookOpen, ArrowUpRight } from "lucide-react";

interface Repo {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
}

const fallbackRepos: Repo[] = [
  {
    name: "smart-borewell-starter",
    description: "Real-time water level monitoring, energy optimization, and sustainable farm management.",
    html_url: "https://github.com/kedareswarkanda/smart-borewell-starter",
    stargazers_count: 5,
    forks_count: 1,
    language: "Python",
  },
  {
    name: "AI-Academic-Career-Navigator",
    description: "Centralized platform for academic resources, career planning and certification exploration.",
    html_url: "https://github.com/kedareswarkanda/AI-Academic-Career-Navigator",
    stargazers_count: 4,
    forks_count: 1,
    language: "Python",
  },
];

export default function GithubSection() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch("https://api.github.com/users/kedareswarkanda/repos?sort=updated&per_page=6");
        if (!res.ok) throw new Error("Fetch failed");
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          const formatted = data.map((item: any) => ({
            name: item.name,
            description: item.description || "Public repository hosted on GitHub.",
            html_url: item.html_url,
            stargazers_count: item.stargazers_count || 0,
            forks_count: item.forks_count || 0,
            language: item.language || "Code",
          }));
          setRepos(formatted.slice(0, 4));
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

  return (
    <section id="github" className="relative w-full py-24 bg-background px-6 border-b border-[#EAEAEA] dark:border-[#222222]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2 mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6B35]">
            05 // OPEN SOURCE
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-foreground">
            GitHub Activity.
          </h2>
          <p className="text-sm text-muted max-w-md mt-1 font-sans">
            Explore public repositories and code contributions on my GitHub profile.
          </p>
        </div>

        {/* Repos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {loading
            ? Array.from({ length: 2 }).map((_, i) => (
                <div key={i} className="editorial-card p-6 rounded-2xl h-36 animate-pulse" />
              ))
            : repos.map((repo, idx) => (
                <motion.a
                  key={repo.name}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.04 }}
                  className="editorial-card p-6 rounded-2xl flex flex-col justify-between gap-4 group focus-visible:outline-2 focus-visible:outline-[#FF6B35]"
                >
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-[#FF6B35]" />
                        <h3 className="font-heading font-bold text-base text-foreground group-hover:text-[#FF6B35] transition-colors truncate">
                          {repo.name}
                        </h3>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-muted group-hover:text-[#FF6B35] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                    </div>
                    <p className="text-xs text-muted leading-relaxed line-clamp-2 font-sans">
                      {repo.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono text-muted pt-2 border-t border-[#EAEAEA] dark:border-[#2A2A2A]">
                    <span className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-[#FF6B35]" />
                      {repo.language}
                    </span>

                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Star className="h-3.5 w-3.5 text-amber-500" />
                        {repo.stargazers_count}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork className="h-3.5 w-3.5" />
                        {repo.forks_count}
                      </span>
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
            className="flex h-12 items-center gap-2 px-8 rounded-full bg-[#FF6B35] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#E55A27] transition-all shadow-xs focus-visible:outline-2 focus-visible:outline-[#FF6B35]"
          >
            <Github className="h-4 w-4" />
            <span>Explore my GitHub →</span>
          </a>
        </div>

      </div>
    </section>
  );
}
