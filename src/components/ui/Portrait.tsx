import Image from "next/image";
import { profile } from "@/content/portfolio";

export function Portrait() {
  return (
    <figure className="portrait portrait-card">
      <Image
        src="/jeevan-srivastava.webp"
        alt="Jeevan Jyoti Srivastava"
        width={465}
        height={465}
        loading="eager"
        className="portrait-image"
      />
      <figcaption>
        <span>{profile.name}</span>
        <small>{profile.currentRole} · {profile.company}</small>
      </figcaption>
    </figure>
  );
}
