"use client";
import { useCart } from "@/context/cardContext";
import { Trash2 } from "lucide-react";
import Image from "next/image";

export default function CartPage() {
  const { cart, total, removeFromCart, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] text-center">
        <h2 className="text-2xl font-semibold mb-2">
          Tu carrito está vacío 🛒
        </h2>
        <p className="text-gray-500">Agregá productos para verlos acá</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Carrito de compras</h1>

      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-white dark:bg-green-600 rounded-xl shadow p-4"
          >
            <div className="flex items-center gap-4">
              {item.image && (
                <Image
                  src={item.image}
                  alt={item.name}
                  width={64}
                  height={64}
                  className="rounded-md object-cover"
                />
              )}
              <div>
                <h2 className="font-semibold text-lg text-gray-100">
                  {item.name}
                </h2>
                <p className="text-gray-100">
                  ${item.price.toFixed(2)} x {item.quantity}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <p className="font-semibold text-gray-100">
                ${(item.price * (item.quantity || 1)).toFixed(2)}
              </p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-3 p-3 rounded-md hover:bg-red-600 transition cursor-pointer"
              >
                <Trash2 />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-2xl font-semibold">
          Total: <span className="text-green-600">${total.toFixed(2)}</span>
        </h2>
        <div className="flex gap-3">
          <button
            onClick={clearCart}
            className=" bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-400 dark:hover:bg-gray-600 transition"
          >
            Vaciar carrito
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition">
            Finalizar compra
          </button>
        </div>
      </div>
    </div>
  );
}
