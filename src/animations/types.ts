import type { Transition, Variants } from "framer-motion";
import type { CubicBezierKey, EaseGsapKey } from "@/tokens/easing";
import type { DurationKey, StaggerKey } from "@/tokens/motion";

export type MotionTransitionPreset =
  | "default"
  | "enter"
  | "exit"
  | "cinematic"
  | "micro"
  | "page"
  | "section";

export type PageTransitionPreset = "fadeBlur" | "curtain";

export type FramerVariantKey =
  | "fade"
  | "blurFade"
  | "blurFadeUp"
  | "staggerContainer"
  | "staggerItem"
  | "staggerLine"
  | "sectionReveal"
  | "page"
  | "pageExit"
  | "curtainIn"
  | "curtainOut";

export type MotionVariants = Record<FramerVariantKey, Variants>;

export type TransitionMap = Record<MotionTransitionPreset, Transition>;

export type ScrollPresetConfig = {
  start: string;
  end?: string;
  scrub?: number | boolean;
  pin?: boolean;
  toggleActions?: string;
  once?: boolean;
  markers?: boolean;
};

export type SectionRevealTween = {
  y?: number;
  opacity?: number;
  filter?: string;
  scale?: number;
};

export type TimingPreset = {
  duration: number;
  ease: readonly [number, number, number, number] | string;
};

export type { DurationKey, StaggerKey, CubicBezierKey, EaseGsapKey };
