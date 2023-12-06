"use client";

import Login from "@/components/Login/Login";
import SwiperSlider from "@/components/Swiper/SwiperSlider";
import Image from "next/image";

const Sign = () => {
  return (
    <div className="lg:px-32 py-20">
      <div className="flex">
        <div className="w-3/6">
          <Image
            src="/assets/img/logo.png"
            width={270}
            height={150}
            alt="logo"
          />
          <h3 className="text-3xl font-bold py-10">خرید آسان و مطمئن</h3>
          <SwiperSlider />
        </div>
        <div className="w-3/6">
          <Login />
        </div>
      </div>
    </div>
  );
};

export default Sign;
