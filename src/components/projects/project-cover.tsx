"use client";

import Image from "next/image";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { useCallback, useRef } from "react";
import { SharedLayout } from "@/animations";
import { useMotionContext } from "@/animations/core/motion-context";
import { getTransition } from "@/animations/presets/timing";
import { resolveTransition } from "@/animations/core/reduced-motion";
import { ProjectCoverArt } from "@/components/projects/project-cover-art";
import { cn } from "@/lib/utils";
import type { ProjectCoverArtId } from "@/types";

type ProjectCoverProps = {
  slug: string;
  title: string;
  year: string;
  coverImage: string;
  coverArt: ProjectCoverArtId;
  className?: string;
  priority?: boolean;
  interactive?: boolean;
};

export function ProjectCover({
  slug,
  title,
  year,
  coverImage,
  coverArt,
  className,
  priority = false,
  interactive = false,
}: ProjectCoverProps) {
  const layoutId = `project-cover-${slug}`;
  const containerRef = useRef<HTMLDivElement>(null);
  const { reducedMotion } = useMotionContext();

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 120, damping: 20 });
  const springY = useSpring(my, { stiffness: 120, damping: 20 });

  const imageX = useMotionTemplate`calc(-2% + ${springX}px)`;
  const imageY = useMotionTemplate`calc(-2% + ${springY}px)`;

  const onMove = useCallback(
    (e: React.MouseEvent) => {
      if (!interactive || reducedMotion) return;
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      mx.set(px * 14);
      my.set(py * 10);
    },
    [interactive, reducedMotion, mx, my],
  );

  const onLeave = useCallback(() => {
    mx.set(0);
    my.set(0);
  }, [mx, my]);

  const enableMotion = interactive && !reducedMotion;

  return (
    <SharedLayout
      layoutId={layoutId}
      className={cn(
        "relative aspect-[16/10] w-full overflow-hidden bg-elevated",
        enableMotion && "group",
        className,
      )}
    >
      <div
        ref={containerRef}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="relative h-full w-full"
      >
        <motion.div
          className="absolute inset-[-6%] will-change-transform"
          style={enableMotion ? { x: imageX, y: imageY, scale: 1.04 } : undefined}
          initial={enableMotion ? { scale: 1.08, opacity: 0 } : false}
          animate={enableMotion ? { scale: 1.04, opacity: 1 } : undefined}
          transition={resolveTransition(
            { ...getTransition("cinematic"), duration: 1.2 },
            reducedMotion,
          )}
        >
          <Image
            src={coverImage}
            alt={title}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover grayscale contrast-[1.08] brightness-90"
          />
        </motion.div>

        {/* SVG atmosphere overlay — subtle, not replacing photo */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.35] mix-blend-soft-light">
          <ProjectCoverArt id={coverArt} />
        </div>

        <div
          className="project-cover-atmosphere pointer-events-none absolute inset-0 opacity-25"
          aria-hidden
          data-variant={slug}
        />

        {enableMotion ? (
          <div
            className="project-cover-shine pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-normal group-hover:opacity-100"
            aria-hidden
          />
        ) : null}

        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface/90 via-surface/15 to-transparent"
          aria-hidden
        />

        <div className="pointer-events-none absolute left-6 top-6 rounded-full border border-border-subtle bg-background/50 px-3 py-1 font-mono text-[10px] tracking-wider text-muted backdrop-blur-sm">
          {coverArt === "spatial" ? "Spatial · WebGL" : "Motion · Systems"}
        </div>

        {interactive ? (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between p-6 md:p-8">
            <span className="font-mono text-xs tracking-[0.2em] text-subtle uppercase">
              {year}
            </span>
            <span className="rounded-full border border-border-subtle bg-background/60 px-3 py-1 font-mono text-[10px] tracking-wider text-muted backdrop-blur-sm">
              View case
            </span>
          </div>
        ) : null}
      </div>
    </SharedLayout>
  );
}
