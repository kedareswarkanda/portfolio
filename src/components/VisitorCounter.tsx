"use client";

import { useEffect, useState } from "react";
import { incrementVisitorCount } from "@/lib/firebase";
import { Eye } from "lucide-react";

export default function VisitorCounter() {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const count = await incrementVisitorCount();
        setVisitorCount(count);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCount();
  }, []);

  const formatCount = (num: number) => {
    return num.toString().padStart(6, "0");
  };

  return (
    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF9ED] dark:bg-[#321A23] border border-[#E6DCC7] dark:border-[#422631] shadow-2xs select-none">
      <Eye className="h-3.5 w-3.5 text-[#7F011F] shrink-0" />
      <span className="text-[10px] font-bold text-[#77716D] dark:text-[#A89F9A] uppercase tracking-wider">
        System Visitors:
      </span>
      <span className="font-mono text-xs font-black text-[#7F011F] dark:text-[#F5EBD0] tracking-widest">
        {visitorCount !== null ? formatCount(visitorCount) : "------"}
      </span>
    </div>
  );
}
