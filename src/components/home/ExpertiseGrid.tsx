const domains = [
  {
    number: "01",
    title: "Backend & distributed systems",
    description:
      "APIs, data access and asynchronous workloads. Clear boundaries between interactive requests, durable state and expensive background work.",
    tools: "Node.js · Python · FastAPI · PostgreSQL · Redis",
  },
  {
    number: "02",
    title: "AI systems & real-time interaction",
    description:
      "Generative AI, LLM applications and retrieval-augmented generation (RAG). Voice pipelines and bounded agents coordinated with product state, media and recovery.",
    tools: "LLMs · Generative AI · RAG · LiveKit · Streaming",
  },
  {
    number: "03",
    title: "Cloud & production engineering",
    description:
      "Diagnosing bottlenecks, understanding capacity and making cost-performance decisions from operating evidence.",
    tools: "AWS · Docker · Queues · CI/CD · Tracing",
  },
];
export function ExpertiseGrid() {
  return (
    <section className="section" aria-labelledby="expertise-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">02 / Areas of focus</p>
          <h2 id="expertise-title">Across the critical path.</h2>
        </div>
      </div>
      <div className="expertise-grid">
        {domains.map((d) => (
          <article key={d.number}>
            <span className="domain-number">{d.number}</span>
            <h3>{d.title}</h3>
            <p>{d.description}</p>
            <small>{d.tools}</small>
          </article>
        ))}
      </div>
    </section>
  );
}
