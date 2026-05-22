/**
 * Motion tokens — duration & stagger (easing lives in easing.ts).
 */

import { cubicBezier, easeCssVar, easeGsap } from "./easing";

/** Seconds */
export const duration = {
  instant: 0.15,
  fast: 0.35,
  normal: 0.7,
  slow: 1.1,
  slower: 1.4,
  cinematic: 1.8,
  /** Page transitions max */
  transition: 0.85,
} as const;

/** Milliseconds — for WAAPI / setTimeout */
export const durationMs = {
  instant: duration.instant * 1000,
  fast: duration.fast * 1000,
  normal: duration.normal * 1000,
  slow: duration.slow * 1000,
  slower: duration.slower * 1000,
  cinematic: duration.cinematic * 1000,
  transition: duration.transition * 1000,
} as const;

export const stagger = {
  tight: 0.05,
  normal: 0.08,
  relaxed: 0.12,
  loose: 0.16,
} as const;

/** Framer Motion transition presets */
export const motionTransition = {
  default: {
    duration: duration.normal,
    ease: cubicBezier.smooth,
  },
  enter: {
    duration: duration.slow,
    ease: cubicBezier.enter,
  },
  exit: {
    duration: duration.fast,
    ease: cubicBezier.exit,
  },
  cinematic: {
    duration: duration.cinematic,
    ease: cubicBezier.emphasized,
  },
  micro: {
    duration: duration.fast,
    ease: cubicBezier.subtle,
  },
} as const;

/** Re-export easing for convenience */
export const ease = cubicBezier;
export { easeCssVar, easeGsap };

export type DurationKey = keyof typeof duration;
export type StaggerKey = keyof typeof stagger;
