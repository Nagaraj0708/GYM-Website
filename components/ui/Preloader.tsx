"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dumbbell } from "lucide-react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 400);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 40);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#08080A] text-white select-none"
        >
          {/* Logo Brand Animation */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-10 h-10 rounded-xl bg-[#C0E837] text-[#08080A] flex items-center justify-center font-extrabold shadow-[0_0_20px_rgba(192,232,55,0.8)]">
              <Dumbbell className="w-5 h-5 fill-[#08080A]" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-display text-4xl text-white font-bold tracking-tight leading-none">
                Fi<span className="text-[#C0E837]">Fusion</span>
              </span>
              <span className="text-[10px] tracking-[0.3em] text-[#9E9E9E] font-bold uppercase mt-0.5">
                ATHLETIC STUDIO
              </span>
            </div>
          </motion.div>

          {/* Progress Bar & Counter */}
          <div className="w-64 sm:w-80">
            <div className="flex justify-between items-center mb-2 font-mono text-xs text-[#9E9E9E]">
              <span>INITIALIZING BIOMETRIC HUD</span>
              <span className="text-[#C0E837] font-bold">{counter}%</span>
            </div>
            <div className="h-1.5 w-full bg-[#121216] rounded-full overflow-hidden border border-white/10">
              <motion.div
                className="h-full bg-[#C0E837]"
                style={{ width: `${counter}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
