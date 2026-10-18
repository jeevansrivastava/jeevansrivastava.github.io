export function SystemFlow({
  steps,
  compact = false,
}: {
  steps: { title: string; detail: string }[];
  compact?: boolean;
}) {
  return (
    <figure className={`system-flow ${compact ? "compact-flow" : ""}`}>
      <figcaption>
        {compact
          ? "Voice application / system overview"
          : "Architecture / system overview"}
      </figcaption>
      <ol>
        {steps.map((step, i) => (
          <li key={step.title}>
            <span className="flow-number">0{i + 1}</span>
            <div>
              <strong>{step.title}</strong>
              <span>{step.detail}</span>
            </div>
            {i < steps.length - 1 && (
              <span className="flow-arrow" aria-hidden="true">
                ↓
              </span>
            )}
          </li>
        ))}
      </ol>
      {compact && <p className="flow-caption">One learning journey. Explicit state across every handoff.</p>}
    </figure>
  );
}
