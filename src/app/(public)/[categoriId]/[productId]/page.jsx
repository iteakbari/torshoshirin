"use client";
import Comment from "@/components/Comment/Comment";
import HorizontalCard from "@/components/HorizontalCard/HorizontalCard";
import NewProducts from "@/components/Product/NewProducts";
import useProduct from "@/hooks/useProduct";
import { getProduct } from "@/services/productService";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const ProductDetails = ({ params }) => {
  const { data } = useProduct(params.productId);

  const product = data?.data?.data?.data;

  return (
    <>
      <div className="py-16 grid grid-cols-1 lg:grid-cols-4">
        <div className="col-span-3 bg-white py-7 px-5 md:px-12 shadow-sm rounded-lg">
          <HorizontalCard {...product} />
          <div className="mt-16">
            <div className="flex gap-5">
              <span className="text-xl">فواید</span>
              <p></p>
            </div>
            <div className="flex gap-5 mt-7">
              <span className="text-xl">ویژگی‌ها</span>
              <p></p>
            </div>
            <div className="flex gap-5 mt-7">
              <span className="text-xl">نحوه‌ی مصرف</span>
              <p></p>
            </div>
          </div>
        </div>
        <div className="md:hidden lg:block">
          <p className="py-8 text-center text-xl">محصولات جدید</p>
          <NewProducts />
        </div>
      </div>
      <p className="text-xl">محصولات مرتبط</p>
      <div className="mt-5 bg-white"></div>

      <div className="flex flex-col items-center">
        <p className="mt-10 text-center">
          نظرتون در مورد این محصول چیه؟ 🍊 با ما به اشتراک بگذارین!
        </p>
        <Comment />
      </div>
    </>
  );
};

export default ProductDetails;
