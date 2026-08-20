"use client";

import { motion } from "framer-motion";
import { Flame, ArrowRight, ShieldCheck } from "lucide-react";

export default function CTABanner({ onBookTrial }: { onBookTrial: () => void }) {
  return (
    <section className="py-24 bg-[#08080A] relative overflow-hidden">
      {/* High Intensity Smoked Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(192,232,55,0.15),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-card rounded-3xl p-8 sm:p-16 border-2 border-[#C0E837]/40 shadow-[0_0_50px_rgba(192,232,55,0.15)] text-center flex flex-col items-center bg-[#121216]/90 backdrop-blur-xl">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#08080A] border border-[#C0E837] text-xs font-mono text-[#C0E837] mb-6">
            <Flame className="w-4 h-4 text-[#C0E837] animate-bounce" />
            <span>LIMITED TIME ATHLETE TRIAL</span>
          </div>

          <h2 className="font-display text-4xl sm:text-7xl italic uppercase text-white tracking-tight leading-[0.95] max-w-4xl mb-6">
            YOUR FIRST <span className="text-[#C0E837]">3 DAYS ARE 100% FREE.</span> STEP INTO THE FIFUSION ERA.
          </h2>

          <p className="text-[#9E9E9E] text-base sm:text-lg max-w-2xl font-body leading-relaxed mb-8">
            Experience our high-octane spin studio, custom strength zone, and hyper-recovery plunges with zero commitment.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onBookTrial}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#C0E837] hover:bg-[#D4E157] text-[#08080A] font-extrabold text-sm uppercase tracking-wider transition-all shadow-[0_0_30px_rgba(192,232,55,0.5)] hover:scale-105"
            >
              <span>CLAIM FREE 3-DAY TRIAL PASS</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <p className="text-xs text-[#9E9E9E] mt-6 flex items-center gap-2 font-mono">
            <ShieldCheck className="w-4 h-4 text-[#C0E837]" />
            <span>No credit card required for free pass setup. Instant biometric QR code activation.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
