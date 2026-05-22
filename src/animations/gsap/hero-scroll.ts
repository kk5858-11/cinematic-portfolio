import gsap from "gsap";
import { registerGsap } from "@/lib/gsap";
import { getGsapEase } from "@/animations/presets/easing";
import { getDuration } from "@/animations/presets/timing";
import { scrollPresets } from "@/animations/presets/scroll";

export type HeroMotionState = {
  intensity: number;
  scroll: number;
};

export type HeroScrollTimelineOptions = {
  section: HTMLElement;
  content: HTMLElement;
  state: HeroMotionState;
  onScrollUpdate?: (progress: number) => void;
  useReducedMotion?: boolean;
};

/**
 * Hero-specific scroll timeline — uses `scrollPresets.heroCinematic`.
 */
export function createHeroScrollTimeline({
  section,
  content,
  state,
  onScrollUpdate,
  useReducedMotion = false,
}: HeroScrollTimelineOptions) {
  registerGsap();
  const preset = scrollPresets.heroCinematic;

  if (useReducedMotion) {
    state.intensity = 1;
    state.scroll = 0;
    return { intro: gsap.timeline(), scrollTl: gsap.timeline(), cleanup: () => {} };
  }

  const intro = gsap.timeline({ defaults: { ease: getGsapEase("cinematic") } });
  intro.to(state, {
    intensity: 1,
    duration: getDuration("cinematic"),
    ease: getGsapEase("smooth"),
  });

  const scrollTl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: preset.start,
      end: preset.end,
      scrub: preset.scrub,
      onUpdate: (self) => onScrollUpdate?.(self.progress),
    },
  });

  if (preset.state) {
    scrollTl.to(state, { ...preset.state, ease: "none" }, 0);
  }
  if (preset.content) {
    scrollTl.to(content, { ...preset.content, ease: "none" }, 0);
  }

  const cleanup = () => {
    intro.kill();
    scrollTl.scrollTrigger?.kill();
    scrollTl.kill();
  };

  return { intro, scrollTl, cleanup };
}
