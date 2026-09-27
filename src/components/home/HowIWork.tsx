import { SectionLabel } from "@/components/ui/SectionLabel";

const steps = [
  {
    number: "01",
    title: "Diagnose the real constraint",
    description: "Start with the product, operating, and team constraints—not a preferred model or tool. Establish what is at risk and what evidence will change the decision.",
  },
  {
    number: "02",
    title: "Make the architecture decision explicit",
    description: "Define boundaries, trade-offs, success measures, and a rollout path the team can challenge, understand, and own.",
  },
  {
    number: "03",
    title: "De-risk in production",
    description: "Instrument the critical path, validate under representative conditions, and introduce recovery paths before reliability becomes an incident.",
  },
  {
    number: "04",
    title: "Leave capability behind",
    description: "Document the reasoning, operating signals, and decision record so the system remains evolvable without depending on one person.",
  },
];

export function HowIWork() {
  return (
    <section id="how-i-work" className="mb-24">
      <SectionLabel command="cat ./how-i-work.md" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {steps.map((step) => (
          <article key={step.number} className="bg-bg-card border border-dashed border-border rounded-[6px] p-6">
            <div className="font-mono text-[0.8rem] text-green mb-4">{step.number} /</div>
            <h3 className="text-text text-[1.05rem] font-medium mb-3">{step.title}</h3>
            <p className="text-muted leading-relaxed text-[0.9rem] m-0">{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
