import { SectionLabel } from "@/components/ui/SectionLabel";
import { FeaturedCaseStudies } from "@/components/home/FeaturedCaseStudies";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | Jeevan Jyoti Srivastava",
  description: "Detailed engineering case studies on AI Infrastructure, Backend Performance, Video Streaming, and PostgreSQL Optimization.",
};

export default function CaseStudiesIndex() {
  return (
    <div className="mb-24">
      <div className="mb-12">
        <h1 className="text-[2rem] font-bold text-text mb-4">Engineering Case Studies</h1>
        <p className="text-muted text-[1.05rem] leading-relaxed max-w-[650px]">
          Deep dives into complex architectural challenges, technical decisions, and the resulting business impact.
        </p>
      </div>
      
      <FeaturedCaseStudies />
    </div>
  );
}
