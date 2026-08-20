"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface LiquidButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function LiquidButton({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  disabled = false,
  ...props
}: LiquidButtonProps & Record<string, any>) {
  const sizeClasses = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  }[size];

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-[#F7A600] via-[#FF6A00] to-[#F7A600] bg-[length:200%_auto] text-[#0A0A0B] font-extrabold shadow-[0_0_25px_rgba(247,166,0,0.4)] hover:shadow-[0_0_35px_rgba(247,166,0,0.6)] border border-[#F7A600]",
    secondary:
      "bg-[#141417] text-[#F5F5F5] font-bold border border-white/20 hover:border-[#F7A600] shadow-lg",
    outline:
      "bg-transparent text-[#F5F5F5] font-bold border border-[#F7A600]/60 hover:bg-[#F7A600]/10 hover:border-[#F7A600]",
  }[variant];

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`relative inline-flex items-center gap-2.5 rounded-full uppercase tracking-wider font-display italic transition-all duration-300 overflow-hidden group cursor-pointer ${sizeClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {/* Liquid Sheen Animation Effect */}
      <span className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none" />

      {/* Button Content */}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
}
