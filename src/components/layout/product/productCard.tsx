"use client";

import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function ProductCard({
  product,
}: {
  product: { id: number; name: string; price: number; image: string };
}) {
  return (
    <article className="group relative bg-gray-100 border-1 border-gray-400 rounded-md  p-2">
      <Link href={`products/${product.id}`}>
        <section className="aspect-square w-full overflow-hidden rounded-lg bg-gray-500 dark:bg-gray-400">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
          />
        </section>

        <section>
          <h3 className="mt-2 text-sm font-medium">{product.name}</h3>
        </section>
        <section>
          <p className="text-gray-600">${product.price}</p>
        </section>
      </Link>
      <section>
        <button className="mt-2 w-full sm:w-full bg-green-600 flex justify-center gap-3 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors duration-300">
          <ShoppingCart /> Agregar
        </button>
      </section>
    </article>
  );
}
