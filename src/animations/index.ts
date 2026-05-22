/**
 * Motion System — unified public API
 *
 * @example
 * import { MOTION, BlurFade, PageTransition, createSectionReveal } from "@/animations";
 */

export { MOTION } from "./config";
export * from "./rhythm";
export type * from "./types";

/* Presets */
export * from "./presets";
export {
  getTransition,
  getDuration,
  getStagger,
  transitions,
  staggerTransition,
} from "./presets/timing";
export { scrollPresets, sectionRevealTweenDefaults } from "./presets/scroll";
export {
  variants,
  getVariant,
  defaultViewport,
  createStaggerContainer,
  lineStaggerDelay,
} from "./presets/framer-variants";
export { getFramerEase, getGsapEase, framerEase, gsapEase } from "./presets/easing";

/* Core */
export { MotionProvider, useMotionContext } from "./core/motion-context";
export {
  reducedMotionTransition,
  resolveTransition,
  resolveVariants,
} from "./core/reduced-motion";

/* Framer */
export {
  BlurFade,
  StaggerLine,
  StaggerChildren,
  StaggerItem,
  SectionReveal,
  SharedLayout,
  SharedLayoutRoot,
} from "./framer";

/* GSAP */
export {
  createSectionReveal,
  createHeroScrollTimeline,
  useSectionReveal,
  type SectionRevealOptions,
  type HeroMotionState,
} from "./gsap";

/* Transitions */
export {
  PageTransition,
  CurtainTransition,
  CurtainOverlay,
  RouteTransition,
  TransitionProvider,
  useTransitionNav,
  getRouteTransitionMode,
  shouldCurtainEnter,
  shouldCurtainExit,
} from "./transitions";
