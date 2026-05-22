"use client";

import Image from "next/image";
import {
  BlurFade,
  SectionReveal,
  StaggerChildren,
  StaggerItem,
} from "@/animations";
import { contentRhythm } from "@/animations/rhythm";
import { AboutOrb, AmbientField, CornerFrame } from "@/components/decorative";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { siteConfig } from "@/data/site";

export function AboutSection() {
  return (
    <SectionReveal id="about">
      <AmbientField variant="warm" className="section-padding">
        <Section className="!p-0">
          <Container>
            <SectionHeader
              index="01"
              eyebrow="Profile"
              title="About"
              subtitle="Design-led engineering for brands that value silence over noise."
            />

            <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
              <BlurFade delay={contentRhythm.primary}>
                <div className="relative max-w-md">
                  <AboutOrb />
                  <div className="relative aspect-[4/5] overflow-hidden rounded-card border border-border-subtle bg-surface card-glow-hover">
                  <Image
                    src={siteConfig.aboutImage}
                    alt={`Portrait of ${siteConfig.name}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className="object-cover grayscale contrast-[1.05]"
                    priority={false}
                  />
                  <CornerFrame />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="font-mono text-xs tracking-widest text-subtle uppercase">
                      {siteConfig.location}
                    </p>
                  </div>
                  <div className="absolute right-4 top-4 rounded-full border border-border-subtle bg-background/80 px-3 py-1 font-mono text-[10px] tracking-wider text-muted backdrop-blur-sm">
                    Est. 2018
                  </div>
                  </div>
                </div>
              </BlurFade>

              <StaggerChildren className="flex flex-col justify-center gap-8">
                <StaggerItem>
                  <p className="text-lg leading-relaxed text-foreground-secondary md:text-xl">
                    {siteConfig.bio}
                  </p>
                </StaggerItem>
                <StaggerItem>
                  <p className="text-base leading-relaxed text-muted">
                    {siteConfig.tagline}
                  </p>
                </StaggerItem>
                <StaggerItem>
                  <ul className="flex flex-wrap gap-2">
                    {siteConfig.highlights.map((tag) => (
                      <li
                        key={tag}
                        className="hero-chip rounded-full px-3 py-1 font-mono text-xs tracking-wide text-muted"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </StaggerItem>
                <StaggerItem>
                  <dl className="grid grid-cols-2 gap-6 border-t border-border-subtle pt-8">
                    <div className="surface-glass rounded-card p-4">
                      <dt className="text-caption text-subtle">Focus</dt>
                      <dd className="mt-2 text-sm text-foreground">Creative Dev</dd>
                    </div>
                    <div className="surface-glass rounded-card p-4">
                      <dt className="text-caption text-subtle">Approach</dt>
                      <dd className="mt-2 text-sm text-foreground">Cinematic UX</dd>
                    </div>
                  </dl>
                </StaggerItem>
              </StaggerChildren>
            </div>
          </Container>
        </Section>
      </AmbientField>
    </SectionReveal>
  );
}
