import "server-only";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/lib/mdx/mdx-components";
import type { BlogIllustrationId, BlogPostMeta } from "@/types";

const ILLUSTRATION_IDS = new Set<BlogIllustrationId>([
  "cinematic",
  "webgl",
  "cosmic",
  "default",
]);

function parseIllustration(slug: string, raw?: unknown): BlogIllustrationId {
  if (typeof raw === "string" && ILLUSTRATION_IDS.has(raw as BlogIllustrationId)) {
    return raw as BlogIllustrationId;
  }
  if (slug.includes("webgl")) return "webgl";
  if (slug.includes("cinematic")) return "cinematic";
  if (slug.includes("conscious") || slug.includes("cosmic")) return "cosmic";
  return "default";
}

const BLOG_DIR = path.join(process.cwd(), "content/blog");

function listMdxFiles(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));
}

function parseMeta(slug: string, raw: string): BlogPostMeta {
  const { data } = matter(raw);
  return {
    slug,
    title: String(data.title ?? slug),
    description: String(data.description ?? ""),
    date: String(data.date ?? ""),
    readingTime: data.readingTime ? String(data.readingTime) : undefined,
    tags: Array.isArray(data.tags) ? data.tags.map(String) : undefined,
    illustration: parseIllustration(slug, data.illustration),
    coverImage:
      typeof data.coverImage === "string" ? String(data.coverImage) : undefined,
  };
}

/** Sync metadata for lists, sitemap, static params */
export function getAllPosts(): BlogPostMeta[] {
  return listMdxFiles()
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
      return parseMeta(slug, raw);
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getAllSlugs(): string[] {
  return listMdxFiles().map((f) => f.replace(/\.mdx$/, ""));
}

export function getPostMetaBySlug(slug: string): BlogPostMeta | undefined {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return undefined;
  const raw = fs.readFileSync(filePath, "utf8");
  return parseMeta(slug, raw);
}

/** Compiled MDX body for article pages */
export async function getCompiledPost(slug: string) {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return undefined;

  const raw = fs.readFileSync(filePath, "utf8");
  const { content, frontmatter } = await compileMDX({
    source: raw,
    components: mdxComponents,
    options: { parseFrontmatter: true },
  });

  const meta = parseMeta(slug, raw);
  if (frontmatter.title) meta.title = String(frontmatter.title);
  if (frontmatter.description) meta.description = String(frontmatter.description);

  return { meta, content };
}
