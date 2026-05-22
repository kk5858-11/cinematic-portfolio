"use client";

import { motion } from "framer-motion";
import { useMotionContext } from "@/animations/core/motion-context";
import {
  createStaggerContainer,
  defaultViewport,
  variants,
} from "@/animations/presets/framer-variants";
import { staggerTransition } from "@/animations/presets/timing";
import { cn } from "@/lib/utils";

type StaggerChildrenProps = {
  children: React.ReactNode;
  className?: string;
  stagger?: keyof typeof staggerTransition;
};

export function StaggerChildren({
  className,
  children,
  stagger = "normal",
}: StaggerChildrenProps) {
  const { reducedMotion } = useMotionContext();

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={
        reducedMotion
          ? { hidden: {}, visible: {} }
          : createStaggerContainer(stagger)
      }
    >
      {children}
    </motion.div>
  );
}

type StaggerItemProps = {
  children: React.ReactNode;
  className?: string;
};

export function StaggerItem({ className, children }: StaggerItemProps) {
  return (
    <motion.div
      className={cn(className)}
      variants={variants.staggerItem}
      data-reveal
    >
      {children}
    </motion.div>
  );
}
