const notes = [
  {
    title: "Start with the evidence.",
    description:
      "I want to understand where the time goes, what state changed, and which assumption stopped holding.",
  },
  {
    title: "Make the boundaries clear.",
    description:
      "I look for explicit ownership of state, decisions and recovery—especially when an AI model is involved.",
  },
  {
    title: "Leave the reasoning behind.",
    description:
      "A system should be understandable to the next engineer who has to change it or investigate an incident.",
  },
];
export function HowIWork() {
  return (
    <section
      className="section personal-notes"
      aria-labelledby="principles-title"
    >
      <div>
        <p className="eyebrow">03 / Working notes</p>
        <h2 id="principles-title">
          A few things{" "}
          <br />
          <em>I come back to.</em>
        </h2>
      </div>
      <ol>
        {notes.map((note, i) => (
          <li key={note.title}>
            <span>0{i + 1}</span>
            <div>
              <h3>{note.title}</h3>
              <p>{note.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
