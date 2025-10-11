"use Cliente";

import { useState } from "react";
import ButtonNavbarMobile from "./buttonNavbarmobile";
import { X } from "lucide-react";
import Logo from "../ui/navbarLogo";
import { NavbarAccordion } from "./navbarAccordionmoMobile";

export default function NavbarMovbile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="inline sm:hidden">
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
          className={`absolute left-0 top-0 z-50 h-dvh w-3/5 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex h-full flex-col  bg-black/80 ">
            <div className="flex items-center justify-between p-4  dark:border-background-dark/50">
              <Logo />
              <button
                className="cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                <X className="text-gray-700 dark:text-white" size={28} />
              </button>
            </div>
            <nav className="flex-grow p-4">
              <NavbarAccordion />
              {/* <li>
                  <a className="flex items-center gap-4 rounded-lg px-4 py-3 text-white hover:bg-primary/10 dark:hover:bg-primary/20 hover:text-primary">
                    <span className="font-medium">Mi Cuenta</span>
                  </a>
                </li>
                <li>
                  <a className="flex items-center gap-4 rounded-lg px-4 py-3 text-white hover:bg-primary/10 dark:hover:bg-primary/20 hover:text-primary">
                    <span className="font-medium">Configuración</span>
                  </a>
                </li> */}
            </nav>

            {/* <div className="p-4 flex gap-2 ">
              <button className="w-full flex items-center justify-center gap-2 rounded-lg bg-primary py-3 text-white font-bold">
                Registrate
              </button>
              <button className="w-full flex items-center justify-center gap-2 rounded-lg bg-primary py-3 text-white font-bold">
                Iniciar Sesión
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </nav>
  );
}
