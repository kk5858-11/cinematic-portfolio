"use client";

import { ArrowUpRight } from "lucide-react";
import { BlurFade, SectionReveal } from "@/animations";
import { contentRhythm } from "@/animations/rhythm";
import { MagneticLink } from "@/components/interactive/magnetic-link";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { AmbientField } from "@/components/decorative";
import { ContactForm } from "@/components/sections/contact-form";
import { siteConfig } from "@/data/site";

const socialEntries = [
  { label: "GitHub", href: siteConfig.social.github },
  { label: "LinkedIn", href: siteConfig.social.linkedin },
  { label: "Twitter", href: siteConfig.social.twitter },
] as const;

export function ContactSection() {
  return (
    <SectionReveal id="contact">
      <AmbientField variant="warm" className="section-padding-lg">
        <Section className="!p-0">
          <Container>
            <SectionHeader
              index="08"
              eyebrow="Connect"
              title="Contact"
              subtitle="Open to selective collaborations and thoughtful conversations."
              align="center"
              className="mx-auto"
            />

          <BlurFade delay={contentRhythm.primary} className="mx-auto max-w-2xl text-center">
            <MagneticLink
              href={`mailto:${siteConfig.email}`}
              className="card-glow-hover inline-flex items-center gap-3 rounded-card border border-border-subtle bg-surface/80 px-8 py-5 text-h3 text-foreground backdrop-blur-sm transition-colors duration-normal ease-smooth hover:border-border hover:bg-elevated"
              strength={0.2}
            >
              {siteConfig.email}
              <ArrowUpRight className="h-6 w-6" strokeWidth={1.5} />
            </MagneticLink>

            <ContactForm />

            <ul className="mt-12 flex flex-wrap items-center justify-center gap-8">
              {socialEntries.map(({ label, href }) => (
                <li key={label}>
                  <MagneticLink
                    href={href}
                    native
                    className="font-mono text-sm tracking-wide text-muted"
                    strength={0.3}
                  >
                    {label}
                  </MagneticLink>
                </li>
              ))}
            </ul>
          </BlurFade>
          </Container>
        </Section>
      </AmbientField>
    </SectionReveal>
  );
}
