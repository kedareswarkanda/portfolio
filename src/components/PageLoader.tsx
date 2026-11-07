"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      const increment = Math.floor(Math.random() * 14) + 6;
      current = Math.min(100, current + increment);
      setProgress(current);

      if (current === 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsLoaded(true);
        }, 220);
      }
    }, 28);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#F5EBD0] dark:bg-[#24151A]"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.35, ease: "easeOut" }
          }}
        >
          <div className="relative flex flex-col items-center gap-3">
            {/* Logo Badge in Wine Red */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.25 }}
              className="h-12 w-12 rounded-xl bg-[#7F011F] flex items-center justify-center text-[#F5EBD0] font-heading font-black text-lg shadow-sm"
            >
              KK
            </motion.div>

            {/* Title */}
            <div className="text-center mt-1">
              <h2 className="font-heading text-xs font-bold tracking-[0.2em] text-[#242124] dark:text-[#F5EBD0] uppercase">
                KANDA KEDARESWAR
              </h2>
              <p className="text-[10px] text-[#7F011F] font-semibold uppercase tracking-[0.18em] mt-0.5">
                AI & ML Undergraduate
              </p>
            </div>

            {/* Progress */}
            <div className="flex flex-col items-center gap-2 mt-2 w-32">
              <span className="font-mono text-xl font-black text-[#242124] dark:text-[#F5EBD0] select-none">
                {progress}%
              </span>
              <div className="relative h-1 w-full bg-[#E6DCC7] dark:bg-[#422631] rounded-full overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-[#7F011F]"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
