const domains = [
  {
    number: "01",
    title: "Backend & platform engineering",
    description:
      "I build the services behind product workflows: APIs, data access, subscriptions, identity integrations and background processing. My focus is clear service boundaries, reliable state changes and recovery when work is interrupted.",
    tools: "Node.js · TypeScript · Python · PostgreSQL · Redis · RabbitMQ",
  },
  {
    number: "02",
    title: "Generative AI, retrieval & voice",
    description:
      "I connect LLMs with documents, application state and real-time interaction. My work includes PDF and OCR pipelines, embeddings, vector search, retrieval-augmented generation (RAG), bounded agents and coordinated speech delivery.",
    tools: "LLMs · RAG · pgvector · LiveKit · Speech pipelines · Langfuse",
  },
  {
    number: "03",
    title: "Cloud, reliability & operations",
    description:
      "I investigate production bottlenecks and build tools that help teams understand system behaviour, capacity and cost. That includes operational dashboards, workload analysis and recoverable processing pipelines.",
    tools: "AWS · Docker · Observability · Performance analysis · Job recovery",
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
