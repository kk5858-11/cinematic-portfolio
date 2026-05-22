/**
 * Framer Motion variant presets.
 */

import type { MotionVariants, FramerVariantKey } from "@/animations/types";
import { getFramerEase } from "./easing";
import { getDuration, getStagger, staggerTransition, transitions } from "./timing";

const ease = getFramerEase;

export const variants: MotionVariants = {
  fade: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: transitions.enter,
    },
  },

  blurFade: {
    hidden: {
      opacity: 0,
      y: 24,
      filter: "blur(12px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: transitions.cinematic,
    },
  },

  blurFadeUp: {
    hidden: {
      opacity: 0,
      y: 40,
      filter: "blur(14px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: transitions.section,
    },
  },

  staggerContainer: {
    hidden: {},
    visible: {
      transition: staggerTransition.normal,
    },
  },

  staggerItem: {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: transitions.enter,
    },
  },

  staggerLine: {
    hidden: {
      y: "110%",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: transitions.cinematic,
    },
  },

  sectionReveal: {
    hidden: {
      opacity: 0,
      y: 36,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: transitions.section,
    },
  },

  page: {
    initial: {
      opacity: 0,
      filter: "blur(8px)",
    },
    animate: {
      opacity: 1,
      filter: "blur(0px)",
      transition: transitions.page,
    },
    exit: {
      opacity: 0,
      filter: "blur(8px)",
      transition: transitions.exit,
    },
  },

  pageExit: {
    exit: {
      opacity: 0,
      y: -12,
      filter: "blur(10px)",
      transition: transitions.exit,
    },
  },

  curtainIn: {
    initial: { scaleY: 1, originY: 0 },
    animate: {
      scaleY: 0,
      transition: {
        duration: getDuration("transition"),
        ease: ease("inOut"),
      },
    },
  },

  curtainOut: {
    initial: { scaleY: 0, originY: 1 },
    animate: {
      scaleY: 1,
      transition: {
        duration: getDuration("transition"),
        ease: ease("inOut"),
      },
    },
  },
};

export function getVariant(key: FramerVariantKey) {
  return variants[key];
}

/** Viewport defaults for section reveals */
export const defaultViewport = {
  once: true,
  amount: 0.2,
  margin: "0px 0px -10% 0px",
} as const;

/** Custom stagger container with preset */
export function createStaggerContainer(staggerKey: keyof typeof staggerTransition = "normal") {
  return {
    hidden: {},
    visible: {
      transition: staggerTransition[staggerKey],
    },
  };
}

/** Line stagger delay helper */
export function lineStaggerDelay(index: number, base = 0.35) {
  return base + index * getStagger("relaxed");
}
