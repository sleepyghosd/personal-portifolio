"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TopNav() {
  const pathname = usePathname();
  
  return (
    <nav style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <Link href="/" className={`top-tab ${pathname === "/" ? "active" : ""}`}>
        Home
      </Link>
      <Link href="/works" className={`top-tab ${pathname === "/works" ? "active" : ""}`}>
        Works
      </Link>
    </nav>
  );
}