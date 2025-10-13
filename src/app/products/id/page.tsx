"use client";

import { Card } from "flowbite-react";
import { Link } from "lucide-react";

export default function ProductsDetailPage() {
  return (
    <section>
      <Card
        className="max-w-sm flex m-auto justify-center "
        imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
        imgSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuDgCwS5VRSHGWeGxZ5pSRNksJZmpCnT7r-mVkO2RnKla2SbA1WzdE2QRAiMArPs1zFso8tzG4rZoCq6n_zdn6H-N-n1n5wPH578eE-3AyGz4CHaCNFIBid8lePVwdu73fPqCao6LYJ0Ud10lCgWTgHeQ1JIvdp_VKe3UnA2UBCVcCVVxgHwEKHQ0-NbS58IO_TSNeEeiyPm9QHTEU7XDu3NDZyNmBzKaCg0RDtknGVroDuZGJAlksO9dfqJFMbeH5vtrqJ9IlHPq2U"
      >
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
        </h5>

        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            $599
          </span>
          <Link
            href="#"
            className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          >
            Add to cart
          </Link>
        </div>
      </Card>
    </section>
  );
}
