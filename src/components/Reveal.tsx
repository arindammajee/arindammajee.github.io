import React from "react";
import { motion } from "motion/react";

/**
 * Subtle scroll-reveal wrapper. Fades and lifts content into view once,
 * when it scrolls into the viewport. Framer Motion's `whileInView` +
 * `viewport.once` keeps it lightweight, and the animation collapses to a
 * no-op for users who prefer reduced motion (handled globally in CSS).
 */
export default function Reveal({
  children,
  delay = 0,
  className
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
