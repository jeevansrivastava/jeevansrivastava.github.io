import { SectionLabel } from "@/components/ui/SectionLabel";
import { ProjectCard } from "@/components/ui/ProjectCard";

const caseStudies = [
  {
    title: "Making real-time AI tutoring dependable beyond the demo",
    description: "Established the product, state, and operating boundaries for bilingual tutoring across noisy homes, variable networks, and interrupted sessions.",
    tags: ["LiveKit WebRTC", "Cartesia", "Silero VAD", "DTLN", "Langfuse", "PostgreSQL"],
    slug: "ai-voice-application",
  },
  {
    title: "Recovering a critical platform from peak-hour failure",
    description: "Turned repeated production incidents into an evidence-led performance and capacity model, reducing response time from ~19s to <500ms.",
    tags: ["Node.js", "Redis", "MongoDB", "AWS CloudWatch"],
    slug: "aws-cost-intelligence",
  },
  {
    title: "Designing learning delivery for unreliable connectivity",
    description: "Made educational video delivery usable across variable bandwidth, older devices, and the operational realities of content publishing.",
    tags: ["FFmpeg", "AWS S3", "Node.js", "HLS", "Video.js"],
    slug: "video-streaming",
  },
  {
    title: "Removing hidden platform bottlenecks before they became incidents",
    description: "Established a repeatable workload discipline that reduced avoidable data work, protected request paths, and improved operating efficiency.",
    tags: ["PostgreSQL", "Mongoose", "RabbitMQ", "Redis"],
    slug: "database-performance",
  },
];

export function FeaturedCaseStudies() {
  return (
    <section id="case-studies" className="mb-24">
      <SectionLabel command="ls ./case-studies/" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {caseStudies.map((study, index) => (
          <ProjectCard
            key={study.slug}
            number={String(index + 1).padStart(2, "0")}
            title={study.title}
            description={study.description}
            tags={study.tags}
            href={`/case-studies/${study.slug}`}
          />
        ))}
      </div>
    </section>
  );
}
