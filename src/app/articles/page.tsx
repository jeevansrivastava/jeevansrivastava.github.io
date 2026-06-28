import { SectionLabel } from "@/components/ui/SectionLabel";
import { ArticlesSection } from "@/components/home/ArticlesSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articles | Jeevan Jyoti Srivastava",
  description: "Technical writing on software engineering, architecture, and system design.",
};

export default function ArticlesPage() {
  return (
    <div className="mb-24">
      <div className="mb-12">
        <h1 className="text-[2rem] font-bold text-text mb-4">Technical Writing</h1>
        <p className="text-muted text-[1.05rem] leading-relaxed max-w-[650px]">
          Thoughts, tutorials, and insights on backend architecture, system design, and AI infrastructure. Published on Medium.
        </p>
      </div>
      
      <ArticlesSection />
    </div>
  );
}
