"use client";
import Counter from "@/common/Counter";
import Image from "next/image";
import { NumericFormat } from "react-number-format";

const ProductDetails = ({ params }) => {
  return (
    <div className="py-16 grid grid-cols-4">
      <div className="col-span-3 bg-white py-7 px-12 shadow-sm rounded-lg">
        <div className="grid grid-cols-3">
          <div className="relative">
            <label>
              <input type="checkbox" name="favorite" id="" className="hidden" />
              <svg
                width="35"
                height="32"
                viewBox="0 0 35 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer absolute top-3 right-3"
              >
                <path
                  d="M17.7077 5.19672C17.6042 5.33246 17.3961 5.33246 17.2927 5.19672C13.6238 0.382228 7.84966 -0.139009 4.26259 3.63301C0.607133 7.47693 0.607132 13.7092 4.26259 17.5531L15.5145 29.3852C16.6112 30.5384 18.3892 30.5384 19.4858 29.3852L30.7377 17.5531C34.3932 13.7092 34.3932 7.47693 30.7377 3.63301C27.1507 -0.139009 21.3766 0.382228 17.7077 5.19672Z"
                  stroke="#DB7267"
                  strokeWidth="2"
                />
              </svg>
            </label>
            <Image src="" alt="" width={300} height={260} />
          </div>
          <div className="col-span-2 bg-light-gray rounded-lg py-10 px-7">
            <div className="flex justify-between">
              <p>سیب زمینی شیرین بنفش</p>
              <p className="text-orange">
                کیلویی
                <NumericFormat
                  thousandSeparator=","
                  value={125400}
                  displayType="text"
                  className="px-1"
                />
                تومان
              </p>
            </div>
            <div className="flex gap-7 mt-8 justify-center border-b">
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
        <div className="mt-14">
          <div className="flex gap-5">
            <span className="text-xl">فواید</span>
            <p></p>
          </div>
          <div className="flex gap-5 mt-7">
            <span className="text-xl">ویژگی‌ها</span>
            <p></p>
          </div>
          <div className="flex gap-5 mt-7">
            <span className="text-xl">نحوه‌ی مصرف</span>
            <p></p>
          </div>
        </div>
      </div>
      <div>
        <p className="py-8 text-center text-xl">محصولات جدید</p>
        <ul>
          <li>
            <div className="border-t border-r flex items-center p-3">
              <div className="flex justify-center items-center w-1/2">
                <Image width={100} height={100} alt="" src="" />
              </div>
              <div className="w-1/2 flex items-center">
                <p className="price">
                  <span>هر بسته</span>
                  <NumericFormat
                    displayType="text"
                    value={123500}
                    thousandSeparator=","
                  />
                  <span>تومان</span>
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="border-t border-r flex items-center p-3">
              <div className="flex justify-center items-center w-1/2">
                <Image width={100} height={100} alt="" src="" />
              </div>
              <div className="w-1/2 flex items-center">
                <p className="price">
                  <span>هر بسته</span>
                  <NumericFormat
                    displayType="text"
                    value={123500}
                    thousandSeparator=","
                  />
                  <span>تومان</span>
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="border-t border-r flex items-center p-3">
              <div className="flex justify-center items-center w-1/2">
                <Image width={100} height={100} alt="" src="" />
              </div>
              <div className="w-1/2 flex items-center">
                <p className="price">
                  <span>هر بسته</span>
                  <NumericFormat
                    displayType="text"
                    value={123500}
                    thousandSeparator=","
                  />
                  <span>تومان</span>
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="border-t border-r flex items-center p-3">
              <div className="flex justify-center items-center w-1/2">
                <Image width={100} height={100} alt="" src="" />
              </div>
              <div className="w-1/2 flex items-center">
                <p className="price">
                  <span>هر بسته</span>
                  <NumericFormat
                    displayType="text"
                    value={123500}
                    thousandSeparator=","
                  />
                  <span>تومان</span>
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="border-t border-r flex items-center p-3 ">
              <div className="flex justify-center items-center w-1/2">
                <Image width={100} height={100} alt="" src="" />
              </div>
              <div className="w-1/2 flex items-center">
                <p className="price">
                  <span>هر بسته</span>
                  <NumericFormat
                    displayType="text"
                    value={123500}
                    thousandSeparator=","
                  />
                  <span>تومان</span>
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductDetails;
