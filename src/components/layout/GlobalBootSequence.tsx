"use client";

import { useState } from "react";
import { BootSequence } from "@/components/ui/BootSequence";
import { motion } from "framer-motion";

export function GlobalBootSequence({ children }: { children: React.ReactNode }) {
  const [bootComplete, setBootComplete] = useState(false);

  // We explicitly DO NOT use sessionStorage here.
  // We want this component to run exactly when it mounts.
  // In Next.js App Router, layout components do not unmount/remount on soft navigation between pages.
  // Therefore, this will naturally run exactly on the first visit or manual hard refresh.

  if (!bootComplete) {
    return (
      <div className="w-full h-full flex flex-col pt-4 min-h-[50vh]">
        <div className="mb-2">
          <BootSequence onComplete={() => setBootComplete(true)} />
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col h-full"
    >
      {children}
    </motion.div>
  );
}
