"use client";

import { ArrowLeft } from "lucide-react";
import Icon from "@/components/ui/navbarIcon";
import Logo from "@/components/ui/navbarLogo";
import Link from "next/link";

export default function ProductsPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <header className=" top-0 z-10 bg-green-600 dark:bg-background-dark/80 backdrop-blur-sm  dark:border-gray-800">
        <div className="flex h-16 items-center justify-between mx-auto  lg:px-5">
          {/* <NavbarMovbile /> */}
          <div className="flex items-center gap-8">
            <Link href={"/"} className="p-2">
              <ArrowLeft className=" text-gray-900" />
            </Link>

            <Logo />
          </div>
          <div className="flex items-center gap-4">
            {/* <Search /> */}
            <Icon />
          </div>
        </div>
      </header>
      {children}
    </section>
  );
}
