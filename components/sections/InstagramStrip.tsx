"use client";

import { motion } from "framer-motion";
import { Heart, MessageCircle } from "lucide-react";
import { InstagramIcon } from "@/components/ui/SocialIcons";

const COMMUNITY_POSTS = [
  {
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
    tag: "@fifusionfitness",
    likes: "1.4k",
    comments: "84",
  },
  {
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop",
    tag: "#FIFUSIONSPIN",
    likes: "2.1k",
    comments: "142",
  },
  {
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop",
    tag: "#FIFUSIONLIMITS",
    likes: "980",
    comments: "56",
  },
  {
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800&auto=format&fit=crop",
    tag: "@fifusioncommunity",
    likes: "3.2k",
    comments: "210",
  },
];

export default function InstagramStrip() {
  return (
    <section className="py-20 bg-[#08080A] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 flex items-center justify-between">
        <div>
          <span className="text-xs font-mono text-[#C0E837] tracking-widest uppercase">// INSTAGRAM COMMUNITY</span>
          <h2 className="font-display text-3xl sm:text-4xl italic uppercase text-white mt-1">
            JOIN THE <span className="text-[#C0E837]">#FIFUSIONFAMILY</span>
          </h2>
        </div>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#121216] border border-white/10 text-xs font-bold text-white hover:text-[#C0E837] hover:border-[#C0E837] transition-all"
        >
          <InstagramIcon className="w-4 h-4 text-[#C0E837]" />
          <span>@FIFUSIONFITNESS</span>
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {COMMUNITY_POSTS.map((post, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.02 }}
            className="relative h-72 rounded-2xl overflow-hidden glass-card group cursor-pointer border border-white/10 bg-[#121216]"
          >
            <img
              src={post.image}
              alt="Community Post"
              className="w-full h-full object-cover brightness-90 group-hover:scale-110 transition-transform duration-700"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop";
              }}
            />

            {/* Hover Specs */}
            <div className="absolute inset-0 bg-[#08080A]/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
              <span className="text-xs font-mono text-[#C0E837] font-bold mb-3">{post.tag}</span>
              <div className="flex items-center gap-4 text-xs font-mono text-white">
                <div className="flex items-center gap-1">
                  <Heart className="w-4 h-4 text-[#C0E837] fill-[#C0E837]" />
                  <span>{post.likes}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle className="w-4 h-4 text-white" />
                  <span>{post.comments}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
