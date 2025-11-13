"use client";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import { useCart } from "@/context/cardContext";
import { CartItem as CartItemType } from "@/types/cartTypes";

export default function CartItem({
  id,
  name,
  price,
  image,
  quantity,
}: CartItemType) {
  const { removeFromCart } = useCart();

  return (
    <div className="flex items-center justify-between bg-white dark:bg-green-600 rounded-xl shadow p-4">
      <div className="flex items-center gap-4">
        {image && (
          <Image
            src={image}
            alt={name}
            width={64}
            height={64}
            className="rounded-md object-cover"
          />
        )}
        <div>
          <h2 className="font-semibold text-lg text-gray-100">{name}</h2>
          <p className="text-gray-100">
            ${price.toFixed(2)} x {quantity}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <p className="font-semibold text-gray-100">
          ${(price * quantity).toFixed(2)}
        </p>
        <button
          onClick={() => removeFromCart(id)}
          className="bg-red-500 text-white px-3 p-3 rounded-md hover:bg-red-600 transition"
        >
          <Trash2 />
        </button>
      </div>
    </div>
  );
}
