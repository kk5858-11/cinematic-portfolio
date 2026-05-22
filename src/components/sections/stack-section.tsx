"use client";

import { motion } from "framer-motion";
import { SectionReveal, StaggerChildren, StaggerItem } from "@/animations";
import { getTransition } from "@/animations/presets/timing";
import { sectionViewport } from "@/animations/rhythm";
import { AmbientField } from "@/components/decorative";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { techStackGroups } from "@/data/stack";

export function StackSection() {
  return (
    <SectionReveal id="stack">
      <AmbientField variant="grid" showGrid className="section-padding">
        <Section className="!p-0">
          <Container>
            <SectionHeader
              index="05"
              eyebrow="Toolkit"
              title="Stack"
              subtitle="Tools chosen for craft, performance, and long-term clarity."
            />

            <StaggerChildren className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {techStackGroups.map((group) => (
                <StaggerItem key={group.label}>
                  <div className="surface-card card-glow-hover p-6">
                    <h3 className="text-caption text-subtle">{group.label}</h3>
                    <ul className="mt-6 space-y-5">
                      {group.items.map((item) => (
                        <li key={item.name}>
                          <div className="flex items-center justify-between gap-2">
                            <span className="font-mono text-sm tracking-wide text-foreground-secondary">
                              {item.name}
                            </span>
                            <span className="font-mono text-[10px] text-subtle">
                              {item.level}%
                            </span>
                          </div>
                          <div className="skill-bar-track mt-2">
                            <motion.div
                              className="skill-bar-fill"
                              initial={{ scaleX: 0 }}
                              whileInView={{ scaleX: item.level / 100 }}
                              viewport={sectionViewport}
                              transition={getTransition("section")}
                            />
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </Container>
        </Section>
      </AmbientField>
    </SectionReveal>
  );
}
