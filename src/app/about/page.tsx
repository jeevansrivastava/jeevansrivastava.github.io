import { SectionLabel } from "@/components/ui/SectionLabel";
import { ExpertiseGrid } from "@/components/home/ExpertiseGrid";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Jeevan Jyoti Srivastava",
  description: "AI Systems Architect specializing in dependable real-time AI, distributed systems, and cloud platforms.",
};

export default function AboutPage() {
  return (
    <div className="mb-24">
      <SectionLabel command="whoami --verbose" />
      
      <div className="mb-12">
        <div className="text-[1.05rem] leading-[1.85] text-muted max-w-[750px] flex flex-col gap-5">
          <p>
            Hi, I&apos;m Jeevan—an AI Systems Architect and engineering leader with 14+ years of experience. I turn uncertain product and platform bets into systems teams can ship, measure, operate, and evolve.
          </p>
          <p>
            <strong className="text-accent">What I bring:</strong> I make the consequential decisions explicit: what to protect, which trade-offs to make, how to validate the path, and what operating capability must remain after delivery. That has included recovering critical API response times from 19 seconds to sub-500ms, right-sizing cloud spend from production evidence, and designing media delivery for variable network conditions.
          </p>
          <p>
            <strong className="text-accent">My current focus is real-time AI systems.</strong> I architect voice and multimodal learning products with explicit state, bounded AI behavior, operating evidence, and graceful recovery. The goal is not an impressive demo; it is a dependable product that behaves well for learners, operators, and the teams that evolve it.
          </p>
          <p>
            I lead through clear technical strategy, evidence-led delivery, and infrastructure treated as a product. I build small, high-leverage teams that can make difficult decisions in the open and operate critical systems with confidence.
          </p>
        </div>
      </div>
      
      <div className="mt-16">
        <ExpertiseGrid />
      </div>
    </div>
  );
}
