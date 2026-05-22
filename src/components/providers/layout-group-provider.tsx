"use client";

import { LayoutGroup } from "framer-motion";
import type { ReactNode } from "react";

/** Enables SharedLayout transitions across routes */
export function LayoutGroupProvider({ children }: { children: ReactNode }) {
  return <LayoutGroup id="portfolio">{children}</LayoutGroup>;
}
