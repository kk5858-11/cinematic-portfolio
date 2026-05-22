"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useMotionContext } from "@/animations/core/motion-context";
import { variants } from "@/animations/presets/framer-variants";

type PageTransitionProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Cinematic route transition — Fade + Blur.
 * Mount in `app/template.tsx`.
 */
export function PageTransition({ children, className }: PageTransitionProps) {
  const pathname = usePathname();
  const { reducedMotion } = useMotionContext();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        className={className}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants.page}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
