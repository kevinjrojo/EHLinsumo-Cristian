"use client";
import { createContext, useContext, useState, useMemo, ReactNode } from "react";
import { Product, CartItem } from "@/types/cartTypes";

// 🧱 Tipo del contexto
interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number | string) => void;
  clearCart: () => void;
  total: number;
  totalItems: number;
}

// 🧱 Props del provider
interface CartProviderProps {
  children: ReactNode;
}

// Creamos el contexto
const CartContext = createContext<CartContextType | undefined>(undefined);

// Hook para usar el contexto más fácil
export function useCart(): CartContextType {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe usarse dentro de un CartProvider");
  }
  return context;
}

// Provider
export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartItem[]>([]);

  // 🛒 Agregar producto
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // ❌ Eliminar una unidad del producto
  const removeFromCart = (id: number | string) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: (item.quantity || 1) - 1 }
            : item
        )
        .filter((item) => (item.quantity || 0) > 0)
    );
  };

  // 🧹 Vaciar carrito
  const clearCart = () => setCart([]);

  // 💰 Calcular total
  const total = useMemo(
    () =>
      cart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0),
    [cart]
  );

  // 🧾 Cantidad total de productos
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
