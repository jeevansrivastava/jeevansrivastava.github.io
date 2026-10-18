import { ProjectArtwork } from "@/components/home/ProjectArtwork";
import Link from "next/link";
import { studies, type Study } from "@/content/portfolio";
export function CaseStudyHero({ study }: { study: Study }) {
  return (
    <header className="case-hero">
      <Link className="back-link" href="/case-studies">
        ← All case studies
      </Link>
      <div className="case-cover-grid">
      <div>
      <p className="eyebrow">{study.category}</p>
      <h1>{study.title}</h1>
      <p className="case-summary">{study.summary}</p>
      </div>
      <ProjectArtwork kind={studies.indexOf(study)} />
      </div>
      <dl className="case-facts">
        <div>
          <dt>My contribution</dt>
          <dd>{study.role}</dd>
        </div>
        <div>
          <dt>Context</dt>
          <dd>Professional work · {study.period}</dd>
        </div>
      </dl>
      <div className="tag-list" aria-label="Technologies">
        {study.technologies.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
    </header>
  );
}
