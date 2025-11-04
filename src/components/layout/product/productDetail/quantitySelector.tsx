"use client";
import { useState } from "react";

export default function QuantitySelector() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-md">
      <button
        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
        className="px-3 py-2 text-gray-800 hover:bg-green-500 dark:hover:bg-green-500 rounded-l-md"
      >
        -
      </button>
      <span className="px-4 py-2">{quantity}</span>
      <button
        onClick={() => setQuantity((q) => q + 1)}
        className="px-3 py-2 text-gray-800 hover:bg-green-500 dark:hover:bg-green-500 rounded-r-md"
      >
        +
      </button>
    </div>
  );
}
