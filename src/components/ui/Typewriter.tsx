"use client";

import { useEffect, useState } from "react";

const words = [
  "architecting resilient backend systems",
  "scaling real-time AI infrastructure",
  "optimizing distributed databases",
];

export function Typewriter() {
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    const currentWord = words[wordIdx];

    const timeout = setTimeout(
      () => {
        if (isDeleting) {
          setText(currentWord.substring(0, charIdx - 1));
          setCharIdx((prev) => prev - 1);
        } else {
          setText(currentWord.substring(0, charIdx + 1));
          setCharIdx((prev) => prev + 1);
        }

        if (!isDeleting && charIdx === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && charIdx === 0) {
          setIsDeleting(false);
          setWordIdx((prev) => (prev + 1) % words.length);
        }
      },
      isDeleting ? 40 : 100
    );

    return () => clearTimeout(timeout);
  }, [charIdx, isDeleting, wordIdx]);

  return (
    <span>
      <span className="text-accent">{text}</span>
      <span className="animate-[blink_1s_step-end_infinite]">_</span>
    </span>
  );
}
