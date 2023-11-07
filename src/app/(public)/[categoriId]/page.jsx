"use client";
import Product from "@/components/Product/Product";
import useProducts from "@/hooks/useProducts";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Loading from "../loading";

const CategoryPage = ({ params }) => {
  const [favorite, setFavorite] = useState(0);
  const [step, setStep] = useState(1);
  const [sortBy, setSortBy] = useState("cheapest");

  const cId = params.categoriId.split("-");
  const cName = decodeURI(cId[0]);
  const categoryId = cId[1];
  const pageSize = 2;
  const { data, isLoading } = useProducts({ categoryId, step, pageSize });

  const productsList = data?.data;

  const favoriteHandler = (id) => {
    const favoriteProduct = productsList.find((p) => p.productId === id);
    console.log(productsList.find((p) => p.productId));
    // setFavorite(!favoriteProduct.favorite);
    favorite
      ? toast.custom((t) => (
          <div className="bg-slate-50 p-7 rounded-3xl shadow-lg">
            شلغم از لیست علاقمندی‌های شما حذف شد.
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
              <p>شلغم به لیست عللاقه‌مندی‌های شما اضافه شد.</p>
            </div>
            <div className="w-full flex justify-center pt-5">
              <Link href="">مشاهده‌ی لیست علاقه‌مندی‌ها</Link>
            </div>
          </div>
        ));
  };

  const addToBasketHandler = (k, g) => {
    (k || g) &&
      toast.custom((t) => (
        <div className="bg-slate-50 p-7 rounded-3xl shadow-lg">
          <p className="text-xl">
            {k > 0 && (
              <span>
                <span className="text-orange">{k}</span> کیلوگرم
              </span>
            )}{" "}
            {k > 0 && g > 0 && "و"}{" "}
            {g > 0 && (
              <span>
                <span className="text-orange">{g}</span> گرم
              </span>
            )}{" "}
            شلغم به سبد خرید شما اضافه شد
          </p>
        </div>
      ));
  };

  const sortProductHandler = (e) => {
    setSortBy(e.target.value);
  };

  let sortedProductList = [];

  if (productsList) {
    sortedProductList = Object.values(productsList);

    if (sortBy === "cheapest")
      sortedProductList.sort((a, b) => a.salePrice - b.salePrice);
    if (sortBy === "expensive")
      sortedProductList.sort((a, b) => b.salePrice - a.salePrice);
  }

  return (
    <>
      <div className="py-16">
        <div className="flex justify-between">
          <h1 className="text-3xl">{cName}</h1>
          <div className="flex items-end gap-5">
            <p className="flex items-end gap-3">
              <svg
                width="40"
                height="32"
                viewBox="0 0 44 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5 2C13.5 1.17157 12.8284 0.5 12 0.5C11.1716 0.5 10.5 1.17157 10.5 2L13.5 2ZM10.9393 30.0607C11.5251 30.6464 12.4749 30.6464 13.0607 30.0607L22.6066 20.5147C23.1924 19.9289 23.1924 18.9792 22.6066 18.3934C22.0208 17.8076 21.0711 17.8076 20.4853 18.3934L12 26.8787L3.51472 18.3934C2.92893 17.8076 1.97918 17.8076 1.3934 18.3934C0.807611 18.9792 0.807611 19.9289 1.3934 20.5147L10.9393 30.0607ZM10.5 2L10.5 29L13.5 29L13.5 2L10.5 2Z"
                  fill="#1A3622"
                />
                <line
                  x1="13.5"
                  y1="34.5"
                  x2="42.5"
                  y2="34.5"
                  stroke="#1A3622"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <line
                  x1="26.5"
                  y1="26.5"
                  x2="42.5"
                  y2="26.5"
                  stroke="#1A3622"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <line
                  x1="31.5"
                  y1="18.5"
                  x2="42.5"
                  y2="18.5"
                  stroke="#1A3622"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
              <span className="text-xl">مرتب‌سازی بر اساس:</span>
            </p>
            <div className="flex gap-5">
              <div className="sort-input">
                <input
                  type="radio"
                  name="sort"
                  id="cheapest"
                  className="hidden"
                  value="cheapest"
                  onChange={sortProductHandler}
                />
                <label className="text-xl cursor-pointer" htmlFor="cheapest">
                  ارزان‌ترین
                </label>
              </div>
              <div className="sort-input">
                <input
                  type="radio"
                  name="sort"
                  id="expensive"
                  className="hidden"
                  value="expensive"
                  onChange={sortProductHandler}
                />
                <label htmlFor="expensive" className="text-xl cursor-pointer">
                  گران‌ترین
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-10 rounded-xl shadow mt-10 ">
          {isLoading ? (
            <Loading />
          ) : sortedProductList.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-16 h-full">
                {sortedProductList.map((product) => (
                  <Product
                    key={product.productId}
                    favoriteHandler={favoriteHandler}
                    {...product}
                    categoriId={params.categoriId}
                  />
                ))}
              </div>

              <div className="flex justify-center items-center mt-10 gap-1">
                <button
                  className="border py-2 px-5"
                  onClick={() => setStep((step) => step - 1)}
                  disabled={step === 1}
                >
                  prev
                </button>
                <span className="inline-block p-2 border">{step}</span>
                <button
                  className="border py-2 px-5"
                  onClick={() => setStep((step) => step + 1)}
                  disabled={step === 10}
                >
                  next
                </button>
              </div>
            </>
          ) : (
            <div className="w-full h-full flex justify-center items-center flex-col min-h-700">
              <p className="text-center mb-10 text-light text-xl">
                محصولی در این دسته بندی ثبت نشده است.
              </p>
              <Image
                src="/assets/img/b2.png"
                width={300}
                height={300}
                alt="basket image"
              />
              <Link href="/">بازگشت</Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
