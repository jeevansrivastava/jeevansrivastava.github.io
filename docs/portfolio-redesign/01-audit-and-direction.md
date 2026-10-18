# Portfolio audit and redesign direction

Audited 18 October 2026, before implementation. Sources: all tracked application pages/components/styles/configuration in this checkout; the supplied professional brief; [live portfolio](https://jeevansrivastava.com/); [supplied GitHub](https://github.com/jeevansrivastava). [LinkedIn](https://www.linkedin.com/in/jeevansrivastava/) was inaccessible. No replacement profile was used. Career dates are carried from the existing resume, not independently employment-verified.

## 1. Audit

The repository is Next.js 16.2.9 App Router, React 19, Tailwind 4, TypeScript, with static export. It has ten content routes, four substantive case studies, reusable case-study components, Google-hosted Inter/JetBrains Mono, Framer Motion for boot/counter effects, and a client-fetched Medium feed. No test script is defined. README has only starter setup. The only pre-existing dirty file is package.json (watch polling); preserve it.

Baseline execution: documented `npm run dev -- --hostname 127.0.0.1 --port 3100`; Chrome screenshots at 1440×1000, 768×1024, 390×844, plus voice/contact/resume. Screenshots were captured under /tmp/portfolio-audit and copied to this report's evidence directory. Analytics/feed requests were blocked in the completed screenshot run, so a failed-feed state is intentional; live feed availability was not established. `npm run lint`: 41 errors, 3 warnings. RTK could not execute (bad CPU type); ordinary commands were used. Local server/browser required sandbox escalation.

### Strengths

- Four existing technical accounts include actual choices, alternatives, components and operating constraints. More substance than a gallery of technology logos.
- Framework conventions, static export, local route structure and shared case-study components are a sound base.
- Career timeline and current focus can connect leadership experience with hands-on engineering.
- No stock photography or heavy background video. Existing route names can be preserved.

### Critical findings

| Finding | Evidence and implication |
|---|---|
| Content hidden during startup | GlobalBootSequence returns only boot text before client timers finish. The live page's text response also contains startup text rather than the engineering narrative. No-JS visitors cannot reach the main content. |
| Missing primary story and actions | HeroSection has no H1, only a changing typewriter; no View Case Studies/View Resume buttons. Desktop/mobile captures show terminal lines before useful evidence. |
| Incorrect professional links | Layout, sidebar and contact use `jeevanjsrivastava`; supplied profiles use `jeevansrivastava`. JSON-LD repeats the error. |
| Contact delivery is fabricated | ContactForm marks success on HTTP failure and exceptions, then clears the message. This is a functional defect, not merely copy. |
| Claims exceed available evidence | 10× capacity, 99.9% reliability, 60× writes, sub-200ms latency, and resume percentage outcomes lack benchmark artifacts/definitions. A periodic flush cannot guarantee lossless crash restoration. Technology names are labeled “Evidence.” |
| Presentation obscures depth | Fixed 420px sidebar, monospace body copy, command-style headings, repeated dashed cards and tiny labels compete with reading. Mobile homepage is roughly 7,800px tall in baseline screenshots. |
| Inconsistent position | Metadata calls the user Staff Backend Engineer; visible shell calls them AI Systems Architect; current role in supplied brief is Senior Engineering Manager. Target role must not become a claimed employment title. |
| Accessibility gaps | No skip link; H1 absent on home/about/case studies; low-contrast dim text (#585b70 on #1e1e2e, about 2.5:1); mobile menu lacks expanded/controls state; no reduced-motion handling; ASCII architecture needs horizontal scrolling. |
| SEO and sharing | Every route inherits homepage canonical/OG URL. Social image is a 400KB square JPEG named .png. Default terminal icon does not identify the person. |
| Reliability/performance | Boot animation postpones all content; counters display transient false figures; feed depends on rss2json, produces empty content on failure, and has no timeout. Google font build fetches add a network dependency. No runtime bundle or field Core Web Vitals measurement was available at audit time. |
| Content gaps | No shareable source/benchmark evidence for employer projects, no downloadable resume, no concrete PostgreSQL query plan example, no verified article selection, no precise promotion date, no confirmed contact endpoint delivery. |

### Qualitative scores (not benchmarks)

| Area | /10 | Basis |
|---|---:|---|
| Visual design | 4 | Consistent palette, but screenshot hierarchy is flat, text small and repeated cards dominate. |
| UX | 3 | Main content gated by boot; weak immediate actions; incorrect profile destinations; false form success. |
| Professional positioning | 5 | Relevant system stories exist, but title ambiguity, generic leadership language and unsourced metrics weaken trust. |
| Case-study quality | 5 | Decisions/alternatives are valuable; missing evidence boundaries, oversize ASCII and unsupported guarantees diminish credibility. |
| Responsiveness | 6 | Captured home has no document overflow at three sizes; mobile stacking works but reading length/density and wide case diagrams remain poor. |
| Accessibility | 3 | Missing H1s and skip link, low contrast, animation and incomplete menu semantics. Source and browser inspection; not a full assistive-technology audit. |
| Performance | 5 | Static export is appropriate, but unnecessary client gate, animations and feed hurt perceived availability. No Lighthouse/field score is implied. |

## 2. Positioning

Audience: CTOs and engineering hiring managers evaluating hands-on Staff/Principal backend, AI infrastructure and platform ownership; international recruiters need readable role focus and an accessible resume/contact path.

Positioning statement: **A hands-on engineering leader who designs backend and AI systems around the realities of production: state, latency, failure and cost.** Current job title: Senior Engineering Manager (user-supplied). Staff/Principal describes desired opportunities, not a current title.

Three differentiators:
1. Application-to-operation depth: API/data-path decisions connected to diagnosis, workload isolation and cloud capacity.
2. AI as a stateful product: voice streaming, curriculum flow, interruption and recovery, rather than a model API demo.
3. Leadership through implementation: explicit trade-offs, technical standards and ownership that other engineers can carry forward.

A senior portfolio must expose the problem, scope of responsibility, rejected alternatives, failure modes and evidence boundaries. Technology inventories and impressive-looking numbers are insufficient. This is a qualitative evaluation against the user's role criteria, not a claim about hiring statistics. Public GitHub pins include forks/curation and starter examples; linking that profile is useful, but it is not proof of the private systems described here.

### External role calibration

As a primary-source cross-check, GitLab's [Staff Backend Engineer description](https://handbook.gitlab.com/job-description-library/engineering/development/backend/staff/) emphasizes complex technical problems, standards, mentoring, performance diagnosis and ownership through production. Its [Principal Engineer description](https://handbook.gitlab.com/job-description-library/engineering/development/management/principal-engineer/) expands the scope to cross-team direction, ambiguous problems and organizational technical priorities. These are examples from one employer, not universal hiring criteria. Both were consulted on 18 October 2026.

Design inference: the case studies should make the owner's contribution and reasoning inspectable, while the resume carries leadership context. The available material supports a Staff/Principal-focused narrative but does not establish a particular company's leveling decision. For stronger Principal applications, add an approved example of multi-team scope and a clear decision/outcome trail. For AI infrastructure, add a reproducible evaluation or latency trace; for PostgreSQL, a real plan/locking investigation. A portfolio cannot replace these missing proofs.

## 3. Visual concepts

| Concept | Differentiation | Readability | Credibility | Maintenance | Role fit |
|---|---|---|---|---|---|
| A. Editorial engineering | Strong typography and a distinctive warm paper/ink palette | Best for long-form decisions | Strong when concrete stories lead | Simple CSS and server-rendered content | Excellent for Staff/Principal readers |
| B. Systems studio | Architecture/operating-document vocabulary | Good if diagrams remain restrained | Strong; risk of implying a live dashboard | More visual components | Excellent for infrastructure depth |
| C. Minimal dark technical | Familiar to engineering audiences | Good with careful contrast | Sound but less distinctive from existing developer templates | Simple tokens, extra contrast care | Good, but weaker change from current site |

Choose A with selected B elements. A warm ivory canvas, near-black editorial headings, deep forest-green feature panel, serif display type and sans-serif prose create a reading-first site. Diagram components explain systems; they never simulate monitoring or imply live measurements. No gradient, fake terminal, invented status indicators or stock illustration.

Tokens: paper #f7f7f2; surface #ffffff; ink #172b25; muted #53635d; accent #27634b; forest #173d30; rule #d8dfd7. Display Georgia, body system sans, labels system mono: no external font fetch, no font swap. Base 17px/1.7; display fluid 44–82px; content width 1200px, reading width 820px. Spacing scale 4/8/12/16/24/32/48/64/96px. Corners 4–10px; borders 1px; no decorative shadows. Single-column mobile; two-column hero/feature at desktop; responsive tables transform to labeled decision blocks. Focus ring 3px, controls at least 44px; reduced-motion disables transitions/smooth scroll. Existing component names/patterns reused where useful.

## 4. Information architecture, ranking and copy

Homepage: specialization and two actions → verified background signals → flagship voice case → other cases → three problem domains → engineering principles → current background → contact. About/resume retained; writing retained as a reliable external archive entry, not an empty feed. Four existing detail URLs retained, including the historically misleading aws-cost-intelligence slug.

Project rank: (1) AI voice tutor: best differentiation across AI, realtime, state and recovery. (2) peak-hour recovery: strongest backend diagnosis/operating judgment. (3) workload/data bottlenecks: platform defaults and async work; avoid presenting Mongoose examples as PostgreSQL evidence. (4) video delivery: useful distributed content/cost trade-offs, less directly tied to AI roles. All are existing professional-work accounts; no invented personal project/source links. Public evidence is the architectural explanation, not access to an employer repository.

| Section | Current copy | Weakness | Replacement and reason |
|---|---|---|---|
| Hero | “I turn uncertain AI and platform bets…” plus typewriter | Abstract, no stable headline | “Backend systems. AI infrastructure. Built for the realities of production.” Names the work and its constraints. |
| Identity | “AI Systems Architect” / “Staff Backend Engineer” | Confuses focus, target and actual title | “Backend & AI infrastructure”; explicitly state current Senior Engineering Manager and desired Staff/Principal scope. |
| Actions | No hero actions; “Execute” | Hidden next step / command metaphor | “View case studies”, “View resume”, “Get in touch”. Clear destination. |
| Credibility | JSON stats with animated numbers | Unscoped claims and transient values | “Engineering since 2012”, “Senior Engineering Manager”, “Hands-on systems work”. Brief/timeline-supported. |
| Voice case | “Making real-time AI tutoring dependable beyond the demo” | Long and generic, metric ambiguity | “A voice tutor with an explicit learning journey.” Explain authored state, ordered speech and recovery. |
| Platform case | “Recovering a critical platform from peak-hour failure” | Good problem, missing evidence limits | “Finding the bottleneck before adding servers.” Retain request-path diagnosis; remove unsupported quantified outcomes pending artifacts. |
| Data case | “Removing hidden platform bottlenecks…” | Broad claim; PostgreSQL title mismatch | “Keeping expensive work out of the request path.” Name Mongoose/queue decisions accurately. |
| Video case | “Designing learning delivery…” | Useful but repetitive | “Adaptive video for inconsistent connections.” Concrete user constraint and HLS trade-off. |
| Expertise | Six technology-heavy cards | Duplicates case studies | Three problem domains with concise capability prose and a supporting technology line. |
| Philosophy | Repeated abstract leadership paragraphs | Duplicates “How I work” | Three principles: measure the critical path, make state explicit, design for the next operator. |
| About | “AI Systems Architect…14+ years” | Current role and intent unclear | Current title, approximately 15 years, hands-on preference, backend/AI focus and career link. |
| Resume | Fake git hashes, percentages, absolute AI guarantees | Decorative noise and unsubstantiated claims | Readable chronological roles, qualitative responsibilities, print/save PDF, contact links. Promotion date remains an input gap. |
| Contact | Terminal labels; “[OK] delivered” on error | Obscure and factually false | Name/email/message; only HTTP success confirms service acceptance; error preserves input and offers email. |
| Metadata/footer | Staff job title, echo command, home canonical everywhere | Inaccurate role and duplicate canonical | Domain-specific page metadata, current title in Person schema, corrected profiles, simple identity/footer. |

## Top five priorities

1. Immediate role clarity and visible evidence/resume actions — very high impact, medium effort.
2. Case-study hierarchy, readable diagrams and explicit trade-offs/evidence limits — very high impact, high effort.
3. Repair false contact success, profile URLs and title/metric accuracy — very high impact, low/medium effort.
4. Accessible responsive navigation, contrast, headings and typography — high impact, medium effort.
5. Remove boot/feed/font dependencies; fix canonical/social metadata and add print resume — high impact, medium effort.

## Facts requiring future input

A redacted benchmark with endpoint/workload/date/percentiles for latency and before/after cost figures; shareable code or architecture references with publication permission; concrete PostgreSQL plan/locking example; current-title promotion date; confirmation of mailbox/Formspree ownership and receipt; selected published articles if desired. None blocks a factual architecture-focused implementation. No production deployments or external messages are authorized by this redesign.
