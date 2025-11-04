"use client";
import React, { useState, useMemo } from "react";

interface Props {
  className?: string;
  speed?: number;
}

export default function CodeExperience({ speed = 15, className }: Props) {
  const logos = [
    "/images/python.png",
    "/images/javascript.png",
    "/images/csharp.png",
    "/images/css.png",
    "/images/html.png"
  ];

  const [loadedCount, setLoadedCount] = useState(0);
  const duplicated = useMemo(() => [...logos, ...logos], []);
  const playState = loadedCount >= logos.length ? "running" : "paused";

  return (
    <div className={`code-experience ${className ?? ""}`}>
      <div className="code-track-wrap">
        <div 
          className="code-track"
          style={{ 
            animationDuration: `${speed}s`,
            animationPlayState: playState 
          }}
        >
          {duplicated.map((src, i) => (
            <div className="code-logo" key={`logo-${i}`}>
              <img
                src={src}
                alt={`Language ${i + 1}`}
                onLoad={i < logos.length ? () => setLoadedCount(c => c + 1) : undefined}
                decoding="async"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}