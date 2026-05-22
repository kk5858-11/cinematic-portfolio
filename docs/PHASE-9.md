# Phase 9 — Motion Rhythm & Performance

## Motion rhythm (`animations/rhythm.ts`)

Single file to tune site-wide timing:

| Token | Purpose |
|-------|---------|
| `heroRhythm` | Hero caption, title, CTA delays |
| `contentRhythm` | Section inner blocks |
| `sectionViewport` | Unified whileInView threshold |
| `scrollRhythm` | GSAP preset keys |

## Performance

| Optimization | Implementation |
|--------------|------------------|
| Code splitting | `dynamic()` for below-fold sections + `HomeSections` |
| Images | `next/image` + AVIF/WebP in `next.config` |
| Package imports | `optimizePackageImports` for framer, lucide, r3f |
| ScrollTrigger | `ScrollTriggerRefresh` on load/resize |
| WebGL | LazyWebGL + tier gating (unchanged) |
| Shared layout | `LayoutGroupProvider` in root layout |

## Improvements (pre-Phase 9)

- About portrait + project thumbnails (`public/images/`)
- Mobile navigation (`MobileNav`)
- `ProjectCover` + `layoutId` for list ↔ detail
