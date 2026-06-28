import { SectionLabel } from "@/components/ui/SectionLabel";
import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";
import { ArchDiagram } from "@/components/case-study/ArchDiagram";
import { DecisionTable } from "@/components/case-study/DecisionTable";
import { ChallengeBlock } from "@/components/case-study/ChallengeBlock";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Voice Application | Case Study",
  description: "Real-time voice application platform with <200ms latency, multi-agent orchestration, and adaptive bilingual interactions.",
};

const diagram = `
  User ←──────── WebRTC/LiveKit ─────→ LiveKit Room
  (Mobile)                              │
                                   Voice Agent Pipeline
                                        │
                          Audio In ──→ Silero VAD ──→ Cartesia STT
                                                          │
                                                    ┌─────↓──────┐
                                                    │Orchestrator│
                                                    │   Agent    │
                                                    └─────┬──────┘
                                          ┌───────────────┼───────────────┐
                                    ┌─────↓─────┐   ┌─────↓─────┐   ┌─────↓─────┐
                                    │  ChitChat │   │    SME    │   │  Gaming   │
                                    │   Agent   │   │   Agent   │   │  Agent    │
                                    └───────────┘   └─────┬─────┘   └───────────┘
                                                          │
                                                    ┌─────↓─────┐
                                                    │Assessment │
                                                    │   Agent   │
                                                    └───────────┘
                                                          │
                                    Cartesia TTS ←── LLM Response
                                         │
                                    Audio Out ──────────────→ User

                                    ┌────────────┐    ┌───────────┐
                                    │ PostgreSQL │    │RAG Engine │
                                    │ (Drizzle)  │    │(Embeddings│
                                    │ Users/State│    │ + Search) │
                                    └────────────┘    └───────────┘
`;

const decisions = [
  { decision: "Voice Transport", choice: "LiveKit WebRTC", alternative: "Socket.IO", reason: "Sub-200ms latency, native VAD, built-in rooms" },
  { decision: "TTS Provider", choice: "Cartesia (sonic-3.5)", alternative: "Google TTS", reason: "Natural voice quality, Hindi support, streaming" },
  { decision: "VAD Model", choice: "Silero ONNX (1500ms)", alternative: "WebRTC VAD", reason: "Child speech accuracy, configurable silence threshold" },
  { decision: "Multi-Agent", choice: "llm.handoff()", alternative: "Hard-coded routing", reason: "Dynamic agent transitions, clean separation" },
  { decision: "DB ORM", choice: "Drizzle ORM", alternative: "Prisma", reason: "Type-safe, SQL-like, lightweight" },
  { decision: "Session Flush", choice: "60s periodic", alternative: "Write-through", reason: "60x fewer DB writes, crash-safe state" },
];

export default function CaseStudy() {
  return (
    <article className="max-w-[800px] mb-24">
      <SectionLabel command="cat ./meta.json" />
      <CaseStudyHero 
        title="AI Voice Application"
        role="Lead Engineer & Architect"
        stack={["LiveKit", "OpenAI", "Cartesia", "Silero VAD", "PostgreSQL", "Drizzle", "TypeScript"]}
        duration="2025 — Present"
      />

      <SectionLabel command="cat ./problem.md" />
      <div className="text-muted leading-relaxed mb-12 text-[0.95rem]">
        <p className="mb-4">
          Traditional text-based chat platforms fail to engage demographics in emerging markets, where spoken language (Hindi/Hinglish) is the most natural interface.
        </p>
        <p>
          We needed a platform that could deliver highly personalized, voice-first AI interactions at scale — with the ability to route between specialized AI agents, trigger dynamic workflows, and adapt to each user&apos;s interaction pace.
        </p>
      </div>

      <SectionLabel command="cat ./architecture.md" />
      <ArchDiagram content={diagram} />

      <SectionLabel command="diff --decisions" />
      <DecisionTable decisions={decisions} />

      <SectionLabel command="cat ./challenges.md" />
      <div className="mb-12">
        <ChallengeBlock 
          num="01"
          title="Audio Interruption Handling"
          description="When users interrupt during media playback, the agent must gracefully pause audio, answer the question, and offer to resume — all while maintaining workflow state. Solved via a waitForMediaPlayback() promise pattern combined with room-level data channels."
        />
        <ChallengeBlock 
          num="02"
          title="Multi-Agent State Machine"
          description="5 distinct agents (Orchestrator, ChitChat, SME, Assessment, Gaming) required complex handoff patterns. Utilized LiveKit's native llm.handoff() for clean transitions, with AgentContext propagated safely across boundaries."
        />
        <ChallengeBlock 
          num="03"
          title="Adaptive Language"
          description="Required Hinglish/Hindi/English real-time language detection and switching. Implemented via system-prompt-level language style injection with dynamic adaptive language rules per user preference."
        />
        <ChallengeBlock 
          num="04"
          title="Resumable Sessions"
          description="Users often disconnect mid-session on mobile networks. Implemented persistent agentState and playback progress tracking with periodic background flushes to PostgreSQL, enabling seamless restoration on reconnect."
        />
      </div>

      <SectionLabel command="cat ./outcome.md" />
      <div className="bg-[rgba(166,227,161,0.05)] border border-[rgba(166,227,161,0.2)] rounded-[6px] p-6 text-text">
        <ul className="list-disc pl-5 m-0 flex flex-col gap-2 text-[0.95rem]">
          <li>Real-time voice interaction achieved with <span className="text-green font-mono">{"<200ms"}</span> response latency.</li>
          <li>Successful multi-turn clarification loops (Orchestrator → clarify → route → SME).</li>
          <li>Resumable sessions across mobile network disconnects.</li>
          <li>Workflow-aware RAG-powered data delivery.</li>
          <li>Bilingual (Hindi/English/Hinglish) adaptive responses serving a wider demographic.</li>
        </ul>
      </div>
    </article>
  );
}
