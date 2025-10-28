import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    content:
      "System Info: Running Next.js 14 with Tailwind CSS and API routes. Designed for a desktop-like experience.",
  });
}
