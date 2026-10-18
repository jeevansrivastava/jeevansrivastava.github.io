# Career story and grouped company experience

18 October 2026. Responds to feedback that two UOLO roles belong to one employer and the homepage career strip felt cold.

## Changes

- Experience is now structured by company, with nested roles. UOLO has one overall tenure (Oct 2020–present), with Senior Engineering Manager and SDE-3 beneath it. All six roles across five companies and their existing contributions remain.
- The management-tenure note remains explicit: April 2022 is the start of engineering management, not an asserted date of promotion to the current title.
- A company heading, connected role timeline, individual dates and current-role marker make progression visible. Print removes decorative styling and retains company grouping.
- The homepage's plain career strip is replaced by “A few stops along the way”: three warm, taped notes in chronological order, each with a short first-person account, role progression and a link to the matching resume anchor.
- Homepage and resume share `src/content/experience.ts` for employers, dates and roles.

## Executed validation

- `npm run build`, `npm run lint`, `git diff --check`: passed.
- Focused Chrome checks on homepage and resume at 1440, 768, 390 and 320px: eight route/viewport checks, zero axe WCAG A/AA violations, zero horizontal overflow or uncaught browser errors.
- Verified five employer groups, six roles and both UOLO roles under one heading. Three company links navigated by keyboard and scrolled to the correct section. Anchor assertions wait for native smooth scrolling to settle.
- Company navigation and grouped role content also checked with JavaScript disabled.
- PDF exported, print-only styling checked and both actual A4 pages rendered through PDFKit and visually reviewed. Resume remains two pages with both UOLO roles together on page one.
- Visually reviewed desktop career notes and desktop/mobile UOLO grouping.

Evidence is in `evidence/validation.json`, screenshots and `evidence/resume-print.pdf`.

Preview: http://127.0.0.1:3101/resume. Local changes only; no commit or deployment. This was focused verification of the two changed pages, not a rerun of the unrelated full-site interaction suite.
