"use client";

import { motion } from "framer-motion";
import { useMotionContext } from "@/animations/core/motion-context";
import { lineStaggerDelay, variants } from "@/animations/presets/framer-variants";
import { getTransition } from "@/animations/presets/timing";
import { resolveTransition } from "@/animations/core/reduced-motion";
import { heroRhythm } from "@/animations/rhythm";

type StaggerLineProps = {
  lines: string[];
  className?: string;
  as?: "h1" | "h2";
  delay?: number;
};

export function StaggerLine({
  lines,
  className,
  as: Tag = "h1",
  delay = heroRhythm.titleBaseDelay,
}: StaggerLineProps) {
  const { reducedMotion } = useMotionContext();

  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span key={`${line}-${i}`} className="block overflow-hidden">
          <motion.span
            className="block"
            initial="hidden"
            animate="visible"
            variants={variants.staggerLine}
            transition={resolveTransition(
              {
                ...getTransition("cinematic"),
                delay: reducedMotion
                  ? 0
                  : delay + i * heroRhythm.titleLineStagger,
              },
              reducedMotion,
            )}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
