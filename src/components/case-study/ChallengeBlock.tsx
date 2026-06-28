export function ChallengeBlock({ num, title, description }: { num: string, title: string, description: string }) {
  return (
    <div className="mb-6 flex gap-4 items-start">
      <div className="bg-[rgba(166,227,161,0.1)] text-green font-mono text-[0.75rem] px-2 py-1 rounded-[4px] mt-1">
        {num}
      </div>
      <div>
        <h4 className="text-[1rem] font-medium text-text mb-2">{title}</h4>
        <p className="text-[0.9rem] text-muted leading-relaxed m-0">{description}</p>
      </div>
    </div>
  );
}
