import type { Study } from "@/content/portfolio";
export function StudyBrief({ study }: { study: Study }) {
  return (
    <dl className="study-brief">
      <div><dt>Problem scope</dt><dd>{study.brief.scope}</dd></div>
      <div><dt>Architecture intervention</dt><dd>{study.brief.decision}</dd></div>
      <div><dt>Production outcome</dt><dd>{study.brief.outcome}</dd></div>
    </dl>
  );
}
