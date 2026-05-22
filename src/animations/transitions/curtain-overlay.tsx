"use client";

import { motion } from "framer-motion";
import { useMotionContext } from "@/animations/core/motion-context";
import { getFramerEase } from "@/animations/presets/easing";
import { getDuration } from "@/animations/presets/timing";
import { zIndexClass } from "@/tokens/z-index";

type CurtainPhase = "idle" | "closing" | "opening";

type CurtainOverlayProps = {
  phase: CurtainPhase;
  onPhaseComplete?: (phase: CurtainPhase) => void;
};

const transition = {
  duration: getDuration("transition"),
  ease: getFramerEase("inOut"),
};

/**
 * Full-screen curtain — closing covers, opening reveals.
 */
export function CurtainOverlay({ phase, onPhaseComplete }: CurtainOverlayProps) {
  const { reducedMotion } = useMotionContext();

  if (reducedMotion || phase === "idle") return null;

  const isClosing = phase === "closing";

  return (
    <motion.div
      className={`fixed inset-0 bg-background ${zIndexClass.transition} pointer-events-none`}
      style={{ transformOrigin: isClosing ? "top" : "top" }}
      initial={{ scaleY: isClosing ? 0 : 1 }}
      animate={{ scaleY: isClosing ? 1 : 0 }}
      transition={transition}
      onAnimationComplete={() => onPhaseComplete?.(phase)}
      aria-hidden
    />
  );
}
