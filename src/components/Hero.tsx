"use client";

import Image from "next/image";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 75;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-[85vh] flex items-center justify-center bg-background px-6 pt-28 pb-16 border-b border-[#EAEAEA] dark:border-[#222222]"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Text Column */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
          
          {/* Status Indicator & Category Badge */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF1EB] dark:bg-[#1E1714] border border-[#FF6B35]/20 text-[11px] font-bold uppercase tracking-wider text-[#FF6B35]">
              AI & ML UNDERGRADUATE
            </span>

            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Open to opportunities
            </span>
          </div>

          {/* Name & Headline */}
          <div className="flex flex-col gap-2">
            <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-foreground">
              KANDA <span className="text-[#FF6B35]">KEDARESWAR</span>
            </h1>

            <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl font-extrabold text-foreground/90 leading-tight">
              Building intelligent solutions <br className="hidden sm:block" />
              for real-world problems.
            </h2>
          </div>

          {/* Supporting Statement */}
          <p className="max-w-xl text-base text-muted leading-relaxed font-sans">
            AI & ML undergraduate focused on Machine Learning, Python, data analysis and full-stack development. Pursuing B.Tech CSE (AI & ML) at Kalasalingam Academy of Research and Education.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
            <button
              onClick={() => scrollToSection("projects")}
              className="group flex h-12 items-center justify-center gap-2 rounded-full bg-[#FF6B35] px-7 text-sm font-bold text-white shadow-xs hover:bg-[#E55A27] transition-colors focus-visible:outline-2 focus-visible:outline-[#FF6B35]"
            >
              <span>View My Work</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="/resume.pdf"
              download="Kanda_Kedareswar_Resume.pdf"
              className="flex h-12 items-center justify-center gap-2 rounded-full bg-background border border-[#EAEAEA] dark:border-[#333333] hover:border-[#FF6B35] hover:text-[#FF6B35] px-7 text-sm font-bold text-foreground transition-all shadow-2xs focus-visible:outline-2 focus-visible:outline-[#FF6B35]"
            >
              <Download className="h-4 w-4 text-[#FF6B35]" />
              <span>Download Resume</span>
            </a>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-3 pt-2 sm:pt-0 sm:ml-2">
              <a
                href="https://github.com/kedareswarkanda"
                target="_blank"
                rel="noopener noreferrer"
                className="h-11 w-11 rounded-full border border-[#EAEAEA] dark:border-[#333333] hover:border-[#FF6B35] flex items-center justify-center text-muted hover:text-[#FF6B35] transition-colors focus-visible:outline-2 focus-visible:outline-[#FF6B35]"
                aria-label="GitHub Profile"
              >
                <Github className="h-4.5 w-4.5" />
              </a>
              <a
                href="https://www.linkedin.com/in/kedareswarkanda"
                target="_blank"
                rel="noopener noreferrer"
                className="h-11 w-11 rounded-full border border-[#EAEAEA] dark:border-[#333333] hover:border-[#FF6B35] flex items-center justify-center text-muted hover:text-[#FF6B35] transition-colors focus-visible:outline-2 focus-visible:outline-[#FF6B35]"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Right Profile Photo Column */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative group">
            <div className="relative h-80 sm:h-96 w-72 sm:w-80 rounded-2.5xl overflow-hidden border-2 border-[#FF6B35] bg-background shadow-md transition-transform duration-200 group-hover:scale-[1.01]">
              <Image
                src="/profile.png"
                alt="Kanda Kedareswar - Profile Photo"
                fill
                sizes="(max-width: 640px) 280px, 320px"
                priority
                className="object-cover object-center"
              />
              
              {/* Bottom Metadata Tag */}
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-background/95 border border-[#EAEAEA] dark:border-[#333333] flex items-center justify-between shadow-2xs">
                <div>
                  <p className="font-heading text-xs font-bold text-foreground">Kanda Kedareswar</p>
                  <p className="text-[10px] text-muted">Nandyal, Andhra Pradesh</p>
                </div>
                <div className="h-2 w-2 rounded-full bg-[#FF6B35]" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
