"use client";
import React from "react";

interface Props {
  title: string;
  children: React.ReactNode;
  onClose?: () => void;
  style?: React.CSSProperties;
  className?: string;
}

export default function FloatingWindow({ title, children, onClose, style, className }: Props) {
  return (
    <div className={`win-floating ${className ?? ""}`} style={style}>
      <div className="frame">
        <div className="win-titlebar" role="toolbar" aria-label={title}>
          <div>{title}</div>
          <button className="win-close" onClick={() => onClose?.()} aria-label="Close window">
            ×
          </button>
        </div>

        <div className="win-body">
          {children}
        </div>
      </div>
    </div>
  );
}