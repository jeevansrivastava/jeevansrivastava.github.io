import { FeaturedCaseStudies } from "@/components/home/FeaturedCaseStudies";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | Jeevan Jyoti Srivastava",
  description: "Architecture case studies on dependable real-time AI, platform reliability, multimodal delivery, and cloud performance.",
};

export default function CaseStudiesIndex() {
  return (
    <div className="mb-24">
      <div className="mb-12">
        <h1 className="text-[2rem] font-bold text-text mb-4">Architecture Case Studies</h1>
        <p className="text-muted text-[1.05rem] leading-relaxed max-w-[650px]">
          Selected systems where I owned the critical decisions: what to protect, which trade-offs to make, how to validate the path, and how to leave the team with a system it could operate.
        </p>
      </div>
      
      <FeaturedCaseStudies />
    </div>
  );
}
