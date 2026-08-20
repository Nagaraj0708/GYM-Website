"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Flame, Dumbbell, Activity, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

interface HeroSectionProps {
  onBookTrial: () => void;
  onWatchVideo?: () => void;
}

const HERO_SLIDES = [
  {
    id: 1,
    titleLine1Part1: "Sculpt",
    titleLine1Part2: "Your",
    titleLine1Part3: "Body,",
    titleLine2Part1: "Elevate",
    titleLine2Part2: "Your",
    titleLine2Part3: "Spirit",
    athleteImg: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1000&auto=format&fit=crop",
    metric1Val: "1.5",
    metric1Label: "Hours",
    metric2Val: "20",
    metric2Label: "Poses",
    metric3Val: "550",
    metric3Label: "Kcal",
    metric4Val: "5",
    metric4Label: "Sets",
  },
  {
    id: 2,
    titleLine1Part1: "Forge",
    titleLine1Part2: "Your",
    titleLine1Part3: "Will,",
    titleLine2Part1: "Unleash",
    titleLine2Part2: "Your",
    titleLine2Part3: "Power",
    athleteImg: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop",
    metric1Val: "2.0",
    metric1Label: "Hours",
    metric2Val: "35",
    metric2Label: "Reps",
    metric3Val: "780",
    metric3Label: "Kcal",
    metric4Val: "8",
    metric4Label: "Sets",
  },
];

export default function HeroSection({ onBookTrial }: HeroSectionProps) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const slide = HERO_SLIDES[currentSlideIndex];

  const handleNext = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-12 bg-[#08080A] flex flex-col justify-between overflow-hidden">
      
      {/* Background Radial Glow Spotlights */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(192,232,55,0.12),transparent)] pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_100%_100%,rgba(192,232,55,0.06),transparent)] pointer-events-none z-0" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto flex flex-col items-center">
        
        {/* Kinetic Header Title (Sculpt Your Body, Elevate Your Spirit) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="text-center font-display text-5xl sm:text-7xl md:text-8xl italic uppercase text-[#F5F5F5] tracking-tight leading-[0.9] max-w-5xl z-10 mb-4"
          >
            <div>
              <span>{slide.titleLine1Part1} </span>
              <span className="text-white/20 font-bold">{slide.titleLine1Part2} </span>
              <span>{slide.titleLine1Part3}</span>
            </div>
            <div>
              <span>{slide.titleLine2Part1} </span>
              <span className="text-white/20 font-bold">{slide.titleLine2Part2} </span>
              <span>{slide.titleLine2Part3}</span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Center Athlete & Floating Metric Capsules Stage */}
        <div className="relative w-full max-w-2xl h-[420px] sm:h-[480px] flex items-center justify-center my-2">
          
          {/* Centered Muscular Bodybuilder Photo */}
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.7 }}
              className="relative w-[300px] sm:w-[380px] h-full rounded-full flex items-center justify-center overflow-hidden"
            >
              <img
                src={slide.athleteImg}
                alt="Muscular Bodybuilder Athlete"
                className="w-full h-full object-cover filter contrast-125 saturate-110 brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08080A] via-transparent to-transparent opacity-80" />
            </motion.div>
          </AnimatePresence>

          {/* Floating Capsule 1: Top-Left (Hours) */}
          <motion.div
            initial={{ opacity: 0, x: -20, y: -20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute top-6 left-2 sm:left-12 glass-card p-3 sm:p-4 rounded-3xl border border-white/15 bg-[#141419]/90 backdrop-blur-xl shadow-2xl flex flex-col items-center min-w-[90px] sm:min-w-[110px] animate-float"
          >
            <div className="w-8 h-8 rounded-full bg-[#C0E837] text-[#08080A] flex items-center justify-center mb-1 shadow-[0_0_12px_rgba(192,232,55,0.6)]">
              <Clock className="w-4 h-4 fill-[#08080A]" />
            </div>
            <span className="text-[10px] font-mono text-[#9E9E9E] font-medium">{slide.metric1Label}</span>
            <span className="font-display text-xl sm:text-2xl text-white font-bold">{slide.metric1Val}</span>
          </motion.div>

          {/* Floating Capsule 2: Top-Right (Poses) */}
          <motion.div
            initial={{ opacity: 0, x: 20, y: -20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute top-6 right-2 sm:right-12 glass-card p-3 sm:p-4 rounded-3xl border border-white/15 bg-[#141419]/90 backdrop-blur-xl shadow-2xl flex flex-col items-center min-w-[90px] sm:min-w-[110px] animate-float"
            style={{ animationDelay: "1s" }}
          >
            <div className="w-8 h-8 rounded-full bg-[#C0E837] text-[#08080A] flex items-center justify-center mb-1 shadow-[0_0_12px_rgba(192,232,55,0.6)]">
              <Activity className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-mono text-[#9E9E9E] font-medium">{slide.metric2Label}</span>
            <span className="font-display text-xl sm:text-2xl text-white font-bold">{slide.metric2Val}</span>
          </motion.div>

          {/* Floating Capsule 3: Bottom-Left (Kcal) */}
          <motion.div
            initial={{ opacity: 0, x: -20, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute bottom-6 left-2 sm:left-12 glass-card p-3 sm:p-4 rounded-3xl border border-white/15 bg-[#141419]/90 backdrop-blur-xl shadow-2xl flex flex-col items-center min-w-[90px] sm:min-w-[110px] animate-float"
            style={{ animationDelay: "2s" }}
          >
            <div className="w-8 h-8 rounded-full bg-[#C0E837] text-[#08080A] flex items-center justify-center mb-1 shadow-[0_0_12px_rgba(192,232,55,0.6)]">
              <Flame className="w-4 h-4 fill-[#08080A]" />
            </div>
            <span className="text-[10px] font-mono text-[#9E9E9E] font-medium">{slide.metric3Label}</span>
            <span className="font-display text-xl sm:text-2xl text-white font-bold">{slide.metric3Val}</span>
          </motion.div>

          {/* Floating Capsule 4: Bottom-Right (Sets) */}
          <motion.div
            initial={{ opacity: 0, x: 20, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute bottom-6 right-2 sm:right-12 glass-card p-3 sm:p-4 rounded-3xl border border-white/15 bg-[#141419]/90 backdrop-blur-xl shadow-2xl flex flex-col items-center min-w-[90px] sm:min-w-[110px] animate-float"
            style={{ animationDelay: "3s" }}
          >
            <div className="w-8 h-8 rounded-full bg-[#C0E837] text-[#08080A] flex items-center justify-center mb-1 shadow-[0_0_12px_rgba(192,232,55,0.6)]">
              <Dumbbell className="w-4 h-4 fill-[#08080A]" />
            </div>
            <span className="text-[10px] font-mono text-[#9E9E9E] font-medium">{slide.metric4Label}</span>
            <span className="font-display text-xl sm:text-2xl text-white font-bold">{slide.metric4Val}</span>
          </motion.div>

        </div>

        {/* Bottom Social Proof & Primary CTA Row */}
        <div className="w-full max-w-5xl flex flex-wrap items-center justify-between gap-6 pt-6 z-10">
          
          {/* Bottom Left Social Proof Stack */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-3">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop"
                alt="Member 1"
                className="w-10 h-10 rounded-full border-2 border-[#08080A] object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
                alt="Member 2"
                className="w-10 h-10 rounded-full border-2 border-[#08080A] object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop"
                alt="Member 3"
                className="w-10 h-10 rounded-full border-2 border-[#08080A] object-cover"
              />
            </div>
            <div>
              <span className="font-display text-2xl font-bold text-white leading-none block">
                12k+
              </span>
              <span className="text-[11px] text-[#9E9E9E] font-medium uppercase tracking-wider font-mono">
                Happy Spirits
              </span>
            </div>
          </div>

          {/* Bottom Right Primary Action Pill Button */}
          <button
            onClick={onBookTrial}
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#C0E837] hover:bg-[#D4E157] text-[#08080A] font-extrabold text-sm tracking-wide transition-all shadow-[0_0_30px_rgba(192,232,55,0.5)] hover:shadow-[0_0_45px_rgba(192,232,55,0.8)] hover:scale-105"
          >
            <span>Let's Start</span>
            <div className="flex items-center -space-x-1">
              <ChevronRight className="w-4 h-4 stroke-[3]" />
              <ChevronRight className="w-4 h-4 stroke-[3] -ml-2" />
              <ChevronRight className="w-4 h-4 stroke-[3] -ml-2" />
            </div>
          </button>

        </div>

      </div>

      {/* Vertical Side Prev / Next Slide Controls */}
      <button
        onClick={handlePrev}
        className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-20 flex-col items-center gap-2 text-white/40 hover:text-[#C0E837] transition-colors group"
      >
        <span className="font-mono text-xs tracking-[0.3em] font-bold [writing-mode:vertical-lr] uppercase rotate-180">
          PREV
        </span>
        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
      </button>

      <button
        onClick={handleNext}
        className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-20 flex-col items-center gap-2 text-white/40 hover:text-[#C0E837] transition-colors group"
      >
        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        <span className="font-mono text-xs tracking-[0.3em] font-bold [writing-mode:vertical-lr] uppercase">
          NEXT
        </span>
      </button>

    </section>
  );
}
