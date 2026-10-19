import Link from "next/link";
import { NotebookPage } from "@/components/layout/NotebookPage";
import { PageDoodle } from "@/components/ui/PageDoodle";
import { advisoryFormats } from "@/content/consulting";
import { profile } from "@/content/portfolio";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Advisory — Architecture Reviews & Technical Conversations",
  "Selective architecture reviews, technical discussions and engineering mentoring alongside Jeevan Jyoti Srivastava’s current engineering leadership role, depending on scope and availability.",
  "/work-with-me",
);

export default function WorkWithMePage() {
  return (
    <NotebookPage label="Selective advisory" number="06" variant="consulting">
      <header className="page-intro illustrated-intro">
        <PageDoodle kind="work" />
        <p className="eyebrow">Architecture reviews / Technical conversations</p>
        <h1>A useful conversation.<br /><em>A clearer decision.</em></h1>
        <p>I’m currently a {profile.currentRole} at {profile.company}. {profile.advisorySummary}</p>
        <div className="actions">
          <a className="button button-primary" href={profile.calendly}>Discuss an Architecture Challenge <span aria-hidden="true">↗</span></a>
          <Link className="text-link" href="/case-studies">Explore my work →</Link>
        </div>
      </header>
      <div className="reading-layout">
        <section className="reading-section" aria-labelledby="conversation-title">
          <h2 id="conversation-title">Start with the question.</h2>
          <p>Share the technical decision, a little context and the kind of perspective you’re looking for. We can then see whether a focused conversation or review would be useful and fits my availability.</p>
        </section>
        {advisoryFormats.map((format) => (
          <section className="reading-section" id={format.id} key={format.id} aria-labelledby={`${format.id}-title`}>
            <p className="eyebrow">{format.number} / {format.format}</p>
            <h2 id={`${format.id}-title`}>{format.title}</h2>
            <p>{format.context}</p>
            <h3>What we can explore</h3>
            <ul className="constraint-list">{format.topics.map((topic) => <li key={topic}>{topic}</li>)}</ul>
            <Link className="text-link" href="/contact#project-enquiry">{format.linkLabel} →</Link>
          </section>
        ))}
        <section className="reading-section" aria-labelledby="advisory-fit-title">
          <h2 id="advisory-fit-title">Scope and availability.</h2>
          <p>My current engineering leadership role remains my primary focus. Any advisory work is selective, with the scope and time commitment agreed before we begin.</p>
          <p>For more context on my professional background:</p>
          <Link className="text-link" href="/resume">View résumé & experience →</Link>
        </section>
      </div>
    </NotebookPage>
  );
}
