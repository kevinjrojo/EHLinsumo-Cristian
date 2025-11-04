import Link from "next/link";
import QuantitySelector from "./quantitySelector";
import PaymentMethods from "./paymentMethods";

interface ProductInfoProps {
  product: {
    name: string;
    description: string;
    category: string;
    price: number;
  };
}

export default function ProductInfo({ product }: ProductInfoProps) {
  return (
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

      <p className="text-3xl font-bold mt-4 text-gray-900 dark:text-black">
        ${product.price.toLocaleString("es-AR")}
      </p>

      <div className="mt-8 flex items-center space-x-4">
        <QuantitySelector />
        <button className="flex-1 bg-green-500 text-white py-3 px-6 rounded-md hover:bg-opacity-90 transition duration-300 font-semibold">
          <Link href="#">Agregar al carrito</Link>
        </button>
      </div>

      <PaymentMethods />
    </div>
  );
}
