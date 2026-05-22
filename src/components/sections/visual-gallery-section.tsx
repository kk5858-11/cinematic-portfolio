"use client";

import { SectionReveal } from "@/animations";
import { AmbientField } from "@/components/decorative";
import { GalleryCarousel } from "@/components/gallery/gallery-carousel";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { GALLERY_COUNT, galleryImages } from "@/data/gallery";

export function VisualGallerySection() {
  return (
    <SectionReveal id="gallery">
      <AmbientField variant="cool" className="section-padding-lg">
        <Section className="!p-0">
          <Container>
            <SectionHeader
              index="03"
              eyebrow="Visual archive"
              title="Gallery"
              subtitle={`${GALLERY_COUNT} reference works — loop playback.`}
            />

            <GalleryCarousel items={galleryImages} />
          </Container>
        </Section>
      </AmbientField>
    </SectionReveal>
  );
}
