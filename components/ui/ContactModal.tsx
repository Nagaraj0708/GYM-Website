"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  MessageSquare,
  CheckCircle2,
  Send,
  User,
  Mail,
  Phone,
  MapPin,
  Clock,
  Dumbbell,
  Sparkles,
  ChevronDown,
  Check,
  HelpCircle,
} from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const INQUIRY_SUBJECTS = [
  "General Concierge Inquiry",
  "1-on-1 Personal Training & Biometrics",
  "Corporate Membership & Team Access",
  "Facility Tour & Private Arena Booking",
];

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState(INQUIRY_SUBJECTS[0]);
  const [message, setMessage] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Lock body scroll when modal is open to prevent background scrolling conflict
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && message) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setDropdownOpen(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          data-lenis-prevent
          data-lenis-prevent-touch
          className="fixed inset-0 z-[99999] overflow-y-auto bg-[#08080A]/90 backdrop-blur-xl p-3 sm:p-6 flex items-start sm:items-center justify-center"
        >
          {/* Backdrop Click Dismiss */}
          <div className="fixed inset-0 -z-10" onClick={handleReset} />

          {/* Modal Card Window - Lenis Prevent Touch Scroll Container */}
          <motion.div
            data-lenis-prevent
            data-lenis-prevent-touch
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl my-auto rounded-3xl border border-white/10 bg-[#0C0C10] shadow-[0_0_60px_rgba(0,0,0,0.8)] z-10"
          >
            {/* Sticky Close Button */}
            <button
              onClick={handleReset}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 z-30 p-2 sm:p-2.5 rounded-full bg-[#16161E] border border-white/10 text-[#9E9E9E] hover:text-white hover:border-[#C0E837] transition-all"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {!submitted ? (
              <div className="grid grid-cols-1 lg:grid-cols-12 min-h-0">
                
                {/* Left Pane - Studio Concierge Info */}
                <div className="lg:col-span-5 bg-gradient-to-br from-[#121218] via-[#0C0C10] to-[#181822] p-4 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10 relative overflow-hidden rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none">
                  
                  {/* Subtle Glow */}
                  <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#C0E837]/10 rounded-full blur-3xl pointer-events-none" />

                  <div>
                    {/* Brand Badge */}
                    <div className="flex items-center gap-2.5 mb-3 sm:mb-6">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#C0E837] text-[#08080A] flex items-center justify-center font-extrabold shadow-[0_0_15px_rgba(192,232,55,0.4)]">
                        <Dumbbell className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#08080A]" />
                      </div>
                      <span className="font-display text-lg sm:text-xl font-bold tracking-tight text-white">
                        Fi<span className="text-[#C0E837]">Fusion</span> <span className="text-[10px] sm:text-xs font-mono text-[#9E9E9E] font-normal">CONCIERGE</span>
                      </span>
                    </div>

                    <h4 className="font-display text-lg sm:text-2xl italic uppercase text-white mb-1.5 sm:mb-2 leading-snug">
                      SPEAK WITH OUR <span className="text-[#C0E837]">TEAM</span>
                    </h4>
                    <p className="text-[11px] sm:text-xs text-[#9E9E9E] font-body leading-relaxed mb-3 sm:mb-6">
                      Have specific questions about memberships, private coaching, or recovery labs? Our master concierge faculty is at your service.
                    </p>

                    {/* Contact Details Cards */}
                    <div className="flex flex-col gap-2.5 sm:gap-4">
                      <div className="flex items-start gap-3 p-3 sm:p-3.5 rounded-xl bg-[#14141C] border border-white/10">
                        <Phone className="w-4 h-4 text-[#C0E837] mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="text-[9px] sm:text-[10px] font-mono text-[#9E9E9E] uppercase block">DIRECT HOTLINE</span>
                          <span className="text-xs text-white font-mono font-bold">+1 (800) 555-FUSION</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3 sm:p-3.5 rounded-xl bg-[#14141C] border border-white/10">
                        <Mail className="w-4 h-4 text-[#C0E837] mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="text-[9px] sm:text-[10px] font-mono text-[#9E9E9E] uppercase block">CONCIERGE EMAIL</span>
                          <span className="text-xs text-white font-mono font-bold">concierge@fifusion.com</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3 sm:p-3.5 rounded-xl bg-[#14141C] border border-white/10">
                        <MapPin className="w-4 h-4 text-[#C0E837] mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="text-[9px] sm:text-[10px] font-mono text-[#9E9E9E] uppercase block">HQ ARENA LOCATION</span>
                          <span className="text-xs text-white font-body">100 Cyber Boulevard, Suite 400</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hours Badge */}
                  <div className="pt-3 sm:pt-6 border-t border-white/10 mt-4 sm:mt-6 flex items-center gap-2 text-[10px] sm:text-[11px] text-[#9E9E9E] font-mono">
                    <Clock className="w-4 h-4 text-[#C0E837] flex-shrink-0" />
                    <span>24/7 Biometric Access for Members</span>
                  </div>
                </div>

                {/* Right Pane - Inquiry Form */}
                <div className="lg:col-span-7 p-4 sm:p-8 flex flex-col justify-between bg-[#0C0C10] rounded-b-3xl lg:rounded-r-3xl lg:rounded-bl-none">
                  <div>
                    {/* Header */}
                    <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono text-[#C0E837] mb-1 uppercase">
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>DIRECT STUDIO INQUIRY</span>
                    </div>
                    <h3 className="font-display text-2xl sm:text-4xl italic text-white uppercase mb-1 tracking-tight">
                      GET IN <span className="text-[#C0E837]">TOUCH.</span>
                    </h3>
                    <p className="text-[11px] sm:text-xs text-[#9E9E9E] font-body mb-3 sm:mb-6">
                      Send us a message and a master athletic advisor will get back to you within 2 hours.
                    </p>

                    {/* Form Fields */}
                    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-4">
                      {/* Name */}
                      <div>
                        <label className="block text-[10px] sm:text-[11px] font-mono text-[#9E9E9E] uppercase mb-1">
                          FULL NAME *
                        </label>
                        <div className="relative flex items-center">
                          <User className="w-4 h-4 text-[#9E9E9E] absolute left-3.5 pointer-events-none" />
                          <input
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Sarah Connor"
                            className="w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-xl bg-[#14141C] border border-white/10 text-white placeholder-white/20 focus:border-[#C0E837] focus:ring-1 focus:ring-[#C0E837]/30 outline-none text-xs font-body transition-all"
                          />
                        </div>
                      </div>

                      {/* Email & Phone Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <div>
                          <label className="block text-[10px] sm:text-[11px] font-mono text-[#9E9E9E] uppercase mb-1">
                            EMAIL ADDRESS *
                          </label>
                          <div className="relative flex items-center">
                            <Mail className="w-4 h-4 text-[#9E9E9E] absolute left-3.5 pointer-events-none" />
                            <input
                              type="email"
                              required
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="sarah@example.com"
                              className="w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-xl bg-[#14141C] border border-white/10 text-white placeholder-white/20 focus:border-[#C0E837] focus:ring-1 focus:ring-[#C0E837]/30 outline-none text-xs font-body transition-all"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[10px] sm:text-[11px] font-mono text-[#9E9E9E] uppercase mb-1">
                            PHONE NUMBER
                          </label>
                          <div className="relative flex items-center">
                            <Phone className="w-4 h-4 text-[#9E9E9E] absolute left-3.5 pointer-events-none" />
                            <input
                              type="tel"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              placeholder="+1 (555) 000-0000"
                              className="w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-xl bg-[#14141C] border border-white/10 text-white placeholder-white/20 focus:border-[#C0E837] focus:ring-1 focus:ring-[#C0E837]/30 outline-none text-xs font-body transition-all"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Custom Luxury Dropdown for Subject Selection */}
                      <div className="relative" ref={dropdownRef}>
                        <label className="block text-[10px] sm:text-[11px] font-mono text-[#9E9E9E] uppercase mb-1">
                          INQUIRY TOPIC
                        </label>
                        
                        <button
                          type="button"
                          onClick={() => setDropdownOpen(!dropdownOpen)}
                          className={`w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-[#14141C] border transition-all text-left flex items-center justify-between text-[11px] sm:text-xs font-mono tracking-wider ${
                            dropdownOpen
                              ? "border-[#C0E837]/60 ring-1 ring-[#C0E837]/20 text-white"
                              : "border-white/10 text-white hover:border-white/20"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <HelpCircle className="w-4 h-4 text-[#C0E837] flex-shrink-0" />
                            <span className="text-white truncate">{subject}</span>
                          </div>
                          <ChevronDown
                            className={`w-4 h-4 text-[#9E9E9E] transition-transform duration-300 flex-shrink-0 ${
                              dropdownOpen ? "rotate-180 text-[#C0E837]" : ""
                            }`}
                          />
                        </button>

                        {/* Animated Glassmorphic Menu Box */}
                        <AnimatePresence>
                          {dropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: -6, scale: 0.99 }}
                              animate={{ opacity: 1, y: 4, scale: 1 }}
                              exit={{ opacity: 0, y: -6, scale: 0.99 }}
                              transition={{ duration: 0.15 }}
                              className="absolute top-full left-0 right-0 z-50 rounded-xl bg-[#12121A] border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.9)] p-1.5 flex flex-col gap-1 backdrop-blur-2xl"
                            >
                              {INQUIRY_SUBJECTS.map((sub, idx) => {
                                const isSelected = subject === sub;
                                return (
                                  <button
                                    key={idx}
                                    type="button"
                                    onClick={() => {
                                      setSubject(sub);
                                      setDropdownOpen(false);
                                    }}
                                    className={`w-full px-3 py-2 sm:py-2.5 rounded-lg text-[11px] sm:text-xs font-mono tracking-wider text-left transition-all flex items-center justify-between ${
                                      isSelected
                                        ? "bg-[#C0E837]/15 text-[#C0E837] font-semibold border-l-2 border-[#C0E837]"
                                        : "text-[#9E9E9E] hover:bg-white/5 hover:text-white"
                                    }`}
                                  >
                                    <span className="truncate">{sub}</span>
                                    {isSelected && <Check className="w-3.5 h-3.5 text-[#C0E837] stroke-[2.5] flex-shrink-0 ml-2" />}
                                  </button>
                                );
                              })}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Message Box */}
                      <div>
                        <label className="block text-[10px] sm:text-[11px] font-mono text-[#9E9E9E] uppercase mb-1">
                          MESSAGE / QUESTION *
                        </label>
                        <textarea
                          required
                          rows={3}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="How can our coaches assist your athletic goals?"
                          className="w-full p-3 sm:p-4 rounded-xl bg-[#14141C] border border-white/10 text-white placeholder-white/20 focus:border-[#C0E837] focus:ring-1 focus:ring-[#C0E837]/30 outline-none text-xs font-body transition-all resize-none"
                        />
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="w-full py-3.5 sm:py-4 rounded-full bg-[#C0E837] hover:bg-[#D4E157] text-[#08080A] font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(192,232,55,0.4)] hover:scale-[1.01] mt-2"
                      >
                        <span>SEND INQUIRY NOW</span>
                        <Send className="w-4 h-4" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            ) : (
              /* Success Screen */
              <div className="p-6 sm:p-12 text-center flex flex-col items-center justify-center min-h-[450px]">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#C0E837]/15 border-2 border-[#C0E837] flex items-center justify-center text-[#C0E837] mb-5 sm:mb-6 shadow-[0_0_30px_rgba(192,232,55,0.4)]">
                  <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181822] border border-[#C0E837]/30 text-[10px] sm:text-xs font-mono text-[#C0E837] mb-3 sm:mb-4">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>MESSAGE DISPATCHED</span>
                </div>

                <h3 className="font-display text-3xl sm:text-5xl italic text-white uppercase mb-2 sm:mb-3">
                  INQUIRY <span className="text-[#C0E837]">RECEIVED!</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#9E9E9E] max-w-md mb-6 sm:mb-8 font-body leading-relaxed">
                  Thank you, <span className="text-white font-bold">{name}</span>. Our concierge team has logged your inquiry <span className="text-[#C0E837] font-mono">#INQ-48201</span> and will contact you directly at <span className="text-white font-mono">{email}</span>.
                </p>

                <button
                  onClick={handleReset}
                  className="px-8 py-3 rounded-full bg-[#14141C] border border-white/20 text-white hover:border-[#C0E837] hover:text-[#C0E837] text-xs font-bold font-mono uppercase tracking-wider transition-all"
                >
                  CLOSE WINDOW
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
