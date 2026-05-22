"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { useMotionContext } from "@/animations/core/motion-context";
import { getDuration } from "@/animations/presets/timing";
import { CurtainOverlay } from "./curtain-overlay";
import {
  resolveNavigationTransition,
  shouldCurtainEnter,
} from "./route-config";

type CurtainPhase = "idle" | "closing" | "opening";

type TransitionContextValue = {
  navigateWithTransition: (href: string) => void;
  pathname: string;
};

const TransitionContext = createContext<TransitionContextValue | null>(null);

export function TransitionProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const { reducedMotion } = useMotionContext();
  const prevPathRef = useRef(pathname);

  const [curtainPhase, setCurtainPhase] = useState<CurtainPhase>("idle");
  const pendingHrefRef = useRef<string | null>(null);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, left: 0, behavior: reducedMotion ? "auto" : "instant" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [reducedMotion]);

  /** Curtain reveal when landing on blog from outside */
  useEffect(() => {
    const from = prevPathRef.current;
    prevPathRef.current = pathname;

    scrollToTop();

    if (reducedMotion) {
      setCurtainPhase("idle");
      return;
    }

    if (shouldCurtainEnter(from, pathname)) {
      setCurtainPhase("opening");
      const duration = getDuration("transition") * 1000;
      const t = setTimeout(() => setCurtainPhase("idle"), duration + 80);
      return () => clearTimeout(t);
    }

    setCurtainPhase("idle");
  }, [pathname, reducedMotion, scrollToTop]);

  const navigateWithTransition = useCallback(
    (href: string) => {
      const normalized = href.split("#")[0] || "/";
      if (normalized === pathname) return;

      const strategy = resolveNavigationTransition(pathname, normalized);

      if (strategy === "curtainExit" && !reducedMotion) {
        pendingHrefRef.current = href;
        setCurtainPhase("closing");
        return;
      }

      router.push(href);
    },
    [pathname, router, reducedMotion],
  );

  const onCurtainPhaseComplete = useCallback(
    (phase: CurtainPhase) => {
      if (phase === "closing" && pendingHrefRef.current) {
        const href = pendingHrefRef.current;
        pendingHrefRef.current = null;
        setCurtainPhase("idle");
        router.push(href);
      }
    },
    [router],
  );

  const value = useMemo(
    () => ({ navigateWithTransition, pathname }),
    [navigateWithTransition, pathname],
  );

  return (
    <TransitionContext.Provider value={value}>
      <CurtainOverlay phase={curtainPhase} onPhaseComplete={onCurtainPhaseComplete} />
      {children}
    </TransitionContext.Provider>
  );
}

export function useTransitionNav() {
  const ctx = useContext(TransitionContext);
  if (!ctx) {
    throw new Error("useTransitionNav must be used within TransitionProvider");
  }
  return ctx;
}
