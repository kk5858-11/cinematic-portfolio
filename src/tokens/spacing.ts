/**
 * Spacing system — 8px base grid (Apple / Linear rhythm).
 */

/** Raw scale (px) — 0–128 */
export const space = {
  0: 0,
  px: 1,
  0.5: 2,
  1: 4,
  1.5: 6,
  2: 8,
  2.5: 10,
  3: 12,
  3.5: 14,
  4: 16,
  5: 20,
  6: 24,
  7: 28,
  8: 32,
  9: 36,
  10: 40,
  11: 44,
  12: 48,
  14: 56,
  16: 64,
  18: 72,
  20: 80,
  24: 96,
  28: 112,
  32: 128,
  36: 144,
  40: 160,
  48: 192,
  56: 224,
  64: 256,
} as const;

/** Semantic spacing */
export const spacing = {
  /** Base unit */
  unit: 8,
  /** Inline gap — labels, chips */
  inline: space[2],
  /** Compact component padding */
  component: space[4],
  /** Default gap between elements */
  gap: space[6],
  /** Card / panel padding */
  card: space[8],
  /** Between subsections */
  subsection: space[12],
  /** Section vertical padding — fluid */
  sectionY: "clamp(4rem, 12vh, 8rem)",
  /** Large section breathing room */
  sectionYLg: "clamp(6rem, 16vh, 10rem)",
  /** Hero top/bottom */
  heroY: "clamp(5rem, 18vh, 9rem)",
  /** Container max width */
  containerMax: "1280px",
  /** Content max width (prose) */
  contentMax: "65ch",
  /** Blog prose */
  proseMax: "72ch",
  /** Grid gutter */
  gutter: space[6],
  gutterLg: space[8],
  /** Nav height */
  header: space[16],
} as const;

/** Tailwind-compatible spacing keys (maps to --spacing-* in theme) */
export const spacingScale = {
  "0": `${space[0]}px`,
  "1": `${space[1]}px`,
  "2": `${space[2]}px`,
  "3": `${space[3]}px`,
  "4": `${space[4]}px`,
  "5": `${space[5]}px`,
  "6": `${space[6]}px`,
  "8": `${space[8]}px`,
  "10": `${space[10]}px`,
  "12": `${space[12]}px`,
  "16": `${space[16]}px`,
  "20": `${space[20]}px`,
  "24": `${space[24]}px`,
  "32": `${space[32]}px`,
  section: spacing.sectionY,
  "section-lg": spacing.sectionYLg,
  hero: spacing.heroY,
} as const;
