import Link from "next/link";
import { profile } from "@/content/portfolio";
import { WorkbenchSketch } from "./WorkbenchSketch";
export function HeroSection() {
  return (
    <section className="notebook-hero" aria-labelledby="hero-title">
      <div className="notebook-topline"><span>Jeevan’s field notes</span><span>Engineering, with intent. / Est. 2012</span></div>
      <div className="notebook-spread">
        <div className="notebook-intro">
          <p className="eyebrow">Engineering Leader · AI Systems & Cloud Architecture</p>
          <h1 id="hero-title">Serious systems.<br /><em>A curious mind.</em></h1>
          <p className="handwritten intro-scribble">Still asking “why?” Still building.</p>
          <p className="notebook-description">{profile.summary}</p>
          <div className="actions">
            <Link href="/case-studies" className="button button-primary">Explore My Work <span aria-hidden="true">↗</span></Link>
            <a href={profile.calendly} className="button resume-link">Discuss an Architecture Challenge <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <WorkbenchSketch />
      </div>
      <div className="notebook-bottomline"><span><i aria-hidden="true" /> {profile.currentRole} · {profile.company}</span><a href="#selected-work">Turn to the work <span aria-hidden="true">↓</span></a></div>
      <span className="book-ribbon" aria-hidden="true" />
    </section>
  );
}
