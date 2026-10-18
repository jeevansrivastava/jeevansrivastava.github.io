export function ProjectArtwork({ kind }: { kind: number }) {
  const platformArt = [
    { caption: "Every word has a place.", steps: ["Listen", "Align", "Reflect"], note: "From a spoken attempt to feedback." },
    { caption: "A file, with somewhere to go.", steps: ["Upload", "Organise", "Share"], note: "One asset. Many learning moments." },
    { caption: "Good content needs a way through.", steps: ["Draft", "Schedule", "Publish"], note: "From the editor to the classroom." },
    { caption: "Keep the whole journey connected.", steps: ["Account", "Order", "Track"], note: "Across every provider boundary." },
    { caption: "A lesson, ready to travel.", steps: ["Compose", "Compile", "Render"], note: "From the classroom to the final frame." },
  ][kind - 5];
  return (
    <div className={`project-art art-${kind}`} aria-hidden="true">
      {kind === 0 && <><span className="art-caption">A conversation, with continuity.</span><div className="voice-orbit"><span /><span /><span /><div className="voice-bars">{[18,32,58,90,65,115,85,54,76,38,22].map((h,i)=><i key={i} style={{height:h}} />)}</div></div><span className="art-footnote">listen / understand / respond / remember</span></>}
      {kind === 1 && <><span className="art-caption">Follow the request.</span><div className="platform-blocks"><div><i /><i /><i /><span>01 / REQUEST</span></div><div><i /><i /><i /><span>02 / TRACE</span></div><div><i /><i /><i /><span>03 / RESOLVE</span></div></div><span className="art-footnote">The answer is usually in the details. ↗</span></>}
      {kind === 2 && <><span className="art-caption">Give the heavy work its own lane.</span><div className="queue-art"><span>request → response</span><div>{[1,2,3,4].map(i=><i key={i} />)}</div><span>↳ queue → workers</span></div><span className="art-footnote">Less on the critical path.</span></>}
      {kind === 3 && <><span className="art-caption">A better way to press play.</span><div className="film-art"><div/><div/><div><span>▶</span><i /></div></div><span className="art-footnote">One source. More ways to learn.</span></>}
      {kind === 4 && <><span className="art-caption">Access follows the plan.</span><div className="subscription-art"><span>One account</span><div>Plan <i>✓</i></div><div>Usage <i>✓</i></div><div>Access <i>✓</i></div></div><span className="art-footnote">Clear rules, through every change.</span></>}
      {platformArt && <><span className="art-caption">{platformArt.caption}</span><div className="platform-note-art">{platformArt.steps.map((step, i) => <span key={step}><i>0{i + 1}</i>{step}</span>)}</div><span className="art-footnote">{platformArt.note}</span></>}
    </div>
  );
}
