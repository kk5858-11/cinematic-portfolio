"use client";

import { ScrollTrigger } from "@/lib/gsap";
import { useEffect } from "react";

/**
 * Refresh ScrollTrigger after layout shifts (images, fonts, lazy sections).
 */
export function ScrollTriggerRefresh() {
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();

    refresh();
    const t = window.setTimeout(refresh, 400);
    window.addEventListener("load", refresh);
    window.addEventListener("resize", refresh);

    return () => {
      window.clearTimeout(t);
      window.removeEventListener("load", refresh);
      window.removeEventListener("resize", refresh);
    };
  }, []);

  return null;
}
