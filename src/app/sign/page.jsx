"use client";

import Login from "@/components/Login/Login";
import SwiperSlider from "@/components/Swiper/SwiperSlider";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Image from "next/image";

const Sign = () => {
  return (
    <div className="lg:px-32 py-20">
      <Grid2 container spacing={2}>
        <Grid2 md={6}>
          <Image
            src="/assets/img/logo.png"
            width={270}
            height={150}
            alt="logo"
          />
          <h3 className="text-3xl font-bold py-10">خرید آسان و مطمئن</h3>
          <SwiperSlider />
        </Grid2>
        <Grid2 md={5}>
          <Login />
        </Grid2>
      </Grid2>
    </div>
  );
};

export default Sign;
