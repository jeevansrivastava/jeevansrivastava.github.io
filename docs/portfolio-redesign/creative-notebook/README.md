# Creative notebook direction

18 October 2026. Responds to the user's feedback that the executive layout was still bland and their reference to https://jackiezhang.co.za/.

## Design

The reference was inspected in a real Chrome browser. Its dark setting, illustrated pages, layered paper and informal visual rhythm informed an original engineer's notebook. No illustrations, photography, source code or personal copy were taken from the reference.

- Charcoal desk, cream graph paper, vermilion notebook binding, ribbon bookmark and handwritten annotations.
- Original SVG desk illustration with native radio controls for Voice AI, Platforms and Leadership. The screen and accompanying text change together. Keyboard arrows and operation without JavaScript are supported.
- Four original CSS project artworks: voice, platform investigation, queued workloads and adaptive media. These are conceptual illustrations, not product screenshots or measured charts.
- Staggered project sheets with expandable native field notes for responsibility, decision and outcome. The existing detailed accounts and evidence boundaries remain.
- Taped working notes, a personal background section and a torn-paper contact invitation.
- Brief entrance and hover transitions, disabled by reduced-motion preferences. No continuous motion or scroll interception.
- Matching sharing image and favicon. Shared reading pages use the related paper, green-black and red palette.

## Executed checks

- `npm run build`: passed, including TypeScript and 15/15 static generation tasks.
- `npm run lint`: passed.
- `git diff --check`: passed.
- Full Chrome suite: 30 route/viewport checks, 14 internal links, 17 functional check groups, zero axe A/AA violations, zero uncaught browser errors and zero observed local CLS. The latter is not field performance evidence.
- Coverage includes the native illustration selector, keyboard arrows, four expandable notes, no-JavaScript controls, navigation, resume printing, 404, reduced motion and mocked contact success/failure. No real messages were submitted.
- Additional checks at 1440, 768, 390 and 320px: all four notes opened together, no card overlap or horizontal overflow. Entrance animation is absent with reduced motion.
- Contrast failures found during development in a sticky note and mobile contact section were corrected before the successful full run.
- Desktop, tablet and mobile screenshots were captured after the entrance animation settled. Desktop overview, mobile hero, project gallery and alternate illustration were visually reviewed.

Primary files: `src/app/creative.css`, `src/components/home/{HeroSection,WorkbenchSketch,ProjectArtwork,FeaturedCaseStudies}.tsx`, `src/app/{page,layout,globals.css}`, and `scripts/verify-portfolio.cjs`.

The full suite result is `evidence/validation.json`; expanded-layout and motion results are `evidence/creative-checks.json`. Screenshots are in the same directory.

```sh
PLAYWRIGHT_MODULE=/tmp/cloudledger-core-browsers-verify/backend/node_modules/playwright \
NODE_PATH=/tmp/cloudledger-core-browsers-verify/backend/node_modules \
CHROME_PATH='/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' \
PORTFOLIO_ARTIFACT_DIR=docs/portfolio-redesign/creative-notebook/evidence \
node scripts/verify-portfolio.cjs
```

Local preview: http://127.0.0.1:3101. No commit or deployment. Other browser engines, external profile availability and live form delivery were not verified. Existing unrelated dirty changes were preserved.
