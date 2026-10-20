import { getStudy } from "@/content/portfolio";
import { StudyPage } from "@/components/case-study/StudyPage";
import { studyMetadata } from "@/lib/metadata";
const study = getStudy("video-streaming");
export const metadata = studyMetadata(study);
export default function CaseStudy() {
  return <StudyPage study={study} />;
}
