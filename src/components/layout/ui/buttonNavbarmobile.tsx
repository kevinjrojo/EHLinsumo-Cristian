"use client";

import { Menu } from "lucide-react";

export default function ButtonNavbarMobile({
  onOpenMenu,
}: {
  onOpenMenu: () => void;
}) {
  return (
    <span className="cursor-pointer" onClick={onOpenMenu}>
      <Menu className="text-gray-700  " size={28} />
    </span>
  );
}
