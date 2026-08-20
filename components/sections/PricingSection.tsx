"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

interface PricingSectionProps {
  onSelectTier: (tierName: string) => void;
}

const TIERS = [
  {
    name: "ONE DAY PASS",
    price: "$15",
    period: "/Per Day",
    desc: "Whether you're visiting or wanting to test out our facility.",
    features: ["Biometric Arena Access", "1 Spin Class Pass", "Locker & Sauna Access"],
    featured: false,
  },
  {
    name: "MONTHLY PASS",
    price: "$90",
    period: "/Per Month",
    desc: "Our monthly pass keeps you on track without long-term commitment.",
    features: ["Unlimited 24/7 Access", "All Spin & HIIT Classes", "Contrast Cryo Plunges", "Telemetry App Sync"],
    featured: true,
  },
  {
    name: "YEARLY PASS",
    price: "$59",
    period: "/Per Month",
    desc: "Commit to a year and get 24/7 unlimited access at our lowest rate.",
    features: ["VIP Priority Booking", "1-on-1 Quarterly Audit", "Unlimited Plunges & Sauna", "2 Guest Passes / Month"],
    featured: false,
  },
];

export default function PricingSection({ onSelectTier }: PricingSectionProps) {
  return (
    <section id="pricing" className="py-24 bg-[#08080A] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sleek Dark Luxury Card Container */}
        <div className="bg-[#121216] rounded-3xl p-8 sm:p-14 border border-white/10 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Cyber Lime Radial Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_100%_0%,rgba(192,232,55,0.08),transparent)] pointer-events-none" />

          {/* Section Header */}
          <div className="flex flex-wrap items-center justify-between gap-6 mb-14 border-b border-white/10 pb-8">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#C0E837] block mb-2">
                PRICING PLAN
              </span>
              <h2 className="font-display text-4xl sm:text-6xl italic uppercase text-white tracking-tight">
                JOIN <span className="text-[#C0E837]">TODAY</span>
              </h2>
            </div>

            <div className="px-5 py-2 rounded-full bg-[#08080A] border border-[#C0E837]/40 text-[#C0E837] text-xs font-bold font-mono">
              Personal Training & 24/7 Access
            </div>
          </div>

          {/* 3 Tier Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TIERS.map((tier, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8 }}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative overflow-hidden ${
                  tier.featured
                    ? "bg-[#1A1A22] border-2 border-[#C0E837] shadow-[0_0_30px_rgba(192,232,55,0.2)] md:-translate-y-2"
                    : "bg-[#08080A] border border-white/10 hover:border-white/20"
                }`}
              >
                {/* Popular Pill Badge */}
                {tier.featured && (
                  <div className="absolute top-0 right-0 bg-[#C0E837] text-[#08080A] text-[10px] font-mono font-extrabold uppercase px-4 py-1 rounded-bl-xl tracking-wider">
                    MOST POPULAR
                  </div>
                )}

                <div>
                  {/* Tier Name */}
                  <h3 className="font-display text-2xl uppercase italic font-bold text-white mb-4 tracking-wide">
                    {tier.name}
                  </h3>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="font-display text-5xl sm:text-6xl font-extrabold italic text-white">
                      {tier.price}
                    </span>
                    <span className="text-xs font-mono text-[#9E9E9E]">
                      {tier.period}
                    </span>
                  </div>

                  <p className="text-xs text-[#9E9E9E] leading-relaxed mb-6 font-body">
                    {tier.desc}
                  </p>

                  {/* Feature Checklist */}
                  <ul className="flex flex-col gap-2.5 mb-8 border-t border-white/10 pt-6">
                    {tier.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2.5 text-xs text-white">
                        <div className="w-4 h-4 rounded-full bg-[#C0E837]/20 border border-[#C0E837] flex items-center justify-center text-[#C0E837] flex-shrink-0">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => onSelectTier(tier.name)}
                  className={`w-full py-3.5 rounded-full font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                    tier.featured
                      ? "bg-[#C0E837] text-[#08080A] hover:bg-[#D4E157] shadow-[0_0_20px_rgba(192,232,55,0.5)]"
                      : "bg-[#121216] text-white border border-white/20 hover:border-[#C0E837] hover:text-[#C0E837]"
                  }`}
                >
                  <span>Order Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
