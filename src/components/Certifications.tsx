"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Binary, Terminal, Database } from "lucide-react";

interface Certificate {
  title: string;
  org: string;
  icon: React.ReactNode;
}

const certifications: Certificate[] = [
  {
    title: "Quantum Computing",
    org: "IUCEE",
    icon: <Binary className="h-5 w-5 text-[#FF6B35]" />,
  },
  {
    title: "Python",
    org: "CodeTantra",
    icon: <Terminal className="h-5 w-5 text-[#FF6B35]" />,
  },
  {
    title: "Database Management System",
    org: "CodeChef",
    icon: <Database className="h-5 w-5 text-[#FF6B35]" />,
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative w-full py-24 bg-background px-6 border-b border-[#EAEAEA] dark:border-[#222222]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2 mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6B35]">
            08 // CREDENTIALS
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-foreground">
            Certifications.
          </h2>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="editorial-card p-6 rounded-2xl flex flex-col justify-between gap-6"
            >
              <div className="flex items-center justify-between">
                <div className="h-10 w-10 rounded-xl bg-[#FFF1EB] dark:bg-[#1E1714] flex items-center justify-center">
                  {cert.icon}
                </div>
                <div className="flex items-center gap-1 text-[10px] text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider bg-emerald-500/10 px-2.5 py-0.5 rounded-full">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  <span>Verified</span>
                </div>
              </div>

              <div>
                <h3 className="font-heading font-extrabold text-base text-foreground">
                  {cert.title}
                </h3>
                <p className="text-xs font-semibold text-[#FF6B35] mt-0.5">
                  {cert.org}
                </p>
              </div>

              <div className="pt-3 border-t border-[#EAEAEA] dark:border-[#2A2A2A] text-[10px] font-mono text-muted uppercase tracking-wider">
                Official Credential
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
