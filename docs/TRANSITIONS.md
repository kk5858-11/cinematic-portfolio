# Route Transitions (Phase 7)

## Provider chain

```
layout: ThemeProvider → LenisProvider → MotionProvider → TransitionProvider
template: RouteTransition (AnimatePresence per pathname)
```

## Transition modes

| Route | Enter | Exit | Between |
|-------|-------|------|---------|
| `/` | fade + blur | fade + blur | — |
| `/blog`, `/blog/[slug]` | curtain reveal | curtain close → navigate | intra-blog: micro fade |
| `/projects/[slug]` | fade + blur | fade + blur | — |

## Navigation

Use `TransitionLink` instead of `Link` for internal routes:

```tsx
import { TransitionLink } from "@/components/navigation/transition-link";

<TransitionLink href="/blog">Writing</TransitionLink>
```

`navigateWithTransition(href)` from `useTransitionNav()` for programmatic navigation.

## Files

- `route-config.ts` — path rules
- `transition-context.tsx` — curtain orchestration + scroll reset
- `route-transition.tsx` — page AnimatePresence
- `curtain-overlay.tsx` — full-screen wipe
