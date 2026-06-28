"use client";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { Typewriter } from "@/components/ui/Typewriter";

export function HeroSection() {
  return (
    <section id="about" className="mb-16 flex flex-col pt-4">
      <SectionLabel command="whoami" />
      <div className="text-[0.8rem] text-dim mb-6 leading-relaxed font-mono">
        <p>Last login: {new Date().toDateString()} on ttys001</p>
        <p>jeevan@mbp ~ % ./start_portfolio.sh</p>
        <p className="text-green">[OK] Loading modules...</p>
        <p className="text-green">[OK] Initializing session...</p>
      </div>

      <div className="mb-12">
        <p className="font-mono text-dim text-[0.95rem]">
          <span className="text-accent mr-3 font-bold">&gt;</span>
          <Typewriter />
        </p>
      </div>
    </section>
  );
}
