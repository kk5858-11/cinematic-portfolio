export type NavItem = {
  label: string;
  href: string;
};

export type ProjectCoverArtId = "spatial" | "motion";

export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  year: string;
  href?: string;
  /** Cover photo (primary — visible in UI) */
  coverImage: string;
  /** SVG motion layer id */
  coverArt: ProjectCoverArtId;
  featured?: boolean;
};

export type ExperienceItem = {
  period: string;
  role: string;
  company: string;
  description?: string;
};

export type BlogIllustrationId = "cinematic" | "webgl" | "cosmic" | "default";

export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime?: string;
  tags?: string[];
  illustration?: BlogIllustrationId;
  /** Optional cover photo — overrides SVG when set */
  coverImage?: string;
};

export type WebGLQuality = "high" | "medium" | "low" | "static";
