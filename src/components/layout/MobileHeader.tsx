"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import { navLinks } from "./LeftPanel";
export function MobileHeader() {
  const pathname = usePathname();
  const ref = useRef<HTMLDetailsElement>(null);
  return (
    <details
      className="mobile-menu"
      ref={ref}
      onKeyDown={(event) => {
        if (event.key === "Escape" && ref.current) {
          ref.current.open = false;
          ref.current.querySelector("summary")?.focus();
        }
      }}
    >
      <summary aria-label="Navigation menu">
        Menu <span aria-hidden="true">＋</span>
      </summary>
      <nav aria-label="Mobile primary">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            aria-current={pathname.startsWith(link.href) ? "page" : undefined}
            onClick={() => {
              if (ref.current) ref.current.open = false;
            }}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </details>
  );
}
