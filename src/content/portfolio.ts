export const profile = {
  name: "Jeevan Jyoti Srivastava",
  email: "hello@jeevansrivastava.com",
  github: "https://github.com/jeevansrivastava",
  linkedin: "https://www.linkedin.com/in/jeevanjsrivastava/",
  medium: "https://medium.com/@thejeevan",
  role: "Senior Engineering Manager",
  summary: "I lead engineering across backend platforms and AI products, staying hands-on with architecture, implementation and production operations.",
};

export interface Study {
  slug: string;
  category: string;
  title: string;
  summary: string;
  role: string;
  brief: { responsibility: string; decision: string; outcome: string };
  period?: string;
  context?: string;
  diagram?: string;
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
}

export const studies: Study[] = [
  {
    slug: "ai-voice-application",
    diagram: "/diagrams/ai-voice-application.svg",
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
          "Curriculum context should be bounded by the active lesson. Voice transcripts and learner progress require deliberate access and retention rules.",
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
  },
  {
    slug: "aws-cost-intelligence",
    diagram: "/diagrams/aws-cost-intelligence.svg",
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
          "Moving work to a queue needs retry limits and visibility into failed jobs.",
      },
      {
        title: "Security",
        description:
          "Load tests that follow authenticated journeys need test identities and controlled credentials. Use representative test data for repeatable load tests.",
      },
      {
        title: "Cost",
        description:
          "Right-sizing should follow representative demand and headroom requirements. Lower spend alone is not evidence of an adequate capacity margin.",
      },
    ],
    outcome:
      "The work replaced scan-heavy request behavior with cheaper lookups, separated heavy processing and established a repeatable path for capacity investigation.",
    lesson:
      "Capacity planning starts with what each request asks the system to do. More instances can hide an expensive request shape without correcting it.",
  },
  {
    slug: "database-performance",
    diagram: "/diagrams/database-performance.svg",
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
      "The work established reusable practices for lighter reads, intentional concurrency, background processing and evidence-based cache sizing.",
    lesson:
      "Performance defaults should make the safe path easier without hiding the conditions under which that default stops being correct.",
  },
  {
    slug: "video-streaming",
    diagram: "/diagrams/video-streaming.svg",
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
          "Object-storage policy and content access must match the product's entitlement model.",
      },
      {
        title: "Cost & performance",
        description:
          "Encoding time, rendition storage and CDN egress trade off against one another. Test startup time and buffering across the devices and networks learners use.",
      },
    ],
    outcome:
      "The architecture separates transient encoding from durable media storage and adaptive playback. It provides an automated publishing path and multiple renditions without putting video delivery on the application request path.",
    lesson:
      "Media architecture is an access decision: the encoding ladder and playback behavior determine who can use the learning content.",
  },
  {
    "slug": "subscription-entitlements",
    "category": "Subscriptions · Product infrastructure",
    "title": "Keeping access in step with a subscription.",
    "summary": "Coordinating payment events, plan changes and usage limits so product access follows a clear set of rules.",
    "role": "Backend & subscription engineering",
    "period": "2026",
    "technologies": [
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Drizzle",
      "Razorpay"
    ],
    "brief": {
      "responsibility": "Built subscription and entitlement workflows for a learning platform.",
      "decision": "Separate gateway events from access policy, with transactional payment updates and explicit grace-period rules.",
      "outcome": "Plan changes, usage quotas and refund eligibility resolved through shared backend rules."
    },
    "problem": "A subscription is more than a successful checkout. Payment confirmations can arrive more than once, upgrades can await mandate confirmation, and usage continues while a plan changes. The learning product needs a consistent answer to whether an account can start or continue a session.",
    "contribution": "I developed the subscription and entitlement workflows around those transitions: usage quotas, plan upgrades and downgrades, pause and resume, grace-period access and refund eligibility. Payment integration and product access meet at explicit backend state changes.",
    "constraints": [
      "Repeated gateway events for the same payment",
      "Account-level limits across multiple learners",
      "Pending upgrades while usage continues",
      "Refund decisions that depend on transaction history"
    ],
    "flow": [
      {
        "title": "Confirm",
        "detail": "Verify the gateway signature and find the recorded transaction"
      },
      {
        "title": "Apply",
        "detail": "Claim the pending payment and update subscription state in a transaction"
      },
      {
        "title": "Resolve",
        "detail": "Select the effective plan, grace window and usage allowance"
      },
      {
        "title": "Enforce",
        "detail": "Check session access and record account usage"
      }
    ],
    "decisions": [
      {
        "decision": "Payment processing",
        "choice": "A conditional transaction-state update",
        "alternative": "Apply every incoming payment notification",
        "reason": "Only the handler that claims a pending transaction applies its entitlement changes. Repeated notifications can be acknowledged without granting the same purchase again."
      },
      {
        "decision": "Access policy",
        "choice": "Resolve an effective plan on the backend",
        "alternative": "Let each client interpret payment status",
        "reason": "The subscription engine combines plan state, usage and grace expiry in one place. Clients consume the resulting allowance instead of recreating billing policy."
      },
      {
        "decision": "Upgrade grace",
        "choice": "A pending plan with an explicit expiry",
        "alternative": "Overwrite the current plan before confirmation",
        "reason": "Temporary access can follow the pending plan while preserving the existing subscription and usage history. Expiry remains part of every quota calculation."
      },
      {
        "decision": "Refund eligibility",
        "choice": "Deterministic rules over transaction history",
        "alternative": "Ad hoc checks in individual endpoints",
        "reason": "A separate rule engine returns eligibility, reason codes and time windows that can be tested independently of the payment gateway."
      }
    ],
    "challenges": [
      {
        "title": "Handle the same payment twice",
        "description": "Related gateway notifications can refer to one charge. The processing path checks recorded status, then conditionally claims the pending transaction inside the database transaction before applying changes."
      },
      {
        "title": "Change plans without losing usage",
        "description": "An upgrade affects what an account may use next; it should not erase what it has already consumed. Effective-plan selection and daily usage remain separate inputs to the access decision."
      }
    ],
    "considerations": [
      {
        "title": "Verification & reconciliation",
        "description": "Verify incoming payment signatures before processing. A payment that cannot be matched to an internal transaction needs investigation rather than an inferred entitlement."
      },
      {
        "title": "Time boundaries",
        "description": "Daily usage follows the product’s IST day, while grace and refund windows use explicit timestamps. Checks at expiry are as important as the ordinary active-subscription path."
      },
      {
        "title": "Recovery",
        "description": "Payment failure, pause, resume and refund are distinct state transitions. Their effects on access need to remain understandable to both the learner and the support team."
      }
    ],
    "outcome": "The implementation provides shared backend rules for account access, quotas, plan changes and refund eligibility. Transactional payment handling and explicit grace expiry make the relationship between a purchase and its product access inspectable.",
    "lesson": "A subscription system earns trust when its access rules remain understandable through failure, delay and change."
  },
  {
    "slug": "speech-assessment",
    "category": "Speech assessment",
    "title": "Turning a spoken attempt into useful feedback.",
    "summary": "Connecting audio preparation, transcription and word alignment so reading feedback stays attached to the learner’s attempt.",
    "role": "Backend & speech-pipeline engineering",
    "context": "Speech assessment",
    "technologies": [
      "TypeScript",
      "Node.js",
      "Google Speech-to-Text",
      "FFmpeg",
      "PostgreSQL"
    ],
    "brief": {
      "responsibility": "Worked on the backend flow from recorded speech to stored learner feedback.",
      "decision": "Align the transcript with the expected passage before calculating word-level feedback.",
      "outcome": "A structured assessment record with expected words, matched transcript words and per-word feedback."
    },
    "problem": "Learners skip words, insert words and restart phrases while reading aloud. Comparing a transcript with the expected passage by position can shift every subsequent match. The backend also has to handle different recording formats and preserve the result against the correct learner and activity.",
    "contribution": "My work connects audio ingestion, transcription and assessment output in a learning platform. The flow prepares recordings for speech recognition, aligns the resulting words with the expected passage, applies scoring rules and stores the analysis with learner context.",
    "constraints": [
      "Different recording formats and microphone quality",
      "Missing or extra words in spoken attempts",
      "Multiple assessment paths with different response formats",
      "Transcription failures and variable processing time"
    ],
    "flow": [
      {
        "title": "Prepare",
        "detail": "Validate the recording and convert it to a consistent audio format"
      },
      {
        "title": "Transcribe",
        "detail": "Run speech recognition and capture the resulting transcript"
      },
      {
        "title": "Align",
        "detail": "Match expected and spoken words with gaps for omissions"
      },
      {
        "title": "Report",
        "detail": "Calculate word feedback and store the learner’s analysis"
      }
    ],
    "decisions": [
      {
        "decision": "Audio preparation",
        "choice": "Normalise the recording before recognition",
        "alternative": "Pass every source format through unchanged",
        "reason": "A consistent PCM audio input makes the speech-recognition boundary explicit. Conversion is a separate processing stage with its own runtime and failure modes."
      },
      {
        "decision": "Word alignment",
        "choice": "Sequence alignment with insertion and omission handling",
        "alternative": "Compare words at matching positions",
        "reason": "Skipping one word should not shift the rest of the passage’s feedback. Alignment retains expected-word positions while accounting for missing and extra transcript words."
      },
      {
        "decision": "Assessment output",
        "choice": "Map results into a shared word-feedback structure",
        "alternative": "Expose each engine’s raw response to the client",
        "reason": "Expected words, transcribed words, scores and match information can be handled consistently by storage and presentation code."
      }
    ],
    "challenges": [
      {
        "title": "Separate recognition from scoring",
        "description": "A transcription mismatch may come from the recording, recognition or the spoken attempt. Keeping alignment and scoring as separate steps makes their behaviour easier to inspect and adjust."
      },
      {
        "title": "Keep a failed attempt understandable",
        "description": "The custom path checks transcription readiness and returns an explicit failure when recognition cannot complete. Analysis needs learner and activity context so support can identify the affected attempt."
      }
    ],
    "considerations": [
      {
        "title": "Latency",
        "description": "Upload, audio conversion, recognition, alignment and persistence contribute different delays. Timing those stages separately is more useful than treating the entire endpoint as a model call."
      },
      {
        "title": "Feedback quality",
        "description": "Word similarity and phonetic matching support reading feedback. Assessment quality also depends on the expected passage, recording conditions and the behaviour of the selected recognition engine."
      },
      {
        "title": "Data handling",
        "description": "Recordings, transcripts and learner identifiers need consistent access and retention rules across analysis storage and downstream reporting."
      }
    ],
    "outcome": "The assessment flow connects recorded speech with expected-word alignment, structured feedback and stored learner analysis. Its stages provide concrete places to investigate recognition errors, score behaviour and processing delays.",
    "lesson": "Useful speech feedback depends on preserving the relationship between what was expected, what was heard and how the result was calculated."
  },
  {
    "slug": "media-asset-workflows",
    "category": "Media assets · Upload & delivery",
    "title": "An upload is only the start of a media workflow.",
    "summary": "Connecting large-file uploads with media records, topic metadata, sharing and downstream learning experiences.",
    "role": "Backend & media-platform engineering",
    "context": "Media asset infrastructure",
    "technologies": [
      "TypeScript",
      "Node.js",
      "Amazon S3",
      "PostgreSQL",
      "Redis",
      "BullMQ"
    ],
    "brief": {
      "responsibility": "Worked on media ingestion, metadata and integrations across the learning platform.",
      "decision": "Separate object transfer from media records, sharing relationships and downstream processing.",
      "outcome": "A media workflow that connects uploaded objects with topics, users, classes and learning-product integrations."
    },
    "problem": "Saving a file does not make it usable in a learning product. Large uploads need tracked completion, media needs searchable context, and a submission may belong to a user, class or school. Other services then need the same asset for galleries, showcases or video processing.",
    "contribution": "My work spans presigned upload workflows, media records, topic associations and sharing relationships. I connected those records with downstream services so uploaded media can participate in product workflows beyond the storage bucket.",
    "constraints": [
      "Large files transferred in multiple parts",
      "Upload progress and stored media have different lifecycles",
      "Media shared across user, class and school contexts",
      "Processing and product integrations complete asynchronously"
    ],
    "flow": [
      {
        "title": "Initiate",
        "detail": "Create the upload session and issue presigned part URLs"
      },
      {
        "title": "Complete",
        "detail": "Reconcile uploaded parts and complete the storage object"
      },
      {
        "title": "Organise",
        "detail": "Attach media records, topics and sharing relationships"
      },
      {
        "title": "Connect",
        "detail": "Update galleries and showcases or request downstream media processing"
      }
    ],
    "decisions": [
      {
        "decision": "File transfer",
        "choice": "Presigned multipart object uploads",
        "alternative": "Proxy the entire file through one application request",
        "reason": "Clients can send parts to storage while the backend manages upload identity, metadata and completion. Part tracking and session expiry become explicit responsibilities."
      },
      {
        "decision": "Media identity",
        "choice": "Separate the storage object from its product metadata",
        "alternative": "Treat the storage URL as the complete media record",
        "reason": "Topics, user tags, class associations and sharing records let the same asset serve different product contexts without embedding those relationships in a filename."
      },
      {
        "decision": "Integration work",
        "choice": "Queue handlers and service boundaries",
        "alternative": "Bundle upload, processing and every product update into one request",
        "reason": "Upload-state updates and downstream actions have separate failure paths. Boundaries make it possible to track which part of the workflow still needs attention."
      }
    ],
    "challenges": [
      {
        "title": "Know what has actually uploaded",
        "description": "Multipart completion needs the uploaded part numbers and ETags. The application tracks upload identity and status alongside the storage operation, rather than inferring completion from a client progress indicator."
      },
      {
        "title": "Carry context across services",
        "description": "A media record may feed a showcase, a submission gallery or an HLS conversion request. Stable media references and explicit entity associations keep those integrations connected to the original asset."
      }
    ],
    "considerations": [
      {
        "title": "Access",
        "description": "Authenticated requests and sharing relationships need to agree on which user, class or school can retrieve an asset. Presigned transfer URLs also need appropriate expiry and scope."
      },
      {
        "title": "Partial completion",
        "description": "Storage completion, metadata updates and downstream processing can fail independently. Upload status and error records are necessary for finding the stage that needs recovery."
      },
      {
        "title": "Lifecycle",
        "description": "Upload sessions, temporary files and shared assets have different retention needs. Cleanup must account for media still referenced by learning activities."
      }
    ],
    "outcome": "The media platform connects multipart uploads to application media records, topic metadata and sharing relationships, with integrations into showcases, submissions and media processing. The design gives uploaded files a usable identity across the learning platform.",
    "lesson": "A useful media platform manages the asset’s place in the product as carefully as the bytes in storage."
  },
  {
    "slug": "curriculum-content-platform",
    "category": "Curriculum · Content operations",
    "title": "From a content draft to the right classroom.",
    "summary": "Structuring curriculum content, scheduling publication and tracking file handoffs across the content-production workflow.",
    "role": "Backend & content-platform engineering",
    "context": "Curriculum publishing",
    "technologies": [
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "Google Drive"
    ],
    "brief": {
      "responsibility": "Worked on curriculum authoring, publishing and content-operation services.",
      "decision": "Separate draft content, reusable curriculum structures and publication scheduling.",
      "outcome": "Content blocks, learning objectives and books connected to scheduled delivery and versioned production-file handoffs."
    },
    "problem": "Curriculum content moves through several forms before a learner sees it: authoring drafts, reusable units, book structures and scheduled activities. Content teams also exchange source files and PDFs. These workflows need consistent identities and clear transitions between editing, publication and distribution.",
    "contribution": "My work covers content blocks and units, learning-objective associations, book structures and publishing workflows. The content platform also supports versioned file check-in and check-out, connecting editorial activity with the files used in content production.",
    "constraints": [
      "Draft edits must remain distinct from published content",
      "Content reused across books, units and learning objectives",
      "Publication times and school targeting",
      "Large production files exchanged through versioned handoffs"
    ],
    "flow": [
      {
        "title": "Author",
        "detail": "Create draft blocks, learning objectives and content units"
      },
      {
        "title": "Assemble",
        "detail": "Connect units with books, topics and delivery targets"
      },
      {
        "title": "Publish",
        "detail": "Apply publication timing and advance content status"
      },
      {
        "title": "Distribute",
        "detail": "Notify consuming services and record versioned file activity"
      }
    ],
    "decisions": [
      {
        "decision": "Authoring state",
        "choice": "Separate draft and committed content records",
        "alternative": "Apply every edit directly to the live content object",
        "reason": "Authors can save work in progress while the committed content retains its own identity. Completing an edit also requires resolving the associated draft records."
      },
      {
        "decision": "Curriculum structure",
        "choice": "Reusable blocks, units and learning-objective relationships",
        "alternative": "Store each activity as an isolated document",
        "reason": "Explicit relationships support book assembly and reuse. They also make updates a dependency problem that the publishing workflow must handle deliberately."
      },
      {
        "decision": "Publication timing",
        "choice": "Scheduled state transitions with an overdue-content path",
        "alternative": "Require an operator to publish at the exact release time",
        "reason": "The service schedules upcoming content and directly publishes an already-due item before selecting the next publication. Timing becomes part of the backend workflow."
      },
      {
        "decision": "Production-file handoffs",
        "choice": "Versioned check-in, check-out and activity records",
        "alternative": "Pass around untracked shared-file links",
        "reason": "Content teams can identify the SKU, file version and person associated with a handoff. Resumable upload sessions handle large source archives separately from version metadata."
      }
    ],
    "challenges": [
      {
        "title": "Keep related content coherent",
        "description": "A content block can participate in multiple units and book structures. Draft completion, duplicate-name handling and downstream sync need to preserve those relationships."
      },
      {
        "title": "Connect editorial files with product content",
        "description": "Source archives and PDFs follow a file-production lifecycle, while blocks and units follow an application lifecycle. Version and activity records give each handoff a traceable context."
      }
    ],
    "considerations": [
      {
        "title": "Scheduling",
        "description": "Publication depends on explicit dates and the next scheduled item. Restart and overdue-content paths need to keep the schedule moving without relying on an editor’s browser session."
      },
      {
        "title": "Content changes",
        "description": "Reusable content needs clear ownership and predictable downstream sync. Consumers should be able to identify the content or book that changed."
      },
      {
        "title": "File versions",
        "description": "A check-in records a new version and upload session; check-out records retrieval activity. Concurrent check-ins and expired upload sessions require deliberate handling in the production workflow."
      }
    ],
    "outcome": "The content platform connects structured curriculum authoring with publication timing, consuming-service notifications and versioned source-file activity. Content teams can work with drafts, reusable learning structures and production files through explicit backend workflows.",
    "lesson": "Content operations become easier to manage when editing, publishing and file handoffs each have a clear identity and state."
  },
  {
    "slug": "investment-workflows",
    "category": "Investment infrastructure",
    "title": "Keeping an investment journey connected across services.",
    "summary": "Connecting investor accounts, bank verification, purchase orders, mandates and reports through a shared backend.",
    "role": "Backend & integration engineering",
    "context": "Investor accounts & transactions",
    "technologies": [
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "TypeORM",
      "BullMQ",
      "Fintech Primitives"
    ],
    "brief": {
      "responsibility": "Worked on backend workflows connecting investor accounts with investment-provider services.",
      "decision": "Keep local account and order references alongside provider identifiers and process bank verification through a queue.",
      "outcome": "Investor workflows connected across verification, purchase orders, recurring plans and account reports."
    },
    "problem": "An investment journey crosses several systems before an order is usable: investor details, a bank account, verification, a purchase request and its payment or mandate. Each provider operation has its own identifier and state. The product needs to keep those relationships attached to the correct investor.",
    "contribution": "My work covers backend services for investment accounts, bank verification, purchase orders and recurring investment plans, along with investor-report integration. I focused on connecting provider responses with the application’s account and order records.",
    "constraints": [
      "Provider identifiers differ from local account and order identifiers",
      "Verification and order status can change after the initiating request",
      "Basket purchases expand into multiple fund orders",
      "Reports and bank accounts belong to specific investors"
    ],
    "flow": [
      {
        "title": "Onboard",
        "detail": "Connect investor details, investment accounts and bank records"
      },
      {
        "title": "Verify",
        "detail": "Queue bank verification and save its status and provider response"
      },
      {
        "title": "Transact",
        "detail": "Create purchase orders or recurring plans with local and provider references"
      },
      {
        "title": "Track",
        "detail": "Update order state and retrieve reports for the owning investor"
      }
    ],
    "decisions": [
      {
        "decision": "Provider integration",
        "choice": "Local records linked to provider identifiers",
        "alternative": "Pass provider responses straight through without application records",
        "reason": "Orders and accounts remain traceable through local user relationships, provider references and saved responses. That context helps connect later status updates to the originating request."
      },
      {
        "decision": "Bank verification",
        "choice": "Queued verification with stored status",
        "alternative": "Make account creation wait for the entire verification workflow",
        "reason": "Verification can run separately from account creation, with bounded retry settings and recorded failure details. A saved bank record and a verified bank record remain different states."
      },
      {
        "decision": "Investment baskets",
        "choice": "Expand allocations into individual provider orders",
        "alternative": "Represent a multi-fund basket as one opaque transaction",
        "reason": "Per-fund orders preserve fund identifiers, amounts and responses. The product must then account for each order’s state when presenting the basket."
      },
      {
        "decision": "Investor reports",
        "choice": "Check account ownership before requesting reports",
        "alternative": "Trust an investment-account identifier supplied by the client",
        "reason": "Holdings, capital gains and returns reports are requested in the authenticated investor’s account context."
      }
    ],
    "challenges": [
      {
        "title": "Connect asynchronous state changes",
        "description": "Provider acceptance, payment confirmation and order completion happen at different points. The application keeps provider references and order status so those transitions can be followed without treating the initial request as the entire journey."
      },
      {
        "title": "Handle recurring-plan changes",
        "description": "A recurring investment includes plan settings, installments and mandate relationships. Updating or cancelling a plan needs to address the provider operation and the application’s view of that plan."
      }
    ],
    "considerations": [
      {
        "title": "Partial failures",
        "description": "A basket can involve several provider calls. Individual responses and failures need to remain visible so a retry or support action can target the affected order."
      },
      {
        "title": "Sensitive account data",
        "description": "Investor, bank and identity data require scoped access and deliberate handling across storage, provider requests and operational logs."
      },
      {
        "title": "State reconciliation",
        "description": "Provider status and local records can diverge after a timeout or delayed update. Stable references are essential for investigating the actual state before taking another action."
      }
    ],
    "outcome": "The backend connects investor-account services with queued bank verification, purchase and basket orders, recurring-plan operations and investor reports. Local records preserve the relationships needed to follow these workflows across provider boundaries.",
    "lesson": "Integration work becomes product work when the user needs one coherent journey across several independently changing systems."
  },
  {
    "slug": "classroom-video-export",
    "category": "Classroom authoring & export",
    "title": "Taking an interactive classroom beyond the browser.",
    "summary": "Adapting classroom authoring and video-export workflows so scenes, narration and assets can become a rendered lesson.",
    "role": "Product integration & export engineering",
    "context": "Classroom authoring & video export",
    "technologies": [
      "Next.js",
      "TypeScript",
      "Hyperframes",
      "Chromium",
      "FFmpeg"
    ],
    "brief": {
      "responsibility": "Integrated classroom editing with video export, resolving timeline, asset and rendering issues.",
      "decision": "Compile classroom scenes into a timeline and self-contained render package, then run MP4 rendering in a separate service.",
      "outcome": "An export path with scene and narration timing, packaged assets, asynchronous render progress and downloadable output."
    },
    "problem": "An interactive classroom can coordinate slides, narration, cursor actions and media while it runs in a browser. Exporting it to video requires those actions to become an explicit timeline, with assets and geometry that the renderer can reproduce outside the live classroom.",
    "contribution": "I worked on classroom editor and video-export integration. I resolved mismatches between scene data and export inputs, adjusted timeline and asset handling, and fixed rendering configuration so the authoring and export workflows could work together.",
    "constraints": [
      "Live classroom state must become an explicit export timeline",
      "Narration duration affects scene and action timing",
      "Assets need to remain available outside the authoring session",
      "Chromium and FFmpeg rendering have different runtime needs from the web app"
    ],
    "flow": [
      {
        "title": "Collect",
        "detail": "Read classroom scenes, actions, narration and referenced assets"
      },
      {
        "title": "Compile",
        "detail": "Normalise timing and geometry into a video timeline"
      },
      {
        "title": "Package",
        "detail": "Emit a self-contained Hyperframes project and collect its assets"
      },
      {
        "title": "Render",
        "detail": "Submit the package, poll job progress and download the completed MP4"
      }
    ],
    "decisions": [
      {
        "decision": "Export representation",
        "choice": "An intermediate video timeline",
        "alternative": "Capture the live classroom directly as it runs",
        "reason": "A timeline makes scene duration, narration, actions and assets explicit before rendering. Compilation passes can handle normalization and geometry separately from frame capture."
      },
      {
        "decision": "Asset delivery",
        "choice": "A self-contained render project",
        "alternative": "Depend on the authoring browser’s live URLs and state",
        "reason": "Collecting the render inputs into a package gives the rendering process a defined set of files. The same package can also be downloaded for local rendering."
      },
      {
        "decision": "Rendering runtime",
        "choice": "A separate asynchronous render service",
        "alternative": "Run Chromium and FFmpeg inside a normal Next.js request",
        "reason": "Frame capture and encoding are long-running, resource-intensive work. Submission, progress polling, cancellation and output retrieval fit a job lifecycle better than a single request."
      },
      {
        "decision": "Editor and export compatibility",
        "choice": "Align scene types, normalization and settings across both workflows",
        "alternative": "Assume independently developed editor and export changes fit together unchanged",
        "reason": "The editor and renderer need to interpret the same scene consistently. Compatibility fixes connect editing behaviour, scene normalization and export settings so a change in one workflow does not leave the other with incompatible inputs."
      }
    ],
    "challenges": [
      {
        "title": "Keep narration and visuals together",
        "description": "Audio duration, action timing and scene boundaries all influence the rendered lesson. Fixes in timeline compilation need to preserve their relationship rather than adjust one duration in isolation."
      },
      {
        "title": "Keep exports consistent with the editor",
        "description": "Geometry, assets and scene normalization cross the authoring and rendering boundary. Integration fixes addressed cases where the classroom representation and export inputs did not line up."
      }
    ],
    "considerations": [
      {
        "title": "Rendering resources",
        "description": "Render jobs need queue limits, bounded concurrency and deadlines. Uploaded project archives also need extraction limits before their contents reach the rendering process."
      },
      {
        "title": "Job lifecycle",
        "description": "Queued, running, failed, cancelled and successful jobs should remain distinguishable. Output download belongs to the successful state, with artifact cleanup governed by retention settings."
      },
      {
        "title": "Integration testing",
        "description": "Checks need to follow a lesson from edited scene data through timeline compilation and rendering, including narration timing, asset availability and the final frame geometry."
      }
    ],
    "outcome": "The integrated export path converts classroom content into a timeline and packaged render project, with an asynchronous service for MP4 output. My contributions focused on the integration and rendering fixes that connect the authoring experience to that export path.",
    "lesson": "Export is another product experience: it needs its own state model, resource boundaries and a faithful interpretation of what the author created."
  },
];

export const featuredStudies = studies.filter((study) => [
  "ai-voice-application", "aws-cost-intelligence", "database-performance", "video-streaming",
].includes(study.slug));

export function getStudy(slug: string): Study {
  const study = studies.find((item) => item.slug === slug);
  if (!study) throw new Error(`Unknown case study: ${slug}`);
  return study;
}
