"use client";

import { SectionReveal, StaggerChildren, StaggerItem } from "@/animations";
import { AmbientField } from "@/components/decorative";
import { ProjectCard } from "@/components/projects/project-card";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  const featured = projects.filter((p) => p.featured);

  return (
    <SectionReveal id="projects">
      <AmbientField variant="cool" className="section-padding-lg">
        <Section className="!p-0">
          <Container>
            <SectionHeader
              index="02"
              eyebrow="Work"
              title="Projects"
              subtitle="Selected work — spatial layouts, motion systems, and restrained WebGL."
            />

            <StaggerChildren className="mt-16 grid gap-8 md:grid-cols-2">
              {featured.map((project, i) => (
                <StaggerItem key={project.slug}>
                  <div className="relative">
                    {i === 0 ? (
                      <span className="absolute -top-3 left-6 z-20 rounded-full border border-border-subtle bg-background px-3 py-0.5 font-mono text-[10px] tracking-wider text-subtle">
                        Featured
                      </span>
                    ) : null}
                    <ProjectCard project={project} />
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
