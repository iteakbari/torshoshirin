"use client";

import useCart from "@/hooks/useCart";

const { createContext } = require("react");

export const ShopContext = createContext({
  cartItems: null,
  addToCart: () => {},
  removeFromCart: () => {},
});

export const ShopContextProvider = ({ children }) => {
  return (
    <ShopContext.Provider value={useCart()}>{children}</ShopContext.Provider>
  );
};
