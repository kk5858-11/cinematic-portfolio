"use client";

import Link from "next/link";
import { useTransitionNav } from "@/animations/transitions/transition-context";
import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

type TransitionLinkProps = ComponentProps<typeof Link> & {
  /** Skip cinematic transition (e.g. external) */
  native?: boolean;
};

/**
 * Next.js Link with cinematic route transitions.
 */
export function TransitionLink({
  href,
  onClick,
  native = false,
  className,
  children,
  ...props
}: TransitionLinkProps) {
  const { navigateWithTransition } = useTransitionNav();

  const hrefString = typeof href === "string" ? href : href.pathname ?? "/";

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented) return;
    if (
      native ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey ||
      hrefString.startsWith("http") ||
      hrefString.startsWith("mailto:")
    ) {
      return;
    }

    const isHashOnly =
      hrefString.startsWith("#") ||
      (typeof href === "string" && href.includes("#") && hrefString.split("#")[0] === "");
    if (isHashOnly) return;

    e.preventDefault();
    navigateWithTransition(typeof href === "string" ? href : hrefString);
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  );
}
