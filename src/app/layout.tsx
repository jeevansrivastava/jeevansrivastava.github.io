import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LeftPanel } from "@/components/layout/LeftPanel";
import { MobileHeader } from "@/components/layout/MobileHeader";
import { GlobalBootSequence } from "@/components/layout/GlobalBootSequence";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Jeevan Jyoti Srivastava | Staff Backend Engineer",
  description:
    "Portfolio of Jeevan Jyoti Srivastava — Staff Backend Engineer specializing in AI Infrastructure, Distributed Systems, Cloud Architecture, and Engineering Leadership.",
  keywords:
    "Jeevan Jyoti Srivastava, Staff Backend Engineer, AI Infrastructure, Distributed Systems, Cloud Architecture, Node.js, Python, PostgreSQL, AWS",
  authors: [{ name: "Jeevan Jyoti Srivastava" }],
  metadataBase: new URL("https://jeevansrivastava.com"),
  openGraph: {
    type: "website",
    url: "https://jeevansrivastava.com/",
    title: "Jeevan Jyoti Srivastava | Staff Backend Engineer",
    description:
      "I architect AI infrastructure, distributed systems, and cloud platforms that scale.",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@thejeevan",
    title: "Jeevan Jyoti Srivastava | Staff Backend Engineer",
    description:
      "I architect AI infrastructure, distributed systems, and cloud platforms that scale.",
    images: ["/og-image.png"],
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://jeevansrivastava.com/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-13F34CY3BV"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-13F34CY3BV');
          `}
        </Script>
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Jeevan Jyoti Srivastava",
              jobTitle: "Staff Backend Engineer",
              url: "https://jeevansrivastava.com/",
              sameAs: [
                "https://github.com/jeevanjsrivastava",
                "https://www.linkedin.com/in/jeevanjsrivastava",
                "https://x.com/thejeevan",
                "https://medium.com/@thejeevan",
              ],
              description:
                "I architect AI infrastructure, distributed systems, and cloud platforms that scale.",
            }),
          }}
        />
      </head>
      <body className="min-h-screen">
        <LeftPanel />
        <MobileHeader />
        <main className="main-layout">
          <GlobalBootSequence>
            {children}
            <footer className="pt-10 pb-6 flex items-center gap-2 font-mono text-xs text-dim">
              <span className="text-green">$</span>
              <span>echo &quot;© 2026 Jeevan Jyoti Srivastava&quot;</span>
            </footer>
          </GlobalBootSequence>
        </main>
      </body>
    </html>
  );
}
