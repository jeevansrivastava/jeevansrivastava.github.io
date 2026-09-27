import { SectionLabel } from "@/components/ui/SectionLabel";
import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";
import { DecisionTable } from "@/components/case-study/DecisionTable";
import { ChallengeBlock } from "@/components/case-study/ChallengeBlock";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Peak-Hour Platform Recovery | Case Study",
  description: "How recurring peak-hour platform failure became an observable, validated performance and capacity model.",
};

const decisions = [
  { decision: "Redis Lookup", choice: "In-process cache + 5m TTL", alternative: "redis.scan()", reason: "O(1) lookup vs O(N) network calls per request" },
  { decision: "Scaling Metric", choice: "ALBRequestCountPerTarget", alternative: "Average CPU", reason: "Average CPU hid individual hot instances" },
  { decision: "Load Testing", choice: "Custom aiohttp async script", alternative: "Apache Benchmark", reason: "Needed to replicate exact frontend auth & API sequences" },
  { decision: "Heavy I/O", choice: "RabbitMQ job workers", alternative: "Request-thread execution", reason: "Offload PDF/Excel generation to prevent event loop blocking" },
];

export default function CaseStudy() {
  return (
    <article className="max-w-[800px] mb-24">
      <SectionLabel command="cat ./meta.json" />
      <CaseStudyHero 
        title="Recovering a Critical Platform From Peak-Hour Failure"
        role="Platform Architecture & Performance Lead"
        stack={["Node.js", "Redis Cluster", "AWS CloudWatch", "ALB", "Python", "Bash"]}
        duration="Q2 2026"
      />

      <SectionLabel command="cat ./mandate.md" />
      <div className="text-muted leading-relaxed mb-12 text-[0.95rem]">
        <p className="mb-4">
          A production enterprise application repeatedly slowed or failed during the periods users depended on it most. The immediate pressure was to add infrastructure; the real need was to understand the request path before spending more money on the wrong remedy.
        </p>
        <p>
          I led the path from production evidence to architectural correction: define the failure signals, isolate the actual constraints, validate the safest interventions, and leave the team with an operating model rather than a one-off fix.
        </p>
      </div>

      <SectionLabel command="cat ./evidence-of-failure.md" />
      <div className="my-8 overflow-x-auto bg-[#181825] border border-border rounded-[6px] p-6 text-[0.8rem] font-mono leading-relaxed text-dim">
        <div className="text-red mb-2">ERROR: 3 Incidents in 24 Hours</div>
        <div><span className="text-accent">#1 (Apr 21, 12:30 IST):</span> 99% CPU, 294 HTTP 5XX, 90s response times</div>
        <div className="pl-4 border-l border-border ml-2 mb-4">Root Cause: redis.keys() in hot path (O(N) blocking)</div>
        
        <div><span className="text-accent">#2 (Apr 22, 08:35 IST):</span> 1,171 ALB 502s, 314s max response</div>
        <div className="pl-4 border-l border-border ml-2 mb-4">Root Cause: Serial EFS writes in upload endpoint saturating I/O</div>
        
        <div><span className="text-accent">#3 (Apr 22, 11:30 IST):</span> 3.9% error rate, 19.2s avg response</div>
        <div className="pl-4 border-l border-border ml-2">Root Cause: Scan-per-request still O(N) under high concurrency</div>
      </div>

      <SectionLabel command="diff --decisions" />
      <DecisionTable decisions={decisions} />

      <SectionLabel command="cat ./leadership-decisions.md" />
      <div className="mb-12">
        <ChallengeBlock 
          num="01"
          title="Replace assumptions with a shared evidence trail"
          description="I correlated production request data, infrastructure signals, and application behavior to separate apparent hardware pressure from the actual sources of cascading failure."
        />
        <ChallengeBlock 
          num="02"
          title="Make stability visible during the decision"
          description="The team needed a fast, common view of service health during incidents. I established the signals and reporting path required to make capacity and rollout decisions in the open."
        />
        <ChallengeBlock 
          num="03"
          title="Validate the production path before declaring recovery"
          description="I used representative user journeys, not isolated endpoint benchmarks, to test whether the recovery path would hold under realistic concurrent load."
        />
      </div>

      <SectionLabel command="cat ./capability-created.md" />
      <div className="bg-[rgba(166,227,161,0.05)] border border-[rgba(166,227,161,0.2)] rounded-[6px] p-6 text-text">
        <ul className="list-disc pl-5 m-0 flex flex-col gap-2 text-[0.95rem]">
          <li>Reduced average response time from <span className="text-red font-mono">~19s</span> to <span className="text-green font-mono">{"<500ms"}</span> on the recovered path.</li>
          <li>Removed the targeted <span className="text-red font-mono">3.9%</span> 5XX failure rate after validation.</li>
          <li>Reduced cloud spend by <span className="text-green font-mono">~25%</span> by right-sizing from evidence, not assumptions.</li>
          <li>Created a repeatable approach to capacity, load validation, and incident investigation for the original hardware footprint.</li>
        </ul>
      </div>
    </article>
  );
}
