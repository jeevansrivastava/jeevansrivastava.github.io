import { SectionLabel } from "@/components/ui/SectionLabel";

export function PhilosophySection() {
  return (
    <section id="philosophy" className="mb-24">
      <SectionLabel command="cat ./philosophy.md" />
      <div className="bg-bg-card border border-dashed border-border rounded-[6px] p-8 text-[0.95rem] leading-[1.8] text-muted font-mono">
        <h3 className="text-accent font-bold text-[1.2rem] mb-6 pb-4 border-b border-border border-dashed">
          # Engineering Philosophy
        </h3>
        <div className="flex flex-col gap-6">
          <p>
            I believe the best systems make the right thing easy for users and operators. Complexity must earn its place; explicit boundaries and observable behavior are prerequisites for reliability.
          </p>
          <p>
            My job is to turn uncertain product goals into systems a team can understand, evolve, and operate. That means making architectural decisions explicit, measuring the critical paths, and replacing guesswork with evidence.
          </p>
          <p>
            Whether I am right-sizing infrastructure or debugging an AI workflow, I optimize for a balanced operating system: <span className="text-yellow">developer velocity</span>, <span className="text-green">end-user experience</span>, and measurable reliability.
          </p>
        </div>
      </div>
    </section>
  );
}
