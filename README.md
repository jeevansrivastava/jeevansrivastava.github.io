# Jeevan Jyoti Srivastava — engineering portfolio

Next.js 16 App Router, React 19, TypeScript and Tailwind 4. The site builds to a static `out/` directory. The redesign retains all existing public content routes.

## Local development

```sh
npm install
npm run dev
```

Open http://localhost:3000. The existing development script enables watch polling. Follow the installed Next.js documentation in `node_modules/next/dist/docs/` before framework changes.

## Build and preview

```sh
npm run lint
npm run build
node scripts/serve-export.mjs
```

The preview server binds only to http://127.0.0.1:3101 and serves the generated export. It is a local validation tool, not a production server. `next start` is not a static-export preview. No deployment is performed by these commands.

## Content and design

- `src/content/portfolio.ts`: identity links and ten case studies; titles, scope, architecture, decisions, considerations and evidence boundaries.
- `src/content/experience.ts`: resume roles and dates. April 2022 marks engineering management tenure; it is not a verified Senior-title promotion date.
- `src/components/home/`: homepage narrative and reusable sections.
- `src/components/case-study/StudyPage.tsx`: shared case-study reading layout.
- `src/app/globals.css`: palette, typography, spacing, breakpoints, focus, reduced motion and print styles.
- `src/lib/metadata.ts`: route-specific canonical and social metadata.
- `public/diagrams/`: editable Mermaid sources and locally rendered SVGs. Mermaid is not shipped to the browser.
- `public/og-image.png`, `src/app/icon.svg`, `src/app/favicon.ico`: sharing and identity assets.

Professional metrics should only be added with a clear measurement definition, workload, period and shareable supporting evidence. Do not turn architectural goals into verified guarantees. Employer accounts remain summaries, not claims that their source code is public.

Fonts use local system families. The boot gate, typing effects, animated statistics and runtime article-feed dependency have been removed. Existing package dependencies remain untouched because package.json contained unrelated user changes; Framer Motion, gray-matter and next-mdx-remote are not imported by the site.

## Browser validation

`scripts/verify-portfolio.cjs` needs Playwright and Chrome/Chromium. `axe-core` is available through the installed lint dependency tree. You may point at an existing Playwright installation without adding production dependencies:

```sh
PLAYWRIGHT_MODULE=/absolute/path/to/playwright \
CHROME_PATH='/absolute/path/to/chrome' \
node scripts/verify-portfolio.cjs
```

Run the export preview first. `PORTFOLIO_URL` can override its address. The script checks sixteen routes at desktop/tablet/mobile sizes, metadata, headings, links, WCAG A/AA rules supported by axe, keyboard navigation, no-JavaScript access, reduced motion and print output. Contact requests are always mocked; it never sends a real enquiry. It stores screenshots, PDF and results in `docs/portfolio-redesign/evidence/`.

The existing Formspree endpoint is retained. Failure now preserves the draft; success means the service accepted the request, not proof of inbox delivery. Live ownership and receipt must be confirmed separately before relying on the form. Direct email and profile links are always visible. Analytics configuration is retained; analytics requests are blocked only during local browser validation.

See [audit and direction](docs/portfolio-redesign/01-audit-and-direction.md) and [implementation and validation](docs/portfolio-redesign/02-implementation-and-validation.md).

The current notebook direction is documented in [Notebook pages](docs/portfolio-redesign/notebook-pages/README.md), with [career ordering and résumé updates](docs/portfolio-redesign/career-order/README.md). `src/app/creative.css`, `src/app/notebook-pages.css` and `src/app/career.css` define the shared visual treatment. The homepage keeps three visible career notes, newest first; earlier résumé experience is expandable.
