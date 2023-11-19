import Counter from "@/common/Counter";
import { ShopContext } from "@/context/shopContext";
import Image from "next/image";
import { useContext, useState } from "react";
import { NumericFormat } from "react-number-format";

const Basket = ({ setActiveTab }) => {
  const [inputValue, setInputValue] = useState(0);

  const { cartItems, addToCart, removeFromCart, resetCart } =
    useContext(ShopContext);

  return (
    <div>
      {cartItems?.map((item) => (
        <div key={item.id} className="border-b-2 pt-5 pb-2">
          <div className="flex items-center gap-3">
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
                value={item.price}
                displayType="text"
                className="font-bold"
                thousandSeparator=","
              />
              <small className="text-sm pr-2">تومان</small>
            </span>
          </div>
          <div className="pt-4 flex items-center gap-10">
            <div className="w-64">
              <Counter
                inputValue={inputValue ? inputValue : item.count}
                setInputValue={setInputValue}
                step={1}
                label="عدد"
              />
            </div>
            <button
              type="button"
              className="flex items-center mb-5 gap-1 text-orange"
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
            value={54100000}
          />
        </span>
        <small className="text-sm pr-2">تومان</small>
      </p>

      <div className="flex justify-center pt-5">
        <button
          type="button"
          className="bg-orange text-white w-72 h-12 rounded-md"
          onClick={() => setActiveTab(2)}
        >
          ثبت سبد خرید
        </button>
      </div>
    </div>
  );
};

export default Basket;
