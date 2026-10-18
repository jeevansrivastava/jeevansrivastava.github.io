import { getStudy } from "@/content/portfolio";
import { StudyPage } from "@/components/case-study/StudyPage";
import { pageMetadata } from "@/lib/metadata";
const study = getStudy("subscription-entitlements");
export const metadata = pageMetadata(study.title, study.summary, "/case-studies/subscription-entitlements");
export default function CaseStudy() {
  return <StudyPage study={study} />;
}
