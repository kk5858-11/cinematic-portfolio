import type { PageTransitionPreset } from "@/animations/types";

export type RouteTransitionMode = "fadeBlur" | "curtain";

/** Path → transition mode */
export function getRouteTransitionMode(pathname: string): RouteTransitionMode {
  if (pathname.startsWith("/blog")) return "curtain";
  return "fadeBlur";
}

export function isCurtainRoute(pathname: string): boolean {
  return getRouteTransitionMode(pathname) === "curtain";
}

/** Leaving blog → non-blog: play curtain close before navigate */
export function shouldCurtainExit(from: string, to: string): boolean {
  return isCurtainRoute(from) && !isCurtainRoute(to);
}

/** Entering blog from elsewhere: curtain reveal on arrival */
export function shouldCurtainEnter(from: string, to: string): boolean {
  return !isCurtainRoute(from) && isCurtainRoute(to);
}

/** Blog index ↔ post: lighter fade only */
export function isIntraBlogNavigation(from: string, to: string): boolean {
  return isCurtainRoute(from) && isCurtainRoute(to) && from !== to;
}

export function resolveNavigationTransition(
  from: string,
  to: string,
): PageTransitionPreset | "curtainExit" | "intraBlog" {
  if (shouldCurtainExit(from, to)) return "curtainExit";
  if (isIntraBlogNavigation(from, to)) return "intraBlog";
  if (shouldCurtainEnter(from, to)) return "curtain";
  return "fadeBlur";
}
