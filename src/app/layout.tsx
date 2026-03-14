import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import Link from "next/link";
import MobileNav from "@/components/MobileNav";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import NoiseOverlay from "@/components/NoiseOverlay";
import LoadingScreen from "@/components/LoadingScreen";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "2nd Story — Intelligent Experiences",
    template: "%s — 2nd Story",
  },
  description: "We design and build AI products that feel effortless — strategy, design, and engineering with precision.",
  metadataBase: new URL("https://2ndstory.ai"),
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    title: "2nd Story — Intelligent Experiences",
    description: "We design and build AI products that feel effortless — strategy, design, and engineering with precision.",
    url: "https://2ndstory.ai",
    siteName: "2nd Story",
    images: [{ url: "/og.svg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "2nd Story — Intelligent Experiences",
    description: "We design and build AI products that feel effortless — strategy, design, and engineering with precision.",
    images: ["/og.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${geistMono.variable} ${inter.variable} antialiased h-full`}>
        <SmoothScrollProvider>
          <LoadingScreen />
          <CustomCursor />
          <ScrollProgress />
          <NoiseOverlay />
          <div className="min-h-screen flex flex-col">
            <header className="sticky top-0 z-50 bg-background/70 backdrop-blur-soft border-b border-border/60">
              <nav className="container-xl px-6 py-4 flex items-center justify-between">
                <Link href="/" className="text-[15px] font-semibold tracking-tight">2nd Story</Link>
                <div className="hidden md:flex items-center gap-7 text-sm text-[color:var(--muted)]">
                  <a href="#services" className="hover:text-foreground transition-colors duration-200">Services</a>
                  <a href="#work" className="hover:text-foreground transition-colors duration-200">Work</a>
                  <a href="#about" className="hover:text-foreground transition-colors duration-200">About</a>
                  <a href="#contact" className="hover:text-foreground transition-colors duration-200">Contact</a>
                </div>
                <a href="#contact" className="hidden md:inline-block text-sm rounded-full px-4 py-2 border border-border hover:border-foreground hover:bg-white/5 transition-all duration-200">Let&apos;s talk</a>
                <MobileNav />
              </nav>
            </header>
            <main className="flex-1">{children}</main>
            <footer className="border-t border-border/80">
              <div className="container-xl px-6 py-10 text-sm text-[color:var(--muted)] flex flex-col sm:flex-row items-center justify-between gap-4">
                <span>© {new Date().getFullYear()} 2nd Story. All rights reserved.</span>
                <div className="flex items-center gap-6">
                  <a href="#privacy" className="hover:text-foreground transition-colors duration-200">Privacy</a>
                  <a href="#terms" className="hover:text-foreground transition-colors duration-200">Terms</a>
                  <div className="flex items-center gap-4">
                    <a aria-label="Twitter" href="https://x.com/" className="hover:text-foreground transition-colors duration-200">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M20.9 3H17.7l-5.2 7.2L7.2 3H3l7.1 10.2L3.3 21h3.2l5.4-7.5 5.1 7.5h4.2l-7.4-10.6L20.9 3Z" fill="currentColor"/></svg>
                    </a>
                    <a aria-label="LinkedIn" href="https://linkedin.com/" className="hover:text-foreground transition-colors duration-200">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M4.98 3.5C3.88 3.5 3 4.38 3 5.48c0 1.09.88 1.98 1.98 1.98 1.09 0 1.98-.89 1.98-1.98C6.96 4.38 6.07 3.5 4.98 3.5ZM3.5 8.5h3v12h-3v-12Zm6 0h2.88v1.64h.04c.4-.72 1.38-1.48 2.84-1.48 3.04 0 3.6 2 3.6 4.6v7.24h-3v-6.42c0-1.54-.03-3.52-2.15-3.52-2.16 0-2.49 1.68-2.49 3.4v6.54h-3v-12Z" fill="currentColor"/></svg>
                    </a>
                    <a aria-label="GitHub" href="https://github.com/" className="hover:text-foreground transition-colors duration-200">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.11.8-.25.8-.56v-2c-3.26.7-3.95-1.4-3.95-1.4-.53-1.36-1.3-1.73-1.3-1.73-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.77 2.72 1.26 3.38.96.11-.76.41-1.26.75-1.55-2.6-.3-5.34-1.3-5.34-5.79 0-1.28.46-2.33 1.2-3.15-.12-.3-.52-1.53.11-3.2 0 0 .99-.32 3.25 1.2a11.3 11.3 0 0 1 5.92 0c2.26-1.52 3.25-1.2 3.25-1.2.63 1.67.23 2.9.11 3.2.75.82 1.2 1.87 1.2 3.15 0 4.5-2.75 5.48-5.36 5.78.43.36.81 1.07.81 2.17v3.22c0 .31.21.68.81.56A11.5 11.5 0 0 0 12 .5Z" fill="currentColor"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
