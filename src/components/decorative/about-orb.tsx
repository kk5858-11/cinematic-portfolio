"use client";

import dynamic from "next/dynamic";
import { useWebGLCapability } from "@/webgl";
import { cn } from "@/lib/utils";

const AboutOrbCanvas = dynamic(
  () =>
    import("@/components/decorative/about-orb-canvas").then((m) => m.AboutOrbCanvas),
  { ssr: false, loading: () => <AboutOrbFallback /> },
);

function AboutOrbFallback() {
  return (
    <div className="about-orb-fallback relative h-full w-full" aria-hidden>
      <div className="absolute inset-[18%] rounded-full border border-foreground/15" />
      <div className="about-orb-fallback-ring absolute inset-[8%] rounded-full border border-dashed border-foreground/10" />
    </div>
  );
}

type AboutOrbProps = {
  className?: string;
};

/** Small 3D wireframe accent beside About portrait */
export function AboutOrb({ className }: AboutOrbProps) {
  const { shouldRender, reducedMotion } = useWebGLCapability();
  const show3d = shouldRender && !reducedMotion;

  return (
    <div
      className={cn(
        "pointer-events-none absolute -right-4 -top-6 z-20 h-36 w-36 md:-right-8 md:-top-10 md:h-48 md:w-48",
        className,
      )}
      aria-hidden
    >
      <div className="absolute inset-0 rounded-full bg-aurora/20 blur-2xl" />
      <div className="relative h-full w-full overflow-hidden rounded-full border border-border-subtle/80 bg-background/40 backdrop-blur-sm">
        {show3d ? <AboutOrbCanvas /> : <AboutOrbFallback />}
      </div>
    </div>
  );
}
