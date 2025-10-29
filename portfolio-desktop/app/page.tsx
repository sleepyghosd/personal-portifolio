"use client";

import { useState } from "react";
import Sidebar from "./components/Sidebar";
import SectionCard from "./components/SectionCard";

const SECTIONS: Record<string, string> = {
  about:
    "With experience in Python, JavaScript, C#, HTML, and CSS, Casper is now in the 3rd semester at Fontys ICT college.",
  "work-gallery":
    "Here you’ll find examples of past work — data visualizations, UI projects, and backend apps.",
  "code-experiences":
    "Proficient with Python, JavaScript, C#, HTML, and CSS. Experienced in front-end and back-end integration using modern frameworks.",
  "system-info":
    "System Info: Static Next.js 14 + Tailwind CSS v4 build (no API, no backend).",
};

export default function HomePage() {
  const [active, setActive] = useState("about");

  return (
    <div className="flex h-[calc(100vh-5rem)]">
      <aside className="w-1/5 border-r border-gray-700">
        <Sidebar active={active} setActive={setActive} />
      </aside>
      <section className="flex-1 flex items-center justify-center">
        <SectionCard
          title={active.replace("-", " ").toUpperCase()}
          content={SECTIONS[active]}
        />
      </section>
    </div>
  );
}
