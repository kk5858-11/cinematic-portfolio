/**
 * Timing presets — durations, staggers, Framer transitions.
 */

import { cubicBezier } from "@/tokens/easing";
import {
  duration,
  durationMs,
  motionTransition,
  stagger,
  type DurationKey,
  type StaggerKey,
} from "@/tokens/motion";
import type { MotionTransitionPreset, TransitionMap } from "@/animations/types";

export { duration, durationMs, stagger };

/** Named Framer transitions */
export const transitions: TransitionMap = {
  default: motionTransition.default,
  enter: motionTransition.enter,
  exit: motionTransition.exit,
  cinematic: motionTransition.cinematic,
  micro: motionTransition.micro,
  page: {
    duration: duration.transition,
    ease: cubicBezier.smooth,
  },
  section: {
    duration: duration.slow,
    ease: cubicBezier.enter,
  },
};

export function getTransition(preset: MotionTransitionPreset = "default") {
  return transitions[preset];
}

export function getDuration(key: DurationKey = "normal") {
  return duration[key];
}

export function getStagger(key: StaggerKey = "normal") {
  return stagger[key];
}

/** Stagger children config for Framer container variants */
export const staggerTransition = {
  tight: {
    staggerChildren: stagger.tight,
    delayChildren: 0.05,
  },
  normal: {
    staggerChildren: stagger.normal,
    delayChildren: 0.08,
  },
  relaxed: {
    staggerChildren: stagger.relaxed,
    delayChildren: 0.12,
  },
  loose: {
    staggerChildren: stagger.loose,
    delayChildren: 0.16,
  },
} as const;
