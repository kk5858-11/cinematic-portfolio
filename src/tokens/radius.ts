/**
 * Radius system — subtle, Apple-like corners.
 */

export const radius = {
  none: "0",
  xs: "0.25rem",
  sm: "0.375rem",
  md: "0.5rem",
  lg: "0.75rem",
  xl: "1rem",
  "2xl": "1.25rem",
  "3xl": "1.5rem",
  full: "9999px",
} as const;

/** Semantic */
export const radiusSemantic = {
  button: radius.md,
  input: radius.md,
  card: radius.lg,
  panel: radius.xl,
  image: radius.lg,
  badge: radius.full,
} as const;

export type RadiusKey = keyof typeof radius;
