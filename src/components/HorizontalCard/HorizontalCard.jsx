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

const HorizontalCard = ({
  farsiName,
  moreImages,
  salePrice,
  isFavorite,
  id,
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [favorite, setFavorite] = useState(isFavorite);

  const favoriteHandler = () => {
    setFavorite(!favorite);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
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
                <Image width={300} height={260} alt="" src={item.mainSize} />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            spaceBetween={10}
            slidesPerView={3}
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
      <div className="col-span-2 bg-light-gray rounded-lg py-10 px-7 mt-5 md:mt-0">
        <div className="flex justify-between">
          <p>{farsiName}</p>
          <p className="text-orange">
            کیلویی
            <NumericFormat
              thousandSeparator=","
              value={salePrice}
              displayType="text"
              className="px-1"
            />
            تومان
          </p>
        </div>
        <div className="flex gap-7 mt-8 justify-center border-b flex-wrap">
          <Counter step={1} label="کیلوگرم" />
          <Counter step={250} label="گرم" />
        </div>
        <p className="text-center py-3">
          <NumericFormat
            value={0}
            thousandSeparator=","
            displayType="text"
            className="ml-1"
          />
          تومان
        </p>
        <div className="flex justify-center">
          <button
            type="button"
            className="w-56 mx-auto bg-orange h-12 rounded-xl"
          >
            افزودن به سبد خرید
          </button>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCard;
