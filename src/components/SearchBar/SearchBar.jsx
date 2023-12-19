"use client";
import { searchProduct } from "@/services/productService";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
  const { data, mutateAsync: searchProductFunc } = useMutation({
    mutationFn: searchProduct,
  });

  const searchProductHandler = (e) => {
    setSearchValue(e.target.value);
    const { data } = searchProductFunc({
      categoryId: null,
      brandId: null,
      barcode: "",
      keyWord: e.target.value,
      step: 1,
      pageSize: 20,
      totalCount: 0,
    });
  };

  const searchList = data?.data?.data?.data?.productlist;
  console.log(searchList);

  return (
    <>
      <div></div>
      <div className="searchBar">
        <form className="relative z-20">
          <input
            type="search"
            placeholder="جستجو در محصولات"
            className="rounded-full outline-none px-3 bg-transparent"
            onChange={(e) => searchProductHandler(e)}
          />
          {!searchValue && (
            <svg
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-2 top-2"
            >
              <path
                d="M24.75 21.6783L26.8638 23.7922C27.7121 24.6404 27.7121 26.0156 26.8638 26.8638C26.0156 27.7121 24.6404 27.7121 23.7922 26.8638L21.6783 24.75M5.5 14.85C5.5 9.68614 9.68613 5.5 14.85 5.5C20.0138 5.5 24.2 9.68614 24.2 14.85C24.2 20.0139 20.0138 24.2 14.85 24.2C9.68613 24.2 5.5 20.0139 5.5 14.85Z"
                stroke="#A6B2A8"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </form>
        <div
          className={`w-full border-2  rounded-3xl transition-all duration-300 z-10 bg-white absolute top-0 left-0 right-0 ${
            searchValue.length > 0
              ? "h-80 border-color-green"
              : "h-0 border-transparent"
          }`}
        ></div>
      </div>
    </>
  );
}
