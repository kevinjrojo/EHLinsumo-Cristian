"use client";

import Button from "../ui/navbarButtons";
import Logo from "../ui/navbarLogo";
import Icon from "../ui/navbarIcon";
import Search from "../ui/navbarSearch";

export default function MyNavbar() {
  return (
    <header className="sticky top-0 z-10 bg-green-500 dark:bg-background-dark/80 backdrop-blur-sm  dark:border-gray-800">
      <div className="flex h-16 items-center justify-between mx-auto  lg:px-5">
        <div className="flex items-center gap-8">
          <Logo />
          <Button />
        </div>
        <div className="flex items-center gap-4">
          <Search />
          <Icon />
        </div>
      </div>
    </header>
  );
}
