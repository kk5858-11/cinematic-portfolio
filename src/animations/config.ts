/**
 * Motion System — unified export object.
 * Import presets from here or from `@/animations` barrel.
 */

import * as easing from "./presets/easing";
import * as timing from "./presets/timing";
import * as framer from "./presets/framer-variants";
import * as scroll from "./presets/scroll";

export const MOTION = {
  easing: {
    framer: easing.framerEase,
    gsap: easing.gsapEase,
    css: easing.easeCssVar,
    getFramer: easing.getFramerEase,
    getGsap: easing.getGsapEase,
  },
  timing: {
    duration: timing.duration,
    durationMs: timing.durationMs,
    stagger: timing.stagger,
    transitions: timing.transitions,
    staggerTransition: timing.staggerTransition,
    getTransition: timing.getTransition,
    getDuration: timing.getDuration,
    getStagger: timing.getStagger,
  },
  variants: framer.variants,
  viewport: framer.defaultViewport,
  scroll: scroll.scrollPresets,
} as const;

export type { MotionTransitionPreset, PageTransitionPreset, FramerVariantKey } from "./types";
export type { ScrollPresetKey } from "./presets/scroll";
