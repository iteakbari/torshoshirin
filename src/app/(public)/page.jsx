import CategoriesList from "@/components/Category/CategorisList";
import { Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main>
        <div className="lg:px-26 py-20 h-max">
          <Grid container spacing={2} className="flex items-center">
            <Grid item md={6}>
              <div className="grid justify-items-center place-content-center">
                <p className="text-center text-6xl font-extrabold leading-relaxed">
                  ما بهترین‌ کیفیت رو در <br /> ساری به دستتون می‌رسونیم.
                </p>
                <p className="text-center text-4xl font-bold py-5">
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
            </Grid>
            <Grid item md={6} className="flex justify-center">
              <Image
                src="/assets/img/ill.png"
                width={300}
                height={300}
                alt="illustration"
                className="w-4/6"
              />
            </Grid>
          </Grid>

          <div className="px-10 py-16 bg-light-green rounded-full flex justify-around my-24">
            <div className="grid">
              <Image
                width={200}
                height={200}
                alt=""
                src="/assets/img/f1.png"
                className="w-36"
              />
              <p className="font-bold text-center text-4xl mt-4">تازگی</p>
            </div>
            <div className="grid">
              <Image
                width={200}
                height={200}
                alt=""
                src="/assets/img/f2.png"
                className="w-36"
              />
              <p className="font-bold text-center text-4xl mt-4">تنوع</p>
            </div>
            <div className="grid">
              <Image
                width={200}
                height={200}
                alt=""
                src="/assets/img/basket.png"
                className="w-36"
              />
              <p className="font-bold text-center text-4xl mt-4">خرید آسان</p>
            </div>
          </div>

          <CategoriesList />
        </div>
      </main>
    </>
  );
}
