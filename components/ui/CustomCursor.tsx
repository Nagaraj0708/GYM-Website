"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [cursorVariant, setCursorVariant] = useState("default");
  const [isVisible, setIsVisible] = useState(false);

  // High-precision physics motion values
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // High-performance spring physics for instant, fluid dot tracking
  const springX = useSpring(mouseX, { stiffness: 1000, damping: 50 });
  const springY = useSpring(mouseY, { stiffness: 1000, damping: 50 });

  useEffect(() => {
    // Disable on touch / mobile screens
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement | null;
      if (
        target?.tagName === "BUTTON" ||
        target?.tagName === "A" ||
        target?.closest("button") ||
        target?.closest("a") ||
        target?.closest("[data-interactive]")
      ) {
        setCursorVariant("hover");
      } else {
        setCursorVariant("default");
      }
    };

    const onMouseDown = () => setCursorVariant("active");
    const onMouseUp = () => setCursorVariant("hover");
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    /* Precision Cyber Lime Dot Pointer - Outer Ring Completely Removed */
    <motion.div
      style={{
        x: springX,
        y: springY,
      }}
      animate={{
        scale: cursorVariant === "hover" ? 1.8 : cursorVariant === "active" ? 0.7 : 1,
        backgroundColor: "#C0E837",
        boxShadow:
          cursorVariant === "hover"
            ? "0 0 20px rgba(192, 232, 55, 0.9)"
            : "0 0 10px rgba(192, 232, 55, 0.6)",
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
      className="pointer-events-none fixed top-0 left-0 z-[99999] w-2.5 h-2.5 -ml-1.25 -mt-1.25 rounded-full bg-[#C0E837] hidden lg:block"
    />
  );
}
