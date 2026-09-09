import { SectionLabel } from "@/components/ui/SectionLabel";
import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";
import { ArchDiagram } from "@/components/case-study/ArchDiagram";
import { DecisionTable } from "@/components/case-study/DecisionTable";
import { ChallengeBlock } from "@/components/case-study/ChallengeBlock";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Voice Application | Case Study",
  description: "Real-time bilingual voice tutor platform with <200ms TTFB, 6-agent orchestration, DTLN noise filtering, and multimodal WebRTC sync.",
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
        title="AI Voice Application (AI Didi)"
        role="Lead Engineer & Systems Architect"
        stack={["LiveKit WebRTC", "Cartesia", "OpenAI", "Silero VAD", "DTLN", "Langfuse", "PostgreSQL", "Drizzle", "TypeScript"]}
        duration="2025 — Present"
      />

      <SectionLabel command="cat ./problem.md" />
      <div className="text-muted leading-relaxed mb-12 text-[0.95rem]">
        <p className="mb-4">
          Traditional text-based tutoring fails to engage younger students in emerging markets where conversational Hindi, English, and Hinglish are the most natural mediums of instruction. 
        </p>
        <p>
          We engineered an autonomous, real-time voice tutoring platform (&quot;AI Didi&quot;) capable of sub-200ms bilingual conversational latency, dynamic multi-agent instruction routing (curriculum lessons, adaptive quizzes, games, and doubt clearing), and synchronized multimodal UI updates across mobile networks.
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
          title="Streaming Audio Ordering & Sub-200ms TTFB"
          description="Streaming LLM tokens directly to TTS can result in race conditions where subsequent sentences finish synthesizing before prior ones. Implemented a semantic sentence chunker with boundary heuristics paired with a monotonic session FIFO emit queue, guaranteeing strict in-order playback while keeping TTFB under 200ms."
        />
        <ChallengeBlock 
          num="02"
          title="Acoustic Signal Processing in Noisy Environments"
          description="Children often speak with irregular pauses in noisy home environments. We deployed an in-memory DTLN (Dual-Signal Transformation LSTM Network) noise filter via ONNX Runtime and configured Silero VAD with a 1500ms silence threshold to prevent premature interruptions."
        />
        <ChallengeBlock 
          num="03"
          title="6-Agent State Machine & Zero-Drift Handoffs"
          description="Designed 6 specialized agents (Orchestrator, SME, ChitChat, Assessment, DoubtClearing, Gaming). Transitions use LiveKit's native handoffs validated at runtime with Zod schemas, preserving cumulative student mastery and conversation context seamlessly across agent boundaries."
        />
        <ChallengeBlock 
          num="04"
          title="Multimodal Sync & Graceful Media Interruptions"
          description="Voice prompts must stay in tight sync with video chapters, interactive quiz overlays, and suggestion chips. Handled via WebRTC data channels and a custom waitForMediaPlayback() promise coordinator that gracefully pauses media, processes user questions, and resumes uninterrupted."
        />
        <ChallengeBlock 
          num="05"
          title="Full-Pipeline Observability & Parent Reporting"
          description="Integrated Langfuse and OpenTelemetry to profile granular per-hop latencies (VAD, ASR, LLM chunking, TTS) and monitor token burn. Coupled this with a WhatsApp microservice that dispatches automated post-session student mastery report cards to parents."
        />
      </div>

      <SectionLabel command="cat ./outcome.md" />
      <div className="bg-[rgba(166,227,161,0.05)] border border-[rgba(166,227,161,0.2)] rounded-[6px] p-6 text-text">
        <ul className="list-disc pl-5 m-0 flex flex-col gap-2 text-[0.95rem]">
          <li>Achieved sub-<span className="text-green font-mono">200ms</span> end-to-end voice response latency over real-world mobile 4G networks.</li>
          <li>Zero out-of-order audio glitches via semantic chunking and monotonic FIFO queue synchronization.</li>
          <li>Resilient session continuity across mobile disconnects with 60x reduction in database write load.</li>
          <li>Comprehensive Langfuse LLM tracing tracking latency bottlenecks and token cost optimization.</li>
          <li>Automated parent loop closing with instant post-session learning summaries over WhatsApp.</li>
        </ul>
      </div>
    </article>
  );
}
