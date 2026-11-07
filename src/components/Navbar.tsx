"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Download } from "lucide-react";
import { useTheme } from "next-themes";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const isDark = (theme === "system" ? resolvedTheme : theme) === "dark";
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => item.href.substring(1));
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
            ? "py-3 bg-[#F5EBD0]/92 dark:bg-[#24151A]/92 backdrop-blur-md border-b border-[#E6DCC7] dark:border-[#422631] shadow-xs"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo / Monogram in Wine Red */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-2.5 group"
          >
            <div className="h-8.5 w-8.5 rounded-lg bg-[#7F011F] flex items-center justify-center text-[#F5EBD0] font-heading font-black text-xs shadow-xs transition-transform group-hover:scale-105">
              KK
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-sm tracking-tight text-[#242124] dark:text-[#F5EBD0] group-hover:text-[#7F011F] transition-colors">
                KANDA KEDARESWAR
              </span>
              <span className="text-[10px] text-[#77716D] dark:text-[#A89F9A] tracking-wider uppercase font-medium">
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
                  className={`relative text-xs font-semibold uppercase tracking-wider transition-colors py-1 ${
                    active
                      ? "text-[#7F011F] dark:text-[#F5EBD0] font-bold"
                      : "text-[#77716D] dark:text-[#A89F9A] hover:text-[#242124] dark:hover:text-[#F5EBD0]"
                  }`}
                >
                  {item.label}
                  {active && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#7F011F] dark:bg-[#F5EBD0] rounded-full"
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
              href="/Kanda_Kedareswar_Resume.pdf"
              download="Kanda_Kedareswar_Resume.pdf"
              className="flex h-9 items-center gap-1.5 px-4 rounded-full border border-[#E6DCC7] dark:border-[#422631] hover:border-[#7F011F] bg-[#FFF9ED] dark:bg-[#321A23] text-xs font-semibold text-[#242124] dark:text-[#F5EBD0] hover:text-[#7F011F] transition-all shadow-2xs"
            >
              <Download className="h-3.5 w-3.5 text-[#7F011F]" />
              <span>Resume</span>
            </a>

            {/* Segmented Bright / Dark Mode Switcher */}
            {mounted && (
              <div className="flex items-center p-1 rounded-full border border-[#E6DCC7] dark:border-[#422631] bg-[#FFF9ED] dark:bg-[#321A23] shadow-2xs">
                <button
                  type="button"
                  onClick={() => setTheme("light")}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    !isDark
                      ? "bg-[#7F011F] text-[#F5EBD0] shadow-xs"
                      : "text-[#77716D] dark:text-[#A89F9A] hover:text-[#242124] dark:hover:text-[#F5EBD0]"
                  }`}
                  aria-label="Bright Mode"
                >
                  <Sun className="h-3.5 w-3.5" />
                  <span>Bright</span>
                </button>
                <button
                  type="button"
                  onClick={() => setTheme("dark")}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    isDark
                      ? "bg-[#7F011F] text-[#F5EBD0] shadow-xs"
                      : "text-[#77716D] hover:text-[#242124]"
                  }`}
                  aria-label="Dark Mode"
                >
                  <Moon className="h-3.5 w-3.5" />
                  <span>Dark</span>
                </button>
              </div>
            )}
          </div>

          {/* Mobile Hamburger Toggle & Compact Theme Button */}
          <div className="flex lg:hidden items-center gap-2.5">
            {mounted && (
              <button
                type="button"
                onClick={() => setTheme(isDark ? "light" : "dark")}
                className="h-9 w-9 flex items-center justify-center rounded-full border border-[#E6DCC7] dark:border-[#422631] bg-[#FFF9ED] dark:bg-[#321A23] text-[#7F011F] dark:text-[#F5EBD0]"
                aria-label={`Switch to ${isDark ? "Bright" : "Dark"} Mode`}
              >
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="h-9 w-9 flex items-center justify-center rounded-lg border border-[#E6DCC7] dark:border-[#422631] bg-[#FFF9ED] dark:bg-[#321A23] text-[#242124] dark:text-[#F5EBD0]"
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
            className="fixed inset-0 z-30 bg-[#F5EBD0]/98 dark:bg-[#24151A]/98 backdrop-blur-xl flex flex-col justify-center items-center lg:hidden px-6"
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
                      active ? "text-[#7F011F] dark:text-[#F5EBD0]" : "text-[#77716D] dark:text-[#A89F9A] hover:text-[#242124] dark:hover:text-[#F5EBD0]"
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
                href="/Kanda_Kedareswar_Resume.pdf"
                download="Kanda_Kedareswar_Resume.pdf"
                className="mt-4 flex h-11 items-center gap-2 px-6 rounded-full bg-[#7F011F] text-[#F5EBD0] text-xs font-bold uppercase tracking-wider shadow-sm"
              >
                <Download className="h-4 w-4" />
                <span>Download Resume</span>
              </a>

              {/* Mobile Mode Switcher in Overlay */}
              {mounted && (
                <div className="mt-3 flex items-center p-1 rounded-full border border-[#E6DCC7] dark:border-[#422631] bg-[#FFF9ED] dark:bg-[#321A23] shadow-xs">
                  <button
                    type="button"
                    onClick={() => setTheme("light")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                      !isDark
                        ? "bg-[#7F011F] text-[#F5EBD0] shadow-xs"
                        : "text-[#77716D] dark:text-[#A89F9A]"
                    }`}
                  >
                    <Sun className="h-3.5 w-3.5" />
                    <span>Bright Mode</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setTheme("dark")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                      isDark
                        ? "bg-[#7F011F] text-[#F5EBD0] shadow-xs"
                        : "text-[#77716D] dark:text-[#A89F9A]"
                    }`}
                  >
                    <Moon className="h-3.5 w-3.5" />
                    <span>Dark Mode</span>
                  </button>
                </div>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Quick Mode Switcher (Visible on desktop at bottom-left) */}
      {mounted && (
        <aside className="fixed bottom-6 left-6 z-30 hidden lg:flex items-center" aria-label="Theme Switcher">
          <div className="flex items-center p-1 rounded-full border border-[#E6DCC7] dark:border-[#422631] bg-[#FFF9ED]/95 dark:bg-[#24151A]/95 backdrop-blur-md shadow-lg">
            <button
              type="button"
              onClick={() => setTheme("light")}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all cursor-pointer ${
                !isDark
                  ? "bg-[#7F011F] text-[#F5EBD0] shadow-xs"
                  : "text-[#77716D] dark:text-[#A89F9A] hover:text-[#F5EBD0]"
              }`}
            >
              <Sun className="h-3.5 w-3.5" />
              <span>Bright</span>
            </button>
            <button
              type="button"
              onClick={() => setTheme("dark")}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all cursor-pointer ${
                isDark
                  ? "bg-[#7F011F] text-[#F5EBD0] shadow-xs"
                  : "text-[#77716D] dark:text-[#A89F9A] hover:text-[#242124]"
              }`}
            >
              <Moon className="h-3.5 w-3.5" />
              <span>Dark</span>
            </button>
          </div>
        </aside>
      )}
    </>
  );
}
