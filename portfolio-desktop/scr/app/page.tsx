"use client";

import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import SectionCard from "@/components/SectionCard";

export default function HomePage() {
  const [active, setActive] = useState("about");
  const [data, setData] = useState("");

  useEffect(() => {
    fetch(`/api/${active}`)
      .then((res) => res.json())
      .then((d) => setData(d.content))
      .catch(() => setData("Failed to load content."));
  }, [active]);

  return (
    <div className="flex h-[calc(100vh-5rem)]">a
      <aside className="w-1/5 border-r border-gray-700">
        <Sidebar active={active} setActive={setActive} />
      </aside>
      <section className="flex-1 flex items-center justify-center">
        <SectionCard title={active.replace("-", " ").toUpperCase()} content={data} />
      </section>
    </div>
  );
}
