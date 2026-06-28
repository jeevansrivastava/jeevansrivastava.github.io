import { SectionLabel } from "@/components/ui/SectionLabel";
import { ProjectCard } from "@/components/ui/ProjectCard";

const expertiseData = [
  {
    title: "AI Infrastructure",
    description: "Voice AI, LLM Integrations, RAG Pipelines, Multi-Agent Systems, Real-time Streaming",
    tags: ["LiveKit", "OpenAI", "Cartesia", "Silero VAD", "RAG"],
  },
  {
    title: "Backend Systems",
    description: "High-throughput APIs, Microservices, Async Processing, WebSocket Servers",
    tags: ["Node.js", "Python", "REST", "GraphQL", "FastAPI"],
  },
  {
    title: "Cloud & DevOps",
    description: "Scalable Infrastructure, Containerization, CI/CD, Infrastructure as Code",
    tags: ["AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
  },
  {
    title: "Databases",
    description: "Relational, NoSQL, Vector DBs, Query Optimization, High Availability",
    tags: ["PostgreSQL", "Redis", "MongoDB", "Vector DBs"],
  },
  {
    title: "Distributed Systems",
    description: "Event-Driven Architecture, Message Queues, Caching Strategies, High Scalability",
    tags: ["RabbitMQ", "Kafka", "Event Sourcing", "Redis Cluster"],
  },
  {
    title: "Engineering Leadership",
    description: "System Architecture, Mentoring, Code Reviews, Hiring, Technical Strategy",
    tags: ["Architecture", "System Design", "Mentoring", "Agile"],
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
