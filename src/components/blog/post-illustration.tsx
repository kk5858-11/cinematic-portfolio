"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import type { BlogIllustrationId } from "@/types";

const BLOG_COVER_IMAGES: Record<BlogIllustrationId, string> = {
  cinematic: "/images/gallery/11-cosmic-profile.png",
  webgl: "/images/gallery/03-circuit-fingerprint.png",
  cosmic: "/images/gallery/01-cosmic-consciousness.png",
  default: "/images/gallery/07-magical-book.png",
};

type PostIllustrationProps = {
  id: BlogIllustrationId;
  coverImage?: string;
  title?: string;
  className?: string;
};

export function PostIllustration({
  id,
  coverImage,
  title = "",
  className,
}: PostIllustrationProps) {
  const src = coverImage ?? BLOG_COVER_IMAGES[id];

  return (
    <div
      className={cn(
        "blog-illustration relative aspect-[2/1] w-full overflow-hidden rounded-t-card border-b border-border-subtle bg-elevated",
        className,
      )}
    >
      <Image
        src={src}
        alt={title ? `Cover for ${title}` : ""}
        fill
        sizes="(max-width: 768px) 100vw, 400px"
        className="object-cover grayscale contrast-[1.05] brightness-90 transition-transform duration-slow ease-smooth group-hover:scale-[1.03]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-border-subtle/50" />
    </div>
  );
}
