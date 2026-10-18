import { NotebookPage } from "@/components/layout/NotebookPage";
import { PageDoodle } from "@/components/ui/PageDoodle";
import Link from "next/link";
import { profile } from "@/content/portfolio";
import { ExpertiseGrid } from "@/components/home/ExpertiseGrid";
import { ContactCTA } from "@/components/home/ContactCTA";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "About",
  "Jeevan Jyoti Srivastava leads engineering across backend platforms and AI products, with hands-on work in architecture, retrieval, subscriptions and production operations.",
  "/about",
);
export default function AboutPage() {
  return (
    <NotebookPage label="About me" number="02" variant="about">
      <header className="page-intro illustrated-intro">
        <PageDoodle kind="about" />
        <p className="eyebrow">About / Jeevan Jyoti Srivastava</p>
        <h1>
          Close to the code.
          <br />
          <em>Accountable for the system.</em>
        </h1>
        <p>{profile.summary}</p>
      </header>
      <div className="reading-layout">
        <section className="reading-section">
          <h2>From implementation to ownership</h2>
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
          <h2>What hands-on leadership means to me</h2>
          <p>
            It means staying involved in implementation, reviewing failure
            scenarios and making consequential decisions explicit. It also means
            leaving enough context, instrumentation and documentation for other
            engineers to operate and improve the system.
          </p>
          <p>
            I’m interested in Staff and Principal Backend Engineer roles, AI
            infrastructure and backend platform work, and selectively in
            technical leadership roles with substantial engineering ownership.
            International remote opportunities are welcome.
          </p>
          <Link className="text-link" href="/resume">
            View my experience →
          </Link>
        </section>
      </div>
      <ExpertiseGrid />
      <div className="section">
        <ContactCTA />
      </div>
    </NotebookPage>
  );
}
