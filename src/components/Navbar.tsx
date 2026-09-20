"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Download } from "lucide-react";
import { useTheme } from "next-themes";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["home", ...navItems.map((item) => item.href.substring(1))];
      let current = "home";

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            current = section;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(href.substring(1));
    if (element) {
      const offset = 75;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          isScrolled
            ? "py-3 bg-background/95 backdrop-blur-md border-b border-[#EAEAEA] dark:border-[#222222] shadow-2xs"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo / Name */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-2.5 group focus-visible:outline-2 focus-visible:outline-[#FF6B35] rounded-lg"
          >
            <div className="h-8 w-8 rounded-lg bg-[#FF6B35] flex items-center justify-center text-white font-heading font-black text-xs shadow-xs">
              KK
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-sm tracking-tight text-foreground group-hover:text-[#FF6B35] transition-colors">
                KANDA KEDARESWAR
              </span>
              <span className="text-[10px] text-muted tracking-wider uppercase font-semibold">
                AI & ML Undergraduate
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
            {navItems.map((item) => {
              const active = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative text-xs font-semibold uppercase tracking-wider transition-colors py-1 focus-visible:outline-2 focus-visible:outline-[#FF6B35] rounded-xs ${
                    active
                      ? "text-[#FF6B35]"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {item.label}
                  {active && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FF6B35] rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Actions: Resume & Theme Toggle */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="/resume.pdf"
              download="Kanda_Kedareswar_Resume.pdf"
              className="flex h-9 items-center gap-1.5 px-4 rounded-full border border-[#EAEAEA] dark:border-[#333333] hover:border-[#FF6B35] text-xs font-semibold text-foreground hover:text-[#FF6B35] transition-all bg-background shadow-2xs focus-visible:outline-2 focus-visible:outline-[#FF6B35]"
            >
              <Download className="h-3.5 w-3.5 text-[#FF6B35]" />
              <span>Resume</span>
            </a>

            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="h-9 w-9 flex items-center justify-center rounded-full border border-[#EAEAEA] dark:border-[#333333] hover:border-[#FF6B35] text-muted hover:text-[#FF6B35] transition-colors bg-background focus-visible:outline-2 focus-visible:outline-[#FF6B35]"
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
            )}
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex lg:hidden items-center gap-3">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="h-9 w-9 flex items-center justify-center rounded-full border border-[#EAEAEA] dark:border-[#333333] text-muted"
                aria-label="Toggle Theme"
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="h-9 w-9 flex items-center justify-center rounded-lg border border-[#EAEAEA] dark:border-[#333333] text-foreground"
              aria-label="Toggle Navigation Menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-background/98 backdrop-blur-xl flex flex-col justify-center items-center lg:hidden px-6"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="flex flex-col items-center gap-5 text-center">
              {navItems.map((item, index) => {
                const active = activeSection === item.href.substring(1);
                return (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`font-heading text-lg font-bold uppercase tracking-widest ${
                      active ? "text-[#FF6B35]" : "text-muted hover:text-foreground"
                    }`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.03 }}
                  >
                    {item.label}
                  </motion.a>
                );
              })}
              <a
                href="/resume.pdf"
                download="Kanda_Kedareswar_Resume.pdf"
                className="mt-4 flex h-11 items-center gap-2 px-6 rounded-full bg-[#FF6B35] text-white text-xs font-bold uppercase tracking-wider shadow-sm"
              >
                <Download className="h-4 w-4" />
                <span>Download Resume</span>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
