"use client";

import { motion } from "framer-motion";
import { Award, Zap, Flame, Trophy, ArrowUpRight, Sparkles } from "lucide-react";
import { InstagramIcon, LinkedinIcon, TwitterIcon } from "../ui/SocialIcons";

const TRAINERS = [
  {
    name: "Viktor Vance",
    role: "HEAD OF ATHLETIC CONDITIONING",
    specialty: "Olympic Weightlifting & Velocity Training",
    certifications: "CSCS · USAW Level 2",
    stats: "1,400+ Athletes Coached",
    tagline: "Maximum Power & Biomechanical Perfection",
    bio: "12+ years coaching Olympic lifters and collegiate athletes. Specializes in maximum power output and speed velocity optimization.",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=800&auto=format&fit=crop",
    socials: { instagram: "#", twitter: "#", linkedin: "#" },
  },
  {
    name: "Maya Lin",
    role: "DIRECTOR OF SPIN & METABOLICS",
    specialty: "High-Cadence Cycle & HIIT Programming",
    certifications: "NASM CPT · Schwinn Master",
    stats: "99.8% Athlete Satisfaction",
    tagline: "Relentless Cadence & Beat-Matched Energy",
    bio: "Former competitive track cyclist turned master instructor. High-octane energy, acoustics, and relentless cardiovascular drive.",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800&auto=format&fit=crop",
    socials: { instagram: "#", twitter: "#", linkedin: "#" },
  },
  {
    name: "Darius Thorne",
    role: "HYPER-RECOVERY & MOBILITY LEAD",
    specialty: "Contrast Therapy & Fascial Release",
    certifications: "DPT · FRC Mobility Spec",
    stats: "Doctor of Physical Therapy",
    tagline: "Soft-Tissue Regeneration & Longevity",
    bio: "Doctor of Physical Therapy specializing in athletic longevity, soft-tissue regeneration, and contrast temperature recovery.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop",
    socials: { instagram: "#", twitter: "#", linkedin: "#" },
  },
  {
    name: "Seraphina Cruz",
    role: "NUTRITION & METABOLIC COACH",
    specialty: "Body Composition & Macro Metrics",
    certifications: "CISSN Specialist · RD",
    stats: "Custom Biometric Protocols",
    tagline: "Precision Fueling for Fat Oxidation",
    bio: "Pioneers custom nutritional macro protocols tailored to real-time workout telemetry for maximal fat oxidation & lean muscle.",
    image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=800&auto=format&fit=crop",
    socials: { instagram: "#", twitter: "#", linkedin: "#" },
  },
];

export default function TrainersSection() {
  return (
    <section id="trainers" className="py-20 sm:py-32 bg-[#08080A] relative border-t border-white/10 overflow-hidden">
      
      {/* Background Kinetic Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#C0E837]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Massive Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181822] border border-[#C0E837]/30 text-xs font-mono text-[#C0E837] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ELITE ATHLETE FACULTY</span>
            </div>
            <h2 className="font-display text-4xl sm:text-7xl italic uppercase text-white mt-1 tracking-tight leading-none">
              MASTER ATHLETIC <span className="text-[#C0E837]">FACULTY.</span>
            </h2>
          </div>
          <p className="text-[#9E9E9E] text-xs sm:text-sm max-w-md font-body leading-relaxed">
            Train alongside world-class coaches with proven track records in professional athletics, biomechanics, and elite sports medicine.
          </p>
        </div>

        {/* Mobile-Optimized Athletic Trainer Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {TRAINERS.map((trainer, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.06 }}
              whileHover={{ y: -8, scale: 1.03, transition: { type: "spring", stiffness: 450, damping: 25 } }}
              whileTap={{ scale: 0.98 }}
              className="glass-card rounded-3xl p-4 sm:p-5 border border-white/15 sm:border-white/10 hover:border-[#C0E837] active:border-[#C0E837] hover:shadow-[0_0_35px_rgba(192,232,55,0.35)] transition-colors duration-150 group flex flex-col justify-between relative bg-[#0C0C10]/90 backdrop-blur-xl overflow-hidden cursor-pointer"
              data-cursor="COACH"
            >
              {/* Top Accent Line (Always visible on mobile, hover on desktop) */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C0E837] to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-150" />

              <div>
                {/* Responsive Photo Frame */}
                <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden mb-4 sm:mb-5 border border-white/10 bg-[#121216]">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover brightness-95 sm:brightness-90 group-hover:brightness-105 group-hover:scale-110 transition-transform duration-200 ease-out will-change-transform filter"
                  />
                  
                  {/* Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08080A] via-[#08080A]/20 to-transparent opacity-85 sm:opacity-90 sm:group-hover:opacity-60 transition-opacity duration-150" />
                  
                  {/* Neon Cyber Glow Radial Sweep */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#C0E837]/25 via-transparent to-black/80 opacity-60 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-150" />

                  {/* Certifications Badge - Top Left */}
                  <div className="absolute top-3 left-3 bg-[#08080A]/90 backdrop-blur-md text-[#C0E837] text-[10px] font-mono px-3 py-1 rounded-full border border-[#C0E837]/40 flex items-center gap-1.5 shadow-lg z-10">
                    <Award className="w-3.5 h-3.5 text-[#C0E837]" />
                    <span className="font-bold tracking-wider">{trainer.certifications}</span>
                  </div>

                  {/* High Performance Tag - Top Right */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#08080A]/90 border border-white/20 flex items-center justify-center text-[#C0E837] group-hover:bg-[#C0E837] group-hover:text-[#08080A] group-hover:scale-110 transition-all duration-150 z-10">
                    <Zap className="w-4 h-4" />
                  </div>

                  {/* Mobile & Desktop Pro Stats Card (Always visible on mobile touch, slide-up on desktop) */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 p-2.5 sm:p-3 rounded-xl bg-[#08080A]/95 border border-[#C0E837]/50 backdrop-blur-xl opacity-100 translate-y-0 sm:opacity-0 sm:translate-y-3 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 transition-all duration-200 ease-out flex items-center justify-between shadow-2xl z-10">
                    <div className="flex items-center gap-2 text-[#C0E837]">
                      <Trophy className="w-4 h-4 flex-shrink-0" />
                      <span className="text-[10px] font-mono font-bold tracking-wide text-white uppercase truncate">
                        {trainer.stats}
                      </span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#C0E837] flex-shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                {/* Trainer Role & Name */}
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C0E837] animate-pulse" />
                  <span className="text-[10px] font-mono text-[#C0E837] tracking-widest uppercase font-bold">
                    {trainer.role}
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl italic uppercase text-white group-hover:text-[#C0E837] transition-colors duration-150 tracking-tight mb-1.5 sm:mb-2">
                  {trainer.name}
                </h3>

                {/* Specialty */}
                <p className="text-xs font-mono text-[#C0E837]/90 mb-2.5 sm:mb-3 flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-[#C0E837] flex-shrink-0" />
                  <span className="truncate">{trainer.specialty}</span>
                </p>

                <p className="text-xs text-[#9E9E9E] font-body leading-relaxed mb-4 group-hover:text-white/90 transition-colors duration-150">
                  {trainer.bio}
                </p>
              </div>

              {/* Social links & Action CTA */}
              <div className="flex items-center justify-between pt-3.5 sm:pt-4 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <a
                    href={trainer.socials.instagram}
                    className="p-2 rounded-xl bg-[#121216] border border-white/10 text-[#9E9E9E] hover:text-[#08080A] hover:bg-[#C0E837] hover:border-[#C0E837] transition-all duration-150"
                    aria-label={`${trainer.name} Instagram`}
                  >
                    <InstagramIcon className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={trainer.socials.twitter}
                    className="p-2 rounded-xl bg-[#121216] border border-white/10 text-[#9E9E9E] hover:text-[#08080A] hover:bg-[#C0E837] hover:border-[#C0E837] transition-all duration-150"
                    aria-label={`${trainer.name} Twitter`}
                  >
                    <TwitterIcon className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={trainer.socials.linkedin}
                    className="p-2 rounded-xl bg-[#121216] border border-white/10 text-[#9E9E9E] hover:text-[#08080A] hover:bg-[#C0E837] hover:border-[#C0E837] transition-all duration-150"
                    aria-label={`${trainer.name} LinkedIn`}
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" />
                  </a>
                </div>

                <span className="text-[10px] font-mono text-[#9E9E9E] group-hover:text-[#C0E837] uppercase tracking-wider font-semibold transition-colors duration-150 flex items-center gap-1">
                  <span>PRO ATHLETE</span>
                  <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
