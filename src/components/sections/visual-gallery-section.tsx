"use client";

import { SectionReveal, StaggerChildren, StaggerItem } from "@/animations";
import { AmbientField } from "@/components/decorative";
import { GalleryImage } from "@/components/gallery/gallery-image";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { GALLERY_COUNT, galleryImages } from "@/data/gallery";

export function VisualGallerySection() {
  const featured = galleryImages.filter((i) => i.featured);
  const rest = galleryImages.filter((i) => !i.featured);

  return (
    <SectionReveal id="gallery">
      <AmbientField variant="cool" className="section-padding-lg">
        <Section className="!p-0">
          <Container>
            <SectionHeader
              index="03"
              eyebrow="Visual archive"
              title="Gallery"
              subtitle={`${GALLERY_COUNT} reference works — curated for this site.`}
            />

            <StaggerChildren className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5">
              {featured.map((item) => (
                <StaggerItem
                  key={item.id}
                  className="min-h-[360px] md:min-h-[520px]"
                >
                  <GalleryImage
                    item={item}
                    index={galleryImages.indexOf(item)}
                    featuredTile
                  />
                </StaggerItem>
              ))}
            </StaggerChildren>

            <StaggerChildren className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-5">
              {rest.map((item) => (
                <StaggerItem key={item.id}>
                  <GalleryImage
                    item={item}
                    index={galleryImages.indexOf(item)}
                  />
                </StaggerItem>
              ))}
            </StaggerChildren>
          </Container>
        </Section>
      </AmbientField>
    </SectionReveal>
  );
}
