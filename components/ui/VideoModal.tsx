"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Dumbbell, Sparkles } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoModal({ isOpen, onClose }: VideoModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#08080A]/95 backdrop-blur-xl"
          />

          {/* Video Container Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl rounded-3xl overflow-hidden border border-[#C0E837]/40 bg-[#0C0C10] aspect-video shadow-[0_0_80px_rgba(192,232,55,0.25)] z-10 flex flex-col"
          >
            {/* Modal Header Bar */}
            <div className="absolute top-0 left-0 right-0 z-30 p-4 sm:p-6 bg-gradient-to-b from-[#08080A]/90 via-[#08080A]/40 to-transparent flex items-center justify-between pointer-events-none">
              <div className="flex items-center gap-3 pointer-events-auto">
                <div className="w-8 h-8 rounded-lg bg-[#C0E837] text-[#08080A] flex items-center justify-center font-extrabold shadow-[0_0_15px_rgba(192,232,55,0.6)]">
                  <Dumbbell className="w-4 h-4 fill-[#08080A]" />
                </div>
                <div>
                  <span className="font-display text-lg font-bold tracking-tight text-white block">
                    Fi<span className="text-[#C0E837]">Fusion</span> CINEMATIC REEL
                  </span>
                  <span className="text-[10px] font-mono text-[#9E9E9E] flex items-center gap-1.5 uppercase">
                    <Sparkles className="w-3 h-3 text-[#C0E837]" />
                    HIGH-OCTANE ATHLETIC ARENA DEMO
                  </span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="pointer-events-auto p-2.5 rounded-full bg-[#16161E]/90 border border-white/20 text-white hover:text-[#C0E837] hover:border-[#C0E837] transition-all shadow-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* High-Energy Gym Trailer Video Embed */}
            <div className="w-full h-full pt-12 sm:pt-0">
              <iframe
                src="https://www.youtube-nocookie.com/embed/eaRQF-7hhmo?autoplay=1&mute=0&controls=1&rel=0&modestbranding=1"
                title="FiFusion Studio High-Octane Gym Experience"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
