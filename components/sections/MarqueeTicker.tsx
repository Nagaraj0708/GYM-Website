"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";

const TICKER_ITEMS = [
  "HYPER-DRIVE STRENGTH",
  "HIGH-INTENSITY SPIN CYCLE",
  "FIFUSION HIIT ZONES",
  "ATHLETIC RECOVERY & CRYOTHERAPY",
  "OLYMPIC LIFTING PLATFORMS",
  "PERSONAL METABOLIC COACHING",
  "HYBRID CONDITIONING",
  "24/7 BIOMETRIC ACCESS",
];

export default function MarqueeTicker() {
  return (
    <div className="relative py-6 bg-[#08080A] border-y border-white/10 overflow-hidden select-none">
      {/* Side Fade Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#08080A] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#08080A] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex items-center gap-10 pr-10"
        >
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, idx) => (
            <div key={idx} className="flex items-center gap-10">
              <span className="font-display text-2xl sm:text-3xl italic tracking-wider text-white hover:text-[#C0E837] transition-colors whitespace-nowrap">
                {item}
              </span>
              <Zap className="w-5 h-5 text-[#C0E837] flex-shrink-0 animate-pulse" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
