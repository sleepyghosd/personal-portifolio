"use client";
import { useState } from "react";

interface SidebarProps {
  active?: string;
  setActive?: (v: string) => void;
}

export default function Sidebar({ active: propActive, setActive: propSetActive }: SidebarProps) {
  const [localActive, setLocalActive] = useState<string>(propActive ?? "about");

  const active = propActive ?? localActive;
  const setActive = propSetActive ?? setLocalActive;

  const buttons = [
    { id: "about", label: "About" },
    { id: "work-gallery", label: "Work gallery" },
    { id: "code-experiences", label: "Code experiences" },

  ];

  return (
    <div className="flex flex-col space-y-4 p-4">
      {buttons.map((b) => (
        <button
          key={b.id}
          onClick={() => setActive(b.id)}
          className={`px-3 py-2 rounded text-left transition ${
            active === b.id
              ? "bg-blue-600 text-white"
              : "bg-gray-800 text-gray-200 hover:bg-gray-700"
          }`}
        >
          {b.label}
        </button>
      ))}
    </div>
  );
}