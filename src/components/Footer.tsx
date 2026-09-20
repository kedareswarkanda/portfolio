"use client";

import VisitorCounter from "./VisitorCounter";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-background border-t border-[#EAEAEA] dark:border-[#222222] py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left: Brand info */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="font-heading font-black text-sm tracking-widest text-foreground">
            KANDA KEDARESWAR
          </span>
          <span className="text-xs text-[#FF6B35] font-semibold uppercase tracking-wider">
            AI & ML Undergraduate
          </span>
        </div>

        {/* Center: Visitor Counter & Tagline */}
        <div className="flex flex-col items-center gap-2">
          <VisitorCounter />
          <span className="text-[11px] text-muted font-medium italic">
            Built with curiosity & code.
          </span>
        </div>

        {/* Right: Socials & Back to Top */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/kedareswarkanda"
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 w-9 rounded-full border border-[#EAEAEA] dark:border-[#2A2A2A] hover:border-[#FF6B35] text-muted hover:text-[#FF6B35] flex items-center justify-center transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/kedareswarkanda"
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 w-9 rounded-full border border-[#EAEAEA] dark:border-[#2A2A2A] hover:border-[#FF6B35] text-muted hover:text-[#FF6B35] flex items-center justify-center transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="mailto:99240040247@klu.ac.in"
              className="h-9 w-9 rounded-full border border-[#EAEAEA] dark:border-[#2A2A2A] hover:border-[#FF6B35] text-muted hover:text-[#FF6B35] flex items-center justify-center transition-colors"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>

          <button
            onClick={handleScrollTop}
            className="h-9 w-9 rounded-full bg-[#FFF1EB] dark:bg-[#1E1714] text-[#FF6B35] flex items-center justify-center hover:bg-[#FF6B35] hover:text-white transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>

      </div>

      {/* Copyright row */}
      <div className="max-w-7xl mx-auto text-center mt-8 pt-6 border-t border-[#EAEAEA] dark:border-[#222222]">
        <p className="text-[11px] text-muted font-medium">
          © {new Date().getFullYear()} KANDA KEDARESWAR. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
