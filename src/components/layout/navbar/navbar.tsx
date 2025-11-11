"use client";

import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import DesktopNav from "./desktopNav";
import MobileMenu from "./mobileMenu";
import SearchBar from "./searchBar";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState<number | null>(null);

  const categories = [
    { name: "Ferretería ", items: ["Taladros", "Destornilladores", "Llaves"] },
    {
      name: "Repuestos y accesorios",
      items: ["Cables", "Enchufes", "Lámparas"],
    },
    { name: "Hogar y electro", items: ["Caños", "Grifería", "Selladores"] },
  ];

  return (
    <header className="bg-green-600 text-white  w-full shadow-md ">
      <nav className="flex justify-between items-center px-4 sm:px-8 h-16">
        {/* --- Botón hamburguesa (solo móvil) --- */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden p-2 hover:bg-green-700 rounded-md"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* --- Logo + Categorías --- */}
        <DesktopNav categories={categories} />

        {/* --- Input búsqueda --- */}
        <div className="hidden sm:flex flex-1 justify-end px-6">
          <SearchBar />
        </div>

        {/* --- Ícono carrito --- */}
        <Link
          href={"/card"}
          className="p-2 hover:bg-green-700 rounded-md cursor-pointer"
        >
          <ShoppingCart size={24} />
        </Link>
      </nav>

      {/* --- Menú lateral móvil --- */}
      <MobileMenu
        open={menuOpen}
        setOpen={setMenuOpen}
        categories={categories}
        openCategory={openCategory}
        setOpenCategory={setOpenCategory}
      />
    </header>
  );
}
