import Link from "next/link";

interface ProjectCardProps {
  number: string;
  title: string;
  description: string;
  tags: string[];
  href?: string;
  fullWidth?: boolean;
}

export function ProjectCard({
  number,
  title,
  description,
  tags,
  href,
  fullWidth,
}: ProjectCardProps) {
  const content = (
    <>
      <div className="flex items-baseline gap-3 flex-wrap">
        <span className="font-mono text-[0.68rem] text-dim font-semibold">
          {number}
        </span>
        <h3 className="text-[0.97rem] font-semibold text-text flex-1">
          {title}
        </h3>
      </div>
      <p className="text-[0.85rem] text-muted leading-[1.75] flex-1">
        {description}
      </p>
      <div className="flex flex-wrap gap-1.5 mt-auto">
        {tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[0.67rem] px-2 py-0.5 bg-[rgba(166,227,161,0.07)] border border-[rgba(166,227,161,0.2)] rounded-[3px] text-green"
          >
            {tag}
          </span>
        ))}
      </div>
    </>
  );

  const className = `bg-transparent border border-dashed border-border rounded-[6px] p-7 transition-all duration-200 flex flex-col gap-3 hover:bg-[rgba(137,180,250,0.03)] hover:border-accent hover:-translate-y-0.5 ${
    fullWidth ? "col-span-full" : ""
  } ${href ? "cursor-pointer" : ""}`;

  if (href) {
    return (
      <Link href={href} className={`${className} no-underline`}>
        {content}
        <span className="font-mono text-[0.75rem] text-accent mt-1">
          Read Case Study →
        </span>
      </Link>
    );
  }

  return <div className={className}>{content}</div>;
}
