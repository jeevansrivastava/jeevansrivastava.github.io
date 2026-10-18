import { NotebookPage } from "@/components/layout/NotebookPage";
import { PageDoodle } from "@/components/ui/PageDoodle";
import { ContactForm } from "@/components/contact/ContactForm";
import { profile } from "@/content/portfolio";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Contact",
  "Discuss backend platforms, AI infrastructure and hands-on Staff or Principal engineering opportunities with Jeevan Jyoti Srivastava.",
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
          <em>Say hello.</em>
        </h1>
        <p>
          For an engineering opportunity, a question about my work, or a
          conversation with a fellow engineer.
        </p>
      </header>
      <div className="contact-layout">
        <section className="contact-details">
          <h2>You can reach me here</h2>
          <p>
            If you’re hiring, I’d like to hear about the team, the engineering
            scope and how you work remotely. You can also email me directly.
          </p>
          <a href={`mailto:${profile.email}`}>{profile.email} ↗</a>
          <a href={profile.linkedin}>Connect on LinkedIn ↗</a>
          <a href={profile.github}>Explore GitHub ↗</a>
        </section>
        <ContactForm />
      </div>
    </NotebookPage>
  );
}
