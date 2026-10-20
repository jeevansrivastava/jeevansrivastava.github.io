import { NotebookPage } from "@/components/layout/NotebookPage";
import Link from "next/link";
import { getStudy, profile, studies, type Study } from "@/content/portfolio";
import { JsonLd } from "@/components/seo/JsonLd";
import { absoluteUrl, personId } from "@/lib/site";
import { EngagementCTA } from "@/components/ui/EngagementCTA";
import { StudyBrief } from "./StudyBrief";
import { CaseStudyHero } from "./CaseStudyHero";
import { SystemFlow } from "./SystemFlow";
import { DecisionTable } from "./DecisionTable";
import { ChallengeBlock } from "./ChallengeBlock";
export function StudyPage({ study }: { study: Study }) {
  const next = studies[(studies.indexOf(study) + 1) % studies.length];
  const url = absoluteUrl(`/case-studies/${study.slug}`);
  return (
    <NotebookPage label="Engineering casebook" number={`01.${studies.indexOf(study) + 1}`} variant="study">
    <article className="reading-layout">
      <JsonLd data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Article",
            "@id": `${url}#article`,
            url,
            headline: study.seo.title,
            description: study.seo.description,
            inLanguage: "en",
            mainEntityOfPage: { "@type": "WebPage", "@id": url },
            author: { "@type": "Person", "@id": personId, name: profile.name, url: absoluteUrl("/about") },
            about: study.technologies.map((name) => ({ "@type": "Thing", name })),
          },
          {
            "@type": "BreadcrumbList",
            "@id": `${url}#breadcrumbs`,
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
              { "@type": "ListItem", position: 2, name: "Case studies", item: absoluteUrl("/case-studies") },
              { "@type": "ListItem", position: 3, name: study.seo.title, item: url },
            ],
          },
        ],
      }} />
      <CaseStudyHero study={study} />
      <StudyBrief study={study} />
      <section className="reading-section">
        <h2>The problem & my responsibilities</h2>
        <p>{study.problem}</p>
        <p>{study.contribution}</p>
        <h3>Constraints that shaped the work</h3>
        <ul className="constraint-list">
          {study.constraints.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </section>
      <section className="reading-section">
        <h2>How the system fits together</h2>
        <SystemFlow steps={study.flow} />
        {study.diagram && <a className="text-link" href={study.diagram}>
          Open architecture diagram ↗
        </a>}
      </section>
      <section className="reading-section">
        <h2>The consequential decisions</h2>
        <DecisionTable decisions={study.decisions} />
      </section>
      <section className="reading-section">
        <h2>Where the work got difficult</h2>
        {study.challenges.map((c) => (
          <ChallengeBlock key={c.title} {...c} />
        ))}
      </section>
      <section className="reading-section">
        <h2>Operating considerations</h2>
        {study.considerations.map((c) => (
          <ChallengeBlock key={c.title} {...c} />
        ))}
      </section>
      <section className="reading-section">
        <h2>Outcomes & lessons</h2>
        <p>{study.outcome}</p>
        <blockquote className="case-callout">
          <p>{study.lesson}</p>
        </blockquote>
      </section>
      <section className="reading-section" aria-labelledby="related-studies-title">
        <h2 id="related-studies-title">Related engineering case studies</h2>
        <ul className="constraint-list">
          {study.relatedSlugs.map((slug) => {
            const related = getStudy(slug);
            return <li key={slug}><Link className="text-link" href={`/case-studies/${slug}`}>{related.seo.title} →</Link></li>;
          })}
        </ul>
      </section>
      <EngagementCTA />
      <nav className="case-next" aria-label="Case study navigation">
        <span>Next case study</span>
        <Link href={`/case-studies/${next.slug}`}>{next.title} →</Link>
      </nav>
    </article>
    </NotebookPage>
  );
}
