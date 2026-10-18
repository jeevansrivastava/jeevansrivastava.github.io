import Link from "next/link";
import { profile } from "@/content/portfolio";
import { WorkbenchSketch } from "./WorkbenchSketch";
export function HeroSection() {
  return (
    <section className="notebook-hero" aria-labelledby="hero-title">
      <div className="notebook-topline"><span>Jeevan’s field notes</span><span>Engineering, with intent. / Est. 2012</span></div>
      <div className="notebook-spread">
        <div className="notebook-intro">
          <p className="eyebrow">Jeevan Jyoti Srivastava</p>
          <h1 id="hero-title">Serious systems.<br /><em>A curious mind.</em></h1>
          <p className="handwritten intro-scribble">Still asking “why?” Still building.</p>
          <p className="notebook-description">{profile.summary}</p>
          <div className="actions">
            <Link href="/case-studies" className="button button-primary">View case studies <span aria-hidden="true">↗</span></Link>
            <Link href="/resume" className="button resume-link">View resume <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
        <WorkbenchSketch />
      </div>
      <div className="notebook-bottomline"><span><i aria-hidden="true" /> Senior Engineering Manager · UOLO</span><a href="#selected-work">Turn to the work <span aria-hidden="true">↓</span></a></div>
      <span className="book-ribbon" aria-hidden="true" />
    </section>
  );
}
