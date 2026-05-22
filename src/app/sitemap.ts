import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/data/blog";
import { getAllProjectSlugs } from "@/data/projects";
import { SITE_URL } from "@/constants/site";
import { ROUTES } from "@/constants/navigation";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogEntries = getAllSlugs().map((slug) => ({
    url: `${SITE_URL}${ROUTES.blogPost(slug)}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const projectEntries = getAllProjectSlugs().map((slug) => ({
    url: `${SITE_URL}${ROUTES.project(slug)}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}${ROUTES.blog}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    ...blogEntries,
    ...projectEntries,
  ];
}
