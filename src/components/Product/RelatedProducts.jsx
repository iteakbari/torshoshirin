"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import useRelatedProducts from "@/hooks/useRelatedProducts";
import Product from "./Product";

const RelatedProducts = ({ categoryId }) => {
  const { data } = useRelatedProducts(categoryId);

  return (
    <Swiper slidesPerView={4.1} spaceBetween={30} className="w-full">
      {data?.data?.productlist?.map((item) => (
        <SwiperSlide key={item.productId}>
          <Product {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default RelatedProducts;
