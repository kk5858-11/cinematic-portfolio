/**
 * Z-index scale — predictable stacking, no magic numbers in components.
 */

export const zIndex = {
  /** WebGL canvas, aurora background */
  webgl: 0,
  /** Decorative gradients behind content */
  atmosphere: 1,
  /** Default document flow */
  base: 0,
  /** Section content above canvas */
  content: 2,
  /** Sticky in-section elements */
  sticky: 10,
  /** Site header / nav */
  header: 20,
  /** Dropdowns, popovers */
  dropdown: 30,
  /** Mobile menu overlay backdrop */
  overlay: 40,
  /** Mobile menu panel */
  drawer: 50,
  /** Page transition curtains */
  transition: 60,
  /** Modals */
  modal: 70,
  /** Toasts */
  toast: 80,
  /** Custom cursor (optional) */
  cursor: 90,
  /** Dev-only overlays */
  debug: 100,
} as const;

export type ZIndexKey = keyof typeof zIndex;

/** Tailwind class map: z-webgl, z-header, … */
export const zIndexClass: Record<ZIndexKey, string> = {
  webgl: "z-webgl",
  atmosphere: "z-atmosphere",
  base: "z-base",
  content: "z-content",
  sticky: "z-sticky",
  header: "z-header",
  dropdown: "z-dropdown",
  overlay: "z-overlay",
  drawer: "z-drawer",
  transition: "z-transition",
  modal: "z-modal",
  toast: "z-toast",
  cursor: "z-cursor",
  debug: "z-debug",
};
