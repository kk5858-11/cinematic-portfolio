"use client";

import { TiltCard } from "@/components/interactive/tilt-card";
import { TransitionLink } from "@/components/navigation/transition-link";
import { ProjectCover } from "@/components/projects/project-cover";
import { ROUTES } from "@/constants/navigation";
import type { Project } from "@/types";
import { ArrowUpRight } from "lucide-react";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <TransitionLink
      href={ROUTES.project(project.slug)}
      className="group block h-full"
    >
      <TiltCard className="h-full">
        <article className="card-glow-hover flex h-full flex-col overflow-hidden surface-card transition-colors duration-normal ease-smooth group-hover:border-border">
          <ProjectCover
            slug={project.slug}
            title={project.title}
            year={project.year}
            coverImage={project.coverImage}
            coverArt={project.coverArt}
            className="rounded-none border-0"
          />

          <div className="flex flex-1 flex-col p-6 md:p-8">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-h3 text-foreground">{project.title}</h3>
              <ArrowUpRight
                className="h-5 w-5 shrink-0 text-muted transition-transform duration-normal ease-smooth group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
                strokeWidth={1.5}
              />
            </div>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
              {project.description}
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {project.tags.slice(0, 3).map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-border-subtle px-2.5 py-0.5 font-mono text-xs text-subtle"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </article>
      </TiltCard>
    </TransitionLink>
  );
}
