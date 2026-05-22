# Design System

Apple + Linear + OpenAI — monochrome, cinematic, restrained.

## Source of truth

| Layer | Path | Role |
|-------|------|------|
| TypeScript tokens | `src/tokens/*.ts` | Programmatic (Framer, GSAP, types) |
| CSS variables | `src/styles/tokens.css` | Runtime theme, light/dark |
| Tailwind bridge | `src/app/globals.css` `@theme inline` | Utilities: `bg-background`, `text-hero`, `z-header` |
| Utilities | `src/styles/utilities.css` | Presets: `.text-hero`, `.container-site`, `.surface-card` |

## Color

**Dark (default)** — void `#0A0A0B`, surfaces `#111113`–`#1A1A1D`, foreground `#FAFAFA`, muted `#A1A1AA`.

**Light** — `html.light` swaps semantic vars.

| Tailwind | Semantic |
|----------|----------|
| `bg-background` | Page |
| `bg-surface` | Cards |
| `text-foreground` | Primary text |
| `text-muted` | Secondary |
| `border-border` | Dividers |

## Typography

| Class / token | Use |
|---------------|-----|
| `text-hero` | Hero headline |
| `text-display` | Section titles |
| `text-h1`–`text-h4` | Subheadings |
| `text-caption` | Labels (uppercase) |
| `font-mono` | Stack, meta |

Display tracking: `-0.04em` (hero), `-0.03em` (display).

## Spacing

8px grid in `tokens/spacing.ts`. Semantic:

- `section-padding` / `py-section`
- `section-padding-lg` / `py-section-lg`
- `hero-padding` / `py-hero`
- `container-site` — max 1280px

## Motion

| Token | Value |
|-------|-------|
| `duration-normal` | 700ms |
| `duration-cinematic` | 1800ms |
| `ease-smooth` | cubic-bezier(0.16, 1, 0.3, 1) |
| `ease-apple` | cubic-bezier(0.25, 0.1, 0.25, 1) |

Framer: `motionTransition` from `@/tokens/motion`.  
GSAP: `easeGsap` from `@/tokens/easing`.

## Radius

`rounded-button` · `rounded-card` · `rounded-panel`

## Shadow

Use sparingly. Prefer `border-border-subtle` + `surface-card`.  
`shadow-glow` for focus rings.

## Z-index

`z-webgl` → `z-content` → `z-header` → `z-overlay` → `z-transition` → `z-modal`

## Theme

`ThemeProvider` + `ThemeToggle` — `defaultTheme="dark"`, class-based.

## Layout primitives

- `Container` — horizontal shell
- `Section` — vertical rhythm
- `SectionHeader` — display + subtitle
