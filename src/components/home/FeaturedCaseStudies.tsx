import { SectionLabel } from "@/components/ui/SectionLabel";
import { ProjectCard } from "@/components/ui/ProjectCard";

const caseStudies = [
  {
    title: "AI Voice Application (AI Didi)",
    description: "Real-time bilingual voice tutor platform with <200ms TTFB, 6-agent orchestration, DTLN noise filtering, and multimodal WebRTC sync.",
    tags: ["LiveKit WebRTC", "Cartesia", "Silero VAD", "DTLN", "Langfuse", "PostgreSQL"],
    slug: "ai-voice-application",
  },
  {
    title: "Backend Performance & AWS Cost Intelligence",
    description: "Resolved critical API bottlenecks (19s → <500ms), eliminated O(N) Redis blocking calls, and reduced cloud spend by 25%.",
    tags: ["Node.js", "Redis", "MongoDB", "AWS CloudWatch"],
    slug: "aws-cost-intelligence",
  },
  {
    title: "Video Streaming & HLS Pipeline",
    description: "Built a reliable MP4 to HLS pipeline for classroom video content with multi-resolution adaptive bitrate streaming and S3 integration.",
    tags: ["FFmpeg", "AWS S3", "Node.js", "HLS", "Video.js"],
    slug: "video-streaming",
  },
  {
    title: "Database Performance Engineering",
    description: "Achieved 99.9% reliability and eliminated N+1 queries through widespread hydration optimization and background job migrations.",
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
