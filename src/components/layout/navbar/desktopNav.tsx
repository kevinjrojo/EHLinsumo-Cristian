"use client";

import CategoryDropdown from "./categoryDropdown";

export default function DesktopNav({
  categories,
}: {
  categories: { name: string; items: string[] }[];
}) {
  return (
    <div className="flex items-center gap-6 z-10">
      <div className="text-xl font-bold mx-auto sm:mx-0">EHLinsumo 🦜</div>

      {/* Categorías (solo desktop) */}
      <div className="hidden sm:flex gap-4">
        {categories.map((cat, idx) => (
          <CategoryDropdown key={idx} category={cat} />
        ))}
      </div>
    </div>
  );
}
