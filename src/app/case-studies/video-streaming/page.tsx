import { getStudy } from "@/content/portfolio";
import { StudyPage } from "@/components/case-study/StudyPage";
import { pageMetadata } from "@/lib/metadata";
const study = getStudy("video-streaming");
export const metadata = pageMetadata(
  study.title,
  study.summary,
  "/case-studies/video-streaming",
);
export default function CaseStudy() {
  return <StudyPage study={study} />;
}
