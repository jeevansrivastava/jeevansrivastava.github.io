interface Decision {
  decision: string;
  choice: string;
  alternative: string;
  reason: string;
}
export function DecisionTable({ decisions }: { decisions: Decision[] }) {
  return (
    <table className="decision-table">
      <caption>
        Choices, alternatives and the costs that come with each decision.
      </caption>
      <thead>
        <tr>
          {["Decision", "Choice", "Alternative", "Trade-off"].map((t) => (
            <th key={t} scope="col">
              {t}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {decisions.map((d) => (
          <tr key={d.decision}>
            <td data-label="Decision">{d.decision}</td>
            <td data-label="Choice">{d.choice}</td>
            <td data-label="Alternative">{d.alternative}</td>
            <td data-label="Trade-off">{d.reason}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
