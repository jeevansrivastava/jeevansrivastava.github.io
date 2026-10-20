import { NotebookPage } from "@/components/layout/NotebookPage";
import { Portrait } from "@/components/ui/Portrait";
import Link from "next/link";
import { profile } from "@/content/portfolio";
import { ExpertiseGrid } from "@/components/home/ExpertiseGrid";
import { ContactCTA } from "@/components/home/ContactCTA";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { absoluteUrl, personId } from "@/lib/site";
export const metadata = pageMetadata(
  "About — Engineering Leader",
  "Meet Jeevan Jyoti Srivastava, Senior Engineering Manager at UOLO, with approximately 15 years in backend engineering, AI systems and cloud architecture.",
  "/about",
);
export default function AboutPage() {
  return (
    <NotebookPage label="About me" number="02" variant="about">
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        "@id": `${absoluteUrl("/about")}#profile`,
        url: absoluteUrl("/about"),
        name: `About ${profile.name}`,
        mainEntity: { "@id": personId },
      }} />
      <header className="page-intro portrait-intro">
        <div className="portrait-intro-copy">
          <p className="eyebrow">About / Jeevan Jyoti Srivastava</p>
          <h1>
            Close to the code.
            <br />
            <em>Accountable for the system.</em>
          </h1>
          <p>{profile.summary}</p>
        </div>
        <Portrait />
      </header>
      <div className="reading-layout">
        <section className="reading-section">
          <h2>From implementation to ownership</h2>
          <p>I’m currently a {profile.currentRole} at {profile.company}. My work combines engineering leadership with hands-on architecture across real-time AI, backend platforms and production infrastructure.</p>
          <p>
            Over approximately 15 years in software, my work has moved from
            backend development into platform architecture, production
            problem-solving and technical leadership. I enjoy tracing a
            difficult problem from the user experience down to the request,
            query, queue or infrastructure decision behind it.
          </p>
          <p>
            My background spans learning platforms, document retrieval,
            subscriptions, identity integrations, media delivery and real-time
            AI. I also build operational tools that connect system behaviour
            with learner activity, capacity and cost.
          </p>
        </section>
        <section className="reading-section">
          <h2>Leadership, close to the engineering</h2>
          <p>
            To me, leadership means staying involved in implementation, reviewing failure
            scenarios and making consequential decisions explicit. It also means
            leaving enough context, instrumentation and documentation for other
            engineers to operate and improve the system.
          </p>
          <div className="actions">
            <Link className="text-link" href="/work-with-me">Explore selective advisory →</Link>
            <Link className="text-link" href="/resume">View résumé & experience →</Link>
          </div>
        </section>
      </div>
      <ExpertiseGrid />
      <div className="section">
        <ContactCTA />
      </div>
    </NotebookPage>
  );
}
