"use client";

import { registerGsap } from "@/lib/gsap";
import { useEffect } from "react";

/** @deprecated Use `registerGsap` from `@/lib/gsap` */
export function registerGsapScroll() {
  registerGsap();
}

export function useGsapScroll() {
  useEffect(() => {
    registerGsap();
  }, []);
}
