"use client";

import Link from "next/link";
import { Dropdown, DropdownItem } from "flowbite-react";

export default function Button() {
  return (
    <nav className="hidden md:flex items-center gap-6">
      <Dropdown
        label={<span className="text-gray-900">Herramientas</span>}
        inline
      >
        <Link
          className="text-sm font-medium text-gray-600  hover:text-primary dark:hover:text-primary transition-colors"
          href="#"
        >
          <DropdownItem>Pinzas</DropdownItem>
        </Link>
        <Link
          className="text-sm font-medium text-gray-600  hover:text-primary dark:hover:text-primary transition-colors"
          href="#"
        >
          <DropdownItem>Martillos</DropdownItem>
        </Link>
        <Link
          className="text-sm font-medium text-gray-600  hover:text-primary dark:hover:text-primary transition-colors"
          href="#"
        >
          <DropdownItem>Destornilladores</DropdownItem>
        </Link>
        <Link
          className="text-sm font-medium text-gray-600  hover:text-primary dark:hover:text-primary transition-colors"
          href="#"
        >
          <DropdownItem>Llaves</DropdownItem>
        </Link>
      </Dropdown>
      <Dropdown label={<span className="text-gray-900">Hogar</span>} inline>
        <Link
          className="text-sm font-medium text-gray-600  hover:text-primary dark:hover:text-primary transition-colors"
          href="#"
        >
          <DropdownItem>Exterior</DropdownItem>
        </Link>
        <Link
          className="text-sm font-medium text-gray-600  hover:text-primary dark:hover:text-primary transition-colors"
          href="#"
        >
          <DropdownItem>Cocina</DropdownItem>
        </Link>
        <Link
          className="text-sm font-medium text-gray-600  hover:text-primary dark:hover:text-primary transition-colors"
          href="#"
        >
          <DropdownItem>Baño</DropdownItem>
        </Link>
        <Link
          className="text-sm font-medium text-gray-600  hover:text-primary dark:hover:text-primary transition-colors"
          href="#"
        >
          <DropdownItem>Dormitorios</DropdownItem>
        </Link>
      </Dropdown>
      <Dropdown label={<span className="text-gray-900">Electro</span>} inline>
        <Link
          className="text-sm font-medium text-gray-600  hover:text-primary dark:hover:text-primary transition-colors"
          href="#"
        >
          <DropdownItem>Pinzas</DropdownItem>
        </Link>
        <Link
          className="text-sm font-medium text-gray-600  hover:text-primary dark:hover:text-primary transition-colors"
          href="#"
        >
          <DropdownItem>Martillos</DropdownItem>
        </Link>
        <Link
          className="text-sm font-medium text-gray-600  hover:text-primary dark:hover:text-primary transition-colors"
          href="#"
        >
          <DropdownItem>Destornilladores</DropdownItem>
        </Link>
        <Link
          className="text-sm font-medium text-gray-600  hover:text-primary dark:hover:text-primary transition-colors"
          href="#"
        >
          <DropdownItem>Llaves</DropdownItem>
        </Link>
      </Dropdown>
    </nav>
  );
}
