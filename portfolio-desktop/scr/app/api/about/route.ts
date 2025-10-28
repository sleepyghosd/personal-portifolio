import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    content:
      "With experience in Python, JavaScript, C#, HTML, and CSS, Casper is now in the 3rd semester at Fontys ICT college.",
  });
}
