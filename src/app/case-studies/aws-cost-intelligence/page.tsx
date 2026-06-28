import { SectionLabel } from "@/components/ui/SectionLabel";
import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";
import { DecisionTable } from "@/components/case-study/DecisionTable";
import { ChallengeBlock } from "@/components/case-study/ChallengeBlock";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Backend Performance & AWS Cost Intelligence | Case Study",
  description: "Resolved critical API bottlenecks (19s → <500ms), eliminated O(N) Redis blocking calls, and reduced cloud spend by 25%.",
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
        title="Backend Performance & AWS Cost Intelligence"
        role="Backend Infrastructure Lead"
        stack={["Node.js", "Redis Cluster", "AWS CloudWatch", "ALB", "Python", "Bash"]}
        duration="Q2 2026"
      />

      <SectionLabel command="cat ./problem.md" />
      <div className="text-muted leading-relaxed mb-12 text-[0.95rem]">
        <p className="mb-4">
          A production enterprise application experienced catastrophic API slowdowns during peak hours. The system degraded to being ~600× slower than normal, affecting all users during critical high-traffic periods.
        </p>
        <p>
          Initial assumptions blamed hardware limits, but a deep dive into AWS infrastructure and application code revealed a different story.
        </p>
      </div>

      <SectionLabel command="tail -f /var/log/incident.log" />
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

      <SectionLabel command="cat ./challenges.md" />
      <div className="mb-12">
        <ChallengeBlock 
          num="01"
          title="Root Cause Isolation"
          description="Parsed 14,261 ALB access log entries to pinpoint the exact POST /api/v1/resource/* endpoints responsible for the cascading failure."
        />
        <ChallengeBlock 
          num="02"
          title="Real-time Observability"
          description="Built a custom 759-line Bash script (infra-stability-check.sh) for immediate, on-demand stability reporting combining CloudWatch metrics and ASG state, bypassing slow APM tools during the firefight."
        />
        <ChallengeBlock 
          num="03"
          title="Predictive Load Testing"
          description="Developed a Python/aiohttp script to simulate the exact API call sequence and authentication flow of a user loading a dense dashboard, successfully predicting the third incident hours before it occurred."
        />
      </div>

      <SectionLabel command="cat ./outcome.md" />
      <div className="bg-[rgba(166,227,161,0.05)] border border-[rgba(166,227,161,0.2)] rounded-[6px] p-6 text-text">
        <ul className="list-disc pl-5 m-0 flex flex-col gap-2 text-[0.95rem]">
          <li>Average response time plummeted from <span className="text-red font-mono">~19s</span> to <span className="text-green font-mono">{"<500ms"}</span> (38× improvement).</li>
          <li>Target 5XX error rate eliminated (3.9% → 0%).</li>
          <li>Cloud spend reduced by <span className="text-green font-mono">~25%</span> ($150/mo per cluster recovered).</li>
          <li>Traffic capacity increased by <span className="text-green font-mono">5-10×</span> on the original hardware.</li>
          <li>Redis cluster safely downgraded from <code className="text-dim">cache.m6g.large</code> to <code className="text-dim">cache.t4g.medium</code> (CPU verified at 2.4% steady-state).</li>
        </ul>
      </div>
    </article>
  );
}
