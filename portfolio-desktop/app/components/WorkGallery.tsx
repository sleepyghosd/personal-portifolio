"use client";
import React, { useState, useMemo } from "react";

interface Props {
  images?: string[];
  height?: number;    // px
  speed?: number;     // seconds for one full loop
  className?: string;
}

export default function WorkGallery({ images, height = 120, speed = 20, className }: Props) {
  const fallback = [
    "/images/gallery1.png",
    "/images/gallery2.png",
    "/images/gallery3.png",
    "/images/gallery4.png",
    "/images/gallery5.png",
    "/images/gallery6.png",
    "/images/gallery7.png",
  ];
  const imgs = (images && images.length) ? images : fallback;

  // track load state so we only start the animation after images layout stabilised
  const [loadedCount, setLoadedCount] = useState(0);
  const totalToLoad = imgs.length; // only count unique set

  const onImgLoad = () => setLoadedCount((c) => c + 1);

  // duration string for inline style
  const duration = `${speed}s`;

  // duplicate array for seamless loop
  const duplicated = useMemo(() => [...imgs, ...imgs], [imgs]);

  // play animation only after all unique images loaded
  const playState = loadedCount >= totalToLoad ? "running" : "paused";

  return (
    <div className={`work-gallery ${className ?? ""}`} aria-label="Work gallery">
      <div className="marquee" style={{ height }}>
        <div
          className="marquee-track"
          style={{ animationDuration: duration, animationPlayState: playState }}
          aria-hidden="false"
        >
          {duplicated.map((src, i) => (
            <div className="marquee-item" key={`img-${i}`}>
              {/* use decoding to help layout; onLoad increments counter for first set only */}
              <img
                src={src}
                alt={`work ${i + 1}`}
                onLoad={i < totalToLoad ? onImgLoad : undefined}
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