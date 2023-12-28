"use client";
import { ShopContext } from "@/context/shopContext";
import useGetProfile from "@/hooks/useGetProfile";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";

const GramsCounter = ({ product, weight }) => {
  const { cartItems, addToCart, reduceFromCart, removeFromCart } =
    useContext(ShopContext);
  const {
    productId,
    pathImage,
    salePrice,
    productName,
    unitCountingId,
    variantId,
    stock,
    step,
    categoryId,
  } = product || "";

  const s = step || 250;
  const [kilo, setKilo] = useState(0);
  const [grams, setGrams] = useState(0);
  const [showBtn, setShowBtn] = useState(true);
  const [token, setToken] = useState("");
  const [w, setW] = useState(0);
  useEffect(() => {
    const getToken = Cookies.get("token") ? Cookies.get("token") : null;
    setToken(getToken);
  }, []);
  const { data } = useGetProfile(token);

  useEffect(() => {
    if (weight) {
      const integerPart = Math.floor(weight);
      const decimalPart = (weight - integerPart).toFixed(2);
      // console.log(weight, integerPart, decimalPart);
      setKilo(+integerPart);
      setGrams(+decimalPart * 1000);
      setShowBtn(false);
    }
  }, []);

  const kiloIncrementHandler = () => {
    setKilo((k) => k + 1);
    addToCart({
      productId: productId ? productId : product.id,
      pathImage: pathImage ? pathImage : product.mainImage,
      categoryId: categoryId ? categoryId : productId.categoryId,
      salePrice: salePrice ? +salePrice : product.price,
      productName: productName ? productName : product.farsiName,
      variantId: variantId ? variantId : product.variantId,
      unitCountingId: unitCountingId ? unitCountingId : product.UCI,
      step: s,
      totalValue: kilo + 1 + grams / 1000,
    });
  };

  const kiloDecrementHandler = () => {
    kilo >= 0 && setKilo((k) => k - 1);

    reduceFromCart({
      productId: productId ? productId : product.id,
      pathImage: pathImage ? pathImage : product.mainImage,
      categoryId: categoryId ? categoryId : productId.categoryId,
      salePrice: salePrice ? salePrice : product.price,
      productName: productName ? productName : product.farsiName,
      variantId: variantId ? variantId : product.variantId,
      unitCountingId: unitCountingId ? unitCountingId : product.UCI,
      step: s,
      totalValue: kilo - 1 + grams / 1000,
    });

    if (kilo - 1 < 1 && grams === 0) {
      removeFromCart(productId || product.id);
    }
  };

  const gramsIncrementHandler = () => {
    setGrams((g) => g + s);

    addToCart({
      productId: productId ? productId : product.id,
      salePrice: salePrice ? salePrice : product.price,
      unitCountingId: unitCountingId ? unitCountingId : product.UCI,
      variantId: variantId ? variantId : product.variantId,
      totalValue: (grams + s) / 1000 + kilo,
    });
  };

  const gramsDecrementHandler = () => {
    grams > 0 && setGrams((g) => g - s);
    reduceFromCart({
      productId: productId ? productId : product.id,
      salePrice: salePrice ? salePrice : product.price,
      unitCountingId: unitCountingId ? unitCountingId : product.UCI,
      variantId: variantId ? variantId : product.variantId,
      totalValue: (grams - s) / 1000 + kilo,
    });

    if (kilo === 0 && grams - s < s) {
      removeFromCart(productId || product.id);
    }
  };

  useEffect(() => {
    setW(kilo + grams);
    // if (kilo === 0 && grams === 0) {
    //   removeFromCart(productId || product.id);
    // }
  }, [grams, kilo]);

  // console.log(kilo, grams);

  const router = useRouter();
  const cartHandler = () => {
    data?.success ? router.push("/purchase") : router.push("/sign");
  };

  return (
    <div className="flex justify-between items-center gap-2 flex-1">
      <div className={`${kilo === 0 && grams === 0 && "w-full"}`}>
        {w > 0 && <p className="text-sm text-center">کیلو</p>}
        <div className="flex justify-between items-center gap-2">
          <button
            type="button"
            onClick={() => kiloIncrementHandler()}
            className={`${kilo === 0 && grams === 0 && "w-full"} ${
              kilo >= stock && "disable"
            }`}
          >
            {kilo > 0 || grams > 0 ? (
              <svg
                width="40"
                height="40"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  opacity="0.3"
                  x="1"
                  y="1"
                  width="40"
                  height="40"
                  rx="20"
                  stroke="#DB7267"
                  strokeWidth="2"
                />
                <rect
                  x="15"
                  y="20"
                  width="12"
                  height="2"
                  rx="1"
                  fill="#DB7267"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22 15.75V26.25C22 26.6642 21.5523 27 21 27C20.4477 27 20 26.6642 20 26.25V15.75C20 15.3358 20.4477 15 21 15C21.5523 15 22 15.3358 22 15.75Z"
                  fill="#DB7267"
                />
              </svg>
            ) : (
              grams === 0 && (
                <span className="w-full flex h-12 bg-orange text-white rounded-md justify-center items-center">
                  افزودن به سبد خرید
                </span>
              )
            )}
          </button>

          {w > 0 && (
            <>
              <NumericFormat
                thousandSeparator=","
                className="text-center bg-transparent w-7 h-10 text-sm flex justify-center items-center"
                placeholder="0"
                displayType="text"
                value={kilo}
                // onValueChange={(values) => setKilo(+values.value)}
              />
              <button type="button" onClick={() => kiloDecrementHandler()}>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 42 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    opacity="0.3"
                    x="1"
                    y="1"
                    width="40"
                    height="40"
                    rx="20"
                    stroke="#DB7267"
                  />
                  <rect
                    x="15"
                    y="20"
                    width="12"
                    height="2"
                    rx="1"
                    fill="#DB7267"
                  />
                </svg>
              </button>
            </>
          )}
        </div>
      </div>
      {w > 0 && (
        <>
          <div>
            <p className="text-sm text-center">گرم</p>
            <div className="flex justify-between items-center gap-2">
              <button
                type="button"
                className={`${grams === 1000 - s && "pointer-events-none"}`}
                onClick={() => gramsIncrementHandler()}
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 42 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    opacity="0.3"
                    x="1"
                    y="1"
                    width="40"
                    height="40"
                    rx="20"
                    stroke="#DB7267"
                    strokeWidth="2"
                  />
                  <rect
                    x="15"
                    y="20"
                    width="12"
                    height="2"
                    rx="1"
                    fill="#DB7267"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22 15.75V26.25C22 26.6642 21.5523 27 21 27C20.4477 27 20 26.6642 20 26.25V15.75C20 15.3358 20.4477 15 21 15C21.5523 15 22 15.3358 22 15.75Z"
                    fill="#DB7267"
                  />
                </svg>
              </button>
              <NumericFormat
                thousandSeparator=","
                className="text-center bg-transparent w-7 h-10 text-sm flex justify-center items-center"
                placeholder="0"
                value={grams}
                displayType="text"
                // onValueChange={(values) => setGrams(+values.value)}
              />
              <button
                type="button"
                onClick={() => gramsDecrementHandler()}
                className={`${grams === 0 && "disable"}`}
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 42 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    opacity="0.3"
                    x="1"
                    y="1"
                    width="40"
                    height="40"
                    rx="20"
                    stroke="#DB7267"
                  />
                  <rect
                    x="15"
                    y="20"
                    width="12"
                    height="2"
                    rx="1"
                    fill="#DB7267"
                  />
                </svg>
              </button>
            </div>
          </div>
          {showBtn && (
            <button
              className="w-10 h-10 mt-5 bg-orange text-white rounded-md hidden md:flex justify-center items-center"
              onClick={() => cartHandler()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-cart2"
                viewBox="0 0 16 16"
              >
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
              </svg>
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default GramsCounter;
