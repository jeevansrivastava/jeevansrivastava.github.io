import { getStudy } from "@/content/portfolio";
import { StudyPage } from "@/components/case-study/StudyPage";
import { pageMetadata } from "@/lib/metadata";
const study = getStudy("speech-assessment");
export const metadata = pageMetadata(study.title, study.summary, "/case-studies/speech-assessment");
export default function CaseStudy() {
  return <StudyPage study={study} />;
}
