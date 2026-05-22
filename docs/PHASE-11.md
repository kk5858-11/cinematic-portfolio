# Phase 11 — Production polish

## Done

- **Build fix**: `mobile-nav` uses `getTransition("micro")` (valid preset).
- **Turbopack**: `turbopack.root` in `next.config.ts` silences lockfile warning.
- **UI primitives**: `Button`, `Input`, `Textarea` in `src/components/ui/`.
- **Contact**: `ContactForm` (mailto compose, no server storage).
- **SEO**: `baseMetadata`, `pageMetadata`, `WebsiteJsonLd`, `opengraph-image.tsx`.
- **MDX blog**: `content/blog/*.mdx` + `src/lib/mdx/posts.ts` via `next-mdx-remote/rsc`.

## Still optional

- Contact API (Resend / Nodemailer).
- Replace placeholder copy in `src/data/site.ts`.
- Lighthouse CI, light-theme WebGL tuning.
