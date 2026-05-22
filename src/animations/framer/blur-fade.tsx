"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { useMotionContext } from "@/animations/core/motion-context";
import { resolveTransition } from "@/animations/core/reduced-motion";
import { getTransition } from "@/animations/presets/timing";
import { sectionViewport } from "@/animations/rhythm";
import { cn } from "@/lib/utils";

type BlurFadeProps = HTMLMotionProps<"div"> & {
  delay?: number;
  y?: number;
};

export function BlurFade({
  className,
  children,
  delay = 0,
  y = 20,
  ...props
}: BlurFadeProps) {
  const { reducedMotion } = useMotionContext();

  return (
    <motion.div
      initial={{ opacity: 0, y, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={sectionViewport}
      transition={resolveTransition(
        { ...getTransition("section"), delay },
        reducedMotion,
      )}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
