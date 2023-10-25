import Head from "next/head";
import Image from "next/image";

const CategoryPage = ({ params }) => {
  const cId = params.categoriId.split("-");
  const cName = decodeURI(cId[0]);
  const id = cId[1];
  return (
    <>
      <Head>
        <meta charset="utf-8" class="next-head"></meta>
      </Head>
      <div className="py-16">
        <div className="flex justify-between">
          <h1 className="text-3xl">{cName}</h1>
          <div className="flex items-end gap-5">
            <p className="flex items-end gap-3">
              <svg
                width="40"
                height="32"
                viewBox="0 0 44 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5 2C13.5 1.17157 12.8284 0.5 12 0.5C11.1716 0.5 10.5 1.17157 10.5 2L13.5 2ZM10.9393 30.0607C11.5251 30.6464 12.4749 30.6464 13.0607 30.0607L22.6066 20.5147C23.1924 19.9289 23.1924 18.9792 22.6066 18.3934C22.0208 17.8076 21.0711 17.8076 20.4853 18.3934L12 26.8787L3.51472 18.3934C2.92893 17.8076 1.97918 17.8076 1.3934 18.3934C0.807611 18.9792 0.807611 19.9289 1.3934 20.5147L10.9393 30.0607ZM10.5 2L10.5 29L13.5 29L13.5 2L10.5 2Z"
                  fill="#1A3622"
                />
                <line
                  x1="13.5"
                  y1="34.5"
                  x2="42.5"
                  y2="34.5"
                  stroke="#1A3622"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <line
                  x1="26.5"
                  y1="26.5"
                  x2="42.5"
                  y2="26.5"
                  stroke="#1A3622"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <line
                  x1="31.5"
                  y1="18.5"
                  x2="42.5"
                  y2="18.5"
                  stroke="#1A3622"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
              <span className="text-xl">مرتب‌سازی بر اساس:</span>
            </p>
            <div className="flex gap-5">
              <div className="sort-input">
                <input
                  type="radio"
                  name="sort"
                  id="cheapest"
                  className="hidden"
                />
                <label className="text-xl cursor-pointer" htmlFor="cheapest">
                  ارزان‌ترین
                </label>
              </div>
              <div className="sort-input">
                <input
                  type="radio"
                  name="sort"
                  id="expensive"
                  className="hidden"
                />
                <label htmlFor="expensive" className="text-xl cursor-pointer">
                  گران‌ترین
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-5 rounded-xl shadow mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <div className="card bg-transparent relative">
              <div className="flex justify-center">
                <Image
                  width={200}
                  height={200}
                  alt=""
                  src="/assets/img/dragon.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
