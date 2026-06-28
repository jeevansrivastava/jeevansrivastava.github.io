export function ArchDiagram({ content }: { content: string }) {
  return (
    <div className="my-8 overflow-x-auto bg-[#181825] border border-border rounded-[6px] p-6">
      <pre className="font-mono text-[0.75rem] leading-[1.2] text-text">
        {content}
      </pre>
    </div>
  );
}
