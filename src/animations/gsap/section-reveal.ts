import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { registerGsap } from "@/lib/gsap";
import { getGsapEase } from "@/animations/presets/easing";
import { getDuration } from "@/animations/presets/timing";
import {
  scrollPresets,
  type ScrollPresetKey,
} from "@/animations/presets/scroll";

type SectionRevealTarget = gsap.DOMTarget;

export type SectionRevealOptions = {
  preset?: ScrollPresetKey;
  scope?: Element | null;
  /** Override preset start/end */
  start?: string;
  end?: string;
  scrub?: number | boolean;
  once?: boolean;
  delay?: number;
};

/**
 * GSAP section reveal — ScrollTrigger + from tween.
 * Returns cleanup function.
 */
export function createSectionReveal(
  trigger: Element,
  targets: SectionRevealTarget | SectionRevealTarget[],
  options: SectionRevealOptions = {},
): () => void {
  registerGsap();

  const presetKey = options.preset ?? "sectionReveal";
  const preset = scrollPresets[presetKey];
  const from =
    "from" in preset && preset.from ? preset.from : { opacity: 0, y: 32 };
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduced) {
    gsap.set(targets, { opacity: 1, y: 0, filter: "blur(0px)" });
    return () => {};
  }

  const tween = gsap.from(targets, {
    ...from,
    duration: getDuration("slow"),
    ease: getGsapEase("smooth"),
    delay: options.delay ?? 0,
    scrollTrigger: {
      trigger,
      start: options.start ?? preset.start,
      ...("end" in preset && preset.end ? { end: options.end ?? preset.end } : {}),
      ...("scrub" in preset && preset.scrub != null
        ? { scrub: options.scrub ?? preset.scrub }
        : {}),
      ...("toggleActions" in preset && preset.toggleActions
        ? { toggleActions: preset.toggleActions }
        : { toggleActions: "play none none reverse" }),
      once:
        options.once ??
        ("once" in preset ? preset.once : undefined) ??
        true,
      ...("markers" in preset && preset.markers ? { markers: preset.markers } : {}),
    },
  });

  return () => {
    tween.scrollTrigger?.kill();
    tween.kill();
  };
}

export { ScrollTrigger };
