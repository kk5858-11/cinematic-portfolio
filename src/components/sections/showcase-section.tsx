"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { BlurFade, SectionReveal } from "@/animations";
import { contentRhythm } from "@/animations/rhythm";
import { MagneticLink } from "@/components/interactive/magnetic-link";
import { TiltCard } from "@/components/interactive/tilt-card";
import { AmbientField } from "@/components/decorative";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { getTransition } from "@/animations/presets/timing";
import { sectionViewport } from "@/animations/rhythm";

export function ShowcaseSection() {
  const spotlightRef = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = spotlightRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--spot-x", `${x}%`);
    el.style.setProperty("--spot-y", `${y}%`);
  };

  return (
    <SectionReveal id="showcase">
      <AmbientField variant="default" className="section-padding">
        <Section className="!p-0">
          <Container>
            <SectionHeader
              index="04"
              eyebrow="Interactions"
              title="Showcase"
              subtitle="Micro-interactions that stay out of the way — tilt, magnetic pull, soft light."
            />

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <BlurFade delay={contentRhythm.primary}>
              <TiltCard className="h-full">
                <div className="card-glow-hover flex h-full min-h-[200px] flex-col justify-between surface-card p-8">
                  <p className="text-caption text-subtle">Tilt</p>
                  <p className="text-sm text-muted">
                    Subtle 3D perspective on hover — max 4° rotation.
                  </p>
                </div>
              </TiltCard>
            </BlurFade>

            <BlurFade delay={contentRhythm.secondary}>
              <div className="flex h-full min-h-[200px] flex-col justify-between surface-card p-8">
                <p className="text-caption text-subtle">Magnetic</p>
                <MagneticLink
                  href="#contact"
                  className="text-foreground"
                  strength={0.4}
                >
                  Pull toward cursor →
                </MagneticLink>
              </div>
            </BlurFade>

            <BlurFade delay={contentRhythm.tertiary}>
              <div
                ref={spotlightRef}
                onMouseMove={onMove}
                className="card-glow-hover relative flex h-full min-h-[200px] flex-col justify-between overflow-hidden surface-card p-8"
                style={{
                  background: `radial-gradient(280px circle at var(--spot-x, 50%) var(--spot-y, 50%),
                    var(--ds-color-spotlight), transparent 65%)`,
                }}
              >
                <p className="text-caption text-subtle relative z-10">Spotlight</p>
                <p className="text-sm text-muted relative z-10">
                  Cursor-driven ambient light — CSS only, no canvas.
                </p>
              </div>
            </BlurFade>
          </div>

          <motion.p
            className="mt-12 text-center text-caption text-subtle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={sectionViewport}
            transition={getTransition("enter")}
          >
            Interactions respect prefers-reduced-motion
          </motion.p>
          </Container>
        </Section>
      </AmbientField>
    </SectionReveal>
  );
}
