import type { Metadata } from "next";
import { BlurFade, StaggerChildren, StaggerItem } from "@/animations";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { PostCard } from "@/components/blog/post-card";
import { getAllPosts } from "@/data/blog";
import { SITE_NAME } from "@/constants/site";

export const metadata: Metadata = {
  title: "Writing",
  description: "Notes on motion, WebGL, and cinematic product design.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <Section size="lg" className="pt-8">
      <Container>
        <BlurFade>
          <SectionHeader
            title="Writing"
            subtitle="Slow thinking on design systems, motion, and digital space."
          />
        </BlurFade>

        <StaggerChildren className="mt-16 grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <StaggerItem key={post.slug}>
              <PostCard post={post} />
            </StaggerItem>
          ))}
        </StaggerChildren>

        <p className="mt-24 text-center text-caption text-subtle">
          {SITE_NAME} · {posts.length} essays
        </p>
      </Container>
    </Section>
  );
}
