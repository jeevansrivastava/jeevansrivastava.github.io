type Kind = "about" | "work" | "writing" | "contact" | "resume" | "missing";
const captions: Record<Kind, string> = {
  about: "a little about the person",
  work: "built, questioned, understood",
  writing: "thinking out loud",
  contact: "good things start with hello",
  resume: "one chapter at a time",
  missing: "a small detour",
};
export function PageDoodle({ kind }: { kind: Kind }) {
  return (
    <div className={`page-doodle doodle-${kind}`} aria-hidden="true">
      <svg viewBox="0 0 240 190" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {kind === "about" && <>
          <path d="m45 38 145-9 9 130-144 10Z" fill="#d7d9b0" />
          <path d="m52 43 131-5 5 112-129 8Z" strokeDasharray="3 5" />
          <image href="/logo.svg" x="72" y="47" width="94" height="94" />
          <path d="m86 23 56-3 3 29-56 3Z" fill="#e4c285" stroke="none" />
          <path d="m170 129 8 17 19 2-14 14 3 19-18-9-17 10 3-20-14-12 20-4Z" fill="#e5b96a" />
          <path d="m26 65-10-6m13 21-18 3m190-27 12-9" />
        </>}
        {kind === "work" && <>
          <path d="m37 53 62-3 17 16 86-4 6 98-165 9Z" fill="#dfbb65" />
          <path d="m58 37 124-3 4 113-123 6Z" fill="#f8efdb" />
          <path d="m75 59 85-3m-84 20 56-2m-55 20 78-3" />
          <path d="m33 95 172-9-16 78-143 8Z" fill="#c4cbb7" />
          <path d="m66 124 63-3m-61 15 39-2m71-94 5-16m9 24 14-5" />
        </>}
        {kind === "writing" && <>
          <path d="m38 39 113-13 20 133-115 13Z" fill="#cfbfd8" />
          <path d="m64 24 114 7-7 137-114-6Z" fill="#f8efdb" />
          <path d="m82 54 71 4m-72 14 67 4m-68 15 56 3m-57 15 66 4m-67 14 40 2" />
          <path d="m187 39 12 7-49 100-19 14 1-24Z" fill="#dfbb65" />
          <path d="m132 136 18 10m-15 9-4 5m49-108 13 6" />
          <path d="m25 93-10 4m19 14-14 13" />
        </>}
        {kind === "contact" && <>
          <path d="m31 61 168-5 9 100-169 7Z" fill="#e6c88e" />
          <path d="m32 63 85 60 81-64M39 160l58-55m111 49-66-46" />
          <path d="m66 88-2-60 106 4 3 48-56 42Z" fill="#f8efdb" />
          <path d="m82 50 67 2m-66 16 49 2m-48 16 29 2" />
          <path d="m170 123 25-2 2 22-25 3Z" fill="#d7d9b0" strokeDasharray="2 3" />
          <path d="m23 44-10-5m20-9-3-12m177 66 15-7" />
        </>}
        {kind === "resume" && <>
          <path d="m48 30 145 6-6 137-145-6Z" fill="#f8efdb" />
          <path d="m70 56 1 85" strokeDasharray="3 5" />
          {[58,95,132].map((y)=><g key={y}><circle cx="70" cy={y} r="6" fill="#d7d9b0" /><path d={`m89 ${y-3} 72 2m-71 10 42 1`} /></g>)}
          <path d="m155 24 37 7-5 24-37-8Z" fill="#e4c285" stroke="none" />
          <path d="m27 61-12 6m17 13-15 14" />
        </>}
        {kind === "missing" && <>
          <path d="m30 45 54-17 72 21 53-15-8 116-54 18-69-23-53 16Z" fill="#d7d9b0" />
          <path d="m84 29-6 116m78-96-9 118" />
          <path d="M50 116q12-63 46-37t40 23" strokeDasharray="4 6" />
          <path d="m159 87 20 23m0-25-22 26" strokeWidth="3" />
        </>}
      </svg>
      <span>{captions[kind]}</span>
    </div>
  );
}
