"use client";

import { useEffect, useRef } from "react";
import type { NormalizedPointer } from "@/hooks/use-mouse-position";

type HeroSpotlightProps = {
  pointerRef: React.RefObject<NormalizedPointer>;
};

/** Subtle cursor spotlight — CSS only, does not block pointer */
export function HeroSpotlight({ pointerRef }: HeroSpotlightProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const tick = () => {
      const el = ref.current;
      const p = pointerRef.current;
      if (el && p) {
        el.style.background = `radial-gradient(600px circle at ${p.nx * 100}% ${(1 - p.ny) * 100}%,
          var(--ds-color-spotlight),
          transparent 65%)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [pointerRef]);

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute inset-0 z-atmosphere opacity-0 transition-opacity duration-slow ease-smooth [.ready_&]:opacity-100"
      aria-hidden
    />
  );
}
