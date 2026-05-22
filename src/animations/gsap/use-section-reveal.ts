"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { useMotionContext } from "@/animations/core/motion-context";
import {
  createSectionReveal,
  type SectionRevealOptions,
} from "./section-reveal";

/**
 * Attach GSAP section reveal to a container ref; animates `[data-reveal]` children.
 */
export function useSectionReveal<T extends HTMLElement = HTMLDivElement>(
  options: SectionRevealOptions = {},
) {
  const scopeRef = useRef<T>(null);
  const { reducedMotion } = useMotionContext();

  useGSAP(
    () => {
      const scope = scopeRef.current;
      if (!scope || reducedMotion) return;

      const targets = scope.querySelectorAll("[data-reveal]");
      if (!targets.length) return;

      return createSectionReveal(scope, targets, options);
    },
    { scope: scopeRef, dependencies: [reducedMotion, options.preset] },
  );

  return scopeRef;
}
