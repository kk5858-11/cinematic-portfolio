"use client";

import { motion } from "framer-motion";
import { PostIllustration } from "@/components/blog/post-illustration";
import { TransitionLink } from "@/components/navigation/transition-link";
import { ROUTES } from "@/constants/navigation";
import { getTransition } from "@/animations/presets/timing";
import type { BlogPostMeta } from "@/types";

type PostCardProps = {
  post: BlogPostMeta;
};

export function PostCard({ post }: PostCardProps) {
  const illustration = post.illustration ?? "default";

  return (
    <TransitionLink
      href={ROUTES.blogPost(post.slug)}
      className="group block overflow-hidden surface-card transition-colors duration-normal ease-smooth hover:border-border card-glow-hover"
    >
      <motion.div
        className="overflow-hidden"
        whileHover={{ scale: 1.02 }}
        transition={getTransition("micro")}
      >
        <PostIllustration
          id={illustration}
          coverImage={post.coverImage}
          title={post.title}
        />
      </motion.div>

      <div className="p-8">
        <time className="text-caption text-subtle">{post.date}</time>
        {post.readingTime ? (
          <span className="text-caption text-subtle"> · {post.readingTime}</span>
        ) : null}
        <h2 className="mt-4 text-h3 text-foreground transition-colors duration-normal ease-smooth group-hover:text-foreground-secondary">
          {post.title}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">{post.description}</p>
        {post.tags?.length ? (
          <ul className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-border-subtle px-3 py-1 font-mono text-xs text-subtle"
              >
                {tag}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </TransitionLink>
  );
}
