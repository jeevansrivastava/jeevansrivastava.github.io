import { SectionLabel } from "@/components/ui/SectionLabel";
import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";
import { DecisionTable } from "@/components/case-study/DecisionTable";
import { ChallengeBlock } from "@/components/case-study/ChallengeBlock";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preventing Hidden Platform Bottlenecks | Case Study",
  description: "How a repeatable workload discipline reduced avoidable data work, protected user-facing request paths, and improved platform reliability.",
};

const decisions = [
  { decision: "Query Hydration", choice: ".lean() as default", alternative: "Full Mongoose Docs", reason: "10-15% CPU reduction per read query by dropping getters/setters" },
  { decision: "Loop Pattern", choice: "Promise.all(arr.map())", alternative: "Sequential for-await", reason: "Parallel execution instead of serial database round-trips" },
  { decision: "Heavy Workloads", choice: "RabbitMQ job queues", alternative: "Request thread", reason: "Offload PDF/Excel report generation to prevent event loop blocking" },
  { decision: "Redis Sizing", choice: "cache.t4g.medium", alternative: "cache.m6g.large", reason: "Memory was 0.86% utilized; right-sizing based on 15-day CloudWatch telemetry" },
];

export default function CaseStudy() {
  return (
    <article className="max-w-[800px] mb-24">
      <SectionLabel command="cat ./meta.json" />
      <CaseStudyHero 
        title="Removing Hidden Platform Bottlenecks Before They Became Incidents"
        role="Platform Architecture Lead"
        stack={["PostgreSQL", "MongoDB", "Redis", "Mongoose", "RabbitMQ", "Node.js"]}
        duration="2025 - 2026"
      />

      <SectionLabel command="cat ./mandate.md" />
      <div className="text-muted leading-relaxed mb-12 text-[0.95rem]">
        <p className="mb-4">
          Core workflows slowed under concurrent load while infrastructure spend rose without solving the underlying problem. The risk was a platform that became harder to operate with every new feature and every increase in traffic.
        </p>
        <p>
          I reframed the work from endpoint-by-endpoint tuning into a system-wide workload discipline: remove unnecessary data work, protect user-facing request paths, move long-running work to the right execution model, and size infrastructure from evidence.
        </p>
      </div>

      <SectionLabel command="diff --decisions" />
      <DecisionTable decisions={decisions} />

      <SectionLabel command="cat ./leadership-decisions.md" />
      <div className="mb-12">
        <ChallengeBlock 
          num="01"
          title="Make efficient data access a platform standard"
          description="The audit showed that routine reads carried avoidable framework overhead. I turned the finding into a clear default so performance would not depend on each engineer rediscovering the same rule."
        />
        <ChallengeBlock 
          num="02"
          title="Treat workflow shape as an architectural decision"
          description="Critical flows accumulated serial database work as they evolved. I identified where batching and concurrency were safe, protecting response time without obscuring correctness or operational behavior."
        />
        <ChallengeBlock 
          num="03"
          title="Keep expensive work out of the user journey"
          description="Report generation and file work had become a hidden tax on live requests. I separated them into an asynchronous operating model so user-facing capacity was not consumed by background workloads."
        />
      </div>

      <SectionLabel command="cat ./capability-created.md" />
      <div className="bg-[rgba(166,227,161,0.05)] border border-[rgba(166,227,161,0.2)] rounded-[6px] p-6 text-text">
        <ul className="list-disc pl-5 m-0 flex flex-col gap-2 text-[0.95rem]">
          <li>Improved system-processing reliability from <span className="text-green font-mono">94%</span> to <span className="text-green font-mono">99.9%</span>.</li>
          <li>Established reusable defaults for data access, background processing, and workload review.</li>
          <li>Reduced overall scheduling latency by <span className="text-green font-mono">60%</span>.</li>
          <li>Right-sized over-provisioned cache infrastructure using observed demand rather than theoretical capacity.</li>
        </ul>
      </div>
    </article>
  );
}
