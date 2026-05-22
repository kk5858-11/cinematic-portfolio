import type { Transition, Variants } from "framer-motion";
import type { TransitionMap } from "@/animations/types";

/** Instant transition when user prefers reduced motion */
export const reducedMotionTransition: Transition = {
  duration: 0.01,
};

export const reducedMotionVariants: Variants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
};

export function resolveTransition(
  transition: Transition,
  reduced: boolean,
): Transition {
  return reduced ? reducedMotionTransition : transition;
}

export function resolveVariants(variants: Variants, reduced: boolean): Variants {
  return reduced ? reducedMotionVariants : variants;
}

export function resolveTransitionMap(
  map: TransitionMap,
  reduced: boolean,
): TransitionMap {
  if (!reduced) return map;
  return Object.fromEntries(
    Object.entries(map).map(([k, v]) => [k, reducedMotionTransition]),
  ) as TransitionMap;
}
