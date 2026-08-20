"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

interface AboutVisionMissionProps {
  onWatchVideo?: () => void;
}

export default function AboutVisionMission({ onWatchVideo }: AboutVisionMissionProps) {
  return (
    <section id="about" className="py-24 bg-[#08080A] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-6">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#C0E837]/15 text-[#C0E837] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#C0E837]/30">
              About Us
            </span>
            <h2 className="font-display text-5xl sm:text-7xl italic uppercase text-white leading-none">
              THE POWER <br />
              <span className="text-[#C0E837]">BEHIND YOUR</span> <br />
              VISION
            </h2>
          </div>

          <div className="lg:col-span-6 flex flex-col gap-6">
            <p className="text-sm text-[#9E9E9E] leading-relaxed font-body">
              FiFusion is committed to helping you reach your highest fitness and wellness goals with elite athletic coaching, personalized workout programs, and clinical recovery guidance.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#121216] p-6 rounded-2xl border border-white/10">
                <h4 className="text-[#C0E837] text-xs font-bold uppercase tracking-wider mb-2 font-mono">
                  OUR VISION
                </h4>
                <p className="text-xs text-[#9E9E9E] leading-relaxed">
                  Empowering everyone to embrace strength, health, and a fulfilling lifestyle through science-backed fitness and wellness.
                </p>
              </div>

              <div className="bg-[#121216] p-6 rounded-2xl border border-white/10">
                <h4 className="text-[#C0E837] text-xs font-bold uppercase tracking-wider mb-2 font-mono">
                  OUR MISSION
                </h4>
                <p className="text-xs text-[#9E9E9E] leading-relaxed">
                  Empowering individuals with high-performance solutions that forge unbreakable discipline and strong, lasting habits.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Cinematic Heavy Deadlift Video Player Banner */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          onClick={onWatchVideo}
          className="relative h-[380px] sm:h-[480px] rounded-3xl overflow-hidden cursor-pointer border border-white/10 group shadow-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1600&auto=format&fit=crop"
            alt="Barbell Deadlift Video Preview"
            className="w-full h-full object-cover filter contrast-125 brightness-90 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08080A] via-black/40 to-transparent" />

          {/* Centered Play Video Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white font-semibold text-sm group-hover:bg-[#C0E837] group-hover:text-[#08080A] group-hover:border-[#C0E837] transition-all duration-300 shadow-2xl">
              <span>Play Video</span>
              <div className="w-8 h-8 rounded-full bg-[#C0E837] group-hover:bg-[#08080A] text-[#08080A] group-hover:text-[#C0E837] flex items-center justify-center transition-colors">
                <Play className="w-4 h-4 fill-current ml-0.5" />
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
