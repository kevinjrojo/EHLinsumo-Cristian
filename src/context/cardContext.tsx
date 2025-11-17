"use client";
import { createContext, useContext, useState, useMemo, ReactNode } from "react";
import { Product, CartItem } from "@/types/cartTypes";

// 🧱 Tipo del contexto
interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (id: number | string) => void;
  clearCart: () => void;
  total: number;
  totalItems: number;
}

// Props
interface CartProviderProps {
  children: ReactNode;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

// Hook
export function useCart(): CartContextType {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart debe usarse dentro de un CartProvider");
  return ctx;
}

// Provider
export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartItem[]>([]);

  // 🛒 Agregar producto con cantidad opcional
  const addToCart = (product: Product, quantity: number = 1) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);

      if (exists) {
        // si ya existe → sumamos la cantidad
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + quantity }
            : item
        );
      }

      // si NO existe → lo agregamos con esa cantidad
      return [...prev, { ...product, quantity }];
    });
  };

  // ❌ Quitar 1 unidad
  const removeFromCart = (id: number | string) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: (item.quantity || 1) - 1 }
            : item
        )
        .filter((item) => (item.quantity || 0) > 0)
    );
  };

  // 🧹 Vaciar
  const clearCart = () => setCart([]);

  // 💰 Total $
  const total = useMemo(
    () =>
      cart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0),
    [cart]
  );

  // 🔢 Total de unidades
  const totalItems = useMemo(
    () => cart.reduce((acc, item) => acc + (item.quantity || 1), 0),
    [cart]
  );

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, total, totalItems }}
    >
      {children}
    </CartContext.Provider>
  );
}
