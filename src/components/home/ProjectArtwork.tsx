export function ProjectArtwork({ kind }: { kind: number }) {
  return (
    <div className={`project-art art-${kind}`} aria-hidden="true">
      {kind === 0 && <><span className="art-caption">A conversation, with continuity.</span><div className="voice-orbit"><span /><span /><span /><div className="voice-bars">{[18,32,58,90,65,115,85,54,76,38,22].map((h,i)=><i key={i} style={{height:h}} />)}</div></div><span className="art-footnote">listen / understand / respond / remember</span></>}
      {kind === 1 && <><span className="art-caption">Follow the request.</span><div className="platform-blocks"><div><i /><i /><i /><span>01 / REQUEST</span></div><div><i /><i /><i /><span>02 / TRACE</span></div><div><i /><i /><i /><span>03 / RESOLVE</span></div></div><span className="art-footnote">The answer is usually in the details. ↗</span></>}
      {kind === 2 && <><span className="art-caption">Give the heavy work its own lane.</span><div className="queue-art"><span>request → response</span><div>{[1,2,3,4].map(i=><i key={i} />)}</div><span>↳ queue → workers</span></div><span className="art-footnote">Less on the critical path.</span></>}
      {kind === 3 && <><span className="art-caption">A better way to press play.</span><div className="film-art"><div/><div/><div><span>▶</span><i /></div></div><span className="art-footnote">One source. More ways to learn.</span></>}
    </div>
  );
}
