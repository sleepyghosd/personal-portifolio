import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    content:
      "Proficient with Python, JavaScript, C#, HTML, and CSS. Experienced in front-end and back-end integration using modern frameworks.",
  });
}
