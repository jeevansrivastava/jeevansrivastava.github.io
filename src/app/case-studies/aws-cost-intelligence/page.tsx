import { getStudy } from "@/content/portfolio";
import { StudyPage } from "@/components/case-study/StudyPage";
import { pageMetadata } from "@/lib/metadata";
const study = getStudy("aws-cost-intelligence");
export const metadata = pageMetadata(
  study.title,
  study.summary,
  "/case-studies/aws-cost-intelligence",
);
export default function CaseStudy() {
  return <StudyPage study={study} />;
}
