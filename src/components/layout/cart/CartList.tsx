"use client";
import CartItem from "./CartItem";
import { CartItem as CartItemType } from "@/types/cartTypes";

interface CartListProps {
  items: CartItemType[];
}

export default function CartList({ items }: CartListProps) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
    </div>
  );
}
