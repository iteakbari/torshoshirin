import Link from "next/link";

const PaymentSuccess = () => {
  return (
    <div className="flex gap-12">
      <div className="w-3/6">
        <p className="flex gap-2 items-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
          >
            <path
              d="M10.125 12.375L13.5 15.75L24.75 4.5"
              stroke="#20422A"
              stroke-width="2.7"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M23.625 13.5V21.375C23.625 21.9717 23.3879 22.544 22.966 22.966C22.544 23.3879 21.9717 23.625 21.375 23.625H5.625C5.02826 23.625 4.45597 23.3879 4.03401 22.966C3.61205 22.544 3.375 21.9717 3.375 21.375V5.625C3.375 5.02826 3.61205 4.45597 4.03401 4.03401C4.45597 3.61205 5.02826 3.375 5.625 3.375H18"
              stroke="#20422A"
              stroke-width="2.7"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          سفارش شما ثبت شد.
        </p>
        <div className="border-4 border-light rounded-lg p-3 my-5">
          <p className="font-bold mb-3">وضعیت سفارش:</p>
          <p>درحال آماده‌سازی در فروشگاه</p>
        </div>

        <div className="border-4 border-light rounded-lg p-3 my-5">
          <p className="py-5 text-orange flex gap-5">
            <span>پشتیبانی فروشگاه</span>
            <Link href={`tel:09112274967`}>09112274967</Link>
          </p>
          <p className="py-5 border-t-4 border-b-4 border-light flex gap-5">
            <span>ارسال به آدرس :</span>
            <span>ساری - خ سلمان فارسی ..</span>
          </p>
          <p className="py-5 flex gap-5">
            <span>روش پرداخت :</span>
            <span>پرداخت در محل</span>
          </p>
        </div>
      </div>
      <div className="w-2/6">
        <p className="mb-5">سبد خرید</p>
        <div className="border-4 border-light-green rounded-lg"></div>
      </div>
    </div>
  );
};

export default PaymentSuccess;