"use client";

import { Menu } from "lucide-react";

export default function ButtonNavbarMobile({
  onOpenMenu,
}: {
  onOpenMenu: () => void;
}) {
  return (
    <span className="cursor-pointer  " onClick={onOpenMenu}>
      <Menu className="text-gray-900 m-1 " size={30} />
    </span>
  );
}
