const domains = [
  {
    number: "01",
    title: "Real-Time Voice & AI Systems Architecture",
    description: "My work connects real-time interaction with production reliability. I define speech and state boundaries, tune interruptions, and trace each stage against a sub-second latency budget where the interaction requires it.",
    tools: "LiveKit · WebRTC · Silero VAD · DTLN · State machines · Langfuse · OpenTelemetry",
  },
  {
    number: "02",
    title: "Cloud Performance, Scale & Cost Optimization",
    description: "I investigate the request, query or infrastructure constraint behind slow APIs and rising spend. That includes profiling hot paths, addressing 5XX cascades, offloading heavy work and right-sizing AWS capacity against measured demand.",
    tools: "AWS · Node.js · PostgreSQL · Redis · RabbitMQ · Load testing",
  },
  {
    number: "03",
    title: "Production LLMOps & Deterministic Guardrails",
    description: "I work on observable model behaviour and explicit product decisions: tool boundaries, retrieval rules, evaluation pipelines, token-cost controls and multi-provider fallbacks that preserve application state.",
    tools: "LLMs · RAG · pgvector · Eval pipelines · Token budgets · Provider fallbacks",
  },
  {
    number: "04",
    title: "DevOps, Infrastructure-as-Code & Delivery",
    description: "My focus is repeatable, recoverable infrastructure changes. That includes Terraform changes, zero-downtime delivery and rollback paths, with load validation and incident playbooks engineering teams can operate.",
    tools: "Terraform · AWS · Docker · CI/CD · Observability · Incident runbooks",
  },
];
export function ExpertiseGrid() {
  return (
    <section className="section consulting-capabilities" aria-labelledby="expertise-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Engineering / Areas of focus</p>
          <h2 id="expertise-title">Where I focus.</h2>
        </div>
      </div>
      <div className="expertise-grid">
        {domains.map((domain) => (
          <article key={domain.number}>
            <span className="domain-number">{domain.number}</span>
            <h3>{domain.title}</h3>
            <p>{domain.description}</p>
            <small>{domain.tools}</small>
          </article>
        ))}
      </div>
    </section>
  );
}
