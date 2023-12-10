"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

const IntroSwiper = () => {
  return (
    <Swiper
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        650: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      modules={[Autoplay]}
    >
      <SwiperSlide>
        <div className="grid justify-center">
          <Image
            width={200}
            height={200}
            alt=""
            src="https://admin.torshoshirin.com/files/react-img/f1.png"
            className="w-36"
          />
          <p className="font-bold text-center text-4xl mt-4">تازگی</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="grid justify-center">
          <Image
            width={200}
            height={200}
            alt=""
            src="https://admin.torshoshirin.com/files/react-img/f2.png"
            className="w-36"
          />
          <p className="font-bold text-center text-4xl mt-4">تنوع</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="grid justify-center">
          <Image
            width={200}
            height={200}
            alt=""
            src="https://admin.torshoshirin.com/files/react-img/basket.png"
            className="w-36"
          />
          <p className="font-bold text-center text-4xl mt-4">خرید آسان</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default IntroSwiper;
