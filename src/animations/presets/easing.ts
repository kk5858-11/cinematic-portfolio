/**
 * Easing presets — single source for Framer, GSAP, CSS.
 */

import {
  cubicBezier,
  easeCssVar,
  easeGsap,
  type CubicBezierKey,
  type EaseGsapKey,
} from "@/tokens/easing";

export { cubicBezier, easeCssVar, easeGsap };
export type { CubicBezierKey, EaseGsapKey };

/** Framer Motion ease arrays by name */
export const framerEase = cubicBezier;

/** GSAP ease strings by name */
export const gsapEase = easeGsap;

/** Map preset key → Framer cubic bezier */
export function getFramerEase(key: CubicBezierKey = "smooth") {
  return cubicBezier[key];
}

/** Map preset key → GSAP ease string */
export function getGsapEase(key: EaseGsapKey = "smooth") {
  return easeGsap[key];
}
