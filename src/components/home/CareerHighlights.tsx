import { SectionLabel } from "@/components/ui/SectionLabel";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export function CareerHighlights() {
  return (
    <section id="highlights" className="mb-24">
      <SectionLabel command="cat ./stats.json" />
      <div className="bg-bg-card border border-dashed border-border rounded-[6px] p-6 font-mono text-[0.95rem] leading-[2] overflow-x-auto text-text">
        <div>
          <span className="text-dim">{"{"}</span>
          <div className="pl-6 md:pl-8">
            <span className="text-accent">"experience"</span>: <span className="text-yellow">"<AnimatedCounter value="14" suffix="+" inline /> years"</span>,
            <br />
            <span className="text-accent">"core_focus"</span>: <span className="text-dim">[</span>
            <span className="text-green">"AI Infrastructure"</span>, <span className="text-green">"Distributed Systems"</span>
            <span className="text-dim">]</span>,
            <br />
            <span className="text-accent">"key_metrics"</span>: <span className="text-dim">{"{"}</span>
            <div className="pl-6 md:pl-8">
              <span className="text-accent">"api_response_time"</span>: <span className="text-green">"<AnimatedCounter value="500" prefix="&lt;" suffix="ms" inline />"</span>,
              <br />
              <span className="text-accent">"aws_cost_reduction"</span>: <span className="text-green">"<AnimatedCounter value="25" suffix="%" inline />"</span>,
              <br />
              <span className="text-accent">"traffic_scaling"</span>: <span className="text-green">"<AnimatedCounter value="10" suffix="x" inline /> capacity"</span>
            </div>
            <span className="text-dim">{"}"}</span>
          </div>
          <span className="text-dim">{"}"}</span>
        </div>
      </div>
    </section>
  );
}
