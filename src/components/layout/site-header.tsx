"use client";

import { TransitionLink } from "@/components/navigation/transition-link";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Container } from "@/components/layout/container";
import { ROUTES } from "@/constants/navigation";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

type SiteHeaderProps = {
  className?: string;
};

export function SiteHeader({ className }: SiteHeaderProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-header border-b border-border-subtle bg-background/80 backdrop-blur-md",
        className,
      )}
    >
      <Container className="flex h-header items-center justify-between">
        <TransitionLink
          href={ROUTES.home}
          className="text-sm font-medium tracking-snug text-foreground transition-colors duration-normal ease-smooth hover:text-muted"
        >
          {siteConfig.name}
        </TransitionLink>

        <nav className="flex items-center gap-6 md:gap-8">
          <TransitionLink
            href={ROUTES.blog}
            className="text-sm text-muted transition-colors duration-normal ease-smooth hover:text-foreground"
          >
            Writing
          </TransitionLink>
          <TransitionLink
            href={`${ROUTES.home}#contact`}
            className="hidden text-sm text-muted transition-colors duration-normal ease-smooth hover:text-foreground sm:inline"
          >
            Contact
          </TransitionLink>
          <ThemeToggle />
        </nav>
      </Container>
    </header>
  );
}
