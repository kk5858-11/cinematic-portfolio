/** Personal info — replace before launch */
export const siteConfig = {
  name: "Your Name",
  role: "Creative Developer",
  /** Hero display lines — keep short for cinematic scale */
  heroTitleLines: ["Building", "digital space"] as const,
  tagline:
    "Cinematic interfaces — spatial, minimal, and quietly future-forward.",
  bio: "I design and build digital experiences that feel like environments: restrained motion, monochrome palettes, and typography with room to breathe. Based somewhere between design and engineering.",
  email: "hello@example.com",
  location: "Earth",
  aboutImage: "/images/gallery/06-ethereal-portal.png",
  social: {
    github: "https://github.com",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
  },
  stats: [
    { value: "8+", label: "Years crafting" },
    { value: "24", label: "Projects shipped" },
    { value: "12", label: "Brand partners" },
    { value: "∞", label: "Coffee units" },
  ],
  marqueeItems: [
    "Motion Design",
    "WebGL",
    "Design Systems",
    "Spatial UI",
    "Creative Dev",
    "Scroll Storytelling",
    "Cinematic Web",
  ],
  highlights: [
    "Spatial UI",
    "Shader Atmosphere",
    "Scroll Choreography",
    "Monochrome Systems",
  ],
} as const;
