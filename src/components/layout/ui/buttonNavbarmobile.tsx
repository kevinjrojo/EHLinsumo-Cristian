"use client";

export default function ButtonNavbarMobile({
  onOpenMenu,
}: {
  onOpenMenu: () => void;
}) {
  return (
    <span
      className="material-symbols-outlined text-gray-800 dark:text-black cursor-pointer"
      onClick={() => onOpenMenu()}
    >
      🍔
    </span>
  );
}
