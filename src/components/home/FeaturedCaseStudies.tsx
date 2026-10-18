import Link from "next/link";
import { studies } from "@/content/portfolio";
import { ProjectArtwork } from "./ProjectArtwork";
export function FeaturedCaseStudies() {
  return (
    <section id="selected-work" className="section creative-work" aria-labelledby="work-title">
      <div className="section-heading"><div><p className="eyebrow">02 / From the workbench</p><h2 id="work-title">Good questions.<br /><em>Working answers.</em></h2></div><p>Some things I’ve built, untangled and learned from. Open a case study for the decisions behind the work.</p></div>
      <div className="project-gallery">
        {studies.map((study, i) => <article className={`project-sheet sheet-${i}`} key={study.slug}>
          <Link className="art-link" href={`/case-studies/${study.slug}`} aria-label={`Explore ${study.title}`}><ProjectArtwork kind={i} /><span className="art-open" aria-hidden="true">↗</span></Link>
          <div className="project-sheet-copy">
            <p className="eyebrow">0{i+1} / {study.category}</p>
            <h3><Link href={`/case-studies/${study.slug}`}>{study.title}</Link></h3>
            <p>{study.summary}</p>
            <details className="project-field-note"><summary>Open field note <span aria-hidden="true">＋</span></summary><dl><div><dt>My responsibility</dt><dd>{study.brief.responsibility}</dd></div><div><dt>The key decision</dt><dd>{study.brief.decision}</dd></div><div><dt>What changed</dt><dd>{study.brief.outcome}</dd></div></dl></details>
            <div className="project-sheet-footer"><span>{study.role}</span><Link className="text-link" href={`/case-studies/${study.slug}`}>{i===0 ? "Inside the architecture" : "Read the case study"} <span aria-hidden="true">↗</span></Link></div>
          </div>
        </article>)}
      </div>
      <p className="creative-evidence">Real professional work. Simplified architecture. Evidence and trade-offs in every account.</p>
    </section>
  );
}
