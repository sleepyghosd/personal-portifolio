import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    content:
      "Here you’ll find examples of past work — data visualizations, UI projects, and backend apps.",
  });
}
