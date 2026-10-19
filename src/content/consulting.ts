export const advisoryFormats = [
  {
    id: "architecture-review",
    number: "01",
    format: "Focused review",
    title: "AI & Systems Architecture Review",
    context: "You’re weighing an architecture decision and would value another engineering perspective.",
    topics: [
      "Voice and AI pipeline boundaries, interruption handling and recoverable application state.",
      "LLM tool boundaries, retrieval design, evaluation and observability.",
      "Failure scenarios, build-vs-buy trade-offs and the assumptions worth validating next.",
    ],
    linkLabel: "Ask about an architecture review",
  },
  {
    id: "technical-discussion",
    number: "02",
    format: "Technical discussion",
    title: "Cloud & Performance Discussion",
    context: "You have a latency, reliability or cloud-cost question and want help thinking through the evidence.",
    topics: [
      "Request-path profiling across application code, PostgreSQL, Redis and infrastructure.",
      "Queue boundaries, concurrency, workload isolation and capacity trade-offs.",
      "Which measurements or experiments could make the next decision clearer.",
    ],
    linkLabel: "Share a technical question",
  },
  {
    id: "technical-mentoring",
    number: "03",
    format: "Engineering mentoring",
    title: "Technical Mentoring & Decision Reviews",
    context: "You’re growing into broader technical ownership or working through a consequential system decision.",
    topics: [
      "Framing architecture decisions and explaining trade-offs to engineering and product teams.",
      "Reviewing design reasoning, operational concerns and failure scenarios.",
      "Building technical judgment and communicating the context behind a decision.",
    ],
    linkLabel: "Ask about technical mentoring",
  },
];
