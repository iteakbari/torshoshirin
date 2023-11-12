"use client";

import Login from "@/components/Login/Login";
import SwiperSlider from "@/components/Swiper/SwiperSlider";
import { Grid } from "@mui/material";
import Image from "next/image";

const Sign = () => {
  return (
    <div className="lg:px-32 py-20">
      <Grid container spacing={2}>
        <Grid item md={6}>
          <Image
            src="/assets/img/logo.png"
            width={270}
            height={150}
            alt="logo"
          />
          <h3 className="text-3xl font-bold py-10">خرید آسان و مطمئن</h3>
          <SwiperSlider />
        </Grid>
        <Grid item md={5}>
          <Login />
        </Grid>
      </Grid>
    </div>
  );
};

export default Sign;
