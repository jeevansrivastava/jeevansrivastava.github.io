import { NotebookPage } from "@/components/layout/NotebookPage";
import { PageDoodle } from "@/components/ui/PageDoodle";
import { experience, type CompanyExperience } from "@/content/experience";
import { profile } from "@/content/portfolio";
import { PrintResume } from "@/components/ui/PrintResume";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Resume",
  "Professional experience in AI systems, platform architecture and engineering leadership. Currently Senior Engineering Manager at UOLO.",
  "/resume",
);
export default function ResumePage() {
  return (
    <NotebookPage label="Career chapters" number="03" variant="resume">
    <article className="reading-layout">
      <header className="page-intro illustrated-intro">
        <PageDoodle kind="resume" />
        <p className="eyebrow">Jeevan Jyoti Srivastava / Resume</p>
        <h1>Engineering experience.</h1>
        <p>
          Approximately 15 years building software, designing platforms and
          leading engineering teams. Currently {profile.currentRole} at {profile.company}, with hands-on work across AI systems and cloud
          infrastructure.
        </p>
        <PrintResume />
      </header>
      <p className="print-contact">
        <a href={`mailto:${profile.email}`}>{profile.email}</a> ·{" "}
        <a href={profile.linkedin}>LinkedIn</a> ·{" "}
        <a href={profile.github}>GitHub</a>
        <span className="print-only">
          jeevansrivastava.com · {profile.linkedin.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")} · github.com/jeevansrivastava
        </span>
      </p>
      <div className="company-history">
        <CompanyChapter company={experience[0]} current />
        <details className="more-experience resume-more">
          <summary>
            <span className="more-label">More experience</span>
            <span className="more-context">2012–2020 · Four earlier companies</span>
            <span className="more-symbol" aria-hidden="true" />
          </summary>
          {experience.slice(1).map((company) => <CompanyChapter company={company} key={company.id} />)}
        </details>
      </div>
      <section className="reading-section">
        <h2>Technical focus</h2>
        <p>
          <strong>AI & language models:</strong> Generative AI, large language
          models (LLMs), retrieval-augmented generation (RAG), PDF and OCR
          pipelines, embeddings, pgvector, bounded agents, LiveKit and Langfuse.
        </p>
        <p>
          <strong>Backend & platforms:</strong> Node.js, TypeScript, Python,
          FastAPI, PostgreSQL, MongoDB, Redis and RabbitMQ. Subscriptions,
          entitlements, identity integrations and asynchronous workflows.
        </p>
        <p>
          <strong>Cloud & operations:</strong> AWS, Docker, observability,
          performance analysis, operational dashboards and recoverable job
          processing.
        </p>
      </section>
    </article>
    </NotebookPage>
  );
}

function CompanyChapter({ company, current = false }: { company: CompanyExperience; current?: boolean }) {
  return (
    <section className="company-chapter" id={`company-${company.id}`} aria-labelledby={`company-title-${company.id}`}>
      <header className="company-heading">
        <div>
          <p className="eyebrow">{current ? "Where I am now" : "Along the way"}</p>
          <h2 id={`company-title-${company.id}`}>{company.name}</h2>
          {company.name !== company.company && <p className="company-legal-name">{company.company}</p>}
        </div>
        <span className="company-tenure">{company.date}</span>
      </header>
      {company.chapter && <p className="company-chapter-title">{company.chapter}</p>}
      <div className="company-roles">
        {company.roles.map((role, roleIndex) => (
          <article className="company-role" key={role.role}>
            <div className="role-heading">
              <h3>{role.role}</h3>
              {current && roleIndex === 0 && <span className="role-current">Current role</span>}
            </div>
            <p className="role-dates">{role.date}</p>
            {role.note && <p className="role-context">{role.note}</p>}
            <ul>{role.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
          </article>
        ))}
      </div>
    </section>
  );
}
