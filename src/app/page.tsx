import { CareerHighlights } from "@/components/home/CareerHighlights";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedCaseStudies } from "@/components/home/FeaturedCaseStudies";
import { HowIWork } from "@/components/home/HowIWork";
import { PhilosophySection } from "@/components/home/PhilosophySection";
import { ContactCTA } from "@/components/home/ContactCTA";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Backend & AI Infrastructure",
  "Jeevan Jyoti Srivastava: hands-on engineering leadership in backend systems, real-time AI, distributed systems and cloud architecture.",
  "/",
);
export default function Home() {
  return (
    <div className="creative-home">
      <HeroSection />
      <PhilosophySection />
      <CareerHighlights />
      <FeaturedCaseStudies />
      <HowIWork />
      <ContactCTA />
    </div>
  );
}
