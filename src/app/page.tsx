import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedCaseStudies } from "@/components/home/FeaturedCaseStudies";
import { CareerHighlights } from "@/components/home/CareerHighlights";
import { PhilosophySection } from "@/components/home/PhilosophySection";
import { HowIWork } from "@/components/home/HowIWork";
import { ExpertiseGrid } from "@/components/home/ExpertiseGrid";
import { ArticlesSection } from "@/components/home/ArticlesSection";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <div className="flex flex-col gap-0 pb-12">
      <HeroSection />
      <CareerHighlights />
      
      {/* 1. Prove Impact Immediately */}
      <FeaturedCaseStudies />
      
      {/* 2. Explain the "Why" behind the work */}
      <PhilosophySection />
      <HowIWork />
      
      {/* 3. Broad competencies */}
      <ExpertiseGrid />
      
      {/* 4. Thought leadership */}
      <ArticlesSection />
      
      <ContactCTA />
    </div>
  );
}
