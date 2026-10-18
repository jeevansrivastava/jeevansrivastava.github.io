import Link from "next/link";
import { studies, featuredStudies } from "@/content/portfolio";
import { NotebookPage } from "@/components/layout/NotebookPage";
import { PageDoodle } from "@/components/ui/PageDoodle";
import { FeaturedCaseStudies } from "@/components/home/FeaturedCaseStudies";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Engineering case studies",
  "Engineering case studies in voice AI, backend reliability, data access, media delivery, subscriptions, speech assessment, content operations, investment workflows and classroom export.",
  "/case-studies",
);
export default function CaseStudiesIndex() {
  return (
    <NotebookPage label="Selected work" number="01" variant="work">
      <header className="page-intro illustrated-intro">
        <PageDoodle kind="work" />
        <p className="eyebrow">Engineering in practice</p>
        <h1>
          Systems work.
          <br />
          <em>Decisions included.</em>
        </h1>
        <p>
          Technical challenges across products and teams: the architecture I
          worked on, the trade-offs I weighed, and how I resolved the problems.
        </p>
        <Link className="text-link" href="#more-work-title">Browse more projects <span aria-hidden="true">↓</span></Link>
      </header>
      <FeaturedCaseStudies showAllLink={false} />
      <section className="case-archive" aria-labelledby="more-work-title">
        <p className="eyebrow">Further reading</p>
        <h2 id="more-work-title">More from the workbench.</h2>
        <div className="case-archive-list">
          {studies.filter((study) => !featuredStudies.includes(study)).map((study) => (
            <Link className="case-archive-link" href={`/case-studies/${study.slug}`} key={study.slug}>
              <span className="case-archive-number" aria-hidden="true">{String(studies.indexOf(study) + 1).padStart(2, "0")}</span>
              <div><p className="eyebrow">{study.category}</p><h3>{study.title}</h3><p>{study.summary}</p></div>
              <span className="case-archive-arrow" aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>
    </NotebookPage>
  );
}
