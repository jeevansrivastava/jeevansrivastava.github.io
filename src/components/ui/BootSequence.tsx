"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const bootLines = [
  { text: `Last login: ${new Date().toDateString()} on ttys001`, color: "text-dim" },
  { text: "jeevan@mbp ~ % ./start_portfolio.sh", color: "text-dim" },
  { text: "[OK] Loading modules...", color: "text-green" },
  { text: "[OK] Initializing session...", color: "text-green" },
];

export function BootSequence({ onComplete }: { onComplete?: () => void }) {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const delays = [0, 300, 800, 1500];
    const timers: NodeJS.Timeout[] = [];

    delays.forEach((delay, i) => {
      timers.push(
        setTimeout(() => {
          setVisibleLines(i + 1);
          if (i === delays.length - 1) {
            setTimeout(() => onComplete?.(), 200);
          }
        }, delay)
      );
    });

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div className="text-[0.8rem] text-dim mb-6 leading-relaxed font-mono">
      {bootLines.map((line, i) => (
        <motion.p
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: i < visibleLines ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className={line.color}
        >
          {line.text}
        </motion.p>
      ))}
    </div>
  );
}
