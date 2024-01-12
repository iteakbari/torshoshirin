import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import useSelectedComments from "@/hooks/useSelectedComments";

const BlogCommentSwiper = () => {
  const { data } = useSelectedComments();
  return (
    data && (
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1124: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        //   modules={[Pagination]}
        className="w-full py-5"
      >
        {data?.data?.map((b) => (
          <SwiperSlide key={b.id}>
            <div className="bg-white rounded-2xl p-10 shadow-lg">
              <p className="font-bold text-xl">{b?.name}</p>
              <p className="line-clamp-4 pt-3">{b?.commentText}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    )
  );
};

export default BlogCommentSwiper;
