"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Flame, Target, Sparkles, CheckCircle2 } from "lucide-react";

const PHILOSOPHY_STEPS = [
  {
    id: "01",
    title: "BIOMETRIC PRECISION TRAINING",
    description:
      "We replace guesswork with hard athletic data. Every workout at Reboot is calibrated using continuous heart-rate zone tracking, velocity-based strength sensors, and individual metabolic baselines.",
    points: ["Heart-Rate Zone Monitoring", "Velocity-Based Strength Sensors", "Custom Metabolic Profiling"],
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1000&auto=format&fit=crop",
    badge: "SCIENTIFIC RIGOR",
  },
  {
    id: "02",
    title: "HIGH-OCTANE COMMUNITY MOMENTUM",
    description:
      "Iron sharpens iron. Surround yourself with high-achieving athletes, professionals, and fitness enthusiasts who push past excuses. Our spin studios and HIIT arenas pulsate with live DJ acoustics and immersive lighting.",
    points: ["Live DJ Acoustics & Lighting", "Competitive Leaderboards", "Team-Based Conditioning"],
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1000&auto=format&fit=crop",
    badge: "UNMATCHED ENERGY",
  },
  {
    id: "03",
    title: "HYPER-RECOVERY PROTOCOLS",
    description:
      "Transformation happens during recovery. Access contrast therapy plunges, infrared saunas, hyperbaric oxygen chambers, and compression therapy to rebuild muscles faster and train harder every single day.",
    points: ["Infrared Sauna & Contrast Plunges", "Pneumatic Compression Therapy", "Nutritional Recovery Bar"],
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1000&auto=format&fit=crop",
    badge: "FULL-BODY RESET",
  },
];

export default function AboutPhilosophy() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="philosophy" className="py-24 bg-[#0A0A0B] relative overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-radial from-[#F7A600]/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#141417] border border-[#F7A600]/30 text-xs font-mono text-[#F7A600] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE REBOOT METHODOLOGY</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl italic uppercase text-[#F5F5F5]">
            ENGINEERED FOR <span className="gradient-orange-text">PEAK HUMAN PERFORMANCE.</span>
          </h2>
          <p className="text-[#9A9A9E] text-base mt-4 font-body">
            We combined high-performance sports science, elite gym equipment, and luxury hospitality to craft an unmatched lifestyle experience.
          </p>
        </div>

        {/* Interactive Sticky Scroll Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Tabs */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {PHILOSOPHY_STEPS.map((step, index) => (
              <motion.div
                key={step.id}
                onClick={() => setActiveStep(index)}
                whileHover={{ scale: 1.01 }}
                className={`p-6 rounded-2xl transition-all duration-300 cursor-pointer ${
                  activeStep === index
                    ? "bg-[#141417] border-2 border-[#F7A600] shadow-[0_0_30px_rgba(247,166,0,0.15)]"
                    : "bg-[#141417]/50 border border-white/5 opacity-70 hover:opacity-100"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-display text-2xl italic text-[#F7A600]">{step.id}</span>
                  <span className="text-[10px] font-bold tracking-widest px-2.5 py-0.5 rounded bg-[#1F1F24] text-[#F5F5F5]">
                    {step.badge}
                  </span>
                </div>
                <h3 className="font-display text-2xl italic text-[#F5F5F5] mb-2">{step.title}</h3>
                <p className="text-xs sm:text-sm text-[#9A9A9E] leading-relaxed mb-4">{step.description}</p>
                <div className="flex flex-wrap gap-2">
                  {step.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-1.5 text-xs text-[#F5F5F5]/90">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#F7A600]" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Visual Image Frame */}
          <div className="lg:col-span-6 relative h-[450px] sm:h-[550px] rounded-3xl overflow-hidden border border-white/10 glass-card">
            {PHILOSOPHY_STEPS.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{
                  opacity: activeStep === index ? 1 : 0,
                  scale: activeStep === index ? 1 : 1.05,
                }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0"
              >
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover brightness-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-xs font-mono text-[#F7A600] uppercase tracking-widest">
                    // FEATURED PROTOCOL
                  </span>
                  <h4 className="font-display text-3xl italic text-white mt-1">{step.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
