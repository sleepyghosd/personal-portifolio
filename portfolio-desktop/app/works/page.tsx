"use client";

import FloatingWindow from "../components/FloatingWindow";

const WORKS = [
  {
    id: "works-main",
    title: "Works",
    content: [
      "Project 1",
      "Project 2",
      "Project 3"
    ].map((p) => <div key={p} className="work-item">{p}</div>),
  },
  {
    id: "pythondata",
    title: "Python Data Work",
    content: "With is project i worked on a page",
  },
];

export default function WorksPage() {
  return (
    <div className="works-page">
      {/* canvas keeps full viewport but no page scrollbar */}
      <div className="works-canvas">
        <FloatingWindow
          title={WORKS[0].title}
          style={{
            width: "60%",
            maxWidth: 800,
            position: "absolute",
            left: "30px",
            top: "40px",
          }}
        >
          <div className="works-list">{WORKS[0].content}</div>
        </FloatingWindow>

        <FloatingWindow
          title={WORKS[1].title}
          style={{
            width: "36%",
            maxWidth: 480,
            position: "absolute",
            right: "40px",
            top: "120px",
          }}
        >
          <div className="work-detail">{WORKS[1].content}</div>
        </FloatingWindow>
      </div>
    </div>
  );
}