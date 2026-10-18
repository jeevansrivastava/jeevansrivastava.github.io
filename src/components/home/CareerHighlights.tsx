import Link from "next/link";
import { experience, type CompanyExperience } from "@/content/experience";
export function CareerHighlights() {
  const stops = experience.filter((company) => company.chapter);
  return (
    <section className="career-journey" aria-labelledby="career-journey-title">
      <div className="journey-heading">
        <div>
          <p className="eyebrow">People, platforms & a lot of learning</p>
          <h2 id="career-journey-title">A few stops along the way.</h2>
        </div>
        <Link href="/resume">Follow the full story <span aria-hidden="true">↗</span></Link>
      </div>
      <ol className="journey-notes">
        {stops.map((company, i) => <CareerNote key={company.id} company={company} number={i + 1} />)}
      </ol>
    </section>
  );
}

function CareerNote({ company, number }: { company: CompanyExperience; number: number }) {
  return (
    <li>
      {/* Native fragment navigation reveals the target inside closed details. */}
      <a href={`/resume#company-${company.id}`} className={`journey-note journey-note-${company.id}`}>
        <span className="journey-date">{company.date}</span>
        <span className="journey-stamp" aria-hidden="true">0{number}</span>
        <h3>{company.name}</h3>
        <p className="journey-chapter">{company.chapter}</p>
        <p className="journey-story">{company.story}</p>
        <span className="journey-progression">{company.roles.toReversed().map((role) => role.role).join(" → ")}</span>
        <span className="journey-open">{company.id === "uolo" ? "Still writing this chapter" : "Read this chapter"} <span aria-hidden="true">↗</span></span>
      </a>
    </li>
  );
}
