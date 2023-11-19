import OffCanvas from "@/common/OffCanvas";
import Image from "next/image";
import { NumericFormat } from "react-number-format";
import Address from "../Address/Address";

const SelectReciveType = ({
  reciveType,
  setReciveType,
  setActiveTab,
  isOpen,
  setIsOpen,
}) => {
  return (
    <div className="flex justify-between">
      <div>
        <p className="text-xl font-bold">
          روش دریافت سفارش خود را انتخاب کنید.
        </p>
        <div className="mt-10">
          <div className="flex items-center gap-3 py-3">
            <input
              type="radio"
              name="reciveType"
              id="r1"
              onChange={(e) => setReciveType(e.target.value)}
              className="w-4 h-4"
            />
            <label htmlFor="r1" className="text-xl">
              دریافت در محل فروشگاه
            </label>
          </div>
          <div className="flex items-center gap-3 py-3">
            <input
              type="radio"
              name="reciveType"
              id="r2"
              onChange={(e) => setReciveType(e.target.value)}
              className="w-4 h-4"
            />
            <label htmlFor="r2" className="text-xl">
              ارسال به آدرس شما
            </label>
          </div>
        </div>

        <p className="text-xl my-10 font-bold flex gap-3 items-center">
          آدرس خود را انتخاب کنید.
          <button
            type="button"
            className="flex items-center gap-2 border py-2 px-5 text-sm text-orange rounded-md hover:shadow-sm transition-all duration-300"
            onClick={() => setIsOpen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-plus-lg"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
              />
            </svg>
            افزودن آدرس
          </button>
        </p>
        <div>
          <div className="flex items-center gap-3 py-3">
            <input
              type="radio"
              name="address"
              id="a1"
              onChange={(e) => setReciveType(e.target.value)}
              className="w-4 h-4"
            />
            <label htmlFor="a1" className="text-xl">
              مازندران ساری خیابان پیروزی نبش پیروزی 14 ساختمان پارک علم و
              فناوری طبقه سوم شرکت نرم افزاری جادوی فکر
            </label>
          </div>
          <div className="flex items-center gap-3 py-3">
            <input
              type="radio"
              name="address"
              id="a2"
              onChange={(e) => setReciveType(e.target.value)}
              className="w-4 h-4"
            />
            <label htmlFor="a2" className="text-xl">
              مازندران ساری بلوار کشاورز کوی امام حسین کوچه قائم انتهای کوچه
            </label>
          </div>
        </div>

        <button
          type="button"
          className="bg-orange text-white w-72 h-12 rounded-md mt-8"
          onClick={() => setActiveTab(3)}
        >
          ثبت
        </button>
      </div>
      <div className="bg-light-gray p-5 w-96 rounded-md">
        <div className="text-light mb-5">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Image src="" width={56} height={56} alt="" />
              <span>شلغم</span>
            </div>
            <span>
              <NumericFormat
                thousandSeparator=","
                displayType="text"
                value={45455211}
              />
              <small className="text-xs pr-1">تومان</small>
            </span>
          </div>
          <p className="text-sm">1 کیلو 0 گرم</p>
        </div>
        <div className="text-light mb-5">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Image src="" width={56} height={56} alt="" />
              <span>شلغم</span>
            </div>
            <span>
              <NumericFormat
                thousandSeparator=","
                displayType="text"
                value={45455211}
              />
              <small className="text-xs pr-1">تومان</small>
            </span>
          </div>
          <p className="text-sm">1 کیلو 0 گرم</p>
        </div>
        <button
          type="button"
          className="flex items-center gap-2 text-xl"
          onClick={() => setActiveTab(1)}
        >
          بازگشت به سبد خرید
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            class="bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            />
          </svg>
        </button>
      </div>
      <OffCanvas
        origin="center"
        height="h-96"
        show={isOpen ? "show" : ""}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        customeClass="py-14"
      >
        {/* <Address /> */}
      </OffCanvas>
    </div>
  );
};

export default SelectReciveType;
