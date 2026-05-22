"use client";

import { SectionReveal, StaggerChildren, StaggerItem } from "@/animations";
import { AmbientField } from "@/components/decorative";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { experience } from "@/data/experience";

export function ExperienceSection() {
  return (
    <SectionReveal id="experience">
      <AmbientField variant="default" className="section-padding">
        <Section className="!p-0">
          <Container>
          <SectionHeader
            index="07"
            eyebrow="Timeline"
            title="Experience"
            subtitle="A timeline of roles where design and engineering met."
          />

          <div className="relative mt-16 max-w-3xl">
            <div
              className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-foreground/30 via-border-subtle to-transparent md:left-[7px]"
              aria-hidden
            />

            <StaggerChildren className="space-y-12">
              {experience.map((item, index) => (
                <StaggerItem key={`${item.company}-${item.period}`}>
                  <article className="relative pl-8 md:pl-16">
                    <div
                      className="absolute left-0 top-1.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full border border-foreground/40 bg-foreground shadow-[0_0_12px_var(--ds-color-glow)] md:left-[7px]"
                      aria-hidden
                    />
                    <time className="text-caption text-subtle">{item.period}</time>
                    <h3 className="mt-3 text-h3 text-foreground">
                      {item.role}
                      <span className="text-muted"> · {item.company}</span>
                    </h3>
                    {item.description ? (
                      <p className="mt-4 text-sm leading-relaxed text-muted">
                        {item.description}
                      </p>
                    ) : null}
                    {index < experience.length - 1 ? (
                      <div className="mt-12 h-px w-full bg-border-subtle/50 md:hidden" />
                    ) : null}
                  </article>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
          </Container>
        </Section>
      </AmbientField>
    </SectionReveal>
  );
}
