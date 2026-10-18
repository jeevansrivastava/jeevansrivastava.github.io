# Personal portfolio refinement

18 October 2026. User feedback: the first redesign felt like a service company. This revision replaces its commercial presentation with a personal editorial portfolio.

## What changed

- Oversized name-led masthead: Jeevan Jyoti Srivastava is the main identity, with backend and AI specialization immediately underneath.
- Compact personal record: current role, technical focus and desired Staff/Principal opportunities.
- Ink, warm paper and copper palette, fine rules, asymmetric columns and restrained links. Sharing image, favicon and diagrams use the same palette.
- The homepage's capability grid and credibility strip are no longer part of its hierarchy. Technical specialties remain available on About.
- Featured work becomes an open editorial spread rather than a large colored promotional card.
- Background and working notes use first-person language; contact asks about an engineering role rather than pitching services.
- Existing case studies, factual boundaries, routes, contact behavior and accessible controls are preserved.

Primary files: `src/components/home/{HeroSection,FeaturedCaseStudies,PhilosophySection,HowIWork,ContactCTA}.tsx`, `src/app/{page,layout}.tsx`, `src/app/contact/page.tsx`, `src/app/globals.css`, `src/app/personal.css`, identity/social assets and diagram colors. The personal stylesheet contains the new composition and responsive rules; shared reading, form and accessibility rules remain in globals.css.

## Validation

- `npm run build`: passed, including TypeScript and 15/15 generation tasks.
- `npm run lint`: passed.
- `git diff --check`: passed.
- Existing browser suite: 30 route/viewport checks, 14 internal links, 14 functional check groups, zero axe violations, zero uncaught page errors and no horizontal overflow. Contact submissions remained mocked.
- Visually reviewed homepage desktop, tablet, mobile and full-page desktop, plus the new sharing image. Corrected a joined phrase caused by hiding a mobile line break.
- All logs, screenshots and the machine-readable browser result for this revision are in `evidence/`. The original redesign evidence is retained in the parent directory.

```sh
PLAYWRIGHT_MODULE=/tmp/cloudledger-core-browsers-verify/backend/node_modules/playwright \
CHROME_PATH='/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' \
PORTFOLIO_ARTIFACT_DIR=docs/portfolio-redesign/personal-refinement/evidence \
node scripts/verify-portfolio.cjs
```

Preview: http://127.0.0.1:3101. Local changes only; no commit or deployment. Live inbox delivery, external profile availability, cross-browser behavior and field performance retain the limitations documented in the original validation report.
