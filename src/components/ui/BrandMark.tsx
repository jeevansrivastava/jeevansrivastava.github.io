import Image from "next/image";

export function BrandMark({ className = "" }: { className?: string }) {
  return <Image src="/logo.svg" width={160} height={160} alt="" aria-hidden="true" className={`brand-mark ${className}`} />;
}
