/**
 * GSAP ScrollTrigger presets.
 */

import type { ScrollPresetConfig, SectionRevealTween } from "@/animations/types";
import { getGsapEase } from "./easing";
import { getDuration } from "./timing";

export type ScrollPreset = ScrollPresetConfig & {
  from?: SectionRevealTween;
  to?: SectionRevealTween;
  /** Content layer tween (hero scroll) */
  content?: SectionRevealTween;
  /** Object target tween (hero state) */
  state?: Record<string, number>;
};

export const scrollPresets = {
  /** Standard section enter */
  sectionReveal: {
    start: "top 85%",
    end: "top 45%",
    toggleActions: "play none none reverse",
    once: true,
    from: {
      y: 48,
      opacity: 0,
      filter: "blur(10px)",
    },
    to: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
    },
  },

  /** Lighter movement for dense pages */
  sectionRevealSubtle: {
    start: "top 88%",
    toggleActions: "play none none none",
    once: true,
    from: {
      y: 24,
      opacity: 0,
      filter: "blur(6px)",
    },
    to: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
    },
  },

  /** Staggered children — trigger parent */
  staggerReveal: {
    start: "top 80%",
    toggleActions: "play none none reverse",
    once: true,
    from: {
      y: 32,
      opacity: 0,
    },
    to: {
      y: 0,
      opacity: 1,
    },
  },

  /** Soft parallax scrub */
  parallaxSoft: {
    start: "top bottom",
    end: "bottom top",
    scrub: 1,
    from: { y: 40 },
    to: { y: -40 },
  },

  /** Pinned section scrub */
  pinScrub: {
    start: "top top",
    end: "bottom bottom",
    scrub: 1,
    pin: true,
  },

  /** Hero cinematic scroll (reference values) */
  heroCinematic: {
    start: "top top",
    end: "bottom bottom",
    scrub: 1.2,
    content: {
      y: -80,
      opacity: 0.4,
      filter: "blur(6px)",
    },
    state: {
      scroll: 1,
      intensity: 0.65,
    },
  },
} as const satisfies Record<string, ScrollPreset>;

export type ScrollPresetKey = keyof typeof scrollPresets;

/** Default GSAP tween options for section reveals */
export function sectionRevealTweenDefaults(preset: ScrollPresetKey = "sectionReveal") {
  const p = scrollPresets[preset];
  const to = "to" in p && p.to ? p.to : { y: 0, opacity: 1 };
  return {
    duration: getDuration("slow"),
    ease: getGsapEase("smooth"),
    ...to,
  };
}
