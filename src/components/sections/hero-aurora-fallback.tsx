"use client";

type HeroAuroraFallbackProps = {
  scrollProgress: number;
};

/** CSS aurora for mobile / reduced-motion — matches void palette */
export function HeroAuroraFallback({ scrollProgress }: HeroAuroraFallbackProps) {
  const y = scrollProgress * 12;

  return (
    <div
      className="absolute inset-0 overflow-hidden bg-background"
      aria-hidden
    >
      <div
        className="absolute inset-0 opacity-80"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% ${45 - y}%,
              rgba(228, 228, 231, 0.09) 0%,
              transparent 70%),
            radial-gradient(ellipse 60% 40% at 70% 60%,
              rgba(250, 250, 250, 0.04) 0%,
              transparent 65%),
            radial-gradient(ellipse 100% 80% at 50% 100%,
              #0a0a0b 0%,
              #0a0a0b 100%)
          `,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, transparent 40%, rgba(0,0,0,0.45) 100%)",
        }}
      />
    </div>
  );
}
