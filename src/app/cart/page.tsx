"use client";
import { useCart } from "@/context/cardContext";
import EmptyCart from "@/components/layout/cart/EmptyCart";
import CartList from "@/components/layout/cart/CartList";
import CartSummary from "@/components/layout/cart/CartSummary";

export default function CartPage() {
  const { cart } = useCart();

  if (cart.length === 0) return <EmptyCart />;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Carrito de compras</h1>
      <CartList items={cart} />
      <CartSummary />
    </div>
  );
}
