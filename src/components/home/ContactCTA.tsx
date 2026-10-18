import Link from "next/link";
import { profile } from "@/content/portfolio";
export function ContactCTA() {
  return (
    <section className="personal-contact" aria-labelledby="contact-title">
      <p className="eyebrow">04 / Say hello</p>
      <div>
        <h2 id="contact-title">
          Have a role
          <br />
          <em>in mind?</em>
        </h2>
        <div>
          <p>
            I’m interested in Staff and Principal engineering roles where I can
            stay close to the systems and the code.
          </p>
          <Link href="/contact" className="text-link contact-invitation">
            Get in touch <span aria-hidden="true">↗</span>
          </Link>
          <a className="contact-email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </div>
      </div>
    </section>
  );
}
