"use client";

import { ArrowDownRight } from "lucide-react";
import { BlurFade, StaggerLine } from "@/animations";
import { heroRhythm } from "@/animations/rhythm";
import { MagneticLink } from "@/components/interactive/magnetic-link";
import { AnchorLink } from "@/components/navigation/anchor-link";
import { TransitionLink } from "@/components/navigation/transition-link";
import { MobileNav } from "@/components/layout/mobile-nav";
import { NAV_ITEMS, ROUTES } from "@/constants/navigation";
import { ScrollIndicator } from "@/components/interactive/scroll-indicator";
import { Container } from "@/components/layout/container";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

type HeroContentProps = {
  className?: string;
};

export function HeroContent({ className }: HeroContentProps) {
  return (
    <div className={cn("relative z-content flex min-h-screen flex-col", className)}>
      <header className="fixed inset-x-0 top-0 z-header">
        <Container className="flex h-header items-center justify-between">
          <TransitionLink href={ROUTES.home} className="font-medium text-foreground">
            {siteConfig.name}
          </TransitionLink>
          <nav className="hidden items-center gap-6 lg:flex lg:gap-8">
            {NAV_ITEMS.filter((item) => item.href !== "#contact").map((item) =>
              item.href === "#writing" ? (
                <TransitionLink
                  key={item.href}
                  href={ROUTES.blog}
                  className="text-muted hover:text-foreground"
                >
                  {item.label}
                </TransitionLink>
              ) : (
                <AnchorLink key={item.href} href={item.href}>
                  {item.label}
                </AnchorLink>
              ),
            )}
            <AnchorLink href="#contact">Contact</AnchorLink>
          </nav>
          <div className="flex items-center gap-3">
            <ThemeToggle className="hidden lg:inline-flex" />
            <MobileNav />
          </div>
        </Container>
      </header>

      <Container className="flex flex-1 flex-col justify-center pt-header pb-24">
        <BlurFade delay={heroRhythm.captionDelay}>
          <div className="mb-8 flex flex-wrap items-center gap-3 md:mb-10">
            <p className="text-caption">{siteConfig.role}</p>
            <span className="hero-chip inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-[10px] tracking-wider text-muted">
              <span className="status-pulse h-1.5 w-1.5 rounded-full bg-foreground" />
              Open to work
            </span>
          </div>
        </BlurFade>

        <StaggerLine
          lines={[...siteConfig.heroTitleLines]}
          className="text-hero max-w-[14ch] text-foreground md:max-w-none"
        />

        <BlurFade delay={heroRhythm.taglineDelay} y={18}>
          <p className="content-prose mt-10 max-w-xl text-lg leading-relaxed text-muted md:mt-12 md:text-xl">
            {siteConfig.tagline}
          </p>
        </BlurFade>

        <BlurFade delay={heroRhythm.ctaDelay} y={14}>
          <div className="mt-12 flex flex-wrap items-center gap-6 md:mt-14">
            <MagneticLink
              href={`mailto:${siteConfig.email}`}
              className="group inline-flex items-center gap-2 rounded-button border border-border-subtle bg-surface/50 px-5 py-2.5 text-foreground backdrop-blur-sm hover:border-border hover:bg-surface"
              strength={0.25}
            >
              Start a conversation
              <ArrowDownRight
                className="h-4 w-4 transition-transform duration-normal ease-smooth group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={1.5}
              />
            </MagneticLink>
            <div className="hidden flex-wrap gap-2 sm:flex">
              {siteConfig.highlights.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="hero-chip rounded-full px-2.5 py-1 font-mono text-[10px] tracking-wide text-subtle"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </BlurFade>
      </Container>

      <div className="absolute inset-x-0 bottom-10 flex justify-center">
        <ScrollIndicator />
      </div>
    </div>
  );
}
