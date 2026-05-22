"use client";

import { RouteTransition } from "@/animations/transitions/route-transition";

export default function Template({ children }: { children: React.ReactNode }) {
  return <RouteTransition>{children}</RouteTransition>;
}
