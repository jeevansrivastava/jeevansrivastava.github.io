import { getStudy } from "@/content/portfolio";
import { StudyPage } from "@/components/case-study/StudyPage";
import { pageMetadata } from "@/lib/metadata";
const study = getStudy("classroom-video-export");
export const metadata = pageMetadata(study.title, study.summary, "/case-studies/classroom-video-export");
export default function CaseStudy() {
  return <StudyPage study={study} />;
}
