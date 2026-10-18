"use client";
export function PrintResume() {
  return (
    <div className="resume-actions">
      <button className="button button-primary" onClick={() => window.print()}>
        Print / save PDF <span aria-hidden="true">↗</span>
      </button>
      <span>Use your browser’s “Save as PDF” destination.</span>
    </div>
  );
}
