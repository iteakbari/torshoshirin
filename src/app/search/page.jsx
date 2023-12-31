"use client";
import Product from "@/components/Product/Product";
import useProducts from "@/hooks/useProducts";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
// import Cookies from "js-cookie";
import ProductLoading from "@/components/Product/ProductLoading";
import { searchProduct } from "@/services/productService";
import { useMutation } from "@tanstack/react-query";
import SearchBar from "@/components/SearchBar/SearchBar";

const SearchProducts = ({ searchParams }) => {
  const [step, setStep] = useState(1);
  const [sortBy, setSortBy] = useState("cheapest");
  const { isLoading, mutateAsync: searchProductFunc } = useMutation({
    mutationFn: searchProduct,
  });
  const [searchList, setSearchList] = useState();

  const para = searchParams.keyword;

  const searchProductHandler = async (para) => {
    const { data } = await searchProductFunc({
      categoryId: null,
      brandId: null,
      barcode: "",
      keyWord: para,
      step: 1,
      pageSize: 20,
      totalCount: 0,
    });
    // console.log(data);
    setSearchList(data?.productlist);
  };

  useEffect(() => {
    searchProductHandler(para);
  }, [para]);

  //   const productsList = data?.productlist;
  //   const productsCount = data?.totalCount;

  //   const pageEnd = Math.floor(productsCount / 2);

  //   const sortProductHandler = (e) => {
  //     setSortBy(e.target.value);
  //   };

  //   let sortedProductList = [];

  //   if (productsList) {
  //     sortedProductList = Object.values(productsList);

  //     if (sortBy === "cheapest")
  //       sortedProductList.sort((a, b) => a.salePrice - b.salePrice);
  //     if (sortBy === "expensive")
  //       sortedProductList.sort((a, b) => b.salePrice - a.salePrice);
  //   }

  return (
    <div className="container lg:px-10 2xl:px-0 mx-auto pt-24">
      <div className="py-16">
        <div className="lg:hidden">
          <SearchBar />
        </div>
        <div className="sm:flex justify-between px-3 mt-5 lg:mt-0">
          {para && (
            <h1 className="text-xl sm:text-2xl lg:text-3xl  sm:text-right flex-1 mb-5 sm:mb-0">
              جستجو برای <span className="text-orange">{para}</span>
            </h1>
          )}
          <div className="flex items-center md:items-end gap-5">
            <p className="flex items-end gap-3">
              <svg
                className="w-8 h-6 md:w-10 md:h-8"
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
              <span className="text-base md:text-xl">مرتب‌سازی بر اساس:</span>
            </p>
            <div className="flex gap-5">
              <div className="sort-input">
                <input
                  type="radio"
                  name="sort"
                  id="cheapest"
                  className="hidden"
                  value="cheapest"
                  //   onChange={sortProductHandler}
                />
                <label
                  className="text-base md:text-xl cursor-pointer"
                  htmlFor="cheapest"
                >
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
                  //   onChange={sortProductHandler}
                />
                <label
                  htmlFor="expensive"
                  className="text-base md:text-xl cursor-pointer"
                >
                  گران‌ترین
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-10 rounded-xl shadow mt-10 ">
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 h-full">
              <ProductLoading />
            </div>
          ) : searchList?.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 h-full">
                {searchList.map((product) => (
                  <Product
                    key={product.productId}
                    {...product}
                    categoriId={product.categoryId}
                  />
                ))}
              </div>

              {/* <div className="flex justify-center items-center mt-10 gap-1">
                <button
                  className={`border py-2 px-5 ${
                    step === 1 && "pointer-events-none text-light"
                  }`}
                  onClick={() => setStep((step) => step - 1)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      stroke={`${step === 1 ? "#e5eec3" : "#1a3622"}`}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      strokeWidth="1.5"
                      d="M14.43 5.93L20.5 12l-6.07 6.07M3.5 12h16.83"
                    ></path>
                  </svg>
                </button>
                <span className="inline-block p-2 border">{step}</span>
                <button
                  className={`border py-2 px-5 ${
                    step === pageEnd + 1 && "pointer-events-none text-light"
                  }`}
                  onClick={() => setStep((step) => step + 1)}
                  disabled={step === 10}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      stroke={`${step === pageEnd + 1 ? "#e5eec3" : "#1a3622"}`}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      strokeWidth="1.5"
                      d="M9.57 5.93L3.5 12l6.07 6.07M20.5 12H3.67"
                    ></path>
                  </svg>
                </button>
              </div> */}
            </>
          ) : (
            <div className="w-full h-full flex justify-center items-center flex-col min-h-700">
              <p className="text-center mb-10 text-light text-xl">
                محصولی در این دسته بندی ثبت نشده است.
              </p>
              <Image
                src="https://admin.torshoshirin.com/files/react-img/b2.png"
                width={300}
                height={300}
                alt="basket image"
              />
              <Link href="/" className="mt-10">
                بازگشت
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchProducts;
