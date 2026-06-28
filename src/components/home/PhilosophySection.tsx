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
            I believe that the best systems are the ones you never have to think about. 
            Complexity is a liability; simplicity is a prerequisite for reliability.
          </p>
          <p>
            As a Staff Engineer, my job isn't just to write code—it's to multiply the 
            effectiveness of the entire engineering organization. This means designing 
            clear abstractions, enforcing strict observability, and fostering a culture 
            where data-driven decisions replace guesswork.
          </p>
          <p>
            Whether it's right-sizing a Redis cluster to save 25% on AWS, or debugging 
            a multi-agent AI pipeline down to the millisecond, I optimize for two metrics 
            above all else: <span className="text-yellow">developer velocity</span> and <span className="text-green">end-user latency</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
