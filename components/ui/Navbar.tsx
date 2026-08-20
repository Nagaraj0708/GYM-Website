"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Dumbbell } from "lucide-react";

interface NavbarProps {
  onBookTrial?: () => void;
  onContactUs?: () => void;
}

// Exact physical section order as rendered in app/page.tsx
const NAV_ITEMS = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Arenas", href: "#horizontal-experience" },
  { name: "Programs", href: "#programs" },
  { name: "Coaches", href: "#trainers" },
  { name: "Pricing", href: "#pricing" },
];

export default function Navbar({ onBookTrial, onContactUs }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");
  const isClickScrolling = useRef(false);

  useEffect(() => {
    // 1. Navbar background styling state
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // 2. High-precision IntersectionObserver matching the page sequence
    const observerCallback: IntersectionObserverCallback = (entries) => {
      if (isClickScrolling.current) return;

      const visibleEntries = entries.filter((entry) => entry.isIntersecting);
      if (visibleEntries.length > 0) {
        const topVisible = visibleEntries.reduce((prev, curr) =>
          curr.intersectionRatio > prev.intersectionRatio ? curr : prev
        );
        setActiveSection(`#${topVisible.target.id}`);
      }
    };

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "-15% 0px -35% 0px",
      threshold: [0.1, 0.3, 0.5],
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    NAV_ITEMS.forEach((item) => {
      const sectionId = item.href.substring(1);
      const el = document.getElementById(sectionId);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const wasMobileOpen = mobileMenuOpen;
    setMobileMenuOpen(false);
    setActiveSection(href);
    isClickScrolling.current = true;

    const executeScroll = () => {
      const targetId = href.substring(1);
      const targetEl = document.getElementById(targetId);

      if (targetEl) {
        const navOffset = 70;
        const elementPosition = targetEl.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: Math.max(0, elementPosition - navOffset),
          behavior: "smooth",
        });
      }
    };

    // If mobile menu was open, allow the drawer collapse animation to complete first
    if (wasMobileOpen) {
      setTimeout(executeScroll, 150);
    } else {
      executeScroll();
    }

    setTimeout(() => {
      isClickScrolling.current = false;
    }, 1000);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 border-b border-white/20 ${
        scrolled
          ? "bg-[#08080A]/95 backdrop-blur-2xl py-3.5 shadow-2xl"
          : "bg-[#08080A]/85 backdrop-blur-md py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand Logo */}
          <Link
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-8 h-8 rounded-lg bg-[#C0E837] text-[#08080A] flex items-center justify-center font-extrabold shadow-[0_0_15px_rgba(192,232,55,0.6)] group-hover:scale-105 transition-transform">
              <Dumbbell className="w-4 h-4 fill-[#08080A]" />
            </div>
            <span className="font-display text-2xl font-bold tracking-tight text-white">
              Fi<span className="text-[#C0E837]">Fusion</span>
            </span>
          </Link>

          {/* Desktop Links Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-xs uppercase font-mono tracking-wider font-semibold transition-colors duration-200 relative py-1 ${
                    isActive ? "text-[#C0E837]" : "text-[#9E9E9E] hover:text-white"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C0E837] rounded-full shadow-[0_0_8px_rgba(192,232,55,0.8)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onContactUs}
              className="px-4 py-2 rounded-full border border-white/20 text-white hover:border-[#C0E837] hover:text-[#C0E837] text-xs font-bold font-mono tracking-wider transition-all"
            >
              Contact Us
            </button>
            <button
              onClick={onBookTrial}
              className="px-5 py-2 rounded-full bg-[#C0E837] hover:bg-[#D4E157] text-[#08080A] text-xs font-extrabold font-mono tracking-wider transition-all shadow-[0_0_20px_rgba(192,232,55,0.4)] hover:scale-105"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-[#121216] border border-white/10 text-white hover:text-[#C0E837] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#08080A] border-t border-white/10 px-4 py-6"
          >
            <nav className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-xs font-mono uppercase tracking-wider py-3 px-4 rounded-xl transition-all flex items-center justify-between ${
                    activeSection === item.href
                      ? "bg-[#14141C] text-[#C0E837] border-l-4 border-[#C0E837] font-bold"
                      : "text-white hover:bg-white/5 hover:text-[#C0E837]"
                  }`}
                >
                  <span>{item.name}</span>
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-white/10 mt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onContactUs?.();
                  }}
                  className="w-full py-3 rounded-full border border-white/20 text-white hover:border-[#C0E837] hover:text-[#C0E837] text-xs font-mono uppercase tracking-wider"
                >
                  Contact Us
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onBookTrial?.();
                  }}
                  className="w-full py-3 rounded-full bg-[#C0E837] text-[#08080A] font-extrabold text-xs font-mono uppercase tracking-wider shadow-[0_0_15px_rgba(192,232,55,0.4)]"
                >
                  Get Started
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
