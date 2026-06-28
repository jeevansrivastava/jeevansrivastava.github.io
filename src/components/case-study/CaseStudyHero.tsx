import Link from "next/link";

interface CaseStudyHeroProps {
  title: string;
  role: string;
  stack: string[];
  duration: string;
}

export function CaseStudyHero({ title, role, stack, duration }: CaseStudyHeroProps) {
  return (
    <div className="mb-12">
      <Link href="/case-studies" className="inline-flex items-center gap-2 font-mono text-[0.8rem] text-dim hover:text-text transition-colors mb-6 no-underline">
        <span className="text-accent">&lt;</span> cd ../
      </Link>
      
      <div className="border border-dashed border-border rounded-[6px] p-6 bg-bg-card font-mono text-[0.85rem]">
        <div className="text-accent font-bold text-[1.1rem] mb-4 pb-4 border-b border-dashed border-border">
          {title}
        </div>
        <div className="grid grid-cols-[100px_1fr] gap-y-3 gap-x-4">
          <div className="text-dim">Role:</div>
          <div className="text-text">{role}</div>
          
          <div className="text-dim">Stack:</div>
          <div className="text-text flex flex-wrap gap-2">
            {stack.map(tech => (
              <span key={tech} className="text-green">{tech}</span>
            ))}
          </div>
          
          <div className="text-dim">Duration:</div>
          <div className="text-text">{duration}</div>
        </div>
      </div>
    </div>
  );
}
