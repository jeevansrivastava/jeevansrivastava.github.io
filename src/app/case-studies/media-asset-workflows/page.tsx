import { getStudy } from "@/content/portfolio";
import { StudyPage } from "@/components/case-study/StudyPage";
import { pageMetadata } from "@/lib/metadata";
const study = getStudy("media-asset-workflows");
export const metadata = pageMetadata(study.title, study.summary, "/case-studies/media-asset-workflows");
export default function CaseStudy() {
  return <StudyPage study={study} />;
}
