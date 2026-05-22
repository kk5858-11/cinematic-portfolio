import dynamic from "next/dynamic";
import { MarqueeStrip, SectionDivider, StatsBar } from "@/components/decorative";
import { ScrollTriggerRefresh } from "@/components/performance/scroll-trigger-refresh";
import { getAllPosts } from "@/data/blog";
import type { BlogPostMeta } from "@/types";

const AboutSection = dynamic(
  () => import("@/components/sections/about-section").then((m) => m.AboutSection),
  { loading: () => <SectionPlaceholder /> },
);

const ProjectsSection = dynamic(
  () =>
    import("@/components/sections/projects-section").then((m) => m.ProjectsSection),
  { loading: () => <SectionPlaceholder /> },
);

const VisualGallerySection = dynamic(
  () =>
    import("@/components/sections/visual-gallery-section").then(
      (m) => m.VisualGallerySection,
    ),
  { loading: () => <SectionPlaceholder /> },
);

const ShowcaseSection = dynamic(
  () =>
    import("@/components/sections/showcase-section").then((m) => m.ShowcaseSection),
  { loading: () => <SectionPlaceholder /> },
);

const StackSection = dynamic(
  () => import("@/components/sections/stack-section").then((m) => m.StackSection),
  { loading: () => <SectionPlaceholder /> },
);

const WritingSection = dynamic(
  () =>
    import("@/components/sections/writing-section").then((m) => m.WritingSection),
  { loading: () => <SectionPlaceholder /> },
);

const ExperienceSection = dynamic(
  () =>
    import("@/components/sections/experience-section").then((m) => m.ExperienceSection),
  { loading: () => <SectionPlaceholder /> },
);

const ContactSection = dynamic(
  () =>
    import("@/components/sections/contact-section").then((m) => m.ContactSection),
  { loading: () => <SectionPlaceholder /> },
);

const Footer = dynamic(
  () => import("@/components/layout/footer").then((m) => m.Footer),
);

function SectionPlaceholder() {
  return <div className="section-padding min-h-[40vh] bg-background" aria-hidden />;
}

/** Below-fold sections — code-split for faster initial load */
export function HomeSections() {
  const previewPosts: BlogPostMeta[] = getAllPosts().slice(0, 2);

  return (
    <>
      <ScrollTriggerRefresh />
      <div className="relative py-10 md:py-14">
        <StatsBar />
      </div>
      <MarqueeStrip />
      <AboutSection />
      <SectionDivider label="Selected work" />
      <ProjectsSection />
      <SectionDivider label="Visual archive" />
      <VisualGallerySection />
      <ShowcaseSection />
      <StackSection />
      <WritingSection posts={previewPosts} />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </>
  );
}
