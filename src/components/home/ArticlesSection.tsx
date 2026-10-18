import { profile } from "@/content/portfolio";
export function ArticlesSection() {
  return (
    <section className="writing-link">
      <p className="eyebrow">Elsewhere / Medium</p>
      <h2>Notes from engineering practice.</h2>
      <p>
        My writing lives on Medium. Browse the archive for articles on software
        engineering and system design.
      </p>
      <a className="text-link" href={profile.medium}>
        Visit the writing archive ↗
      </a>
    </section>
  );
}
