import { SectionLabel } from "@/components/ui/SectionLabel";
import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";
import { DecisionTable } from "@/components/case-study/DecisionTable";
import { ChallengeBlock } from "@/components/case-study/ChallengeBlock";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Database Performance Engineering | Case Study",
  description: "Achieved 99.9% reliability and eliminated N+1 queries through widespread hydration optimization and background job migrations.",
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
        title="Database Performance Engineering"
        role="Backend Architect"
        stack={["PostgreSQL", "MongoDB", "Redis", "Mongoose", "RabbitMQ", "Node.js"]}
        duration="2025 - 2026"
      />

      <SectionLabel command="cat ./problem.md" />
      <div className="text-muted leading-relaxed mb-12 text-[0.95rem]">
        <p className="mb-4">
          Core platform API endpoints hit pathological response times under concurrent load. The database layer was heavily taxed, event loops were blocked, and cloud resources were massively over-provisioned without yielding performance benefits.
        </p>
        <p>
          An extensive audit was required to untangle ORM misconfigurations, eliminate N+1 queries, and move heavy synchronous workloads into async background queues.
        </p>
      </div>

      <SectionLabel command="diff --decisions" />
      <DecisionTable decisions={decisions} />

      <SectionLabel command="cat ./challenges.md" />
      <div className="mb-12">
        <ChallengeBlock 
          num="01"
          title="The ORM Hydration Tax"
          description="Code audit revealed 81% of Mongoose queries were hydrating full documents unnecessarily. By mandating .lean() for read operations project-wide, we bypassed the ORM's getters, setters, and change-tracking, cutting CPU load significantly."
        />
        <ChallengeBlock 
          num="02"
          title="N+1 Query Elimination"
          description="Critical endpoints contained up to 7 sequential for-await loops querying the database inside iterators. Refactored to batched queries and Promise.all() to execute network round-trips in parallel."
        />
        <ChallengeBlock 
          num="03"
          title="Synchronous I/O Blocking"
          description="Report generation (Excel/PDF) and file writes were executing synchronously in the request path, saturating Node workers. Migrated 10+ heavy services to a RabbitMQ-backed consumer pattern."
        />
      </div>

      <SectionLabel command="cat ./outcome.md" />
      <div className="bg-[rgba(166,227,161,0.05)] border border-[rgba(166,227,161,0.2)] rounded-[6px] p-6 text-text">
        <ul className="list-disc pl-5 m-0 flex flex-col gap-2 text-[0.95rem]">
          <li>System processing reliability stabilized from 94% to <span className="text-green font-mono">99.9%</span>.</li>
          <li>Database round-trip wait times plummeted by converting serial N+1 loops into parallel executions.</li>
          <li>Overall scheduling latency reduced by <span className="text-green font-mono">60%</span>.</li>
          <li>Infrastructure costs optimized by safely downscaling over-provisioned cache clusters.</li>
        </ul>
      </div>
    </article>
  );
}
