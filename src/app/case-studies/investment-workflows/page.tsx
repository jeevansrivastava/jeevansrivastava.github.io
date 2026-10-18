import { getStudy } from "@/content/portfolio";
import { StudyPage } from "@/components/case-study/StudyPage";
import { pageMetadata } from "@/lib/metadata";
const study = getStudy("investment-workflows");
export const metadata = pageMetadata(study.title, study.summary, "/case-studies/investment-workflows");
export default function CaseStudy() {
  return <StudyPage study={study} />;
}
