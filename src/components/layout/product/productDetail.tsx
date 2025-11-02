interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  price: number;
  image: string;
}

import Link from "next/link";

export default function ProductDetail({ product }: { product: Product }) {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <div className="h-100 rounded-xl bg-cover bg-center">
            <img
              alt={product.name}
              className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300 "
              src={product.image}
            />
          </div>
        </div>
        <div>
          <div className="flex items-center text-sm text-gray-800 dark:text-gray-900 space-x-2">
            <a className="hover:text-primary" href="#">
              {product.category}
            </a>
            <span>/</span>
            <span>{product.name}</span>
          </div>
          <h1 className="text-3xl font-bold mt-4 text-gray-900 dark:text-black">
            {product.name}
          </h1>
          <p className="text-lg text-gray-800 dark:text-gray-800 mt-1">
            {product.description}
          </p>
          <div className="mt-4 flex items-center space-x-2"></div>
          <p className="text-3xl font-bold mt-4 text-gray-900 dark:text-black">
            ${product.price.toLocaleString("es-AR")}
          </p>
          <p className="mt-6 text-gray-700 dark:text-gray-800"></p>
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
              <Link href="#">Agregar al carrito</Link>
            </button>
          </div>
          <div className="mt-8 flex items-center space-x-4">
            <p className="font-semibold">Medios de pago:</p>
            <div className="flex space-x-2">
              <img src="/icons/visa.svg" alt="Visa" className=" w-10" />
              <img
                src="/icons/mastercard.svg"
                alt="Mastercard"
                className=" w-10"
              />
              <img
                src="/icons/americanExpress.svg"
                alt="American Express"
                className=" w-10"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
