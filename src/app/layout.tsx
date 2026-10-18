import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import "./globals.css";
import "./personal.css";
import "./creative.css";
import "./notebook-pages.css";
import "./career.css";
import { LeftPanel } from "@/components/layout/LeftPanel";
import { MobileHeader } from "@/components/layout/MobileHeader";
import { profile } from "@/content/portfolio";
import { BrandMark } from "@/components/ui/BrandMark";
export const metadata: Metadata = {
  metadataBase: new URL("https://jeevansrivastava.com"),
  title: {
    default: "Jeevan Jyoti Srivastava | Backend & AI Infrastructure",
    template: "%s | Jeevan Jyoti Srivastava",
  },
  description:
    "Hands-on engineering leadership in backend systems, AI infrastructure and cloud architecture. Explore architecture decisions, trade-offs and professional experience.",
  authors: [{ name: profile.name }],
  robots: "index, follow",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="notebook-site">
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <header className="site-header">
          <div className="header-inner">
            <Link
              href="/"
              className="identity"
              aria-label="Jeevan Jyoti Srivastava, home"
            >
              <BrandMark />
              <span>
                Jeevan Jyoti Srivastava
                <small>Engineering leadership · Backend & AI</small>
              </span>
            </Link>
            <LeftPanel />
            <MobileHeader />
          </div>
        </header>
        <main id="main-content" className="main-layout" tabIndex={-1}>
          {children}
        </main>
        <footer className="site-footer">
          <div>
            <Link href="/" className="footer-name">
              <BrandMark />
              Jeevan Jyoti Srivastava
            </Link>
            <p>My work, experience and occasional notes.</p>
          </div>
          <nav aria-label="Elsewhere">
            <a href={profile.github}>GitHub ↗</a>
            <a href={profile.linkedin}>LinkedIn ↗</a>
            <Link href="/articles">Writing</Link>
            <a href={`mailto:${profile.email}`}>Email ↗</a>
          </nav>
          <small>© 2026</small>
        </footer>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-13F34CY3BV"
          strategy="afterInteractive"
        />
        <Script
          id="ga-init"
          strategy="afterInteractive"
        >{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-13F34CY3BV');`}</Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: profile.name,
              jobTitle: profile.role,
              url: "https://jeevansrivastava.com",
              sameAs: [profile.github, profile.linkedin],
              knowsAbout: [
                "Backend engineering",
                "AI infrastructure",
                "Distributed systems",
                "Cloud architecture",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
