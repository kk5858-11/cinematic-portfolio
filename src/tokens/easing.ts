/**
 * Easing system — Apple / Linear / OpenAI cinematic curves.
 * CSS: var(--ds-ease-*). Framer: array. GSAP: string key.
 */

/** Cubic-bezier tuples for Framer Motion & Web Animations API */
export const cubicBezier = {
  /** Primary — soft deceleration (Linear-style) */
  smooth: [0.16, 1, 0.3, 1] as const,
  /** Enter — gentle acceleration */
  enter: [0.22, 1, 0.36, 1] as const,
  /** Exit — quick leave */
  exit: [0.4, 0, 1, 1] as const,
  /** In-out — section transitions */
  inOut: [0.65, 0, 0.35, 1] as const,
  /** Apple-like — very slow settle */
  apple: [0.25, 0.1, 0.25, 1] as const,
  /** Subtle — micro-interactions */
  subtle: [0.33, 1, 0.68, 1] as const,
  /** Emphasized — hero reveals */
  emphasized: [0.2, 0.8, 0.2, 1] as const,
} as const;

/** CSS custom property names (match tokens.css) */
export const easeCssVar = {
  smooth: "var(--ds-ease-smooth)",
  enter: "var(--ds-ease-enter)",
  exit: "var(--ds-ease-exit)",
  inOut: "var(--ds-ease-in-out)",
  apple: "var(--ds-ease-apple)",
  subtle: "var(--ds-ease-subtle)",
  emphasized: "var(--ds-ease-emphasized)",
} as const;

/** GSAP easing strings */
export const easeGsap = {
  smooth: "power2.out",
  enter: "power3.out",
  exit: "power2.in",
  inOut: "power3.inOut",
  apple: "power1.inOut",
  subtle: "power1.out",
  emphasized: "power4.out",
  cinematic: "expo.out",
} as const;

export type CubicBezierKey = keyof typeof cubicBezier;
export type EaseGsapKey = keyof typeof easeGsap;
