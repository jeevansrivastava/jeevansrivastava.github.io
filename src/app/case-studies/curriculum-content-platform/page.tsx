import { getStudy } from "@/content/portfolio";
import { StudyPage } from "@/components/case-study/StudyPage";
import { pageMetadata } from "@/lib/metadata";
const study = getStudy("curriculum-content-platform");
export const metadata = pageMetadata(study.title, study.summary, "/case-studies/curriculum-content-platform");
export default function CaseStudy() {
  return <StudyPage study={study} />;
}
