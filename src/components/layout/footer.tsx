"use client";

import { Container } from "@/components/layout/container";
import { AnchorLink } from "@/components/navigation/anchor-link";
import { TransitionLink } from "@/components/navigation/transition-link";
import { NAV_ITEMS, ROUTES } from "@/constants/navigation";
import { siteConfig } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border-subtle py-12">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent"
        aria-hidden
      />
      <Container className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-medium text-foreground">{siteConfig.name}</p>
          <p className="mt-1 text-caption text-subtle">
            © {year} · Crafted with restraint
          </p>
        </div>

        <nav className="flex flex-wrap gap-6">
          {NAV_ITEMS.map((item) => (
            <AnchorLink key={item.href} href={item.href}>
              {item.label}
            </AnchorLink>
          ))}
          <TransitionLink href={ROUTES.blog} className="text-sm text-muted hover:text-foreground">
            Blog
          </TransitionLink>
        </nav>
      </Container>
    </footer>
  );
}
