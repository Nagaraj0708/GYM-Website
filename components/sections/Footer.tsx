"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, MapPin, Phone, Mail, Flame, CheckCircle2, Dumbbell } from "lucide-react";
import { InstagramIcon, YoutubeIcon, TwitterIcon, FacebookIcon } from "@/components/ui/SocialIcons";

export default function Footer({ onBookTrial }: { onBookTrial?: () => void }) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#050506] text-[#F5F5F5] pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
      {/* Subtle Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(circle_at_50%_100%,rgba(192,232,55,0.1),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <Link href="/" className="flex items-center gap-2.5 mb-4 group">
                <div className="w-8 h-8 rounded-lg bg-[#C0E837] text-[#08080A] flex items-center justify-center font-extrabold shadow-[0_0_15px_rgba(192,232,55,0.6)]">
                  <Dumbbell className="w-4 h-4 fill-[#08080A]" />
                </div>
                <span className="font-display text-3xl font-bold tracking-tight text-white">
                  Fi<span className="text-[#C0E837]">Fusion</span>
                </span>
              </Link>
              <p className="text-xs text-[#9E9E9E] leading-relaxed max-w-sm font-body mb-6">
                An uncompromised training facility built for athletic excellence, high-octane spin, metabolic conditioning, and hyper-recovery protocols.
              </p>
            </div>

            {/* Newsletter Input Form */}
            <div className="bg-[#121216] p-4 rounded-2xl border border-white/10">
              <span className="text-xs font-mono text-[#C0E837] font-bold block mb-2">
                JOIN THE ATHLETE DISPATCH
              </span>
              {subscribed ? (
                <div className="flex items-center gap-2 text-xs text-[#C0E837] font-bold">
                  <CheckCircle2 className="w-4 h-4 text-[#C0E837]" />
                  <span>YOU'RE IN. WELCOME TO THE DISPATCH.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletter} className="flex items-center gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    className="w-full bg-[#08080A] border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder-[#9E9E9E] focus:outline-none focus:border-[#C0E837]"
                  />
                  <button
                    type="submit"
                    className="p-2 rounded-lg bg-[#C0E837] text-[#08080A] hover:bg-[#D4E157] font-bold transition-colors"
                    aria-label="Subscribe"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Quick Links Col */}
          <div>
            <h4 className="font-display text-lg italic text-[#C0E837] mb-4">EXPLORE</h4>
            <ul className="flex flex-col gap-2.5 text-xs text-[#9E9E9E]">
              <li>
                <Link href="#programs" className="hover:text-[#C0E837] transition-colors">Programs & Disciplines</Link>
              </li>
              <li>
                <Link href="#philosophy" className="hover:text-[#C0E837] transition-colors">The FiFusion Methodology</Link>
              </li>
              <li>
                <Link href="#transformations" className="hover:text-[#C0E837] transition-colors">Member Transformations</Link>
              </li>
              <li>
                <Link href="#trainers" className="hover:text-[#C0E837] transition-colors">Master Coaches</Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-[#C0E837] transition-colors">Membership Pricing</Link>
              </li>
            </ul>
          </div>

          {/* Schedule Col */}
          <div>
            <h4 className="font-display text-lg italic text-[#C0E837] mb-4">OPERATING HOURS</h4>
            <ul className="flex flex-col gap-2.5 text-xs text-[#9E9E9E] font-mono">
              <li className="flex justify-between border-b border-white/5 pb-1">
                <span>MON - FRI</span>
                <span className="text-white font-bold">5:00 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-1">
                <span>SATURDAY</span>
                <span className="text-white font-bold">6:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-1">
                <span>SUNDAY</span>
                <span className="text-white font-bold">7:00 AM - 9:00 PM</span>
              </li>
              <li className="flex justify-between pt-1 text-[#C0E837] font-bold">
                <span>VIP ACCESS</span>
                <span>24/7 OPEN</span>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="font-display text-lg italic text-[#C0E837] mb-4">LOCATION</h4>
            <div className="flex flex-col gap-3 text-xs text-[#9E9E9E]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C0E837] flex-shrink-0 mt-0.5" />
                <span>450 Athletic Way, Metro District, NY 10001</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C0E837] flex-shrink-0" />
                <span>+1 (800) 895-3848</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C0E837] flex-shrink-0" />
                <span>concierge@fifusion.com</span>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-3 mt-3">
                <a href="#" className="w-8 h-8 rounded-lg bg-[#121216] border border-white/10 flex items-center justify-center text-white hover:text-[#C0E837] hover:border-[#C0E837] transition-all">
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-lg bg-[#121216] border border-white/10 flex items-center justify-center text-white hover:text-[#C0E837] hover:border-[#C0E837] transition-all">
                  <YoutubeIcon className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-lg bg-[#121216] border border-white/10 flex items-center justify-center text-white hover:text-[#C0E837] hover:border-[#C0E837] transition-all">
                  <TwitterIcon className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-lg bg-[#121216] border border-white/10 flex items-center justify-center text-white hover:text-[#C0E837] hover:border-[#C0E837] transition-all">
                  <FacebookIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-[11px] text-[#9E9E9E]">
          <p>© {new Date().getFullYear()} FiFusion Studio Inc. All rights reserved.</p>
          <div className="flex items-center gap-6 font-mono">
            <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
            <a href="#" className="hover:text-white transition-colors">TERMS OF SERVICE</a>
            <a href="#" className="hover:text-white transition-colors">BIOMETRIC CONSENT</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
