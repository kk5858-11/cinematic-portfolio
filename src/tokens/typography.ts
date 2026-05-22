/**
 * Typography system — cinematic hierarchy, tight display tracking.
 */

export const fontFamily = {
  sans: "var(--font-geist-sans)",
  display: "var(--font-geist-sans)",
  mono: "var(--font-geist-mono)",
} as const;

export const fontWeight = {
  regular: "400",
  medium: "500",
  semibold: "600",
} as const;

/** Fluid + fixed sizes — CSS vars in tokens.css */
export const fontSize = {
  /** Hero display */
  hero: "clamp(3.25rem, 11vw, 8.5rem)",
  /** Section titles */
  display: "clamp(2.25rem, 5.5vw, 4.5rem)",
  /** Large headings */
  h1: "clamp(1.875rem, 4vw, 3rem)",
  h2: "clamp(1.5rem, 3vw, 2.25rem)",
  h3: "1.5rem",
  h4: "1.25rem",
  /** Body */
  lg: "1.125rem",
  base: "1rem",
  sm: "0.875rem",
  xs: "0.75rem",
  /** Labels / meta */
  caption: "0.6875rem",
} as const;

export const lineHeight = {
  none: "1",
  tight: "1.1",
  snug: "1.25",
  normal: "1.5",
  relaxed: "1.625",
  loose: "1.75",
} as const;

export const letterSpacing = {
  tighter: "-0.04em",
  tight: "-0.03em",
  snug: "-0.02em",
  normal: "0",
  wide: "0.02em",
  wider: "0.06em",
  widest: "0.12em",
  caption: "0.08em",
} as const;

/** Preset text styles (className composition reference) */
export const textStyles = {
  hero: {
    fontSize: fontSize.hero,
    lineHeight: lineHeight.tight,
    letterSpacing: letterSpacing.tighter,
    fontWeight: fontWeight.semibold,
  },
  display: {
    fontSize: fontSize.display,
    lineHeight: lineHeight.tight,
    letterSpacing: letterSpacing.tight,
    fontWeight: fontWeight.semibold,
  },
  h1: {
    fontSize: fontSize.h1,
    lineHeight: lineHeight.snug,
    letterSpacing: letterSpacing.snug,
    fontWeight: fontWeight.semibold,
  },
  h2: {
    fontSize: fontSize.h2,
    lineHeight: lineHeight.snug,
    letterSpacing: letterSpacing.snug,
    fontWeight: fontWeight.medium,
  },
  body: {
    fontSize: fontSize.base,
    lineHeight: lineHeight.relaxed,
    letterSpacing: letterSpacing.normal,
    fontWeight: fontWeight.regular,
  },
  bodyLg: {
    fontSize: fontSize.lg,
    lineHeight: lineHeight.relaxed,
    letterSpacing: letterSpacing.normal,
    fontWeight: fontWeight.regular,
  },
  muted: {
    fontSize: fontSize.sm,
    lineHeight: lineHeight.normal,
    letterSpacing: letterSpacing.normal,
    fontWeight: fontWeight.regular,
  },
  caption: {
    fontSize: fontSize.caption,
    lineHeight: lineHeight.normal,
    letterSpacing: letterSpacing.caption,
    fontWeight: fontWeight.medium,
    textTransform: "uppercase" as const,
  },
  mono: {
    fontFamily: fontFamily.mono,
    fontSize: fontSize.sm,
    lineHeight: lineHeight.normal,
    letterSpacing: letterSpacing.wide,
  },
} as const;
