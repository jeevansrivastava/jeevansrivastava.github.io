import Link from "next/link";
export function NotebookPage({ children, label, number, variant = "default" }: {
  children: React.ReactNode;
  label: string;
  number: string;
  variant?: string;
}) {
  return (
    <div className={`notebook-page page-${variant}`}>
      <div className="notebook-page-nav">
        <Link href="/">← Back to the desk</Link>
        <span>Jeevan’s field notes / {label}</span>
      </div>
      <div className="notebook-paper">
        <div className="paper-running-head"><span>{label}</span><span>No. {number}</span></div>
        {children}
        <div className="paper-colophon"><span>Jeevan Jyoti Srivastava</span><span>Think → build → understand</span></div>
      </div>
    </div>
  );
}
