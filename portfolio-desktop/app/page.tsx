"use client";

import { useState } from "react";
import Sidebar from "./components/Sidebar";
import FloatingWindow from "./components/FloatingWindow";
import WorkGallery from "./components/WorkGallery";
import CodeExperience from "./components/CodeExperience";

const SECTIONS: Record<string, string> = {
  about:
    "With experience in Python, JavaScript, C#, HTML, and CSS, i am now in the 3rd semester at Fontys ICT college.",
  "work-gallery":
    "Work gallery - select from the sidebar to view the gallery.",
  "code-experiences":
    "Proficient with Python, JavaScript, C#, HTML, and CSS. Experienced in front-end and back-end integration using modern frameworks.",
  "system-info":
    "System Info: Static Next.js 14 + Tailwind CSS v4 build (no API, no backend).",
};

export default function HomePage() {
  const [active, setActive] = useState("about");
  const title = active.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div style={{ display: "flex", height: "100%", minHeight: 0 }}>
      <aside style={{ width: 220 }}>
        <Sidebar active={active} setActive={setActive} />
      </aside>

      <section style={{ flex: 1, padding: 18, boxSizing: "border-box", minHeight: 0 }}>
        {/* Show the gallery when "work-gallery" is active; otherwise show the floating content */}
        {active === "work-gallery" ? (
          <>
            {/* Large left column / main gallery window */}
            <FloatingWindow title="Work gallery" style={{ width: "100%", maxWidth: "100%" }}>
              {/* place the gallery inside the floating window; it will scroll continuously */}
              <WorkGallery
                height={120}
                speed={18}
                images={[
                  "/images/schreanshot1.png",
                  "/images/schreanshot2.png",
                  "/images/schreanshot3.png",
                  "/images/schreanshot4.png",
                  "/images/schreanshot5.png",
                  "/images/schreanshot6.png",
                  "/images/schreanshot7.png",
                ]}
              
                
              />
            </FloatingWindow>
          </>
        ) : (
          <FloatingWindow title={title} style={{ width: 640, maxWidth: "100%" }}>
            <p style={{ margin: 0 }}>{SECTIONS[active]}</p>
          </FloatingWindow>

          
        )}
      </section>
    </div>
    
  );
  
  return (
    <div style={{ padding: 12, height: "100%", boxSizing: "border-box" }}>
      {active === "code-experiences" ? (
        <FloatingWindow title="Code Experiences" style={{ width: "100%", maxWidth: 800 }}>
          <CodeExperience speed={15} />
          <p style={{ marginTop: 20, fontSize: 16 }}>
            {SECTIONS["code-experiences"]}
          </p>
        </FloatingWindow>
      ) : (
        <FloatingWindow title={title} style={{ width: 640, maxWidth: "100%" }}>
          <p style={{ margin: 0 }}>{SECTIONS[active]}</p>
        </FloatingWindow>
      )}
    </div>
  );
}