"use client";
import Image from "next/image";

interface ProductImageProps {
  image: string;
  name: string;
}

export default function ProductImage({ image, name }: ProductImageProps) {
  return (
    <section className="aspect-square w-full overflow-hidden rounded-lg bg-gray-500 dark:bg-gray-400">
      <Image
        src={image}
        alt={name}
        className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
        width={400}
        height={400}
      />
    </section>
  );
}
