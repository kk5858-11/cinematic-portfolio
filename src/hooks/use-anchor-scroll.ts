"use client";

import { useLenis } from "@/components/providers/lenis-provider";
import { useCallback } from "react";

const HEADER_OFFSET = 72;

export function useAnchorScroll() {
  const lenis = useLenis();

  return useCallback(
    (hash: string) => {
      const id = hash.replace(/^#/, "");
      if (!id) return;

      const el = document.getElementById(id);
      if (!el) return;

      if (lenis) {
        lenis.scrollTo(el, { offset: -HEADER_OFFSET, duration: 1.2 });
      } else {
        const top =
          el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
        window.scrollTo({ top, behavior: "smooth" });
      }
    },
    [lenis],
  );
}
