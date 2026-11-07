"use client";

import VisitorCounter from "./VisitorCounter";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Journey", href: "#journey" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="w-full bg-[#F5EBD0] dark:bg-[#24151A] border-t border-[#E6DCC7] dark:border-[#422631] py-14 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        
        {/* Top Row: Identity, Links, and Back to Top */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-heading font-black text-sm tracking-widest text-[#242124] dark:text-[#F5EBD0]">
              KANDA KEDARESWAR
            </span>
            <span className="text-xs text-[#7F011F] dark:text-[#F5EBD0] font-semibold uppercase tracking-wider">
              AI & ML Undergraduate
            </span>
          </div>

          {/* Quick Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-5 text-xs font-semibold uppercase tracking-wider text-[#77716D] dark:text-[#A89F9A]">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-[#7F011F] dark:hover:text-[#F5EBD0] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/kedareswarkanda"
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 w-9 rounded-full border border-[#E6DCC7] dark:border-[#422631] bg-[#FFF9ED] dark:bg-[#321A23] hover:border-[#7F011F] text-[#77716D] dark:text-[#A89F9A] hover:text-[#7F011F] flex items-center justify-center transition-colors shadow-2xs"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com/in/kedareswarkanda"
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 w-9 rounded-full border border-[#E6DCC7] dark:border-[#422631] bg-[#FFF9ED] dark:bg-[#321A23] hover:border-[#7F011F] text-[#77716D] dark:text-[#A89F9A] hover:text-[#7F011F] flex items-center justify-center transition-colors shadow-2xs"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="mailto:kandakedareswar@gmail.com"
              className="h-9 w-9 rounded-full border border-[#E6DCC7] dark:border-[#422631] bg-[#FFF9ED] dark:bg-[#321A23] hover:border-[#7F011F] text-[#77716D] dark:text-[#A89F9A] hover:text-[#7F011F] flex items-center justify-center transition-colors shadow-2xs"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>

            <button
              onClick={handleScrollTop}
              className="h-9 w-9 rounded-full bg-[#7F011F] text-[#F5EBD0] flex items-center justify-center hover:bg-[#4B0015] transition-colors cursor-pointer shadow-xs ml-2"
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>

        </div>

        {/* Center: Visitor Counter & Closing Statement */}
        <div className="flex flex-col items-center gap-2 pt-4 border-t border-[#E6DCC7] dark:border-[#422631]">
          <VisitorCounter />
          <p className="text-xs text-[#7F011F] dark:text-[#F5EBD0] font-medium italic mt-1 font-serif">
            "Designed with curiosity. Built with purpose."
          </p>
          <p className="text-[11px] text-[#77716D] dark:text-[#A89F9A] mt-1 font-sans">
            © {new Date().getFullYear()} KANDA KEDARESWAR. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
