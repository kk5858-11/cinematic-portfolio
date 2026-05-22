"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { useMotionContext } from "@/animations/core/motion-context";
import { getTransition } from "@/animations/presets/timing";
import { variants } from "@/animations/presets/framer-variants";
import {
  getRouteTransitionMode,
  isIntraBlogNavigation,
} from "./route-config";

type RouteTransitionProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Per-route page transition — fade+blur default, faster fade inside blog.
 */
export function RouteTransition({ children, className }: RouteTransitionProps) {
  const pathname = usePathname();
  const { reducedMotion } = useMotionContext();
  const prevPathRef = useRef(pathname);

  const from = prevPathRef.current;
  const intraBlog = isIntraBlogNavigation(from, pathname);
  const mode = getRouteTransitionMode(pathname);

  useEffect(() => {
    prevPathRef.current = pathname;
  }, [pathname]);

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const pageVariants = intraBlog
    ? {
        initial: { opacity: 0, y: 8 },
        animate: {
          opacity: 1,
          y: 0,
          transition: getTransition("micro"),
        },
        exit: {
          opacity: 0,
          y: -8,
          transition: getTransition("exit"),
        },
      }
    : variants.page;

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        className={className}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        data-transition={mode}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
