import { NotebookPage } from "@/components/layout/NotebookPage";
import { PageDoodle } from "@/components/ui/PageDoodle";
import { FeaturedCaseStudies } from "@/components/home/FeaturedCaseStudies";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Engineering case studies",
  "Architecture decisions in voice AI, backend reliability, data access and media delivery. Problems, constraints and trade-offs from professional work.",
  "/case-studies",
);
export default function CaseStudiesIndex() {
  return (
    <NotebookPage label="Selected work" number="01" variant="work">
      <header className="page-intro illustrated-intro">
        <PageDoodle kind="work" />
        <p className="eyebrow">Engineering in practice</p>
        <h1>
          Systems work.
          <br />
          <em>Decisions included.</em>
        </h1>
        <p>
          Four accounts of building and improving production systems. Start with
          the problem, follow the trade-offs, and see what the architecture
          makes possible.
        </p>
      </header>
      <FeaturedCaseStudies />
    </NotebookPage>
  );
}
