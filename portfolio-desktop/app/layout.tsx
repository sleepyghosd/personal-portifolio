import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import TopNav from "./components/TopNav";
import Sidebar from './components/Sidebar'

export const metadata: Metadata = {
  title: "Portfolio Desktop",
  description: 'My portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="desktop-wrap">
          <div className="desktop-frame">
            <header className="desktop-header">
              <div className="top-tabs">
                <TopNav />
              </div>
          <div className="home-icon" title="Contact" >
                <Link href="/contact" aria-label="Contact page" className="contact-link" >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 11.5L12 4l9 7.5" />
                    <path d="M9 21V12h6v9" />
                  </svg>
                </Link>
              </div>
            </header>

      
              <section style={{ flex: 1, minHeight: 0, overflow: "auto" }}>
                {/* keep your existing windows/sections rendering here */}
                <div style={{ display: "flex", gap: 12, flexDirection: "column" }}>
                  {children}
                </div>
              </section>
          </div>
        </div>
      </body>
    </html>
  );
}
