/**
 * Central registry of CSS custom property names.
 * Use when setting inline styles or GSAP/CSS from TypeScript.
 */

export const ds = {
  color: {
    background: "--ds-color-background",
    foreground: "--ds-color-foreground",
    foregroundSecondary: "--ds-color-foreground-secondary",
    muted: "--ds-color-muted",
    subtle: "--ds-color-subtle",
    border: "--ds-color-border",
    borderSubtle: "--ds-color-border-subtle",
    surface: "--ds-color-surface",
    elevated: "--ds-color-elevated",
    spotlight: "--ds-color-spotlight",
    aurora: "--ds-color-aurora",
    ring: "--ds-color-ring",
  },
  ease: {
    smooth: "--ds-ease-smooth",
    enter: "--ds-ease-enter",
    exit: "--ds-ease-exit",
    inOut: "--ds-ease-in-out",
    apple: "--ds-ease-apple",
    subtle: "--ds-ease-subtle",
    emphasized: "--ds-ease-emphasized",
  },
  duration: {
    instant: "--ds-duration-instant",
    fast: "--ds-duration-fast",
    normal: "--ds-duration-normal",
    slow: "--ds-duration-slow",
    cinematic: "--ds-duration-cinematic",
  },
  text: {
    hero: "--ds-text-hero",
    display: "--ds-text-display",
    h1: "--ds-text-h1",
  },
  radius: {
    card: "--ds-radius-card",
    button: "--ds-radius-button",
  },
  shadow: {
    sm: "--ds-shadow-sm",
    md: "--ds-shadow-md",
  },
  z: {
    header: "--ds-z-header",
    overlay: "--ds-z-overlay",
    transition: "--ds-z-transition",
  },
} as const;

/** Helper: var(--token-name) */
export function cssVar(name: string, fallback?: string) {
  return fallback ? `var(${name}, ${fallback})` : `var(${name})`;
}
