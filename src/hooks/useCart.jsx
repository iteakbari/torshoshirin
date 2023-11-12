import { useState } from "react";

const useCart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (productId) => {
    if (!cartItems?.find((item) => item.id === productId))
      setCartItems([...cartItems, { id: productId, count: 1 }]);
    else
      setCartItems(
        cartItems.map((item) => {
          if (item.id === productId) return { ...item, count: item.count + 1 };
          else return item;
        })
      );
  };

  const removeFromCart = (productId) => {
    setCartItems(
      cartItems.map((item) => {
        if (item.id === productId)
          return { ...item, count: item.count === 0 ? 0 : item.count - 1 };
        else return 1;
      })
    );
  };

  return { cartItems, addToCart, removeFromCart };
};

export default useCart;
