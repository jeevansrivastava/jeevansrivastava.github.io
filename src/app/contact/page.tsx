import { NotebookPage } from "@/components/layout/NotebookPage";
import { PageDoodle } from "@/components/ui/PageDoodle";
import { ContactForm } from "@/components/contact/ContactForm";
import { profile } from "@/content/portfolio";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Contact",
  "Contact Jeevan Jyoti Srivastava for engineering conversations, AI and backend architecture reviews, or technical mentoring, subject to availability.",
  "/contact",
);
export default function ContactPage() {
  return (
    <NotebookPage label="Correspondence" number="05" variant="contact">
      <header className="page-intro illustrated-intro">
        <PageDoodle kind="contact" />
        <p className="eyebrow">Contact</p>
        <h1>
          A direct line.
          <br />
          <em>Let’s compare notes.</em>
        </h1>
        <p>
          For a question about my work, a focused architecture review, technical
          mentoring or a conversation with a fellow engineer.
        </p>
      </header>
      <div className="contact-layout" id="project-enquiry">
        <section className="contact-details">
          <h2>Start with the question</h2>
          <p>
            Share the technical question, a little context and the kind of input
            you’re looking for. Advisory conversations depend on scope and
            availability alongside my current role. You can also email me directly.
          </p>
          <a href={profile.calendly}>Book a 30-minute architecture conversation ↗</a>
          <a href={`mailto:${profile.email}`}>{profile.email} ↗</a>
          <a href={profile.linkedin}>Connect on LinkedIn ↗</a>
          <a href={profile.github}>Explore GitHub ↗</a>
        </section>
        <ContactForm />
      </div>
    </NotebookPage>
  );
}
