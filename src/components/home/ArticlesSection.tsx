import Link from "next/link";
import { getStudy, profile } from "@/content/portfolio";

const readingList = ["ai-voice-application", "aws-cost-intelligence", "subscription-entitlements"].map(getStudy);
export function ArticlesSection() {
  return (
    <>
    <section className="reading-section" aria-labelledby="reading-list-title">
      <p className="eyebrow">On this site / Case-study reading list</p>
      <h2 id="reading-list-title">AI, backend and cloud engineering in practice</h2>
      <p>Start with these accounts of production work: the constraints, architecture decisions and operating lessons behind each system.</p>
      {readingList.map((study) => (
        <article key={study.slug}>
          <h3><Link className="text-link" href={`/case-studies/${study.slug}`}>{study.seo.title} →</Link></h3>
          <p>{study.seo.description}</p>
        </article>
      ))}
    </section>
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
    </>
  );
}
