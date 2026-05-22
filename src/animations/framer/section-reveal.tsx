"use client";

import { motion } from "framer-motion";
import { useMotionContext } from "@/animations/core/motion-context";
import { resolveVariants } from "@/animations/core/reduced-motion";
import { variants } from "@/animations/presets/framer-variants";
import { sectionViewport } from "@/animations/rhythm";
import { cn } from "@/lib/utils";

type SectionRevealProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

/**
 * Unified section reveal — consistent viewport & variants site-wide.
 */
export function SectionReveal({ className, children, id }: SectionRevealProps) {
  const { reducedMotion } = useMotionContext();

  return (
    <motion.section
      id={id}
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
      variants={resolveVariants(variants.sectionReveal, reducedMotion)}
      data-section-reveal
    >
      {children}
    </motion.section>
  );
}
