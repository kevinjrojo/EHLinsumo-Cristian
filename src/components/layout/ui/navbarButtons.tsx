"use client";

import Link from "next/link";
import { Dropdown, DropdownItem } from "flowbite-react";

export default function Button() {
  return (
    <nav className="hidden md:flex items-center gap-6">
      <Dropdown
        label={<span className="text-white">Herramientas</span>}
        inline
        className="dropdown-custom"
      >
        <Link href="#">
          <DropdownItem className="dropdown-custom-item">Pinzas</DropdownItem>
        </Link>
        <Link href="#">
          <DropdownItem className="dropdown-custom-item">
            Martillos
          </DropdownItem>
        </Link>
        <Link href="#">
          <DropdownItem className="dropdown-custom-item">
            Destornilladores
          </DropdownItem>
        </Link>
        <Link href="#">
          <DropdownItem className="dropdown-custom-item">Llaves</DropdownItem>
        </Link>
      </Dropdown>
      <Dropdown
        label={<span className="text-white">Hogar</span>}
        inline
        className="dropdown-custom"
      >
        <Link href="#">
          <DropdownItem className="dropdown-custom-item">Exterior</DropdownItem>
        </Link>
        <Link href="#">
          <DropdownItem className="dropdown-custom-item">Cocina</DropdownItem>
        </Link>
        <Link href="#">
          <DropdownItem className="dropdown-custom-item">Baño</DropdownItem>
        </Link>
        <Link href="#">
          <DropdownItem className="dropdown-custom-item">
            Dormitorios
          </DropdownItem>
        </Link>
      </Dropdown>
      <Dropdown
        label={<span className="text-white ">Electros</span>}
        inline
        className="dropdown-custom"
      >
        <Link href="#">
          <DropdownItem className="dropdown-custom-item">
            Ventiladores
          </DropdownItem>
        </Link>
        <Link href="#">
          <DropdownItem className="dropdown-custom-item">
            Cafeteras
          </DropdownItem>
        </Link>
        <Link href="#">
          <DropdownItem className="dropdown-custom-item">Aires</DropdownItem>
        </Link>
        <Link href="#">
          <DropdownItem className="dropdown-custom-item">Hornos</DropdownItem>
        </Link>
      </Dropdown>
    </nav>
  );
}
