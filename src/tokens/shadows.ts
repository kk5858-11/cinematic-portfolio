/**
 * Shadow system — minimal; prefer border + blur (Linear / OpenAI).
 */

export const shadows = {
  none: "none",
  /** Hairline depth */
  xs: "0 1px 2px 0 rgb(0 0 0 / 0.25)",
  /** Cards at rest */
  sm: "0 2px 8px -2px rgb(0 0 0 / 0.2)",
  /** Elevated panels */
  md: "0 8px 24px -8px rgb(0 0 0 / 0.35)",
  /** Modals — use sparingly */
  lg: "0 16px 48px -12px rgb(0 0 0 / 0.45)",
  /** Inner highlight (light mode cards) */
  inner: "inset 0 1px 0 0 rgb(255 255 255 / 0.04)",
  /** Focus ring substitute */
  glow: "0 0 0 1px rgb(255 255 255 / 0.08)",
} as const;

/** Light theme shadows — softer */
export const shadowsLight = {
  none: "none",
  xs: "0 1px 2px 0 rgb(0 0 0 / 0.04)",
  sm: "0 2px 8px -2px rgb(0 0 0 / 0.06)",
  md: "0 8px 24px -8px rgb(0 0 0 / 0.08)",
  lg: "0 16px 48px -12px rgb(0 0 0 / 0.1)",
  inner: "inset 0 1px 0 0 rgb(255 255 255 / 0.8)",
  glow: "0 0 0 1px rgb(0 0 0 / 0.06)",
} as const;

export const shadowSemantic = {
  card: "var(--ds-shadow-sm)",
  dropdown: "var(--ds-shadow-md)",
  modal: "var(--ds-shadow-lg)",
} as const;
