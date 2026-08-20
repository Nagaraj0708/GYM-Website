"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const REVIEWS = [
  {
    id: 1,
    name: "Alexandre Mercier",
    title: "Executive VP & Triathlete",
    quote: "FiFusion is hands down the best fitness facility I have ever stepped into. The spin studio feels like a concert hall, and the contrast plunges keep me injury-free.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    discipline: "SPIN & RECOVERY",
  },
  {
    id: 2,
    name: "Samantha Sterling",
    title: "Creative Director",
    quote: "I was skeptical about high-intensity fitness until I tried FiFusion's 1-on-1 coaching. The attention to movement mechanics and heart-rate zones completely redefined my energy levels.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop",
    discipline: "HIIT & COACHING",
  },
  {
    id: 3,
    name: "Dr. Jonathan Reyes",
    title: "Orthopedic Surgeon",
    quote: "As a physician, I evaluate fitness equipment strictly by evidence. FiFusion's velocity sensors and cryotherapy protocols are clinical-grade. Highest recommendation.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    discipline: "HYPER-STRENGTH",
  },
];

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % REVIEWS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % REVIEWS.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-[#08080A] relative border-t border-white/10 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-12">
          <span className="text-xs font-mono text-[#C0E837] tracking-widest uppercase">// MEMBER VOICES</span>
          <h2 className="font-display text-4xl sm:text-5xl italic uppercase text-white mt-2">
            REVIEWS <span className="text-[#C0E837]">FROM YOU</span>
          </h2>
        </div>

        {/* Carousel Window */}
        <div className="relative glass-card rounded-3xl p-8 sm:p-12 border border-white/10 lime-border-glow">
          <Quote className="absolute top-6 left-6 w-12 h-12 text-[#C0E837]/20 pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center"
            >
              {/* Star Rating */}
              <div className="flex items-center gap-1 text-[#C0E837] mb-6">
                {[...Array(REVIEWS[current].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#C0E837]" />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-base sm:text-xl text-white font-body italic leading-relaxed max-w-3xl mb-8">
                "{REVIEWS[current].quote}"
              </p>

              {/* Avatar & Author Info */}
              <div className="flex items-center gap-4">
                <img
                  src={REVIEWS[current].avatar}
                  alt={REVIEWS[current].name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#C0E837]"
                />
                <div className="text-left">
                  <h4 className="font-display text-2xl italic text-white">
                    {REVIEWS[current].name}
                  </h4>
                  <p className="text-xs text-[#9E9E9E] font-mono">
                    {REVIEWS[current].title} // <span className="text-[#C0E837]">{REVIEWS[current].discipline}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Arrows */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
            <div className="flex items-center gap-2">
              {REVIEWS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    current === i ? "bg-[#C0E837] w-8" : "bg-white/20"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="p-2.5 rounded-full bg-[#121216] border border-white/10 text-white hover:text-[#C0E837] hover:border-[#C0E837] transition-all"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-2.5 rounded-full bg-[#121216] border border-white/10 text-white hover:text-[#C0E837] hover:border-[#C0E837] transition-all"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
