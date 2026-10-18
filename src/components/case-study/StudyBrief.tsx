import type { Study } from "@/content/portfolio";
export function StudyBrief({ study }: { study: Study }) {
  return (
    <dl className="study-brief">
      <div><dt>My responsibility</dt><dd>{study.brief.responsibility}</dd></div>
      <div><dt>The key decision</dt><dd>{study.brief.decision}</dd></div>
      <div><dt>What changed</dt><dd>{study.brief.outcome}</dd></div>
    </dl>
  );
}
