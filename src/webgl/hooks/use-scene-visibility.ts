"use client";

import { useEffect, useRef, useState } from "react";

type UseSceneVisibilityOptions = {
  rootMargin?: string;
  threshold?: number;
  /** Pause when document hidden */
  pauseWhenHidden?: boolean;
  /** Hero scenes — start visible before IntersectionObserver fires */
  initialVisible?: boolean;
};

/**
 * Intersection + Page Visibility — controls lazy mount & render loop.
 */
export function useSceneVisibility<T extends HTMLElement = HTMLDivElement>(
  options: UseSceneVisibilityOptions = {},
) {
  const {
    rootMargin = "100px",
    threshold = 0.05,
    pauseWhenHidden = true,
    initialVisible = false,
  } = options;

  const ref = useRef<T>(null);
  const [isIntersecting, setIsIntersecting] = useState(initialVisible);
  const [isDocumentVisible, setIsDocumentVisible] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      { rootMargin, threshold },
    );
    observer.observe(el);

    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  useEffect(() => {
    if (!pauseWhenHidden) return;

    const onVisibility = () => {
      setIsDocumentVisible(document.visibilityState === "visible");
    };
    document.addEventListener("visibilitychange", onVisibility);
    onVisibility();

    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, [pauseWhenHidden]);

  const isActive = isIntersecting && isDocumentVisible;

  return {
    ref,
    isIntersecting,
    isDocumentVisible,
    /** Scene should render & animate */
    isActive,
  };
}
