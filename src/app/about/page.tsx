import { SectionLabel } from "@/components/ui/SectionLabel";
import { ExpertiseGrid } from "@/components/home/ExpertiseGrid";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Jeevan Jyoti Srivastava",
  description: "Staff Backend Engineer & Architect specializing in AI infrastructure and distributed systems.",
};

export default function AboutPage() {
  return (
    <div className="mb-24">
      <SectionLabel command="whoami --verbose" />
      
      <div className="mb-12">
        <div className="text-[1.05rem] leading-[1.85] text-muted max-w-[750px] flex flex-col gap-5">
          <p>
            Hi, I'm Jeevan. I am an Engineering Leader and Systems Architect with 14+ years of experience rescuing failing infrastructure, scaling enterprise platforms, and pioneering AI integrations. When companies hit catastrophic scaling walls or need to modernize their entire backend, I am the engineer they bring in to fix it.
          </p>
          <p>
            <strong className="text-accent">What I bring to the table:</strong> I specialize in taking systems from fragile to bulletproof. My career is defined by measurable impact—whether that's dropping critical API response times from 19 seconds to sub-500ms, recovering 25% in monthly cloud spend by profiling AWS infrastructure, or designing highly-available video pipelines for millions of concurrent users.
          </p>
          <p>
            <strong className="text-accent">My current frontier is AI Infrastructure & Real-Time Systems.</strong> I don't just build API wrappers; I engineer complex, sub-200ms real-time voice pipelines, acoustic signal processing (DTLN noise filters, tuned Silero VAD), autonomous multi-agent state machines, and end-to-end LLM observability using LiveKit WebRTC, Cartesia, Langfuse, and OpenTelemetry.
          </p>
          <p>
            I lead from the front, measure everything, and treat infrastructure as code. I build small, high-leverage engineering teams that ship fast and solve the hardest technical problems from first principles.
          </p>
        </div>
      </div>
      
      <div className="mt-16">
        <ExpertiseGrid />
      </div>
    </div>
  );
}
