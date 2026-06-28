import { SectionLabel } from "@/components/ui/SectionLabel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Jeevan Jyoti Srivastava",
  description: "Interactive career timeline of Jeevan Jyoti Srivastava.",
};

const timeline = [
  {
    hash: "e9f8g7h",
    role: "Engineering Manager",
    company: "UOLO Edtech Private Limited",
    date: "04/2022 - Present",
    details: [
      "Architected and deployed a real-time AI Voice Application using LiveKit WebRTC, Cartesia, and OpenAI, achieving sub-200ms latency.",
      "Led the performance engineering task force, reducing critical API response times from ~19s down to <500ms and reducing AWS cloud spend by 25%.",
      "Designed a multi-agent LLM orchestration system with native handoffs for dynamic, bilingual conversational flows.",
      "Led a 7-member engineering team, driving technical strategy and delivering 15+ core architectural projects ahead of schedule."
    ]
  },
  {
    hash: "d6c5b4a",
    role: "SDE-3",
    company: "UOLO Edtech Private Limited",
    date: "10/2020 - 03/2022",
    details: [
      "Spearheaded the architectural redesign of the core platform using Node.js, Symfony, MongoDB, and Redis.",
      "Engineered highly scalable microservices capable of supporting a 50% YoY increase in concurrent user traffic without degradation.",
      "Managed the end-to-end production deployment lifecycle, optimizing server traffic routing and maintaining 99.9% uptime."
    ]
  },
  {
    hash: "a1b2c3d",
    role: "AVP of Technologies",
    company: "Dociety Technologies Private Limited",
    date: "09/2018 - 09/2020",
    details: [
      "Led the transition from monolithic architectures to event-driven Node.js & MongoDB microservices.",
      "Resolved intricate database bottlenecks and scaling challenges, enhancing overall operational efficiency by 35%.",
      "Directed the production engineering team to maintain strict SLA compliance during peak traffic periods."
    ]
  },
  {
    hash: "f4e5d6c",
    role: "Technology Head",
    company: "BitGiving",
    date: "10/2015 - 08/2018",
    details: [
      "Executed a complete ground-up re-architecture of the core platform to Yii2 and MySQL, achieving a 50% increase in baseline performance.",
      "Designed a highly scalable database schema and migration path that supported the platform's rapid business expansion.",
      "Optimized legacy modules and rectified deep-rooted coding bottlenecks, improving overall UX responsiveness by 30%."
    ]
  },
  {
    hash: "9b8a7c6",
    role: "Senior Developer",
    company: "Technology 9 Labs",
    date: "08/2013 - 09/2015",
    details: [
      "Architected the backend for a comprehensive travel portal, handling real-time hotel and flight ticket booking integrations.",
      "Engineered a robust financial rewards engine for processing credit card point accruals and complex redemption workflows.",
      "Developed a scalable B2B e-commerce platform for a Malaysian enterprise expanding into the Middle East market.",
      "Collaborated closely with product teams to design and ship features, maintaining a 95% on-time delivery rate."
    ]
  },
  {
    hash: "1d2e3f4",
    role: "Junior Software Developer",
    company: "Sharp Thrill Investigation & Flint Force Pvt. Ltd",
    date: "01/2012 - 07/2013",
    details: [
      "Developed foundational full-stack applications using PHP and MySQL, translating business requirements into scalable code."
    ]
  }
];

export default function ResumePage() {
  return (
    <div className="mb-24 max-w-[800px]">
      <div className="mb-12">
        <h1 className="text-[2rem] font-bold text-text mb-4">Experience</h1>
        <p className="text-muted text-[1.05rem] leading-relaxed">
          14+ years of building and scaling software systems.
        </p>
      </div>

      <SectionLabel command="git log --oneline --career" />

      <div className="relative pl-6 md:pl-8 border-l-2 border-dashed border-border mt-12 font-mono">
        {timeline.map((item, index) => (
          <div key={item.hash} className="mb-16 relative">
            {/* Timeline Dot */}
            <div className="absolute w-[14px] h-[14px] bg-bg border-2 border-accent rounded-full -left-[35px] md:-left-[41px] top-1"></div>
            
            <div className="flex flex-col gap-2 mb-4">
              <div className="flex items-center gap-3 text-[0.8rem]">
                <span className="text-yellow">{item.hash}</span>
                <span className="text-dim">({item.date})</span>
              </div>
              <h3 className="text-[1.2rem] font-bold text-text m-0 tracking-tight">
                {item.role}
              </h3>
              <div className="text-accent font-medium text-[0.95rem]">
                @ {item.company}
              </div>
            </div>

            <div className="bg-bg-card border border-border rounded-[6px] p-5 mt-4">
              <ul className="flex flex-col gap-3 m-0 pl-4 text-muted text-[0.85rem] leading-relaxed list-disc marker:text-dim">
                {item.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        
        {/* Initial Commit Dot */}
        <div className="relative">
          <div className="absolute w-[14px] h-[14px] bg-bg border-2 border-dim rounded-full -left-[35px] md:-left-[41px] top-1"></div>
          <div className="text-dim text-[0.8rem]">
            <span className="text-yellow">0000000</span> initial commit
          </div>
        </div>
      </div>
    </div>
  );
}
