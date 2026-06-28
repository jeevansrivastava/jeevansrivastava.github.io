export function SectionLabel({ command }: { command: string }) {
  return (
    <h2 className="font-mono text-[0.8rem] font-semibold tracking-[2px] uppercase text-muted mb-10 flex items-center gap-2">
      <span className="text-green font-mono">$</span>
      {command}
    </h2>
  );
}
