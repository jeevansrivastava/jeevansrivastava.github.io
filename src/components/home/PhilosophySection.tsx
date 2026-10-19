import Link from "next/link";
import { profile } from "@/content/portfolio";
import { BrandMark } from "@/components/ui/BrandMark";
export function PhilosophySection() {
  return (
    <section
      className="section personal-background"
      aria-labelledby="background-title"
    >
      <div className="margin-label">
        <span className="eyebrow">01 / Background</span>
        <span className="margin-name">
          Jeevan,
          <br />
          in a few words.
        </span>
        <BrandMark className="background-mark" />
      </div>
      <div>
        <h2 id="background-title">
          I’ve moved into leadership.
          <br />
          <em>
            I haven’t moved away
            <br />
            from engineering.
          </em>
        </h2>
        <div className="background-prose">
          <p>
            My career started in software development in 2012. Since then, I’ve
            worked on backend platforms, learning products, media delivery and
            real-time AI.
          </p>
          <p>
            As a {profile.currentRole} at {profile.company}, I lead delivery and
            mentor engineers while staying involved in architecture and
            implementation. I care about clear decisions, production reliability
            and systems the team can understand and operate.
          </p>
          <Link href="/about" className="text-link">
            More about me <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
