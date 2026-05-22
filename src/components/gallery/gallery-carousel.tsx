"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { GalleryImage } from "@/components/gallery/gallery-image";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import type { GalleryItem } from "@/data/gallery";
import { cn } from "@/lib/utils";

const INTERVAL_MS = 4500;

type GalleryCarouselProps = {
  items: GalleryItem[];
  className?: string;
};

export function GalleryCarousel({ items, className }: GalleryCarouselProps) {
  const reducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = items.length;

  const go = useCallback(
    (delta: number) => {
      setIndex((i) => (i + delta + count) % count);
    },
    [count],
  );

  useEffect(() => {
    if (reducedMotion || paused || count <= 1) return;
    const id = window.setInterval(() => go(1), INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [reducedMotion, paused, count, go]);

  const current = items[index];
  if (!current) return null;

  return (
    <div
      className={cn("relative mt-16", className)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false);
      }}
    >
      <div className="relative min-h-[360px] overflow-hidden surface-card md:min-h-[520px]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={current.id}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: reducedMotion ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <GalleryImage
              item={current}
              index={index}
              featuredTile
              className="h-full"
            />
          </motion.div>
        </AnimatePresence>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-background/90 via-background/50 to-transparent px-6 pb-6 pt-16 md:px-8 md:pb-8">
          <p className="text-caption text-subtle">
            {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
          </p>
          <p className="mt-1 font-display text-lg text-foreground md:text-xl">
            {current.title}
          </p>
          {current.caption ? (
            <p className="mt-1 text-sm text-muted">{current.caption}</p>
          ) : null}
        </div>
      </div>

      {count > 1 ? (
        <>
          <button
            type="button"
            aria-label="上一张"
            onClick={() => go(-1)}
            className="absolute left-3 top-1/2 z-20 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-border-subtle bg-background/80 text-foreground backdrop-blur-sm transition-colors hover:border-border hover:bg-background md:left-5 md:size-11"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            aria-label="下一张"
            onClick={() => go(1)}
            className="absolute right-3 top-1/2 z-20 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-border-subtle bg-background/80 text-foreground backdrop-blur-sm transition-colors hover:border-border hover:bg-background md:right-5 md:size-11"
          >
            <ChevronRight className="size-5" />
          </button>

          <button
            type="button"
            aria-label={paused ? "继续播放" : "暂停播放"}
            onClick={() => setPaused((p) => !p)}
            className="absolute right-3 top-3 z-20 flex size-9 items-center justify-center rounded-full border border-border-subtle bg-background/80 text-foreground backdrop-blur-sm transition-colors hover:border-border md:right-5 md:top-5"
          >
            {paused ? <Play className="size-3.5" /> : <Pause className="size-3.5" />}
          </button>

        </>
      ) : null}

      {count > 1 ? (
        <div
          className="mt-4 flex justify-center gap-1.5"
          role="tablist"
          aria-label="画廊幻灯片"
        >
          {items.map((item, i) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`第 ${i + 1} 张：${item.title}`}
              onClick={() => setIndex(i)}
              className={cn(
                "h-1 rounded-full transition-all duration-normal",
                i === index
                  ? "w-6 bg-foreground"
                  : "w-1.5 bg-foreground/30 hover:bg-foreground/50",
              )}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
