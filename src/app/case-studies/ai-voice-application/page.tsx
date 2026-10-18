import { getStudy } from "@/content/portfolio";
import { StudyPage } from "@/components/case-study/StudyPage";
import { pageMetadata } from "@/lib/metadata";
const study = getStudy("ai-voice-application");
export const metadata = pageMetadata(
  study.title,
  study.summary,
  "/case-studies/ai-voice-application",
);
export default function CaseStudy() {
  return <StudyPage study={study} />;
}
