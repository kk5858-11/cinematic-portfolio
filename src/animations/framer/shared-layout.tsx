"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { useMotionContext } from "@/animations/core/motion-context";
import { getTransition } from "@/animations/presets/timing";
import { resolveTransition } from "@/animations/core/reduced-motion";
import { cn } from "@/lib/utils";

type SharedLayoutProps = HTMLMotionProps<"div"> & {
  /** Framer layoutId — must match between list & detail */
  layoutId: string;
};

/**
 * Shared element transition wrapper (list → detail).
 * Pair with the same `layoutId` on destination page.
 */
export function SharedLayout({ layoutId, className, children, ...props }: SharedLayoutProps) {
  const { reducedMotion } = useMotionContext();

  return (
    <motion.div
      layoutId={reducedMotion ? undefined : layoutId}
      layout
      transition={resolveTransition(getTransition("page"), reducedMotion)}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type SharedLayoutRootProps = {
  children: React.ReactNode;
  className?: string;
};

/** Wrap pages that participate in shared layout transitions */
export function SharedLayoutRoot({ children, className }: SharedLayoutRootProps) {
  return (
    <motion.div
      className={className}
      style={{ position: "relative" }}
      layoutScroll
    >
      {children}
    </motion.div>
  );
}
