"use client";

export default function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-center">
      <h2 className="text-2xl font-semibold mb-2">Tu carrito está vacío 🛒</h2>
      <p className="text-gray-500">Agregá productos para verlos acá</p>
    </div>
  );
}
