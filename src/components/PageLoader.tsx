"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      const increment = Math.floor(Math.random() * 12) + 5;
      current = Math.min(100, current + increment);
      setProgress(current);

      if (current === 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsLoaded(true);
        }, 300);
      }
    }, 35);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.4, ease: "easeOut" }
          }}
        >
          <div className="relative flex flex-col items-center gap-4">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="h-14 w-14 rounded-2xl bg-[#FF6B35] flex items-center justify-center text-white font-heading font-black text-xl shadow-md"
            >
              KK
            </motion.div>

            {/* Title */}
            <div className="text-center mt-1">
              <h2 className="font-heading text-sm font-bold tracking-widest text-foreground uppercase">
                KANDA KEDARESWAR
              </h2>
              <p className="text-[10px] text-[#FF6B35] font-semibold uppercase tracking-widest mt-0.5">
                AI & ML Undergraduate
              </p>
            </div>

            {/* Progress */}
            <div className="flex flex-col items-center gap-2 mt-2 w-36">
              <span className="font-mono text-2xl font-black text-foreground select-none">
                {progress}%
              </span>
              <div className="relative h-1 w-full bg-[#EAEAEA] dark:bg-[#2A2A2A] rounded-full overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-[#FF6B35]"
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
