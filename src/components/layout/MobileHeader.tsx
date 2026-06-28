"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/articles", label: "Articles" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="min-[860px]:hidden fixed top-0 left-0 right-0 bg-[rgba(30,30,46,0.92)] backdrop-blur-[12px] border-b border-border px-6 py-4 flex items-center justify-between z-[100]">
      <Link
        href="/"
        className="font-mono text-[1.1rem] font-bold text-text no-underline"
      >
        <span className="text-green font-bold">$ </span>
        jeevan
        <span className="text-accent">.</span>
        js
        <span className="text-green font-bold animate-[logo-blink_1s_step-end_infinite]">
          _
        </span>
      </Link>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-[38px] h-[38px] bg-bg-card border border-border rounded-[6px] flex flex-col justify-center items-center gap-1 cursor-pointer"
        aria-label="Menu"
      >
        <span
          className={`w-[18px] h-[2px] bg-text block transition-all duration-200 ${
            isOpen ? "translate-y-[6px] rotate-45" : ""
          }`}
        />
        <span
          className={`w-[18px] h-[2px] bg-text block transition-all duration-200 ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`w-[18px] h-[2px] bg-text block transition-all duration-200 ${
            isOpen ? "-translate-y-[6px] -rotate-45" : ""
          }`}
        />
      </button>

      {isOpen && (
        <nav className="absolute top-full left-0 right-0 bg-bg-card border-b border-border px-6 py-4 flex flex-col gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`font-mono text-[0.85rem] no-underline py-2 border-b border-border last:border-b-0 transition-colors duration-150 ${
                  isActive ? "text-text" : "text-muted hover:text-text"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
