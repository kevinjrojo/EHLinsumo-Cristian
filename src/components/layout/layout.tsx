"use client";

import Card from "../shared/card";
import SearchMobile from "../ui/searchMobile";

export default function MyLayout() {
  return (
    <main className="container mx-auto flex-1 px-4 sm:px-6 lg:px-8 py-8">
      <SearchMobile />
      <Card />
    </main>
  );
}
