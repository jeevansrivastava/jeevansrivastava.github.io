import { profile } from "@/content/portfolio";
export function ContactCTA() {
  return (
    <section className="personal-contact" aria-labelledby="contact-title">
      <p className="eyebrow">04 / Selective advisory</p>
      <div>
        <h2 id="contact-title">Another angle.<br /><em>Let’s talk.</em></h2>
        <div>
          <p>{profile.advisorySummary}</p>
          <a href={profile.calendly} className="text-link contact-invitation">Discuss an Architecture Challenge <span aria-hidden="true">↗</span></a>
          <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}</a>
        </div>
      </div>
    </section>
  );
}
