import { SectionLabel } from "@/components/ui/SectionLabel";
import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";
import { ArchDiagram } from "@/components/case-study/ArchDiagram";
import { DecisionTable } from "@/components/case-study/DecisionTable";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learning Delivery Under Unreliable Connectivity | Case Study",
  description: "How educational video delivery was designed for variable bandwidth, older devices, and the operational reality of publishing content at scale.",
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
        title="Designing Learning Delivery for Unreliable Connectivity"
        role="Platform & Media Delivery Architect"
        stack={["Node.js", "FFmpeg", "AWS S3", "Express", "HLS", "Video.js"]}
        duration="2025"
      />

      <SectionLabel command="cat ./mandate.md" />
      <div className="text-muted leading-relaxed mb-12 text-[0.95rem]">
        <p className="mb-4">
          Rich learning media has limited value when learners cannot start it reliably or when it fails on the devices they already own. The challenge was not simply to transcode video; it was to make learning delivery resilient across inconsistent bandwidth and device capability.
        </p>
        <p>
          I established an operating path from upload to publish that balanced learner access, publishing speed, delivery cost, and long-term supportability for the content and platform teams.
        </p>
      </div>

      <SectionLabel command="cat ./delivery-operating-model.md" />
      <ArchDiagram content={diagram} />

      <SectionLabel command="diff --decisions" />
      <DecisionTable decisions={decisions} />

      <SectionLabel command="cat ./capability-created.md" />
      <div className="bg-[rgba(166,227,161,0.05)] border border-[rgba(166,227,161,0.2)] rounded-[6px] p-6 text-text">
        <ul className="list-disc pl-5 m-0 flex flex-col gap-2 text-[0.95rem]">
          <li>Created a delivery model that prioritizes learner access across variable bandwidth and device conditions.</li>
          <li>Established an automated upload-to-publish path, removing manual media processing from the content workflow.</li>
          <li>Made adaptive delivery a product-access decision: lower-bandwidth learners receive a viable stream while faster connections retain higher quality.</li>
          <li>Separated durable media storage from transient processing so the platform can scale without accumulating local operational debt.</li>
        </ul>
      </div>
    </article>
  );
}
