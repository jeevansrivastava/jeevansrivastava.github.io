import { NotebookPage } from "@/components/layout/NotebookPage";
import { PageDoodle } from "@/components/ui/PageDoodle";
import { ArticlesSection } from "@/components/home/ArticlesSection";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Technical writing",
  "Jeevan Jyoti Srivastava's writing archive on software engineering, architecture and system design.",
  "/articles",
);
export default function ArticlesPage() {
  return (
    <NotebookPage label="Working notes" number="04" variant="writing">
      <header className="page-intro illustrated-intro">
        <PageDoodle kind="writing" />
        <p className="eyebrow">Writing</p>
        <h1>
          Working notes.
          <br />
          <em>Shared thinking.</em>
        </h1>
        <p>
          Alongside the case studies, I write about the decisions and ideas
          behind building software.
        </p>
      </header>
      <ArticlesSection />
    </NotebookPage>
  );
}
