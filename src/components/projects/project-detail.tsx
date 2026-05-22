"use client";

import { BlurFade, SharedLayoutRoot } from "@/animations";
import { contentRhythm } from "@/animations/rhythm";
import { ProjectCover } from "@/components/projects/project-cover";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { TransitionLink } from "@/components/navigation/transition-link";
import { ROUTES } from "@/constants/navigation";
import type { Project } from "@/types";

type ProjectDetailProps = {
  project: Project;
};

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <SharedLayoutRoot>
      <Section size="lg" className="pt-8">
        <Container>
          <BlurFade delay={contentRhythm.header}>
            <TransitionLink
              href={`${ROUTES.home}#projects`}
              className="text-caption text-muted transition-colors duration-normal ease-smooth hover:text-foreground"
            >
              ← Projects
            </TransitionLink>
          </BlurFade>

          <ProjectCover
            slug={project.slug}
            title={project.title}
            year={project.year}
            coverImage={project.coverImage}
            coverArt={project.coverArt}
            className="mt-12 max-w-4xl rounded-card border border-border-subtle card-glow-hover"
            priority
            interactive
          />

          <header className="mt-12 max-w-3xl">
            <h1 className="text-display text-foreground">{project.title}</h1>
            <p className="mt-6 text-lg text-muted">{project.description}</p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-border-subtle px-3 py-1 font-mono text-xs text-subtle"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </header>
        </Container>
      </Section>
    </SharedLayoutRoot>
  );
}
