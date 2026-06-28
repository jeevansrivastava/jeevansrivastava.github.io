interface Decision {
  decision: string;
  choice: string;
  alternative: string;
  reason: string;
}

export function DecisionTable({ decisions }: { decisions: Decision[] }) {
  return (
    <div className="my-8 overflow-x-auto">
      <table className="w-full text-left border-collapse font-mono text-[0.85rem]">
        <thead>
          <tr className="border-b border-border">
            <th className="py-3 px-4 text-dim font-medium">Decision</th>
            <th className="py-3 px-4 text-green font-medium">Choice</th>
            <th className="py-3 px-4 text-muted font-medium">Alternative</th>
            <th className="py-3 px-4 text-dim font-medium">Why</th>
          </tr>
        </thead>
        <tbody>
          {decisions.map((d, i) => (
            <tr key={i} className="border-b border-dashed border-[rgba(69,71,90,0.5)] hover:bg-[rgba(137,180,250,0.02)]">
              <td className="py-3 px-4 text-text">{d.decision}</td>
              <td className="py-3 px-4 text-green">{d.choice}</td>
              <td className="py-3 px-4 text-muted">{d.alternative}</td>
              <td className="py-3 px-4 text-text">{d.reason}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
