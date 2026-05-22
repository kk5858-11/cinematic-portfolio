"use client";

import { BlurFade } from "@/animations";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/data/site";

export function StatsBar() {
  return (
    <BlurFade>
      <Container>
        <div className="grid grid-cols-2 gap-6 border border-border-subtle bg-surface/50 py-8 backdrop-blur-md md:grid-cols-4 md:gap-0 md:divide-x md:divide-border-subtle rounded-card">
          {siteConfig.stats.map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col items-center px-4 text-center md:px-8"
            >
              <span className="font-mono text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                {stat.value}
              </span>
              <span className="mt-2 text-caption text-subtle">{stat.label}</span>
              {i === 0 ? (
                <span className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-border-subtle px-2 py-0.5 text-[10px] tracking-wider text-muted uppercase">
                  <span className="status-pulse h-1.5 w-1.5 rounded-full bg-foreground" />
                  Live
                </span>
              ) : null}
            </div>
          ))}
        </div>
      </Container>
    </BlurFade>
  );
}
