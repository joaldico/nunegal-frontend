import { createContext, useContext, useState, type ReactNode } from "react";

interface CartContextType {
  cartCount: number;
  updateCartCount: (newCount: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartCount, setCartCount] = useState<number>(() => {
    try {
      const saved = localStorage.getItem("itx_cart_count");
      return saved ? Number.parseInt(saved, 10) : 0;
    } catch {
      return 0;
    }
  });

  const updateCartCount = (newCount: number) => {
    setCartCount(newCount);
    try {
      localStorage.setItem("itx_cart_count", newCount.toString());
    } catch (error) {
      console.error("Error saving cart count", error);
    }
  };

  return (
    <CartContext.Provider value={{ cartCount, updateCartCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
