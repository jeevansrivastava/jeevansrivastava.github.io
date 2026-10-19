import { CareerHighlights } from "@/components/home/CareerHighlights";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedCaseStudies } from "@/components/home/FeaturedCaseStudies";
import { HowIWork } from "@/components/home/HowIWork";
import { PhilosophySection } from "@/components/home/PhilosophySection";
import { ExpertiseGrid } from "@/components/home/ExpertiseGrid";
import { ContactCTA } from "@/components/home/ContactCTA";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Engineering Leader · AI Systems & Cloud Architecture",
  "Jeevan Jyoti Srivastava leads engineering across AI products, distributed systems and cloud infrastructure. Explore architecture decisions, production outcomes and hands-on experience.",
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
