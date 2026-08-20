"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck, Dumbbell, Zap, HeartPulse, Clock, ArrowRight } from "lucide-react";

interface WhyChooseUsSectionProps {
  onBookTrial: () => void;
}

const FEATURES_LEFT = [
  {
    icon: Award,
    title: "Certified Trainers",
    desc: "Certified experts guiding your fitness transformation every step.",
  },
  {
    icon: Dumbbell,
    title: "Pro Pass Equipment",
    desc: "Equipped with state-of-the-art Eleiko platforms & biometric sensors.",
  },
  {
    icon: Zap,
    title: "Custom Solutions",
    desc: "Tailored workout, lifestyle, and nutrition profiling.",
  },
];

const FEATURES_RIGHT = [
  {
    icon: ShieldCheck,
    title: "Authentic Results",
    desc: "Join hundreds of athletes who achieved peak conditioning.",
  },
  {
    icon: HeartPulse,
    title: "Health & Recovery",
    desc: "Sub-zero plunges, saunas, and hyperbaric oxygen therapy.",
  },
  {
    icon: Clock,
    title: "Convenient Hours",
    desc: "Train 24/7 with seamless biometric access controls.",
  },
];

export default function WhyChooseUsSection({ onBookTrial }: WhyChooseUsSectionProps) {
  return (
    <section className="py-24 bg-[#08080A] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <span className="inline-block px-3.5 py-1 rounded-full bg-[#C0E837]/15 text-[#C0E837] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#C0E837]/30">
          Why Choose Us
        </span>
        <h2 className="font-display text-4xl sm:text-6xl italic uppercase text-white">
          WHY WE'RE THE <span className="text-[#C0E837]">RIGHT CHOICE</span> FOR YOU
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left 3 Features */}
        <div className="lg:col-span-4 flex flex-col gap-8">
          {FEATURES_LEFT.map((feat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ x: -5 }}
              className="bg-[#121216] p-5 rounded-2xl border border-white/10 flex items-start gap-4 text-left hover:border-[#C0E837]/40 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-[#C0E837]/15 border border-[#C0E837]/40 flex items-center justify-center flex-shrink-0 text-[#C0E837]">
                <feat.icon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm mb-1">{feat.title}</h4>
                <p className="text-xs text-[#9E9E9E] leading-relaxed">{feat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Center Athlete Image Feature */}
        <div className="lg:col-span-4 flex flex-col items-center justify-center">
          <div className="relative w-full max-w-sm h-[420px] rounded-3xl overflow-hidden border border-white/15 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop"
              alt="Heavy Dumbbell Athlete"
              className="w-full h-full object-cover filter contrast-110 brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#08080A] via-transparent to-transparent opacity-70" />
          </div>

          <button
            onClick={onBookTrial}
            className="mt-8 inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#C0E837] hover:bg-[#D4E157] text-[#08080A] text-xs font-extrabold uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(192,232,55,0.4)] hover:scale-105"
          >
            <span>Start your free trial</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Right 3 Features */}
        <div className="lg:col-span-4 flex flex-col gap-8">
          {FEATURES_RIGHT.map((feat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ x: 5 }}
              className="bg-[#121216] p-5 rounded-2xl border border-white/10 flex items-start gap-4 text-left hover:border-[#C0E837]/40 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-[#C0E837]/15 border border-[#C0E837]/40 flex items-center justify-center flex-shrink-0 text-[#C0E837]">
                <feat.icon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm mb-1">{feat.title}</h4>
                <p className="text-xs text-[#9E9E9E] leading-relaxed">{feat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
