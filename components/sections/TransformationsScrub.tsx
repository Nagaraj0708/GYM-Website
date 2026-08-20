"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const TRANSFORMATIONS = [
  {
    name: "Marcus Vance",
    role: "Tech Founder",
    program: "12-WEEK HYPER-STRENGTH",
    stat: "-24 LBS FAT / +14 LBS MUSCLE",
    quote: "FiFusion's spin and strength combo transformed not just my physique, but my daily executive energy. The biometric tracking keeps me accountable every single day.",
    afterImg: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
    timeframe: "12 WEEKS",
  },
  {
    name: "Elena Rostova",
    role: "Marathon Runner",
    program: "METABOLIC HIIT & RECOVERY",
    stat: "VO2 MAX INCREASED 18%",
    quote: "The contrast recovery plunges and hyperbaric sauna reduced my muscle soreness by half. I shaved 14 minutes off my personal marathon record!",
    afterImg: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop",
    timeframe: "16 WEEKS",
  },
  {
    name: "David Chen",
    role: "Venture Partner",
    program: "VIP 1-ON-1 ATHLETE COACHING",
    stat: "DEADLIFT: 225LBS → 455LBS",
    quote: "The facility is pure luxury. No waiting for equipment, high-octane atmosphere, and trainers who understand elite performance mechanics.",
    afterImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    timeframe: "24 WEEKS",
  },
];

export default function TransformationsScrub() {
  return (
    <section id="transformations" className="py-24 bg-[#08080A] relative overflow-hidden border-y border-white/10">
      {/* Background Glow */}
      <div className="absolute right-0 top-1/3 w-[500px] h-[500px] bg-[radial-gradient(circle_at_100%_50%,rgba(192,232,55,0.08),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono text-[#C0E837] tracking-widest uppercase">// PROVEN RESULTS</span>
            <h2 className="font-display text-4xl sm:text-6xl italic uppercase text-white mt-2">
              REAL MEMBER <span className="text-[#C0E837]">TRANSFORMATIONS.</span>
            </h2>
          </div>
          <p className="text-[#9E9E9E] text-sm max-w-md font-body">
            Consistent athletic effort powered by scientific programming produces extraordinary results.
          </p>
        </div>

        {/* Member Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TRANSFORMATIONS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              className="glass-card rounded-3xl p-6 border border-white/10 hover:border-[#C0E837]/40 flex flex-col justify-between"
            >
              <div>
                {/* Images Comparison Frame */}
                <div className="relative h-64 rounded-2xl overflow-hidden mb-6 border border-white/10 bg-[#121216]">
                  <img
                    src={item.afterImg}
                    alt={item.name}
                    className="w-full h-full object-cover brightness-90 hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08080A] via-transparent to-transparent" />
                  
                  {/* Result Stat Badge */}
                  <div className="absolute top-3 left-3 bg-[#C0E837] text-[#08080A] font-display text-xs italic font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                    {item.stat}
                  </div>

                  {/* Timeframe Tag */}
                  <div className="absolute bottom-3 right-3 bg-[#121216]/90 text-white text-[10px] font-mono px-2.5 py-1 rounded border border-white/20">
                    {item.timeframe}
                  </div>
                </div>

                {/* Member Info */}
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display text-2xl italic text-white">{item.name}</h3>
                  <span className="text-xs text-[#9E9E9E] font-medium">{item.role}</span>
                </div>

                <span className="text-[11px] font-mono text-[#C0E837] tracking-wider uppercase block mb-4">
                  {item.program}
                </span>

                <div className="relative bg-[#121216]/60 p-4 rounded-xl border border-white/5 mb-6">
                  <Quote className="w-4 h-4 text-[#C0E837] mb-2 opacity-60" />
                  <p className="text-xs text-[#9E9E9E] italic leading-relaxed">
                    "{item.quote}"
                  </p>
                </div>
              </div>

              {/* Verified Star Badge */}
              <div className="flex items-center justify-between pt-4 border-t border-white/5 text-xs text-[#9E9E9E]">
                <span className="flex items-center gap-1 text-[#C0E837]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C0E837]" />
                  ))}
                </span>
                <span>VERIFIED FIFUSION ATHLETE</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
