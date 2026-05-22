/**
 * Unified motion rhythm — single source for all section & hero timing.
 * Phase 9: adjust values here to tune the entire site.
 */

import { defaultViewport } from "@/animations/presets/framer-variants";
import { stagger, getDuration } from "@/animations/presets/timing";

/** Section scroll reveal viewport */
export const sectionViewport = {
  ...defaultViewport,
  amount: 0.18,
  margin: "0px 0px -8% 0px",
} as const;

/** Stagger presets for section children */
export const sectionStagger = {
  default: "normal",
  relaxed: "relaxed",
  tight: "tight",
} as const;

/** Hero entrance (seconds) */
export const heroRhythm = {
  captionDelay: 0.1,
  titleBaseDelay: 0.32,
  titleLineStagger: stagger.relaxed,
  taglineDelay: 1.05,
  ctaDelay: 1.28,
  scrollIndicatorDelay: 1.55,
} as const;

/** BlurFade / content block delays inside sections */
export const contentRhythm = {
  header: 0,
  primary: 0.08,
  secondary: 0.16,
  tertiary: 0.24,
  grid: 0.12,
} as const;

/** GSAP scroll preset keys per section type */
export const scrollRhythm = {
  default: "sectionRevealSubtle" as const,
  hero: "heroCinematic" as const,
};

/** Durations reference (seconds) */
export const rhythmDuration = {
  section: getDuration("slow"),
  micro: getDuration("fast"),
  page: getDuration("transition"),
} as const;
