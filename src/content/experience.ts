// Dates and organizations come from the existing resume. April 2022 marks
// the engineering management tenure, not the date of a promotion to the current title.
export interface CareerRole {
  role: string;
  date: string;
  note?: string;
  details: string[];
}
export interface CompanyExperience {
  id: string;
  name: string;
  company: string;
  date: string;
  chapter?: string;
  story?: string;
  roles: CareerRole[];
}
export const experience: CompanyExperience[] = [
  {
    id: "uolo",
    name: "UOLO",
    company: "UOLO Edtech Private Limited",
    date: "Oct 2020\u2013present",
    chapter: "From platforms to voice AI.",
    story: "I joined as an SDE-3, then moved into engineering management while staying close to the architecture and code.",
    roles: [
      {
        role: "Senior Engineering Manager",
        date: "Apr 2022–present",
        note: "I moved into engineering management in April 2022; my current title is Senior Engineering Manager.",
        details: [
          "Designed and built a conversational learning voice pipeline, coordinating model streaming, sentence chunking, ordered audio delivery and learner state.",
          "Built document-processing and retrieval pipelines that turn learning material into searchable, structured knowledge using OCR, embeddings and PostgreSQL vector search.",
          "Developed subscription and entitlement workflows covering usage limits, plan changes, payment grace periods and refunds.",
          "Built operational dashboards connecting learner activity, retention and AI costs with account- and session-level investigation.",
          "Worked on voice-pipeline observability, platform performance, background workloads and AWS capacity decisions.",
          "Led engineering delivery and mentored engineers while remaining involved in implementation and architecture.",
        ],
      },
      {
        role: "SDE-3",
        date: "Oct 2020–Mar 2022",
        details: [
          "Worked on core-platform architecture using Node.js, Symfony, MongoDB and Redis.",
          "Built backend services and supported the production deployment lifecycle and traffic routing.",
        ],
      },
    ],
  },
  {
    id: "dociety",
    name: "Dociety",
    company: "Dociety Technologies Private Limited",
    date: "Sep 2018\u2013Sep 2020",
    chapter: "Making room to grow.",
    story: "I led the move from a monolith toward event-driven services, working through the scaling decisions along the way.",
    roles: [
      {
        role: "AVP of Technologies",
        date: "Sep 2018–Sep 2020",
        details: [
          "Led the transition from a monolithic application toward event-driven Node.js and MongoDB services.",
          "Worked on database bottlenecks, scaling constraints and production engineering.",
        ],
      },
    ],
  },
  {
    id: "bitgiving",
    name: "BitGiving",
    company: "BitGiving",
    date: "Oct 2015\u2013Aug 2018",
    chapter: "Rebuilding the foundations.",
    story: "I led a platform re-architecture, from database design to planning the migration of existing work.",
    roles: [
      {
        role: "Technology Head",
        date: "Oct 2015–Aug 2018",
        details: [
          "Led platform re-architecture using Yii2 and MySQL, including database design and migration planning.",
          "Improved legacy modules and investigated application performance bottlenecks.",
        ],
      },
    ],
  },
  {
    id: "technology-9-labs",
    name: "Technology 9 Labs",
    company: "Technology 9 Labs",
    date: "Aug 2013\u2013Sep 2015",
    roles: [
      {
        role: "Senior Developer",
        date: "Aug 2013–Sep 2015",
        details: [
          "Built backend integrations for travel booking and financial rewards workflows.",
          "Developed B2B commerce functionality in collaboration with product teams.",
        ],
      },
    ],
  },
  {
    id: "sharp-thrill",
    name: "Sharp Thrill Investigation & Flint Force",
    company: "Sharp Thrill Investigation & Flint Force Pvt. Ltd",
    date: "Jan 2012\u2013Jul 2013",
    roles: [
      {
        role: "Junior Software Developer",
        date: "Jan 2012–Jul 2013",
        details: [
          "Developed PHP and MySQL applications from business requirements.",
        ],
      },
    ],
  },
];
