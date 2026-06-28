import { SectionLabel } from "@/components/ui/SectionLabel";
import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";
import { ArchDiagram } from "@/components/case-study/ArchDiagram";
import { DecisionTable } from "@/components/case-study/DecisionTable";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Video Streaming & HLS Pipeline | Case Study",
  description: "Built a reliable MP4 to HLS pipeline for scaleable video content delivery with multi-resolution adaptive bitrate streaming and S3 integration.",
};

const diagram = `
  Source Video (MP4)
       │
       ▼
  FFmpeg Processing Pipeline
  ├── Resolution: 480p (854×480) & 720p (1280×720)
  ├── Codec: libx264, preset fast, CRF 23
  ├── Segmentation: HLS (10s segments)
  └── Output: .m3u8 playlist + .ts segments
       │
       ▼
  AWS S3 Upload Pipeline
  ├── Master Playlist → s3://bucket/video_library/{name}/final.m3u8
  ├── Video Segments → s3://bucket/video_library/{name}/{name}_001.ts
  └── Auto-cleanup of ephemeral storage
       │
       ▼
  CloudFront CDN 
       │
       ▼
  Client Device (Video.js player)
`;

const decisions = [
  { decision: "Protocol", choice: "HLS", alternative: "DASH", reason: "Universal iOS/Android support, simpler CDN caching" },
  { decision: "Video Codec", choice: "H.264 (libx264)", alternative: "VP9 / H.265", reason: "Guaranteed hardware decoding on older mobile devices" },
  { decision: "Segment Duration", choice: "10s", alternative: "2s / 30s", reason: "Optimal balance between seek granularity and manifest overhead" },
  { decision: "Storage", choice: "AWS S3 + CDN", alternative: "EFS / Block Storage", reason: "Cost efficiency, seamless CloudFront integration, infinite scaling" },
  { decision: "FFmpeg Preset", choice: "fast", alternative: "medium / slow", reason: "Prioritized real-time upload-to-publish processing speed" },
  { decision: "Bitrate Strategy", choice: "Multi-resolution ABR", alternative: "Single stream", reason: "Adaptive delivery for highly variable emerging market network conditions" },
];

export default function CaseStudy() {
  return (
    <article className="max-w-[800px] mb-24">
      <SectionLabel command="cat ./meta.json" />
      <CaseStudyHero 
        title="Video Streaming & HLS Pipeline"
        role="Backend Engineer"
        stack={["Node.js", "FFmpeg", "AWS S3", "Express", "HLS", "Video.js"]}
        duration="2025"
      />

      <SectionLabel command="cat ./problem.md" />
      <div className="text-muted leading-relaxed mb-12 text-[0.95rem]">
        <p className="mb-4">
          Delivering rich media content at scale required a robust streaming solution capable of handling massive concurrent playback across highly variable and often degraded network conditions.
        </p>
        <p>
          Serving raw MP4s was unscalable and resulted in massive buffering. We needed an automated pipeline to ingest raw uploads, transcode them into adaptive bitrate streams, and distribute them efficiently via CDN.
        </p>
      </div>

      <SectionLabel command="cat ./architecture.md" />
      <ArchDiagram content={diagram} />

      <SectionLabel command="diff --decisions" />
      <DecisionTable decisions={decisions} />

      <SectionLabel command="cat ./outcome.md" />
      <div className="bg-[rgba(166,227,161,0.05)] border border-[rgba(166,227,161,0.2)] rounded-[6px] p-6 text-text">
        <ul className="list-disc pl-5 m-0 flex flex-col gap-2 text-[0.95rem]">
          <li>Reliable video delivery achieved at scale across highly variable network conditions.</li>
          <li>Automated Node.js/FFmpeg ingestion pipeline eliminated manual media processing.</li>
          <li>Adaptive Bitrate Streaming (ABR) eliminated buffering for low-bandwidth users while preserving 720p HD for fast connections.</li>
          <li>Zero-maintenance S3 storage integration with automated ephemeral cleanup prevents backend disk bloat.</li>
        </ul>
      </div>
    </article>
  );
}
