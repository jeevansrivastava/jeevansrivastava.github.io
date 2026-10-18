export const profile = {
  name: "Jeevan Jyoti Srivastava",
  email: "hello@jeevansrivastava.com",
  github: "https://github.com/jeevansrivastava",
  linkedin: "https://www.linkedin.com/in/jeevansrivastava/",
  medium: "https://medium.com/@thejeevan",
  role: "Senior Engineering Manager",
};

export interface Study {
  slug: string;
  category: string;
  title: string;
  summary: string;
  role: string;
  brief: { responsibility: string; decision: string; outcome: string };
  period: string;
  technologies: string[];
  problem: string;
  contribution: string;
  constraints: string[];
  flow: { title: string; detail: string }[];
  decisions: {
    decision: string;
    choice: string;
    alternative: string;
    reason: string;
  }[];
  challenges: { title: string; description: string }[];
  considerations: { title: string; description: string }[];
  outcome: string;
  lesson: string;
  evidence: string;
}

export const studies: Study[] = [
  {
    slug: "ai-voice-application",
    brief: {
      responsibility: "Designed the voice pipeline and the boundaries between teaching, assessment and conversation.",
      decision: "Keep lesson progression in explicit learner state, with bounded agents for each learning activity.",
      outcome: "Streaming speech, learning agents and recovery coordinated within one learning flow.",
    },
    category: "Voice AI · Stateful orchestration",
    title: "A voice tutor with an explicit learning journey.",
    summary:
      "Connecting real-time speech with curriculum flow, ordered playback and recoverable learner state.",
    role: "Architecture & hands-on engineering",
    period: "2025–present",
    technologies: ["LiveKit", "TypeScript", "PostgreSQL", "Redis", "Langfuse"],
    problem:
      "An AI tutor needs to follow a lesson while responding to a child who may switch between Hindi, English and Hinglish, interrupt a video, or lose connectivity. A fluent answer alone does not make the learning experience coherent.",
    contribution:
      "I designed the voice pipeline and the boundaries between teaching, assessment, doubt clearing and conversation. My focus was keeping the learning journey explicit while making speech, media and session state work together.",
    constraints: [
      "Noisy homes and variable microphones",
      "Network interruptions during lessons and media",
      "Ordered speech while model output is still streaming",
      "Curriculum progression that must survive agent handoffs",
    ],
    flow: [
      {
        title: "Listen",
        detail: "LiveKit · noise handling · speech recognition",
      },
      {
        title: "Route",
        detail: "Learner state · teaching · assessment · doubts",
      },
      {
        title: "Respond",
        detail: "Model stream · sentence chunks · FIFO audio",
      },
      {
        title: "Recover",
        detail: "Redis context · PostgreSQL progress · traces",
      },
    ],
    decisions: [
      {
        decision: "Voice transport",
        choice: "LiveKit WebRTC",
        alternative: "Custom WebSocket transport",
        reason:
          "Audio, media and data events share a session model. The trade-off is operating a real-time connection lifecycle, not just an HTTP request.",
      },
      {
        decision: "Speech delivery",
        choice: "Sentence chunking and an ordered queue",
        alternative: "Wait for the complete answer",
        reason:
          "Start synthesis while generation continues. Queue ordering avoids interleaved speech; interruption still needs explicit cancellation.",
      },
      {
        decision: "Teaching flow",
        choice: "Bounded agents and explicit learner state",
        alternative: "One open-ended prompt",
        reason:
          "Separate teaching, assessment and doubt handling. More transitions must be tested, but lesson progression is easier to inspect.",
      },
      {
        decision: "Session persistence",
        choice: "Redis context with periodic database persistence",
        alternative: "Persist every update synchronously",
        reason:
          "Reduce writes on the conversational path. Periodic persistence leaves a recovery window; it cannot guarantee that every recent update survives a crash.",
      },
      {
        decision: "Operating evidence",
        choice: "Langfuse and OpenTelemetry",
        alternative: "Application logs alone",
        reason:
          "Connect model calls with the voice pipeline. Traces are useful only when timing boundaries, retention and access are defined.",
      },
    ],
    challenges: [
      {
        title: "Keep the lesson in control",
        description:
          "Teaching, assessment and doubt clearing have distinct responsibilities. I made learner progression explicit so a conversational handoff did not become the source of truth for what should happen next.",
      },
      {
        title: "Protect the conversational turn",
        description:
          "Noise filtering and voice activity detection sit before transcription. Their timing changes when a turn is considered complete; model and synthesis latency must be interpreted separately from that delay.",
      },
      {
        title: "Coordinate interruptions",
        description:
          "A question during a video affects audio, player state and the lesson cursor. Recovery requires those states to agree before the experience can continue.",
      },
    ],
    considerations: [
      {
        title: "Latency & reliability",
        description:
          "Measure turn detection, transcription, generation, synthesis and client playback separately. A first-audio measurement after turn finalization is not end-to-end conversational latency.",
      },
      {
        title: "Retrieval & privacy",
        description:
          "Curriculum context should be bounded by the active lesson. Voice transcripts and learner progress require deliberate access and retention rules. This account does not establish a particular retrieval-index design or security certification.",
      },
      {
        title: "Cost & observability",
        description:
          "Token usage and synthesis work need session-level attribution. Trace collection also has a storage and privacy cost; capture what is needed to investigate a turn.",
      },
    ],
    outcome:
      "The resulting architecture brings streaming speech, specialized learning agents, session context and operating traces into one learning flow. The central engineering contribution is explicit coordination between components that otherwise fail independently.",
    lesson:
      "A useful voice product needs both responsive speech and a dependable state model. Improving one does not automatically improve the other.",
    evidence:
      "Professional work on AI Didi, described through a simplified architecture and decision record. Employer source code and raw session traces are not published here. No end-to-end latency benchmark or adoption figure is claimed.",
  },
  {
    slug: "aws-cost-intelligence",
    brief: {
      responsibility: "Led the investigation from production request behavior to infrastructure signals.",
      decision: "Replace repeated cache scans and move expensive processing into background workers.",
      outcome: "Cheaper request lookups, separated heavy processing and a repeatable capacity investigation process.",
    },
    category: "Backend reliability · AWS",
    title: "Finding the bottleneck before adding servers.",
    summary:
      "Tracing peak-hour failures through Redis lookups, request-path I/O and misleading capacity signals.",
    role: "Platform architecture & performance lead",
    period: "2026",
    technologies: ["Node.js", "Redis", "AWS CloudWatch", "ALB", "RabbitMQ"],
    problem:
      "A production application repeatedly slowed during peak demand. Adding capacity was an obvious response, but it would not explain why requests were doing expensive cache scans and file work in the first place.",
    contribution:
      "I led the investigation from production request behavior to infrastructure signals, then focused the changes on the critical path: lookup shape, heavy I/O and capacity decisions. Representative user journeys were part of the validation approach.",
    constraints: [
      "A live service with recurring peak-hour incidents",
      "Cache work multiplied by concurrent requests",
      "File processing competing with interactive traffic",
      "Capacity decisions under cost pressure",
    ],
    flow: [
      { title: "Observe", detail: "Request timings · errors · CloudWatch" },
      { title: "Isolate", detail: "Redis scans · file I/O · hot instances" },
      { title: "Change", detail: "Cached lookups · asynchronous jobs" },
      { title: "Validate", detail: "Authenticated journeys · concurrent load" },
    ],
    decisions: [
      {
        decision: "Cache lookup",
        choice: "In-process lookup with a five-minute TTL",
        alternative: "Scan Redis for each request",
        reason:
          "Avoid repeated network scans. Local copies introduce staleness and per-process consistency concerns; the TTL must fit the data.",
      },
      {
        decision: "Capacity signal",
        choice: "Requests per ALB target",
        alternative: "Average CPU alone",
        reason:
          "Fleet averages can conceal hot instances. Request count is useful context, but request cost and latency still need observation.",
      },
      {
        decision: "Expensive I/O",
        choice: "RabbitMQ workers",
        alternative: "Generate reports in the request path",
        reason:
          "Separate heavy work from interactive capacity. Queue delay, retries and job visibility become part of the user experience.",
      },
      {
        decision: "Validation",
        choice: "Authenticated user-flow load script",
        alternative: "Isolated endpoint benchmark",
        reason:
          "Exercise the sequence the frontend actually uses. Synthetic load still needs comparison with production traffic shape.",
      },
    ],
    challenges: [
      {
        title: "Separate symptoms from causes",
        description:
          "High CPU was a symptom shared by several failure modes. I correlated request behavior, Redis usage and file operations before choosing where to intervene.",
      },
      {
        title: "Make recovery testable",
        description:
          "A fast request in isolation is weak evidence. The validation approach followed authenticated workflows under concurrency and watched failure rates as well as response time.",
      },
    ],
    considerations: [
      {
        title: "Reliability",
        description:
          "Moving work to a queue needs retry limits and visibility into failed jobs. These are review requirements, not a claim of exactly-once processing.",
      },
      {
        title: "Security",
        description:
          "Load tests that follow authenticated journeys need test identities and controlled credentials. Production payloads should not be copied into public benchmarks.",
      },
      {
        title: "Cost",
        description:
          "Right-sizing should follow representative demand and headroom requirements. Lower spend alone is not evidence of an adequate capacity margin.",
      },
    ],
    outcome:
      "The work replaced scan-heavy request behavior with cheaper lookups, separated heavy processing and established a repeatable path for capacity investigation. Previously quoted response-time and savings figures are omitted until their workload and measurement records can be shared.",
    lesson:
      "Capacity planning starts with what each request asks the system to do. More instances can hide an expensive request shape without correcting it.",
    evidence:
      "Professional platform work. This is an architectural account, not a public incident log or reproducible benchmark. Identifying incident timestamps and internal operational details are omitted.",
  },
  {
    slug: "database-performance",
    brief: {
      responsibility: "Reviewed data access and execution patterns across platform workflows.",
      decision: "Use lighter reads and bounded concurrency; make background processing an explicit boundary.",
      outcome: "Reusable practices for data reads, asynchronous jobs and evidence-based cache sizing.",
    },
    category: "Data access · Asynchronous workloads",
    title: "Keeping expensive work out of the request path.",
    summary:
      "Reducing unnecessary data work and separating background jobs from latency-sensitive APIs.",
    role: "Platform architecture lead",
    period: "2025–2026",
    technologies: ["Node.js", "MongoDB", "Mongoose", "RabbitMQ", "Redis"],
    problem:
      "As workflows evolved, routine reads accumulated framework overhead, independent operations ran serially, and report generation competed with user requests. Infrastructure growth alone could not fix that workload shape.",
    contribution:
      "I reviewed data access and execution patterns across workflows, identified where batching or concurrency was safe, and made asynchronous processing a deliberate platform boundary.",
    constraints: [
      "Existing APIs and correctness expectations",
      "Independent versus dependent database operations",
      "Memory and database connection limits",
      "Background reports sharing application capacity",
    ],
    flow: [
      { title: "Request", detail: "Validate input · identify required data" },
      { title: "Read", detail: "Projection · lean results where suitable" },
      { title: "Separate", detail: "Interactive response / queued work" },
      { title: "Operate", detail: "Worker capacity · failures · cache demand" },
    ],
    decisions: [
      {
        decision: "Read results",
        choice: "Mongoose lean reads where suitable",
        alternative: "Hydrated documents for every read",
        reason:
          "Avoid document machinery when getters, setters and document methods are unnecessary. Keep hydration when behavior depends on it.",
      },
      {
        decision: "Independent I/O",
        choice: "Batching or controlled concurrency",
        alternative: "Serial round-trips",
        reason:
          "Reduce waiting between independent operations. Unbounded Promise.all can overload the connection pool; concurrency is a capacity decision.",
      },
      {
        decision: "Report generation",
        choice: "Asynchronous workers",
        alternative: "Work inside API handlers",
        reason:
          "Keep expensive generation away from interactive requests. Job state and failure handling must remain visible to callers.",
      },
      {
        decision: "Cache capacity",
        choice: "Size from observed demand",
        alternative: "Keep the inherited instance size",
        reason:
          "Use memory and traffic evidence over a representative window. Include burst behavior, eviction and recovery headroom.",
      },
    ],
    challenges: [
      {
        title: "Avoid universal performance rules",
        description:
          "A lean read is useful only when the caller does not require document behavior. I treated query shape and correctness as part of the same review.",
      },
      {
        title: "Expose hidden contention",
        description:
          "Independent work can run concurrently, but it still competes for finite resources. Pool size, worker capacity and request demand belong in the decision.",
      },
    ],
    considerations: [
      {
        title: "Reliability",
        description:
          "Background workers need bounded retries and duplicate-safe side effects. Moving code into a queue does not by itself make the operation reliable.",
      },
      {
        title: "Data & security",
        description:
          "Read projections should select only what the caller needs. Lean results do not replace authorization checks or change which data may be returned.",
      },
      {
        title: "Performance & cost",
        description:
          "Measure CPU, pool waiting, queue delay and cache behavior under a representative workload. A faster isolated query does not establish whole-system improvement.",
      },
    ],
    outcome:
      "The work established reusable practices for lighter reads, intentional concurrency, background processing and evidence-based cache sizing. The concrete examples here concern MongoDB/Mongoose and queues; they are not presented as PostgreSQL query-plan evidence.",
    lesson:
      "Performance defaults should make the safe path easier without hiding the conditions under which that default stops being correct.",
    evidence:
      "Professional platform work, summarized as a workload review. No public before/after dataset or query-plan benchmark accompanies this account; percentage improvements are not claimed.",
  },
  {
    slug: "video-streaming",
    brief: {
      responsibility: "Designed the media publishing and delivery architecture for a learning platform.",
      decision: "Separate encoding from durable storage and deliver adaptive HLS renditions through a CDN.",
      outcome: "An automated publishing path with multiple renditions, independent of application request capacity.",
    },
    category: "Media infrastructure · Content delivery",
    title: "Adaptive video for inconsistent connections.",
    summary:
      "Designing the path from source video to adaptive playback across bandwidth and device constraints.",
    role: "Platform & media delivery architecture",
    period: "2025",
    technologies: ["FFmpeg", "HLS", "AWS S3", "CloudFront", "Video.js"],
    problem:
      "Learning content has little value if a learner cannot start it on their existing device and connection. The publishing workflow also needs to turn source uploads into playable assets without repeated manual processing.",
    contribution:
      "I designed the upload-to-publish path around FFmpeg, HLS renditions, durable object storage and CDN delivery, balancing device compatibility with publishing effort and delivery cost.",
    constraints: [
      "Variable mobile bandwidth",
      "Older devices and decoder compatibility",
      "Publishing speed versus encoding efficiency",
      "Separation of temporary processing and durable content",
    ],
    flow: [
      { title: "Encode", detail: "FFmpeg · H.264 · 480p / 720p" },
      { title: "Package", detail: "HLS playlists · ten-second segments" },
      { title: "Deliver", detail: "S3 durable assets · CloudFront CDN" },
      { title: "Play", detail: "Video.js · adaptive rendition selection" },
    ],
    decisions: [
      {
        decision: "Delivery format",
        choice: "HLS",
        alternative: "DASH",
        reason:
          "A practical fit for the target mobile playback stack. Browser and player behavior still needs device testing.",
      },
      {
        decision: "Codec",
        choice: "H.264",
        alternative: "VP9 or H.265",
        reason:
          "Favor compatibility on older devices over maximum encoding efficiency. Hardware decode support is device-dependent.",
      },
      {
        decision: "Segment length",
        choice: "Ten seconds",
        alternative: "Shorter segments",
        reason:
          "Fewer segment requests, with a trade-off in seek granularity and adaptation speed. This is a workload choice, not a universal optimum.",
      },
      {
        decision: "Processing",
        choice: "FFmpeg fast preset",
        alternative: "Slower encoding presets",
        reason:
          "Favor publishing time over the best possible compression ratio. Storage and delivery cost remain part of the trade-off.",
      },
      {
        decision: "Storage",
        choice: "S3 with CDN delivery",
        alternative: "Serve from application storage",
        reason:
          "Separate media delivery from application capacity. Cache behavior, access controls and delivery charges still require attention.",
      },
    ],
    challenges: [
      {
        title: "Treat publishing as a workflow",
        description:
          "A video is ready when its renditions, segments and playlists can be consumed together. Cleanup of temporary processing files belongs after durable upload.",
      },
      {
        title: "Design for the actual device",
        description:
          "Codec compatibility and adaptive delivery were product-access decisions. Higher resolution is not useful when the learner cannot sustain its bitrate.",
      },
    ],
    considerations: [
      {
        title: "Reliability",
        description:
          "Partial uploads and missing segments are failure cases to validate. A published playlist should reference available objects; an encoding success alone is insufficient.",
      },
      {
        title: "Security",
        description:
          "Object-storage policy and content access must match the product's entitlement model. The architecture diagram does not establish whether signed delivery is deployed.",
      },
      {
        title: "Cost & performance",
        description:
          "Encoding time, rendition storage and CDN egress trade off against one another. Device and network testing is needed before making startup or buffering claims.",
      },
    ],
    outcome:
      "The architecture separates transient encoding from durable media storage and adaptive playback. It provides an automated publishing path and multiple renditions without putting video delivery on the application request path.",
    lesson:
      "Media architecture is an access decision: the encoding ladder and playback behavior determine who can use the learning content.",
    evidence:
      "Professional learning-platform work. The diagram and implementation choices are summarized from the existing portfolio account; no public playback benchmark or customer dataset is provided.",
  },
];

export function getStudy(slug: string): Study {
  const study = studies.find((item) => item.slug === slug);
  if (!study) throw new Error(`Unknown case study: ${slug}`);
  return study;
}
