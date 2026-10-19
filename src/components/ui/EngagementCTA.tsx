import Link from "next/link";
export function EngagementCTA() {
  return (
    <aside className="engagement-cta" aria-label="Selective technical advisory">
      <p>Exploring a similar technical challenge? I’m open to focused architecture conversations, depending on scope and availability.</p>
      <Link className="text-link" href="/work-with-me">Explore selective advisory <span aria-hidden="true">→</span></Link>
    </aside>
  );
}
