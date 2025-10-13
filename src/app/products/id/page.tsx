"use client";

import Link from "next/link";

export default function ProductsDetailPage() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <div className="h-100 rounded-xl bg-cover bg-center">
            <img
              alt="Cozy Knit Sweater"
              className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300 "
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5fNL3eihWHFWtspmmOdXA0B--51s0ZILcYWCYGy2KCeydAqlWOE2Ig7uVg8ayQ0MLy5QdqtW4WgMQAA2Q2lQ0s44nJsDp3gr0c4FrpvsWMiUHWo4OwF2LhmghzN7TrwzTxI2criFZmhpEoj42b6XhqxZSTN9bg1gNYmAWu7ogIxO-rBSqIz26VG1SeycCpmWxIMHj-freqdYxx8X_LXHAr0ezBZ2YHlYh_hJhclD0aEa7-fQQlHS4BuOjuTec5hWWXnhn0xxnU_E"
            />
          </div>
        </div>
        <div>
          <div className="flex items-center text-sm text-gray-800 dark:text-gray-900 space-x-2">
            <a className="hover:text-primary" href="#">
              Cartegoria
            </a>
            <span>/</span>
            <span>Nombre</span>
          </div>
          <h1 className="text-3xl font-bold mt-4 text-gray-900 dark:text-black">
            Polera invierno mujer
          </h1>
          <p className="text-lg text-gray-800 dark:text-gray-800 mt-1">
            Brand: StyleHaven
          </p>
          <div className="mt-4 flex items-center space-x-2"></div>
          <p className="text-3xl font-bold mt-4 text-gray-900 dark:text-black">
            $79.99
          </p>
          <p className="mt-6 text-gray-700 dark:text-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            a sequi adipisci expedita! Quibusdam, eos, velit dolor illum nobis,
            obcaecati maxime ea fugiat facilis ducimus pariatur rem rerum
            distinctio perferendis!
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4"></div>
          <div className="mt-8 flex items-center space-x-4">
            <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-md">
              <button className="px-3 py-2 text-gray-800 hover:bg-green-500 dark:hover:bg-green-500 rounded-l-md">
                -
              </button>
              <span className="px-4 py-2">1</span>
              <button className="px-3 py-2 text-gray-800 hover:bg-green-500 dark:hover:bg-green-500 rounded-r-md">
                +
              </button>
            </div>
            <button className="flex-1 bg-green-500 bg-primary text-white cursor-pointer    py-3 px-6 rounded-md hover:bg-opacity-90 transition duration-300 font-semibold">
              <Link href="#">Add to Cart</Link>
            </button>
          </div>
          <div className="mt-8 flex items-center space-x-4">
            <p className="font-semibold">Medios de pago:</p>
            <div className="flex space-x-2">
              <a
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-primary/20 dark:hover:bg-primary/30 text-gray-600 dark:text-gray-300"
                href="#"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.49-1.74.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.58-.7-.02-1.37-.21-1.95-.54v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.48 14.5 20.48 8.87c0-.21 0-.43-.02-.63.84-.6 1.57-1.35 2-2.24z"></path>
                </svg>
              </a>
              <a
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-primary/20 dark:hover:bg-primary/30 text-gray-600 dark:text-gray-300"
                href="#"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06c0 5.52 4.5 10.02 10 10.02 5.5 0 10-4.5 10-10.02C22 6.53 17.5 2.04 12 2.04zM12 20.13c-4.47 0-8.1-3.63-8.1-8.07 0-4.47 3.63-8.07 8.1-8.07s8.1 3.63 8.1 8.07c0 4.44-3.63 8.07-8.1 8.07z"></path>
                  <path d="M12 6.82c-2.85 0-5.18 2.32-5.18 5.18s2.33 5.18 5.18 5.18 5.18-2.32 5.18-5.18-2.33-5.18-5.18-5.18zm0 8.35c-1.74 0-3.15-1.41-3.15-3.15s1.41-3.15 3.15-3.15 3.15 1.41 3.15 3.15-1.41 3.15-3.15 3.15z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
