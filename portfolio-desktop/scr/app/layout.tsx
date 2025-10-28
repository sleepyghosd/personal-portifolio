import type { Metadata } from "next";
import "./globals.css";
import TopNav from "@/components/TopNav"; 


export const metadata: Metadata = {
  title: "Portfolio Desktop",
  description: "Desktop-style portfolio built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative min-h-screen bg-black text-white overflow-hidden">
        <div className="fixed inset-0 bg-main-wallpaper bg-cover bg-center opacity-30 -z-10" />
        <div className="min-h-screen flex flex-col">
          <TopNav />
          <main className="flex-1 p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
