"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ProgramsGridProps {
  onSelectProgram: (programName: string) => void;
}

const CLASSES = [
  {
    title: "Personal Training",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop",
    category: "1-ON-1 COACHING",
  },
  {
    title: "Outdoor Classes",
    img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop",
    category: "HYPER STRENGTH",
  },
  {
    title: "Digital Coaching",
    img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop",
    category: "BIOMETRIC TRACKING",
  },
  {
    title: "Group Training",
    img: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800&auto=format&fit=crop",
    category: "HIGH-OCTANE SPIN",
  },
];

export default function ProgramsGrid({ onSelectProgram }: ProgramsGridProps) {
  return (
    <section id="programs" className="py-24 bg-[#08080A] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#C0E837] block mb-2">
            CLASSES DESIGNED
          </span>
          <h2 className="font-display text-5xl sm:text-7xl italic uppercase text-white tracking-tight">
            FOR <span className="text-[#C0E837]">YOU</span>
          </h2>
        </div>

        {/* 4 Cards Grid matching MURA Screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CLASSES.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              onClick={() => onSelectProgram(item.title)}
              className="bg-[#121216] rounded-3xl p-4 border border-white/10 hover:border-[#C0E837] transition-all duration-300 cursor-pointer group flex flex-col justify-between shadow-xl"
            >
              {/* Image Frame */}
              <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden mb-4 border border-white/5">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121216] via-transparent to-transparent opacity-60" />
              </div>

              {/* Title & Arrow Button */}
              <div className="flex items-center justify-between pt-2">
                <div>
                  <span className="text-[10px] font-mono text-[#9E9E9E] uppercase tracking-wider block">
                    {item.category}
                  </span>
                  <h3 className="text-white font-bold text-base group-hover:text-[#C0E837] transition-colors">
                    {item.title}
                  </h3>
                </div>

                <div className="w-10 h-10 rounded-full bg-[#C0E837] text-[#08080A] flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(192,232,55,0.4)]">
                  <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
