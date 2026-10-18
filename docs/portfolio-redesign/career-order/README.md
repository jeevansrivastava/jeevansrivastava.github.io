# Latest experience first

Follow-up: the homepage now shows all three sticky notes by default (UOLO, Dociety, BitGiving), per the clarified preference. More experience applies only to the résumé. Build, lint and diff checks passed again; Chrome verified visible notes, desktop row/mobile stack and no overflow at 1440, 768, 390 and 320 pixels. Desktop and mobile screenshots were visually inspected. The evidence below records the preceding collapsed-homepage iteration.

Background now precedes the homepage career notes. UOLO is the visible current chapter; More experience reveals Dociety, then BitGiving. The résumé keeps both UOLO roles together and collapses the four earlier companies, still ordered newest first. Native company fragment links reveal the matching résumé entry even without JavaScript.

Technical focus explicitly includes generative AI, large language models (LLMs), retrieval-augmented generation (RAG), agent workflows and real-time voice pipelines. Backend/data and cloud/production remain separate, readable paragraphs. About uses the same AI terminology.

Validation on the local static export at http://127.0.0.1:3101:

- `npm run build`, `npm run lint` and `git diff --check` passed.
- Chrome checked home, résumé and about at 1440, 768, 390 and 320 pixels: 12 route/viewport checks, no horizontal overflow, no detected WCAG A/AA axe violations, and no page runtime errors. Home and résumé were also audited with older experience expanded.
- Keyboard Enter opens More experience; Space closes it. All three company links resolve and reveal their target. Older experience expansion and company navigation work with JavaScript disabled.
- PDF exported with older experience collapsed on screen. PDFKit confirmed two pages containing all five companies, current and earliest roles, and the expanded AI focus. Desktop/mobile career notes, the homepage composition, mobile résumé and PDF page two were visually inspected.

See `evidence/validation.json`, viewport screenshots, and `evidence/resume-print.pdf`. Browser validation used `/tmp/career-order-check.cjs`; PDF extraction/rendering used `/tmp/career-order-pdf.swift`. This is local validation, not deployment evidence.
