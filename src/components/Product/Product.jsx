import Counter from "@/common/Counter";
import { ShopContext } from "@/context/shopContext";
import useGetProfile from "@/hooks/useGetProfile";
import useProduct from "@/hooks/useProduct";
import { likeProduct } from "@/services/likeProduct";
import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { NumericFormat } from "react-number-format";

const Product = (product) => {
  const {
    productId,
    pathImage,
    salePrice,
    productName,
    unitCountingId,
    isFavorite,
    categoriId,
  } = product;
  const [favorite, setFavorite] = useState(isFavorite);
  const [inputValue, setInputValue] = useState(0);
  const [inputValue2, setInputValue2] = useState(0);
  const [added, setAdded] = useState(false);
  const { data, mutateAsync: likedProduct } = useMutation({
    mutationFn: likeProduct,
  });
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);

  const token = Cookies.get("token");

  const favoriteHandler = async () => {
    if (token != null && token != "null") {
      const data = await likedProduct({ productId, token });
      setFavorite(!favorite);
      favorite
        ? toast.custom((t) => (
            <div className="bg-slate-50 p-7 rounded-3xl shadow-lg">
              {productName} از لیست علاقمندی‌های شما حذف شد.
            </div>
          ))
        : toast.custom((t) => (
            <div className="bg-slate-50 p-7 rounded-3xl shadow-lg">
              <div className="flex items-center gap-5">
                <svg
                  width="35"
                  height="32"
                  viewBox="0 0 35 32"
                  fill="#DB7267"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.7077 5.19672C17.6042 5.33246 17.3961 5.33246 17.2927 5.19672C13.6238 0.382228 7.84966 -0.139009 4.26259 3.63301C0.607133 7.47693 0.607132 13.7092 4.26259 17.5531L15.5145 29.3852C16.6112 30.5384 18.3892 30.5384 19.4858 29.3852L30.7377 17.5531C34.3932 13.7092 34.3932 7.47693 30.7377 3.63301C27.1507 -0.139009 21.3766 0.382228 17.7077 5.19672Z"
                    stroke="#DB7267"
                    strokeWidth="2"
                  />
                </svg>
                <p>{productName} به لیست عللاقه‌مندی‌های شما اضافه شد.</p>
              </div>
              <div className="w-full flex justify-center pt-5">
                <Link href="">مشاهده‌ی لیست علاقه‌مندی‌ها</Link>
              </div>
            </div>
          ));
    } else {
      toast.custom((t) => (
        <div className="bg-slate-50 p-7 rounded-3xl shadow-lg">
          لطفا ابتدا به سایت وارد شوید.
          <div className="w-full flex justify-center pt-5">
            <Link href="/sign">ورود</Link>
          </div>
        </div>
      ));
    }
  };

  return (
    <div className="card bg-transparent relative">
      <label>
        <input
          type="checkbox"
          name="favorite"
          id=""
          // value="favorite"
          onChange={favoriteHandler}
          className="hidden"
        />
        <svg
          width="35"
          height="32"
          viewBox="0 0 35 32"
          fill={`${favorite ? "#DB7267" : "none"}`}
          xmlns="http://www.w3.org/2000/svg"
          className="cursor-pointer absolute top-3 left-3 z-10"
        >
          <path
            d="M17.7077 5.19672C17.6042 5.33246 17.3961 5.33246 17.2927 5.19672C13.6238 0.382228 7.84966 -0.139009 4.26259 3.63301C0.607133 7.47693 0.607132 13.7092 4.26259 17.5531L15.5145 29.3852C16.6112 30.5384 18.3892 30.5384 19.4858 29.3852L30.7377 17.5531C34.3932 13.7092 34.3932 7.47693 30.7377 3.63301C27.1507 -0.139009 21.3766 0.382228 17.7077 5.19672Z"
            stroke="#DB7267"
            strokeWidth="2"
          />
        </svg>
      </label>
      <Link href="" className="flex justify-center">
        <Image width={200} height={200} alt="" src={pathImage} />
      </Link>
      <div className="flex justify-between items-center">
        <Link href={`/${categoriId}/${productId}`}>{productName}</Link>
        <p className="price">
          <span>
            هر{" "}
            {unitCountingId === 1
              ? "عدد"
              : unitCountingId === 2
              ? "کیلو"
              : "بسته"}
          </span>
          <NumericFormat
            displayType="text"
            value={salePrice}
            thousandSeparator=","
          />
          <span>تومان</span>
        </p>
      </div>
      <div className="bg-light-gray p-5 mt-3 rounded-xl h-56 flex flex-col justify-end">
        {unitCountingId === 1 ? (
          <>
            <p className="pb-7 text-color-light">تعداد</p>
            <Counter
              inputValue={inputValue}
              setInputValue={setInputValue}
              step={1}
              label="عدد"
              product={product}
              inputValue2={inputValue2}
            />
          </>
        ) : unitCountingId === 2 ? (
          <>
            <Counter
              inputValue={inputValue}
              setInputValue={setInputValue}
              step={1}
              label="کیلوگرم"
            />
            <Counter
              inputValue={inputValue2}
              setInputValue={setInputValue2}
              step={250}
              label="گرم"
            />
          </>
        ) : (
          <>
            <p className="pb-7 text-color-light">تعداد</p>
            <Counter
              inputValue={inputValue}
              setInputValue={setInputValue}
              step={1}
              label="بسته"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Product;

// const addToBasketHandler = (
//   k,
//   g,
//   salePrice,
//   pathImage,
//   productId,
//   productName
// ) => {
//   const cartItem = { productId, productName, pathImage, salePrice, k, g };

//   cart.push(cartItem);
//   localStorage.setItem("cart", JSON.stringify(cart));

//   (k || g) &&
//     toast.custom((t) => (
//       <div className="bg-slate-50 p-7 rounded-3xl shadow-lg">
//         <p className="text-xl">
//           {k > 0 && (
//             <span>
//               <span className="text-orange">{k}</span>{" "}
//               <span>
//                 {unitCountingId === 1
//                   ? "عدد"
//                   : unitCountingId === 2
//                   ? "کیلوگرم"
//                   : "بسته"}
//               </span>
//             </span>
//           )}{" "}
//           {k > 0 && g > 0 && "و"}{" "}
//           {g > 0 && (
//             <span>
//               <span className="text-orange">{g}</span> گرم
//             </span>
//           )}{" "}
//           {productName} به سبد خرید شما اضافه شد
//         </p>
//       </div>
//     ));
// };
