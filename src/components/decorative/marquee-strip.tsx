"use client";

import { siteConfig } from "@/data/site";

export function MarqueeStrip() {
  const items = [...siteConfig.marqueeItems, ...siteConfig.marqueeItems];

  return (
    <div
      className="relative border-y border-border-subtle bg-surface/40 py-4 backdrop-blur-sm"
      aria-hidden
    >
      <div className="marquee-track flex w-max gap-10 px-6">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex shrink-0 items-center gap-10 font-mono text-xs tracking-[0.2em] text-subtle uppercase"
          >
            {item}
            <span className="h-1 w-1 rounded-full bg-muted" />
          </span>
        ))}
      </div>
    </div>
  );
}
