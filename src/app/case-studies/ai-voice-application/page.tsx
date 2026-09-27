import { SectionLabel } from "@/components/ui/SectionLabel";
import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";
import { ArchDiagram } from "@/components/case-study/ArchDiagram";
import { DecisionTable } from "@/components/case-study/DecisionTable";
import { ChallengeBlock } from "@/components/case-study/ChallengeBlock";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Voice Application | Case Study",
  description: "How a real-time bilingual AI tutoring product was architected for dependable learner interaction, explicit state, and operational clarity.",
};

const diagram = `
  User (Mobile / Web) ←──────── WebRTC (LiveKit) ────────→ LiveKit Room
                                                                │
  ┌─────────────────────────────────────────────────────────────┴─────────────────────────────────────────────────────────────┐
  │                                           Real-Time Voice & Multimodal Pipeline                                           │
  │                                                                                                                           │
  │  Audio In ──→ [ DTLN Noise Filter ] ──→ [ Silero VAD (1.5s) ] ──→ [ Cartesia / Deepgram STT ]                             │
  │                                                                                  │                                        │
  │                                                                           ┌──────↓──────┐                                 │
  │                                                                           │Orchestrator │                                 │
  │                                                                           │ Router/State│                                 │
  │                                                                           └──────┬──────┘                                 │
  │                               ┌───────────────────────┬───────────────────┼───────────────────┬──────────────────────┐    │
  │                         ┌─────↓─────┐           ┌─────↓─────┐       ┌─────↓─────┐       ┌─────↓─────┐          ┌─────↓──┐ │
  │                         │  ChitChat │           │    SME    │       │ Assessment│       │   Gaming  │          │ Doubt  │ │
  │                         │   Agent   │           │ (Lessons) │       │ (Adaptive)│       │  (Trivia) │          │Clearing│ │
  │                         └───────────┘           └─────┬─────┘       └─────┬─────┘       └───────────┘          └────────┘ │
  │                                                       │                   │                                               │
  │                                                       └─────────┬─────────┘                                               │
  │                                                                 ↓                                                         │
  │                                                   LLM Token Stream (SSE)                                                  │
  │                                                                 │                                                         │
  │                                                   [ Semantic Sentence Chunker ]                                           │
  │                                                                 │                                                         │
  │                                                   [ Session FIFO Emit Queue ]                                             │
  │                                                                 │                                                         │
  │                                       ┌─────────────────────────┴────────────────────────┐                                │
  │                                       ↓                                                  ↓                                │
  │                             Cartesia TTS (Streaming)                           Piper TTS (Local ONNX)                     │
  │                                       │                                                  │                                │
  │                                       └─────────────────────────┬────────────────────────┘                                │
  │                                                                 │                                                         │
  │  Audio Out + UI Data Packets (Quiz / Video / Progress) ─────────┴───────────────────────────────────────────────────────→ │
  └─────────────────────────────────────────────────────────────┬─────────────────────────────────────────────────────────────┘
                                                                │
  ┌───────────────────────────────────┬─────────────────────────┴─────────────────────────┬──────────────────────────────────┐
  │          Observability            │                   Persistence                     │          Integrations            │
  │  • Langfuse (Token & LLM Traces)  │  • PostgreSQL + Drizzle ORM (60s Flush)           │  • WhatsApp Parent Reports Bot   │
  │  • OpenTelemetry (Hop Latencies)  │  • Redis (Session Cache & Handoff Context)        │  • Subscription & Paywall Engine │
  └───────────────────────────────────┴───────────────────────────────────────────────────┴──────────────────────────────────┘
`;

const decisions = [
  { decision: "Voice Transport", choice: "LiveKit WebRTC", alternative: "WebSockets / Socket.IO", reason: "Sub-200ms latency, unified audio/video rooms, and native data channels for UI sync" },
  { decision: "Streaming Pipeline", choice: "Semantic Chunker + FIFO Queue", alternative: "Buffer-until-complete TTS", reason: "Sub-200ms TTFB while preventing race conditions and out-of-order audio chunks" },
  { decision: "Noise & VAD", choice: "DTLN ONNX + Silero VAD (1.5s)", alternative: "Basic browser VAD", reason: "Suppresses ambient household noise; customized 1500ms silence threshold tuned for kids" },
  { decision: "TTS Engine", choice: "Cartesia (sonic-3.5) + Piper ONNX", alternative: "Cloud-only Google TTS", reason: "Ultra-low latency streaming with local Piper ONNX fallback for high-frequency phrases" },
  { decision: "Multi-Agent System", choice: "LiveKit llm.handoff() + Zod", alternative: "Monolithic single prompt", reason: "Zero-drift domain boundaries, runtime schema validation, and specialized system prompts" },
  { decision: "Observability", choice: "Langfuse + OpenTelemetry", alternative: "Raw server logs", reason: "Per-hop latency tracing (VAD/STT/LLM/TTS), cost attribution, and full conversation replay" },
  { decision: "Session Persistence", choice: "60s Periodic DB Flush", alternative: "Synchronous write-through", reason: "Eliminated 60x database write overhead while guaranteeing crash-resilient restoration" },
];

export default function CaseStudy() {
  return (
    <article className="max-w-[800px] mb-24">
      <SectionLabel command="cat ./meta.json" />
      <CaseStudyHero 
        title="Making Real-Time AI Tutoring Dependable Beyond the Demo"
        role="AI Systems Architect & Lead Engineer"
        stack={["LiveKit WebRTC", "Cartesia", "OpenAI", "Silero VAD", "DTLN", "Langfuse", "PostgreSQL", "Drizzle", "TypeScript"]}
        duration="2025 — Present"
      />

      <SectionLabel command="cat ./mandate.md" />
      <div className="text-muted leading-relaxed mb-12 text-[0.95rem]">
        <p className="mb-4">
          Younger learners naturally speak Hindi, English, and Hinglish. For them, a voice tutor must work through noisy homes, variable devices, unreliable networks, and interruptions—not only in a controlled product demo.
        </p>
        <p>
          My mandate was to create a learning experience that could hold its pedagogical flow under those conditions while giving product and engineering teams a system they could investigate and improve.
        </p>
      </div>

      <SectionLabel command="cat ./architectural-position.md" />
      <div className="text-muted leading-relaxed mb-12 text-[0.95rem]">
        <p>
          I did not treat this as a chatbot with speech. I established a deterministic learning journey beneath the AI interactions: explicit learner state, bounded capabilities, measurable voice latency, and safe recovery when media or connectivity fails. This kept the experience coherent for learners and made the platform operable by more than the person who built it.
        </p>
      </div>

      <SectionLabel command="cat ./operating-model.md" />
      <ArchDiagram content={diagram} />

      <SectionLabel command="diff --decisions" />
      <DecisionTable decisions={decisions} />

      <SectionLabel command="cat ./decisions-in-practice.md" />
      <div className="mb-12">
        <ChallengeBlock 
          num="01"
          title="Protecting the conversational turn"
          description="I made fast first audio and ordered playback an explicit product contract. The streaming design preserved natural turn-taking rather than trading learner trust for raw generation speed."
        />
        <ChallengeBlock 
          num="02"
          title="Designing for real households, not ideal microphones"
          description="Noise handling and interruption timing were tuned around how children actually speak. That reduced premature cut-offs and made the interaction usable outside a quiet test environment."
        />
        <ChallengeBlock 
          num="03"
          title="Keeping AI inside a learning journey"
          description="I separated learner progression, assessment, doubt clearing, and conversation into bounded responsibilities. The product could adapt without allowing an open-ended model to derail a planned lesson."
        />
        <ChallengeBlock 
          num="04"
          title="Making multimodal interruptions recoverable"
          description="Voice, video, quizzes, and on-screen guidance needed to remain coherent when a learner asked a question mid-flow. I defined recovery behavior so the system paused, responded, and resumed without losing context."
        />
        <ChallengeBlock 
          num="05"
          title="Giving teams evidence, not anecdotes"
          description="The operating model traces each critical voice hop, AI decision, cost driver, and learner outcome. This gave the team a path to investigate sessions and communicate progress to parents."
        />
      </div>

      <SectionLabel command="cat ./capability-created.md" />
      <div className="bg-[rgba(166,227,161,0.05)] border border-[rgba(166,227,161,0.2)] rounded-[6px] p-6 text-text">
        <ul className="list-disc pl-5 m-0 flex flex-col gap-2 text-[0.95rem]">
          <li>Designed for fast, ordered voice responses, with first audio under <span className="text-green font-mono">200ms</span> after turn finalization in the measured pipeline.</li>
          <li>Created a deterministic learning flow that can pause, adapt, and resume without losing learner context.</li>
          <li>Reduced session-persistence write load by <span className="text-green font-mono">60×</span> while retaining recovery capability.</li>
          <li>Established an operating evidence layer for latency, cost, conversation investigation, and parent-facing learner summaries.</li>
        </ul>
      </div>
    </article>
  );
}
