const modes = [
  { id: "voice", name: "Voice AI", note: "A conversation has a state. A good system remembers it.", detail: "My work connects speech, learning flow and recoverable sessions." },
  { id: "systems", name: "Platforms", note: "Follow the request. Find the real bottleneck.", detail: "I work through the cache, the queue and the cost of each operation." },
  { id: "people", name: "Leadership", note: "Leave the next engineer a better map.", detail: "Clear ownership, explicit decisions and the context behind the code." },
];
export function WorkbenchSketch() {
  return (
    <div className="workbench-sketch">
      <div className="sketch-canvas" aria-hidden="true">
        <span className="sketch-annotation">a few things on my mind ↴</span>
        <svg viewBox="0 0 460 350" fill="none" className="desk-drawing">
          <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M82 89 351 77 363 265 90 278Z" fill="#eee3ce" />
            <path d="m92 82 269-7 12 182-274 12Z" fill="#f6eddb" />
            <path d="m104 99 241-7 9 147-243 10Z" fill="#232825" />
            <path d="m210 267-2 23-54 12 154-4-58-11-2-22" fill="#eee3ce" />
            <path d="m165 309 146-5 26 21-195 6Z" fill="#f6eddb" />
            <path d="m164 317 153-4m-127-6-5 16m31-17-3 16m27-17 2 17m22-18 5 17m17-18 10 17" strokeWidth="1" />
            <circle cx="228" cy="255" r="4" />
            <path d="m370 248 37-2-3 49-30 2Z" fill="#e5b96a" />
            <path d="m407 253 11 1 1 22-13 3m-30-33c-13-18 12-15 2-32m17 29c-10-14 13-20 4-31" />
            <path d="m28 234 41 9-8 58-44-10Z" fill="#ed7155" />
            <path d="m32 253 25 5m-28 6 25 5m-26 6 18 4" stroke="#232825" />
            <path d="m57 72 10-23m-26 41-22-5m61-25 9-11M393 136l18-9m-17-4 2-12" />
            <path d="m36 183 14-8 8-21 8 19 18 5-19 8-6 20-9-20Z" fill="#e5b96a" />
          </g>
          <g className="screen-voice" stroke="#ed7155" strokeWidth="3" strokeLinecap="round">
            <path d="m135 177 0 13m12-31v48m12-38v27m12-53v78m12-63v49m12-71v89m12-60v35m12-75v115m12-89v66m12-83v100m12-76v50m12-64v81m12-54v28m12-38v48m12-31v13" />
          </g>
          <g className="screen-systems" stroke="#e5b96a" strokeWidth="2" strokeLinejoin="round">
            <path d="m135 137 53-2 2 31-53 2Zm78-2 53-2 2 31-53 2Zm-35 63 68-2 2 29-68 2Z" />
            <path d="m163 168 1 15 48-2 1 15m28-31v15l-29 1m-21-30 23-1" />
            <circle cx="151" cy="151" r="3" fill="#e5b96a" /><circle cx="229" cy="149" r="3" fill="#e5b96a" />
          </g>
          <g className="screen-people" stroke="#c1c8b0" strokeWidth="2.5" strokeLinecap="round">
            <circle cx="172" cy="154" r="16" /><circle cx="258" cy="150" r="16" />
            <path d="M144 210q0-44 28-34 29-10 29 32m29-2q0-44 28-34 29-10 29 32m-89-56 16-9 15 8m-16-9 1 35" />
          </g>
          <path d="M321 45q28-22 41 0t31 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <span className="sketch-signature">think → build → understand</span>
      </div>
      <fieldset className="sketch-controls">
        <legend>Explore my engineering focus</legend>
        {modes.map((mode, i) => (
          <label key={mode.id}>
            <input type="radio" name="desk-focus" value={mode.id} defaultChecked={i === 0} />
            <span>{mode.name}</span>
          </label>
        ))}
      </fieldset>
      <div className="sketch-notes">
        {modes.map((mode) => <div key={mode.id} className={`sketch-note note-${mode.id}`}><p>{mode.note}</p><small>{mode.detail}</small></div>)}
      </div>
    </div>
  );
}
