import Counter from "@/common/Counter";
import GramsCounter from "@/common/GramsCounter";
import { ShopContext } from "@/context/shopContext";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";
import { useMutation } from "@tanstack/react-query";
import { sendCart } from "@/services/sendCart";
import Cookies from "js-cookie";

const Basket = ({ setActiveTab }) => {
  const [inputValue, setInputValue] = useState(0);
  const [basket, setBasket] = useState([]);
  const { data, mutateAsync: mutateSendCart } = useMutation({
    mutationFn: sendCart,
  });

  const { cartItems, addToCart, removeFromCart, resetCart } =
    useContext(ShopContext);

  const itemCount = cartItems?.reduce((prev, current) => {
    return prev + current.totalPrice;
  }, 0);

  useEffect(() => {
    setBasket(
      cartItems?.map((item) => {
        return {
          variantId: item.variantId,
          Qty: item.UCI === 2 ? item.weight : item.count,
        };
      })
    );
  }, [cartItems]);

  const token = Cookies.get("token");

  const sendBasketHandler = async () => {
    const data = await mutateSendCart({ basket, token });
    // console.log(data);
    setActiveTab(2);
  };

  return (
    <div>
      {cartItems?.map((item) => (
        <div key={item.id} className="border-b-2 pt-5 pb-2 relative">
          <button
            type="button"
            className="flex items-center sm:hidden mb-2 gap-1 text-orange absolute left-5"
            onClick={() => removeFromCart(item.id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Image
              src={item.img}
              width={56}
              height={56}
              alt=""
              className="w-14 h-14 rounded-md"
            />
            <p className="font-bold">{item.name}</p>
            <span>
              <NumericFormat
                value={item.totalPrice}
                displayType="text"
                className="font-bold"
                thousandSeparator=","
              />
              <small className="text-sm pr-2">ریال</small>
            </span>
          </div>
          <div className="pt-4 flex items-end sm:gap-10">
            {item.UCI === 2 ? (
              <div className="w-72">
                <GramsCounter weight={item.weight} product={item} />
              </div>
            ) : (
              <div className="w-72">
                <Counter
                  countItem={item.count}
                  step={1}
                  label={item.UCI === 1 ? "عدد" : "بسته"}
                  product={item}
                />
              </div>
            )}
            <button
              type="button"
              className="hidden sm:flex items-center mb-2 gap-1 text-orange"
              onClick={() => removeFromCart(item.id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              حذف
            </button>
          </div>
        </div>
      ))}

      <p className="py-5">
        <span className="pl-10 ">مجموع</span>
        <span>
          <NumericFormat
            thousandSeparator=","
            displayType="text"
            className="font-bold"
            value={itemCount}
          />
        </span>
        <small className="text-sm pr-2">ریال</small>
      </p>

      <div className="flex justify-center pt-5">
        <button
          type="button"
          className={`bg-orange text-white w-72 h-12 rounded-md ${
            cartItems?.length > 0 ? "" : "disabled-btn"
          }`}
          onClick={() => sendBasketHandler()}
          disabled={!cartItems?.length > 0}
        >
          ثبت سبد خرید
        </button>
      </div>
    </div>
  );
};

export default Basket;
