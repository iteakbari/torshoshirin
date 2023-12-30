"use client";
import { useState } from "react";

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" bg-white shadow-lg rounded-xl transition-height duration-500 w-full mb-10">
      <div
        className="grid grid-cols-11 px-3 py-5 md:py-10 md:px-10 h-max items-center w-full cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg col-span-9">
          مبلغ سفارشم را چگونه می‏‌توانم پرداخت کنم؟
        </p>
        <div className="flex justify-end items-center col-span-2">
          <span className="w-11 h-11 flex rounded-full shadow-md p-1  justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                stroke="#1a3622"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="1.5"
                d="M15 19.92L8.48 13.4c-.77-.77-.77-2.03 0-2.8L15 4.08"
              ></path>
            </svg>
          </span>
        </div>
      </div>
      <div
        className={`transition-height duration-300 overflow-hidden ${
          !isOpen ? "h-0 p-0" : "h-max py-3"
        }`}
      >
        <p className="text-md text-justify px-4">
          همگی کاربران می‌توانند از طریق درگاه اینترنتی و با استفاده از همه
          کارت‏‌های بانکی عضو شبکه شتاب در سایت ، هزینه سفارش را به صورت آنلاین
          پرداخت کنند. در صورتی که آدرس تحویل سفارش، یکی از شهرهای تحت پوشش
          تحویل باشد، مشتریان می‌‏توانند هزینه را هنگام تحویل سفارش، در محل به
          صورت نقدی یا از طریق دستگاه کارتخوان سیار پرداخت کنند.
        </p>
      </div>
    </div>
  );
};

export default Accordion;
