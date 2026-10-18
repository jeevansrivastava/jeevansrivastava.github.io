import Link from "next/link";
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
            I’m currently a Senior Engineering Manager. The part I want to keep
            doing is hands-on: working through the architecture, understanding
            the failure, and building the change.
          </p>
          <Link href="/about" className="text-link">
            More about me <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
