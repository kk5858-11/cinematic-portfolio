import type { NavItem } from "@/types";

/** Anchor sections on home — Phase 8 */
export const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Gallery", href: "#gallery" },
  { label: "Showcase", href: "#showcase" },
  { label: "Stack", href: "#stack" },
  { label: "Writing", href: "#writing" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const ROUTES = {
  home: "/",
  blog: "/blog",
  project: (slug: string) => `/projects/${slug}`,
  blogPost: (slug: string) => `/blog/${slug}`,
} as const;
