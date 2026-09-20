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
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFF1EB] dark:bg-[#1E1714] border border-[#FF6B35]/20 select-none">
      <Eye className="h-3.5 w-3.5 text-[#FF6B35] shrink-0" />
      <span className="text-[10px] font-bold text-muted uppercase tracking-wider">
        System Visitors:
      </span>
      <span className="font-mono text-xs font-black text-[#FF6B35] tracking-widest">
        {visitorCount !== null ? formatCount(visitorCount) : "------"}
      </span>
    </div>
  );
}
