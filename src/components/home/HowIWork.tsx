const notes = [
  {
    title: "Diagnose the real constraint",
    description: "I look at latency, resource use and failure modes before changing the system. A useful baseline makes the actual constraint easier to see.",
  },
  {
    title: "Make the architecture decision explicit",
    description: "I make system boundaries, build-vs-buy trade-offs and cost budgets explicit, recording the decision, its risks and how the team will validate it.",
  },
  {
    title: "De-risk in production",
    description: "I use telemetry, staged rollout and load validation to check changes against real operating conditions, with a clear rollback path.",
  },
  {
    title: "Leave capability behind",
    description: "I share the reasoning, runbooks and operating context behind a change so other engineers can understand, operate and extend the system.",
  },
];
export function HowIWork() {
  return (
    <section className="section personal-notes consulting-method" aria-labelledby="principles-title">
      <div>
        <p className="eyebrow">03 / How I approach the work</p>
        <h2 id="principles-title">From the first question.{" "}<br /><em>To a system the team understands.</em></h2>
      </div>
      <ol>
        {notes.map((note, index) => (
          <li key={note.title}>
            <span>0{index + 1}</span>
            <div><h3>{note.title}</h3><p>{note.description}</p></div>
          </li>
        ))}
      </ol>
    </section>
  );
}
