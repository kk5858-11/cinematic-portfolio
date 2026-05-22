import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "spatial-portfolio",
    title: "Spatial Portfolio",
    description:
      "A monochrome personal universe with scroll-driven narrative and WebGL atmosphere.",
    tags: ["Next.js", "R3F", "GSAP"],
    year: "2026",
    coverImage: "/images/gallery/01-cosmic-consciousness.png",
    coverArt: "spatial",
    featured: true,
  },
  {
    slug: "motion-system",
    title: "Motion System",
    description:
      "Unified Framer + GSAP presets for cinematic route and section transitions.",
    tags: ["Framer Motion", "TypeScript"],
    year: "2026",
    coverImage: "/images/gallery/08-neural-energy.png",
    coverArt: "motion",
    featured: true,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
