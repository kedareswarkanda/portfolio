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
    icon: <Binary className="h-5 w-5 text-[#7F011F]" />,
  },
  {
    title: "Python",
    org: "CodeTantra",
    icon: <Terminal className="h-5 w-5 text-[#7F011F]" />,
  },
  {
    title: "Database Management System – Design and Analysis of Algorithm",
    org: "CodeChef",
    icon: <Database className="h-5 w-5 text-[#7F011F]" />,
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative w-full py-24 bg-[#F5EBD0] dark:bg-[#24151A] px-6 border-b border-[#E6DCC7] dark:border-[#422631]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2 mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7F011F] dark:text-[#F5EBD0]">
            08 // VERIFIED CREDENTIALS
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-[#242124] dark:text-[#F5EBD0]">
            Certifications.
          </h2>
          <p className="text-sm text-[#77716D] dark:text-[#A89F9A] max-w-md mt-1 font-sans">
            Technical credentials verified from my latest resume.
          </p>
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
              className="editorial-card p-7 rounded-2xl flex flex-col justify-between gap-6"
            >
              <div className="flex items-center justify-between">
                <div className="h-10 w-10 rounded-xl bg-[#F5EBD0] dark:bg-[#24151A] border border-[#E6DCC7] dark:border-[#422631] flex items-center justify-center">
                  {cert.icon}
                </div>
                <div className="flex items-center gap-1 text-[10px] text-[#7F011F] dark:text-[#F5EBD0] font-bold uppercase tracking-wider bg-[#F5EBD0] dark:bg-[#24151A] px-2.5 py-0.5 rounded-full border border-[#E6DCC7] dark:border-[#422631]">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#7F011F] dark:text-[#F5EBD0]" />
                  <span>Verified</span>
                </div>
              </div>

              <div>
                <h3 className="font-heading font-extrabold text-base text-[#242124] dark:text-[#F5EBD0]">
                  {cert.title}
                </h3>
                <p className="text-xs font-semibold text-[#7F011F] dark:text-[#F5EBD0] mt-1">
                  Issued by {cert.org}
                </p>
              </div>

              <div className="pt-3 border-t border-[#E6DCC7] dark:border-[#422631] text-[10px] font-mono text-[#77716D] dark:text-[#A89F9A] uppercase tracking-wider">
                Official Certification Entry
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
