"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export const navLinks = [
  { href: "/case-studies", label: "Case studies" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];
// Retains the existing shared navigation component; now a horizontal desktop nav.
export function LeftPanel() {
  const pathname = usePathname();
  return (
    <nav className="desktop-nav" aria-label="Primary">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          aria-current={pathname.startsWith(link.href) ? "page" : undefined}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
