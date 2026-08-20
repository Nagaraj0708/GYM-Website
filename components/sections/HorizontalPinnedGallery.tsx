"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Sparkles, Zap } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const PANELS = [
  {
    id: "01",
    subtitle: "// HIGH-OCTANE ARENA",
    title: "SPIN & CYCLING SYNAPSE",
    tag: "LIVE DJ ACOUSTICS",
    desc: "40 custom Stage-3 indoor bikes synchronized to 5,000-watt acoustic bass drivers and pulse-responsive lighting grids.",
    stats: [
      { label: "MAX RPM", val: "140+" },
      { label: "CALORIC EPOC", val: "900+ KCAL" },
      { label: "AUDIO WATTAGE", val: "5.0 KW" },
    ],
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop",
    accent: "#C0E837",
  },
  {
    id: "02",
    subtitle: "// ELEIKO HEAVY IRON",
    title: "BIOMETRIC STRENGTH RIGS",
    tag: "VELOCITY SENSORS",
    desc: "Zero waiting. 12 Eleiko competition squat platforms equipped with barbell acceleration & bar-path sensors.",
    stats: [
      { label: "DUMBBELL MAX", val: "150 LBS" },
      { label: "RIGS AVAILABLE", val: "12 PLATFORMS" },
      { label: "ACCURACY", val: "99.4%" },
    ],
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1200&auto=format&fit=crop",
    accent: "#C0E837",
  },
  {
    id: "03",
    subtitle: "// CLINICAL HYPER-RECOVERY",
    title: "CONTRAST PLUNGE & SAUNA",
    tag: "BIO-HACKING LAB",
    desc: "Sub-zero cryotherapy at -110°C, dual 45°F water plunges, and 180°F cedar saunas to cut muscle inflammation by 65%.",
    stats: [
      { label: "COLD PLUNGE", val: "45°F" },
      { label: "CRYO TEMP", val: "-110°C" },
      { label: "RECOVERY RATE", val: "2X FASTER" },
    ],
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1200&auto=format&fit=crop",
    accent: "#C0E837",
  },
  {
    id: "04",
    subtitle: "// METABOLIC TELEMETRY",
    title: "LIVE BIOMETRIC HUD",
    tag: "ZONE MONITORING",
    desc: "Continuous heart-rate telemetry projected live across arena screens. Track lactate threshold, VO2 max, and recovery.",
    stats: [
      { label: "TARGET ZONE", val: "ZONE 4 / 5" },
      { label: "SENSOR REFRESH", val: "100MS" },
      { label: "APP SYNC", val: "INSTANT" },
    ],
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop",
    accent: "#C0E837",
  },
  {
    id: "05",
    subtitle: "// THE HALL OF CHAMPIONS",
    title: "MEMBER ATHLETE REVOLUTION",
    tag: "PROVEN RESULTS",
    desc: "Join over 2,400 active FiFusion athletes achieving unprecedented strength, stamina, and body composition milestones.",
    stats: [
      { label: "ATHLETES", val: "2,400+" },
      { label: "SUCCESS RATE", val: "98.7%" },
      { label: "RATING", val: "4.99 / 5" },
    ],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
    accent: "#C0E837",
  },
];

interface HorizontalPinnedGalleryProps {
  onBookPass?: () => void;
}

export default function HorizontalPinnedGallery({ onBookPass }: HorizontalPinnedGalleryProps) {
  const triggerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [currentIdx, setCurrentIdx] = useState(1);

  useEffect(() => {
    const triggerEl = triggerRef.current;
    const containerEl = containerRef.current;

    if (!triggerEl || !containerEl) return;

    const ctx = gsap.context(() => {
      const getScrollAmount = () => containerEl.scrollWidth - window.innerWidth + 100;

      gsap.to(containerEl, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: triggerEl,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          scrub: 0.8,
          start: "top top",
          end: () => `+=${getScrollAmount()}`,
          onUpdate: (self) => {
            const p = self.progress;
            setProgress(p);
            const idx = Math.min(Math.floor(p * PANELS.length) + 1, PANELS.length);
            setCurrentIdx(idx);
          },
          invalidateOnRefresh: true,
        },
      });

      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 500);
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={triggerRef}
      id="horizontal-experience"
      className="relative bg-[#08080A] overflow-hidden min-h-screen flex flex-col justify-between py-12 border-y border-white/10 z-20"
    >
      {/* Top Experience Header Bar */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between z-20 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-[#121216] border border-[#C0E837]/40 text-[#C0E837] animate-pulse">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] font-mono text-[#C0E837] tracking-widest uppercase block">
              // PINNED HORIZONTAL SHOWCASE
            </span>
            <h3 className="font-display text-2xl sm:text-3xl italic text-white uppercase">
              FIFUSION <span className="text-[#C0E837]">FACILITY HUDS.</span>
            </h3>
          </div>
        </div>

        {/* Numeric Slide Counter */}
        <div className="hidden sm:flex items-center gap-4">
          <span className="font-display text-4xl italic text-[#C0E837]">
            0{currentIdx} <span className="text-white/30 text-xl font-normal">/ 0{PANELS.length}</span>
          </span>
          <div className="w-32 h-1.5 bg-[#121216] rounded-full overflow-hidden border border-white/10">
            <div
              className="h-full bg-[#C0E837] transition-all duration-150"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Horizontally Pinned Sliding Container */}
      <div className="w-full overflow-hidden flex items-center flex-1">
        <div
          ref={containerRef}
          className="flex gap-8 px-4 sm:px-8 lg:px-16 w-max items-center h-full"
        >
          {PANELS.map((panel) => (
            <div
              key={panel.id}
              className="w-[85vw] sm:w-[70vw] lg:w-[55vw] max-w-[900px] h-[520px] sm:h-[580px] rounded-3xl overflow-hidden glass-card p-6 sm:p-10 border-2 border-white/15 hover:border-[#C0E837] transition-all duration-500 relative flex flex-col justify-between group shadow-2xl flex-shrink-0"
            >
              {/* Image Backdrop */}
              <div className="absolute inset-0 z-0 overflow-hidden bg-[#08080A]">
                <img
                  src={panel.image}
                  alt={panel.title}
                  className="w-full h-full object-cover brightness-75 opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08080A] via-[#08080A]/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#08080A]/80 via-transparent to-transparent" />
              </div>

              {/* Card Header Tag */}
              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-[#C0E837] tracking-widest block">
                    {panel.subtitle}
                  </span>
                  <span className="inline-block mt-1 px-3 py-0.5 rounded-full text-[10px] font-extrabold tracking-widest bg-[#121216]/90 text-white border border-white/20">
                    {panel.tag}
                  </span>
                </div>
                <span className="font-display text-5xl italic text-white/30 group-hover:text-[#C0E837] transition-colors">
                  {panel.id}
                </span>
              </div>

              {/* Card Main Specs & Title */}
              <div className="relative z-10 my-auto">
                <h3 className="font-display text-3xl sm:text-5xl italic text-white group-hover:text-[#C0E837] transition-colors mb-3 uppercase leading-none">
                  {panel.title}
                </h3>
                <p className="text-xs sm:text-base text-[#D4D4D8] leading-relaxed max-w-xl font-body mb-6 drop-shadow-md">
                  {panel.desc}
                </p>

                {/* Stats Matrix Grid */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4 p-4 rounded-2xl bg-[#08080A]/90 border border-white/15 backdrop-blur-xl max-w-lg shadow-xl">
                  {panel.stats.map((st, sIdx) => (
                    <div key={sIdx} className="flex flex-col">
                      <span className="text-[9px] font-mono text-[#9E9E9E] tracking-wider uppercase">
                        {st.label}
                      </span>
                      <span className="font-display text-lg sm:text-2xl italic text-[#C0E837]">
                        {st.val}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Bar */}
              <div className="relative z-10 flex items-center justify-between pt-4 border-t border-white/15">
                <span className="text-[11px] font-mono text-white/80 uppercase">
                  FIFUSION STUDIO // ARENA {panel.id}
                </span>
                <button
                  onClick={onBookPass}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#C0E837] hover:text-white uppercase tracking-wider transition-colors"
                >
                  <span>RESERVE SESSION</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Hint */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 text-center text-xs font-mono text-[#9E9E9E] mt-4 flex items-center justify-center gap-2 z-20">
        <Zap className="w-3.5 h-3.5 text-[#C0E837] animate-bounce" />
        <span>SCROLL DOWN TO TRAVERSE FACILITY ARENAS // DRAG & SWIPE MOBILE</span>
      </div>
    </section>
  );
}
