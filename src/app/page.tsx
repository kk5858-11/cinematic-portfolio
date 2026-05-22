import dynamic from "next/dynamic";
import { HeroSection } from "@/components/sections/hero-section";

const HomeSections = dynamic(
  () =>
    import("@/components/sections/home-sections").then((m) => m.HomeSections),
  { loading: () => null },
);

export default function Home() {
  return (
    <main className="bg-background">
      <HeroSection />
      <HomeSections />
    </main>
  );
}
