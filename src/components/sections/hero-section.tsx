"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import { createHeroScrollTimeline } from "@/animations/gsap/hero-scroll";
import { useGsapScroll } from "@/hooks/use-gsap-scroll";
import { useMousePositionRef } from "@/hooks/use-mouse-position";
import { HeroCanvas, useWebGLCapability } from "@/webgl";
import { HeroAuroraFallback } from "@/components/sections/hero-aurora-fallback";
import { HeroContent } from "@/components/sections/hero-content";
import { HeroSpotlight } from "@/components/sections/hero-spotlight";

type HeroMotionState = {
  intensity: number;
  scroll: number;
};

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const motionRef = useRef<HeroMotionState>({ intensity: 0, scroll: 0 });
  const pointerRef = useMousePositionRef();

  const { shouldRender: useWebGL } = useWebGLCapability();
  const [ready, setReady] = useState(false);
  const [fallbackScroll, setFallbackScroll] = useState(0);

  useGsapScroll();

  const intensityRef = useRef(0);
  const scrollRef = useRef(0);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const content = contentRef.current;
      if (!section || !content) return;

      const state = motionRef.current;

      const sync = () => {
        intensityRef.current = state.intensity;
        scrollRef.current = state.scroll;
      };
      gsap.ticker.add(sync);

      const { cleanup } = createHeroScrollTimeline({
        section,
        content,
        state,
        onScrollUpdate: (progress) => {
          if (!useWebGL) setFallbackScroll(progress);
        },
      });

      setReady(true);

      return () => {
        gsap.ticker.remove(sync);
        cleanup();
      };
    },
    { scope: sectionRef, dependencies: [useWebGL] },
  );

  return (
    <section
      id="hero"
      ref={sectionRef}
      className={`relative h-[180vh] ${ready ? "ready" : ""}`}
      aria-label="Introduction"
    >
      <div
        ref={stickyRef}
        className="sticky top-0 h-screen w-full overflow-hidden"
      >
        {useWebGL ? (
          <HeroCanvas
            intensityRef={intensityRef}
            scrollRef={scrollRef}
            pointerRef={pointerRef}
          />
        ) : (
          <HeroAuroraFallback scrollProgress={fallbackScroll} />
        )}

        <HeroSpotlight pointerRef={pointerRef} />

        <div
          className="pointer-events-none absolute inset-0 z-atmosphere bg-gradient-to-b from-background/30 via-transparent to-background/90"
          aria-hidden
        />

        <div ref={contentRef} className="relative h-full">
          <HeroContent />
        </div>
      </div>
    </section>
  );
}
