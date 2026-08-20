"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";

const FAQS = [
  {
    q: "WHAT IS INCLUDED IN THE 3-DAY FREE TRIAL PASS?",
    a: "Your free trial pass includes 100% full access to all FiFusion gym zones: the Biometric Strength Arena, 1 Spin Class Pass, 1 Contrast Cold Plunge session, and full app access for real-time heart rate telemetry monitoring.",
  },
  {
    q: "DO I NEED TO BRING MY OWN HEART-RATE MONITOR FOR SPIN OR HIIT?",
    a: "No! We provide complimentary Bluetooth chest straps and wrist telemetry bands upon check-in at the studio reception. You can also pair your own Apple Watch, Garmin, or Polar device.",
  },
  {
    q: "WHAT ARE THE STUDIO OPERATING HOURS?",
    a: "FiFusion operates 24 HOURS A DAY, 7 DAYS A WEEK for all active members. Staffed coaching hours are 5:00 AM – 11:00 PM daily.",
  },
  {
    q: "ARE THERE ANY LONG-TERM CONTRACTS OR CANCELLATION FEES?",
    a: "Zero contracts! All memberships are 100% month-to-month. You can freeze or cancel your subscription at any time with a 7-day advance notice via our member mobile portal.",
  },
  {
    q: "HOW DOES CONTRAST THERAPY (COLD PLUNGE & SAUNA) HELP RECOVERY?",
    a: "Alternating between 180°F cedar saunas and 45°F cold plunges triggers intense vasodilation and vasoconstriction. This flushes metabolic waste, accelerates soft-tissue repair, and elevates dopamine levels by up to 250%.",
  },
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-[#08080A] relative border-t border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#121216] border border-[#C0E837]/30 text-xs font-mono text-[#C0E837] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>GOT QUESTIONS? WE HAVE ANSWERS.</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl italic uppercase text-white">
            FREQUENTLY ASKED <span className="text-[#C0E837]">QUESTIONS.</span>
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col gap-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-[#121216] border-[#C0E837]/50 shadow-[0_0_20px_rgba(192,232,55,0.1)]"
                    : "bg-[#121216]/40 border-white/5 hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-display text-lg sm:text-xl italic text-white uppercase">
                    {faq.q}
                  </span>
                  <div
                    className={`p-2 rounded-full transition-transform duration-300 ${
                      isOpen ? "bg-[#C0E837] text-[#08080A] rotate-180" : "bg-[#1C1C22] text-[#9E9E9E]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-xs sm:text-sm text-[#9E9E9E] font-body leading-relaxed border-t border-white/5 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
