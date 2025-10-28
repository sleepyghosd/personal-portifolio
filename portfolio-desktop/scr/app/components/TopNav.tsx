"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TopNav() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `mx-4 text-lg font-semibold ${
      pathname === path ? "text-blue-400 underline" : "text-white hover:text-blue-300"
    }`;

  return (
    <nav className="w-full flex justify-center items-center border-b border-gray-700 py-4 bg-black/40 backdrop-blur">
      <Link href="/" className={linkClass("/")}>
        Home
      </Link>
      <Link href="/works" className={linkClass("/works")}>
        Works
      </Link>
    </nav>
  );
}
