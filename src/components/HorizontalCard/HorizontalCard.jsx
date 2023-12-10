import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";
import { NumericFormat } from "react-number-format";
import Counter from "@/common/Counter";
import GramsCounter from "@/common/GramsCounter";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import { likeProduct } from "@/services/likeProduct";

const HorizontalCard = ({
  farsiName,
  moreImages,
  salePrice,
  isFavorite,
  unitCountingId,
  id,
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [favorite, setFavorite] = useState(isFavorite);
  const { data, mutateAsync: likedProduct } = useMutation({
    mutationFn: likeProduct,
  });

  const token = Cookies.get("token");

  const favoriteHandler = async () => {
    if (token != null && token != "null") {
      const data = await likedProduct({ productId: id, token });
      setFavorite(!favorite);
      favorite
        ? toast.custom((t) => (
            <div className="bg-slate-50 p-7 rounded-3xl shadow-lg">
              {farsiName} از لیست علاقمندی‌های شما حذف شد.
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
                <p>{farsiName} به لیست عللاقه‌مندی‌های شما اضافه شد.</p>
              </div>
              <div className="w-full flex justify-center pt-5">
                <Link href="">مشاهده‌ی لیست علاقه‌مندی‌ها</Link>
              </div>
            </div>
          ));
    } else {
      toast.custom((t) => (
        <div className="bg-slate-50 p-7 rounded-3xl shadow-lg">
          لطفا ابتدا به سایت وارد شوید.
          <div className="w-full flex justify-center pt-5">
            <Link href="/sign">ورود</Link>
          </div>
        </div>
      ));
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="relative">
        <label>
          <input
            type="checkbox"
            name="favorite"
            id=""
            className="hidden"
            onChange={favoriteHandler}
          />
          <svg
            width="35"
            height="32"
            viewBox="0 0 35 32"
            fill={favorite ? "#DB7267" : "none"}
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer absolute top-3 right-3 z-20"
          >
            <path
              d="M17.7077 5.19672C17.6042 5.33246 17.3961 5.33246 17.2927 5.19672C13.6238 0.382228 7.84966 -0.139009 4.26259 3.63301C0.607133 7.47693 0.607132 13.7092 4.26259 17.5531L15.5145 29.3852C16.6112 30.5384 18.3892 30.5384 19.4858 29.3852L30.7377 17.5531C34.3932 13.7092 34.3932 7.47693 30.7377 3.63301C27.1507 -0.139009 21.3766 0.382228 17.7077 5.19672Z"
              stroke="#DB7267"
              strokeWidth="2"
            />
          </svg>
        </label>
        <>
          <Swiper
            spaceBetween={10}
            navigation={false}
            modules={[FreeMode, Navigation, Thumbs]}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            className="mainSwiper"
          >
            {moreImages?.map((item, index) => (
              <SwiperSlide key={index}>
                <Image
                  width={300}
                  height={260}
                  alt=""
                  className="w-full"
                  src={item.mainSize}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress
            modules={[FreeMode, Navigation, Thumbs]}
            onSwiper={setThumbsSwiper}
            className="mt-5 thumbSwiper"
            navigation={true}
          >
            {moreImages?.map((item, index) => (
              <SwiperSlide key={index}>
                <Image width={300} height={260} alt="" src={item.mainSize} />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      </div>
      <div className="py-10 px-7 mt-5 md:mt-0 flex flex-col justify-center items-center gap-5">
        <p className="text-xl">{farsiName}</p>
        <p className="text-orange text-xl">
          کیلویی
          <NumericFormat
            thousandSeparator=","
            value={salePrice}
            displayType="text"
            className="px-1"
          />
          ریال
        </p>
        <div className="flex gap-7 mt-8 justify-center flex-wrap w-96">
          {unitCountingId === 1 ? (
            <Counter step={1} label="عدد" />
          ) : unitCountingId === 2 ? (
            <GramsCounter />
          ) : (
            <Counter step={1} label="بسته" />
          )}
        </div>
      </div>
    </div>
  );
};

export default HorizontalCard;
