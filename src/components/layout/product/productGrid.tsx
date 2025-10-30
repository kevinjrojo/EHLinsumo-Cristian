"use client";

import ProductCard from "./productCard";
import { products } from "@/data/products";

export default function ProductGrid() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </section>
  );
}
