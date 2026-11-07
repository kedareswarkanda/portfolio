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
      className="relative w-full min-h-[88vh] flex items-center justify-center bg-[#F5EBD0] dark:bg-[#24151A] px-6 pt-28 pb-16 border-b border-[#E6DCC7] dark:border-[#422631]"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Editorial Text Column */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
          
          {/* Status Indicator & Category Badge */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF9ED] dark:bg-[#321A23] border border-[#E6DCC7] dark:border-[#422631] text-[11px] font-bold uppercase tracking-[0.16em] text-[#7F011F] dark:text-[#F5EBD0] shadow-2xs">
              AI & ML UNDERGRADUATE
            </span>

            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF9ED] dark:bg-[#321A23] border border-[#E6DCC7] dark:border-[#422631] text-[11px] font-semibold text-[#242124] dark:text-[#F5EBD0] shadow-2xs">
              <span className="h-2 w-2 rounded-full bg-[#7F011F] animate-pulse" />
              Open to opportunities
            </span>
          </div>

          {/* Name & Headline */}
          <div className="flex flex-col gap-2">
            <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#242124] dark:text-[#F5EBD0]">
              KANDA <span className="text-[#7F011F] dark:text-[#E02653] block sm:inline">KEDARESWAR</span>
            </h1>

            <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#4B0015] dark:text-[#F5EBD0]/90 leading-snug pt-1">
              Building intelligent solutions <br className="hidden sm:block" />
              for real-world problems.
            </h2>
          </div>

          {/* Supporting Statement */}
          <p className="max-w-xl text-base text-[#77716D] dark:text-[#A89F9A] leading-relaxed font-sans">
            Computer Science and Engineering undergraduate specializing in AI & ML, exploring machine learning, software development and intelligent applications.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
            <button
              onClick={() => scrollToSection("projects")}
              className="group flex h-12 items-center justify-center gap-2.5 rounded-full bg-[#7F011F] px-8 text-xs font-bold uppercase tracking-wider text-[#F5EBD0] shadow-sm hover:bg-[#4B0015] transition-all"
            >
              <span>EXPLORE MY PROJECTS</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="/Kanda_Kedareswar_Resume.pdf"
              download="Kanda_Kedareswar_Resume.pdf"
              className="flex h-12 items-center justify-center gap-2 rounded-full bg-[#FFF9ED] dark:bg-[#321A23] border border-[#E6DCC7] dark:border-[#422631] hover:border-[#7F011F] hover:text-[#7F011F] px-7 text-xs font-bold uppercase tracking-wider text-[#242124] dark:text-[#F5EBD0] transition-all shadow-2xs"
            >
              <Download className="h-4 w-4 text-[#7F011F]" />
              <span>DOWNLOAD RESUME</span>
            </a>

            {/* Social Gateways */}
            <div className="flex items-center justify-center gap-3 pt-2 sm:pt-0 sm:ml-2">
              <a
                href="https://github.com/kedareswarkanda"
                target="_blank"
                rel="noopener noreferrer"
                className="h-11 w-11 rounded-full border border-[#E6DCC7] dark:border-[#422631] bg-[#FFF9ED] dark:bg-[#321A23] hover:border-[#7F011F] flex items-center justify-center text-[#77716D] dark:text-[#A89F9A] hover:text-[#7F011F] transition-colors shadow-2xs"
                aria-label="GitHub Profile"
              >
                <Github className="h-4.5 w-4.5" />
              </a>
              <a
                href="https://linkedin.com/in/kedareswarkanda"
                target="_blank"
                rel="noopener noreferrer"
                className="h-11 w-11 rounded-full border border-[#E6DCC7] dark:border-[#422631] bg-[#FFF9ED] dark:bg-[#321A23] hover:border-[#7F011F] flex items-center justify-center text-[#77716D] dark:text-[#A89F9A] hover:text-[#7F011F] transition-colors shadow-2xs"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Right Column: Unique Profile Presentation */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative group">
            
            {/* Soft decorative offset frame */}
            <div className="absolute -inset-2.5 rounded-3xl bg-[#E6DCC7] dark:bg-[#422631] opacity-70 blur-xs transition-all group-hover:scale-102" />

            {/* Portrait Frame */}
            <div className="relative h-80 sm:h-96 w-72 sm:w-80 rounded-2.5xl overflow-hidden border-2 border-[#7F011F] bg-[#FFF9ED] dark:bg-[#321A23] shadow-md transition-transform duration-300 group-hover:scale-[1.02]">
              <Image
                src="/profile.png"
                alt="Kanda Kedareswar - Profile Portrait"
                fill
                sizes="(max-width: 640px) 280px, 320px"
                priority
                className="object-cover object-center"
              />
              
              {/* Bottom Metadata Card */}
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#FFF9ED]/95 dark:bg-[#321A23]/95 backdrop-blur-sm border border-[#E6DCC7] dark:border-[#422631] flex items-center justify-between shadow-xs">
                <div>
                  <p className="font-heading text-xs font-bold text-[#242124] dark:text-[#F5EBD0]">
                    Kanda Kedareswar
                  </p>
                  <p className="text-[10px] text-[#77716D] dark:text-[#A89F9A]">
                    Nandyal, Andhra Pradesh, India
                  </p>
                </div>
                <div className="h-2.5 w-2.5 rounded-full bg-[#7F011F]" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
