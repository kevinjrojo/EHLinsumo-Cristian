"use client";

import Link from "next/link";
import CategoryDropdown from "./categoryDropdown";

export default function DesktopNav({
  categories,
}: {
  categories: { name: string; items: string[] }[];
}) {
  return (
    <div className="flex items-center gap-6 z-10">
      <h1 className="text-xl font-bold mx-auto sm:mx-0">
        <Link href={"/"}>EHLinsumo 🦜 </Link>
      </h1>

      {/* Categorías (solo desktop) */}
      <div className="hidden sm:flex gap-4">
        {categories.map((cat, idx) => (
          <CategoryDropdown key={idx} category={cat} />
        ))}
      </div>
    </div>
  );
}
