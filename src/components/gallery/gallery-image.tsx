"use client";

import { TiltCard } from "@/components/interactive/tilt-card";
import type { GalleryItem } from "@/data/gallery";
import { cn } from "@/lib/utils";

type GalleryImageProps = {
  item: GalleryItem;
  index: number;
  className?: string;
  /** 顶部精选双栏：统一铺满框架 */
  featuredTile?: boolean;
};

export function GalleryImage({
  item,
  index,
  className,
  featuredTile = false,
}: GalleryImageProps) {
  return (
    <TiltCard className={cn("h-full", className)}>
      <figure
        className={cn(
          "group relative h-full min-h-[220px] overflow-hidden surface-card card-glow-hover bg-black",
          featuredTile && "min-h-[360px] md:min-h-[520px]",
        )}
      >
        <img
          src={item.src}
          alt={item.title}
          loading={featuredTile ? "eager" : "lazy"}
          decoding="async"
          className={cn(
            "absolute inset-0 size-full object-cover object-center transition-transform duration-slow ease-smooth group-hover:scale-[1.02]",
            featuredTile
              ? "contrast-[1.08] brightness-105"
              : "grayscale contrast-[1.06] brightness-95",
          )}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-0 transition-opacity duration-normal group-hover:opacity-100" />
      </figure>
    </TiltCard>
  );
}
