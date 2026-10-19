import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import "./globals.css";
import "./personal.css";
import "./creative.css";
import "./notebook-pages.css";
import "./career.css";
import "./consulting.css";
import { LeftPanel } from "@/components/layout/LeftPanel";
import { MobileHeader } from "@/components/layout/MobileHeader";
import { profile } from "@/content/portfolio";
import { BrandMark } from "@/components/ui/BrandMark";
export const metadata: Metadata = {
  metadataBase: new URL("https://jeevansrivastava.com"),
  title: {
    default: `${profile.name} | ${profile.role}`,
    template: "%s | Jeevan Jyoti Srivastava",
  },
  description:
    "Engineering leadership and hands-on architecture across AI products, distributed systems and cloud infrastructure. Explore the work, decisions and experience of Jeevan Jyoti Srivastava.",
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
                <small>Engineering leadership · AI & cloud</small>
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
            <p>Engineering practice, system decisions and occasional notes.</p>
          </div>
          <nav aria-label="Elsewhere">
            <a href={profile.github}>GitHub ↗</a>
            <a href={profile.linkedin}>LinkedIn ↗</a>
            <Link href="/articles">Writing</Link>
            <Link href="/work-with-me">Advisory</Link>
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
              image: "https://jeevansrivastava.com/jeevan-srivastava.webp",
              jobTitle: profile.currentRole,
              worksFor: { "@type": "Organization", name: profile.company },
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
