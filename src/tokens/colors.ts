/**
 * Color tokens — monochrome, Apple / Linear / OpenAI.
 * Runtime theme via CSS variables (--ds-color-*). Values here = dark default.
 */

export const palette = {
  void: "#0A0A0B",
  voidElevated: "#0E0E10",
  surface: "#111113",
  surfaceHover: "#161618",
  elevated: "#1A1A1D",
  overlay: "#222225",
  border: "#2A2A2E",
  borderSubtle: "#1F1F23",
  foreground: "#FAFAFA",
  foregroundSecondary: "#E4E4E7",
  muted: "#A1A1AA",
  subtle: "#71717A",
  disabled: "#52525B",
  inverse: "#0A0A0B",
  accent: "#FAFAFA",
  accentMuted: "#D4D4D8",
  spotlight: "rgba(250, 250, 250, 0.06)",
  glow: "rgba(250, 250, 250, 0.04)",
  aurora: "rgba(228, 228, 231, 0.08)",
  success: "#A1A1AA",
  focus: "rgba(250, 250, 250, 0.5)",
} as const;

/** Light theme palette (reference — CSS handles swap) */
export const paletteLight = {
  void: "#FAFAFA",
  voidElevated: "#F4F4F5",
  surface: "#FFFFFF",
  surfaceHover: "#F4F4F5",
  elevated: "#FFFFFF",
  overlay: "#E4E4E7",
  border: "#E4E4E7",
  borderSubtle: "#F4F4F5",
  foreground: "#0A0A0B",
  foregroundSecondary: "#18181B",
  muted: "#52525B",
  subtle: "#71717A",
  disabled: "#A1A1AA",
  inverse: "#FAFAFA",
  accent: "#0A0A0B",
  accentMuted: "#27272A",
  spotlight: "rgba(10, 10, 11, 0.04)",
  glow: "rgba(10, 10, 11, 0.03)",
  aurora: "rgba(24, 24, 27, 0.06)",
  success: "#52525B",
  focus: "rgba(10, 10, 11, 0.4)",
} as const;

/** Semantic aliases for components */
export const colors = {
  background: palette.void,
  foreground: palette.foreground,
  card: palette.surface,
  cardForeground: palette.foreground,
  popover: palette.elevated,
  popoverForeground: palette.foreground,
  primary: palette.accent,
  primaryForeground: palette.inverse,
  secondary: palette.elevated,
  secondaryForeground: palette.muted,
  muted: palette.muted,
  mutedForeground: palette.subtle,
  accent: palette.elevated,
  accentForeground: palette.foreground,
  destructive: palette.subtle,
  border: palette.border,
  input: palette.border,
  ring: palette.focus,
} as const;

/** CSS variable names for programmatic use */
export const colorCssVar = {
  background: "var(--ds-color-background)",
  foreground: "var(--ds-color-foreground)",
  muted: "var(--ds-color-muted)",
  border: "var(--ds-color-border)",
  surface: "var(--ds-color-surface)",
  elevated: "var(--ds-color-elevated)",
  spotlight: "var(--ds-color-spotlight)",
  aurora: "var(--ds-color-aurora)",
} as const;

export type PaletteKey = keyof typeof palette;
