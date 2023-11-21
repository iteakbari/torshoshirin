import { useEffect, useState } from "react";

const useCart = () => {
  const [cartItems, setCartItems] = useState();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart"));
    setCartItems(!!data ? data : []);
  }, []);
  useEffect(() => {
    if (cartItems !== undefined) {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }

    const newTotalPrice = cartItems?.reduce(
      (total, item) => total + item.price,
      0
    );
    setTotalPrice(newTotalPrice);
  }, [cartItems]);

  const addToCart = ({
    productId,
    pathImage,
    salePrice,
    productName,
    unitCountingId,
    totalValue,
    variantId,
  }) => {
    if (!cartItems?.find((item) => item.id === productId))
      setCartItems([
        ...cartItems,
        {
          id: productId,
          name: productName,
          img: pathImage,
          price: salePrice,
          totalPrice: salePrice * totalValue,
          count: unitCountingId === 2 ? 1 : totalValue ? totalValue : 1,
          weight: unitCountingId === 2 && totalValue,
          UCI: unitCountingId,
          variantId: variantId,
        },
      ]);
    else
      setCartItems(
        cartItems.map((item) => {
          if (item.id === productId)
            return {
              ...item,
              totalPrice: salePrice * totalValue,
              count: unitCountingId === 2 ? 1 : item.count + 1,
              weight: unitCountingId === 2 && totalValue,
            };
          else return item;
        })
      );
  };

  const reduceFromCart = ({
    productId,
    pathImage,
    salePrice,
    productName,
    unitCountingId,
    totalValue,
  }) => {
    setCartItems(
      cartItems.map((item) => {
        if (item.id === productId)
          return {
            ...item,
            totalPrice: salePrice * totalValue,
            count: unitCountingId === 2 ? 1 : item.count - 1,
            weight: unitCountingId === 2 && totalValue,
          };
        else return item;
      })
    );
  };

  const removeFromCart = (productId) => {
    const filteredCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(filteredCart);
  };

  const resetCart = () => {
    localStorage.removeItem("cart");
    const data = JSON.parse(localStorage.getItem("cart"));
    setCartItems(!!data ? data : []);
  };

  return {
    cartItems,
    addToCart,
    removeFromCart,
    resetCart,
    totalPrice,
    reduceFromCart,
  };
};

export default useCart;
