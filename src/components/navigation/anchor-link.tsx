"use client";

import { useAnchorScroll } from "@/hooks/use-anchor-scroll";
import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

type AnchorLinkProps = ComponentProps<"a"> & {
  href: string;
};

/** In-page anchor with Lenis smooth scroll */
export function AnchorLink({
  href,
  onClick,
  className,
  children,
  ...props
}: AnchorLinkProps) {
  const scrollTo = useAnchorScroll();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented || !href.startsWith("#")) return;
    e.preventDefault();
    scrollTo(href);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={cn(
        "text-sm text-muted transition-colors duration-normal ease-smooth hover:text-foreground",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
