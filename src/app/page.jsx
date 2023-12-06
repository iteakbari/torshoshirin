import CategoriesList from "@/components/Category/CategorisList";
import IntroSwiper from "@/components/Swiper/IntroSwiper";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container lg:px-10 2xl:px-0 mx-auto">
      <main>
        <div className="lg:px-26 py-0 h-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid justify-items-center place-content-center">
                <p className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-extrabold leading-relaxed sm:leading-loose leading-md">
                  ما بهترین‌ کیفیت رو در <br /> ساری به دستتون می‌رسونیم.
                </p>
                <p className="text-center text-2xl md:text-4xl font-bold py-5">
                  میوه‌های خاص با ترش‌وشیرین
                </p>
                <p className="text-center text-3xl">ارسال به سراسر ایران</p>
                <Link
                  href="/category"
                  className="btn btn-primary w-60 h-12 mt-5"
                >
                  سفارش بده!
                </Link>
              </div>
            </div>
            <div className="flex justify-center xl:mt-16 mb-16 xl:mb-0 order-1 lg:order-2">
              <Image
                src="/assets/img/ill.png"
                width={300}
                height={300}
                alt="illustration"
                className="w-5/6 md:w-4/6"
              />
            </div>
          </div>

          <div className="px-10 sm:py-10 intro-swiper rounded-full  md:flex justify-around mt-16 mb-24">
            <IntroSwiper />
          </div>

          <CategoriesList />

          <div className="my-20 w-4/5 md:w-3/4 mx-auto pt-32">
            <Image
              src="/assets/img/banner.png"
              width={400}
              height={251}
              alt="instagram banner"
              className="w-full hidden md:block"
            />
            <Image
              src="/assets/img/mbanner.png"
              width={400}
              height={251}
              alt="instagram banner"
              className="w-full md:hidden"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
