"use Cliente";

import { useState } from "react";
import ButtonNavbarMobile from "../ui/buttonNavbarmobile";

export default function NavbarMovbile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav>
      <ButtonNavbarMobile onOpenMenu={() => setIsMenuOpen(true)} />

      <div className="bg-background-light dark:bg-background-dark font-display ">
        {isMenuOpen && (
          <div
            className="absolute inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setIsMenuOpen(false)}
          ></div>
        )}

        {/* Menú lateral con animación */}
        <div
          className={`absolute left-0 top-0 z-50 h-dvh w-4/5 w-70 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex h-full flex-col  bg-black/80">
            <div className="flex items-center justify-between p-4 border-b border-background-light/50 dark:border-background-dark/50">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                EHLinsumo 🦜
              </h2>
              <button
                className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="material-symbols-outlined">❌</span>
              </button>
            </div>

            <nav className="flex-grow p-4">
              <ul className="space-y-2">
                <li>
                  <a
                    className="flex items-center gap-4 rounded-lg bg-primary/10 dark:bg-primary/20 px-4 py-3 text-white"
                    href="#"
                  >
                    <span className="material-symbols-outlined">home</span>
                  </a>
                </li>
                <li>
                  <a className="flex items-center gap-4 rounded-lg px-4 py-3 text-white hover:bg-primary/10 dark:hover:bg-primary/20 hover:text-primary">
                    <span className="font-medium">Categorías</span>
                  </a>
                </li>
                <li>
                  <a className="flex items-center gap-4 rounded-lg px-4 py-3 text-white hover:bg-primary/10 dark:hover:bg-primary/20 hover:text-primary">
                    <span className="font-medium">Carrito</span>
                  </a>
                </li>
                <li>
                  <a className="flex items-center gap-4 rounded-lg px-4 py-3 text-white hover:bg-primary/10 dark:hover:bg-primary/20 hover:text-primary">
                    <span className="font-medium">Mi Cuenta</span>
                  </a>
                </li>
                <li>
                  <a className="flex items-center gap-4 rounded-lg px-4 py-3 text-white hover:bg-primary/10 dark:hover:bg-primary/20 hover:text-primary">
                    <span className="font-medium">Configuración</span>
                  </a>
                </li>
              </ul>
            </nav>

            <div className="p-4 flex gap-2 ">
              <button className="w-full flex items-center justify-center gap-2 rounded-lg bg-primary py-3 text-white font-bold">
                Registrate
              </button>
              <button className="w-full flex items-center justify-center gap-2 rounded-lg bg-primary py-3 text-white font-bold">
                Iniciar Sesión
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
