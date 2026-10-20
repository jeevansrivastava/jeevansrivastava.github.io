import { CareerHighlights } from "@/components/home/CareerHighlights";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedCaseStudies } from "@/components/home/FeaturedCaseStudies";
import { HowIWork } from "@/components/home/HowIWork";
import { PhilosophySection } from "@/components/home/PhilosophySection";
import { ExpertiseGrid } from "@/components/home/ExpertiseGrid";
import { ContactCTA } from "@/components/home/ContactCTA";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "AI & Backend Architecture",
  "Jeevan Jyoti Srivastava, engineering leader at UOLO. Explore AI voice systems, backend architecture, AWS optimization and production case studies.",
  "/",
);
export default function Home() {
  return (
    <div className="creative-home">
      <HeroSection />
      <PhilosophySection />
      <CareerHighlights />
      <FeaturedCaseStudies />
      <ExpertiseGrid />
      <HowIWork />
      <ContactCTA />
    </div>
  );
}
