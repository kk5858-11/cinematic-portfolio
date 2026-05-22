"use client";

import { SectionReveal, StaggerChildren, StaggerItem } from "@/animations";
import { PostCard } from "@/components/blog/post-card";
import { TransitionLink } from "@/components/navigation/transition-link";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { ROUTES } from "@/constants/navigation";
import type { BlogPostMeta } from "@/types";
import { ArrowRight } from "lucide-react";

type WritingSectionProps = {
  posts: BlogPostMeta[];
};

export function WritingSection({ posts }: WritingSectionProps) {

  return (
    <SectionReveal id="writing">
      <Section size="lg">
        <Container>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              index="06"
              eyebrow="Journal"
              title="Writing"
              subtitle="Notes on motion, atmosphere, and building for the web."
              className="mb-0"
            />
            <TransitionLink
              href={ROUTES.blog}
              className="inline-flex shrink-0 items-center gap-2 text-sm text-muted hover:text-foreground"
            >
              View all
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </TransitionLink>
          </div>

          <StaggerChildren className="mt-16 grid gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <StaggerItem key={post.slug}>
                <PostCard post={post} />
              </StaggerItem>
            ))}
          </StaggerChildren>
        </Container>
      </Section>
    </SectionReveal>
  );
}
