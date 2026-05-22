"use client";

import { motion } from "framer-motion";
import { useMotionContext } from "@/animations/core/motion-context";
import { variants } from "@/animations/presets/framer-variants";
import { zIndexClass } from "@/tokens/z-index";

type CurtainTransitionProps = {
  /** Cover screen on enter */
  show: boolean;
  direction?: "in" | "out";
};

/**
 * Curtain wipe — for blog / heavy content routes.
 * Toggle `show` when navigation starts / completes.
 */
export function CurtainTransition({
  show,
  direction = "in",
}: CurtainTransitionProps) {
  const { reducedMotion } = useMotionContext();
  if (reducedMotion || !show) return null;

  const variant = direction === "in" ? variants.curtainIn : variants.curtainOut;

  return (
    <motion.div
      className={`fixed inset-0 bg-background ${zIndexClass.transition}`}
      initial="initial"
      animate="animate"
      variants={variant}
      aria-hidden
    />
  );
}
