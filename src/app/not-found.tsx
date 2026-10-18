import { NotebookPage } from "@/components/layout/NotebookPage";
import { PageDoodle } from "@/components/ui/PageDoodle";
import Link from "next/link";
export default function NotFound() {
  return (
    <NotebookPage label="A small detour" number="404" variant="missing">
    <section className="page-intro illustrated-intro">
      <PageDoodle kind="missing" />
      <p className="eyebrow">404 / Page not found</p>
      <h1>This path ends here.</h1>
      <p>
        The page may have moved. Explore the engineering case studies or return
        to the homepage.
      </p>
      <div className="actions">
        <Link className="button button-primary" href="/">
          Back to home
        </Link>
        <Link className="button button-secondary" href="/case-studies">
          View case studies
        </Link>
      </div>
    </section>
    </NotebookPage>
  );
}
