import { SectionLabel } from "@/components/ui/SectionLabel";
import { ProjectCard } from "@/components/ui/ProjectCard";

const expertiseData = [
  {
    title: "AI Product Architecture",
    description: "Turning AI product intent into dependable workflows with clear interaction boundaries, latency budgets, and recovery paths.",
    tags: ["LiveKit WebRTC", "Cartesia", "Silero VAD", "DTLN", "Langfuse", "OpenAI"],
  },
  {
    title: "AI Decision Systems",
    description: "Explicit state, bounded handoffs, evaluation, and safe failure modes for product workflows that cannot rely on prompt behavior alone.",
    tags: ["Agent State", "Zod", "Tool Boundaries", "Workflow Design"],
  },
  {
    title: "AI Quality & Operating Evidence",
    description: "Traceable decisions, evaluation-ready workflows, latency profiling, and practical cost attribution for teams that need to improve with confidence.",
    tags: ["Langfuse", "OpenTelemetry", "Evaluation", "Cost Controls"],
  },
  {
    title: "Reliable Platform Architecture",
    description: "High-throughput APIs, asynchronous workloads, resilient state, and simpler operating models for critical systems.",
    tags: ["Node.js", "PostgreSQL", "Redis", "RabbitMQ", "MongoDB"],
  },
  {
    title: "Cloud Performance & Economics",
    description: "Evidence-led performance work: find the bottleneck, validate the change, and operate within a sustainable cost envelope.",
    tags: ["AWS", "CloudWatch", "Load Testing", "Terraform", "CI/CD"],
  },
  {
    title: "Technical Leadership",
    description: "Technical strategy, explicit architecture decisions, and teams equipped to ship, operate, and extend critical systems.",
    tags: ["Architecture", "System Design", "Mentoring", "Technical Strategy"],
  },
];

export function ExpertiseGrid() {
  return (
    <section id="expertise" className="mb-24">
      <SectionLabel command="cat ./expertise/" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {expertiseData.map((item, index) => (
          <ProjectCard
            key={item.title}
            number={String(index + 1).padStart(2, "0")}
            title={item.title}
            description={item.description}
            tags={item.tags}
          />
        ))}
      </div>
    </section>
  );
}
