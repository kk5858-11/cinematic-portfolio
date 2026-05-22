/** Reference images provided by the user (11 artworks) */
export type GalleryItem = {
  id: string;
  src: string;
  title: string;
  caption?: string;
  /** masonry: tall featured tile */
  featured?: boolean;
};

export const galleryImages: GalleryItem[] = [
  {
    id: "01",
    src: "/images/gallery/01-cosmic-consciousness.png",
    title: "Cosmic consciousness",
    caption: "Formulas · galaxy · observer",
  },
  {
    id: "02",
    src: "/images/gallery/02-hands-portal.png",
    title: "Hands portal",
    caption: "Creation · threshold",
  },
  {
    id: "03",
    src: "/images/gallery/03-circuit-fingerprint.png",
    title: "Circuit fingerprint",
    caption: "Identity · technology",
  },
  {
    id: "04",
    src: "/images/gallery/04-galaxy-in-hand.png",
    title: "Galaxy in hand",
    caption: "Data · stars · cosmos",
    featured: true,
  },
  {
    id: "05",
    src: "/images/gallery/05-particle-dissolve.png",
    title: "Particle dissolve",
    caption: "Transformation · ember trail",
  },
  {
    id: "06",
    src: "/images/gallery/06-ethereal-portal.png",
    title: "Ethereal harvest",
    caption: "Sphere · rings · stardust",
    featured: true,
  },
  {
    id: "07",
    src: "/images/gallery/07-magical-book.png",
    title: "Magical book",
    caption: "Knowledge · light · story",
  },
  {
    id: "08",
    src: "/images/gallery/08-neural-energy.png",
    title: "Neural energy",
    caption: "Motion · connection",
  },
  {
    id: "09",
    src: "/images/gallery/09-energy-connection.png",
    title: "Energy connection",
    caption: "Distance · resonance",
  },
  {
    id: "10",
    src: "/images/gallery/10-guided-steps.png",
    title: "Guided steps",
    caption: "Light on the path",
  },
  {
    id: "11",
    src: "/images/gallery/11-cosmic-profile.png",
    title: "Cosmic profile",
    caption: "Nebula · mind · stars",
  },
];

export const GALLERY_COUNT = galleryImages.length;
