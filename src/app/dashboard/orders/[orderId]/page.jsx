"use client";
import useOrderDetails from "@/hooks/useOrderDetails";
import Cookies from "js-cookie";
import Image from "next/image";
import { NumericFormat } from "react-number-format";
import Link from "next/link";

const OrderDetails = ({ params }) => {
  const token = Cookies.get("token");
  const { data } = useOrderDetails(params.orderId, token);
  console.log(data?.data);

  return (
    <div className="flex gap-12">
      <div className="w-3/6">
        <div className="border-4 border-light rounded-lg p-3 my-5">
          <p className="font-bold mb-3">وضعیت سفارش:</p>
          <p>
            {data?.data?.statusOrder === 1 ? (
              <span className="text-orange">در مرحله سبد خرید</span>
            ) : data?.data?.statusOrder === 2 ? (
              <span className="text-orange">پیش فاکتور شده</span>
            ) : data?.data?.statusOrder === 3 ? (
              <span className="text-orange">در انتظار بررسی</span>
            ) : data?.data?.statusOrder === 4 ? (
              <span className="text-orange">در انتظار پرداخت</span>
            ) : data?.data?.statusOrder === 5 ? (
              <span className="text-orange">ارسال سفارش</span>
            ) : data?.data?.statusOrder === 6 ? (
              <span className="text-orange">ثبت از کارما</span>
            ) : data?.data?.statusOrder === 7 ? (
              <span className="text-orange">ثبت مرجوعی</span>
            ) : data?.data?.statusOrder === 8 ? (
              <span className="text-orange">کنسل شده</span>
            ) : (
              <span className="text-orange">پرداخت شد</span>
            )}
          </p>
        </div>

        <div className="border-4 border-light rounded-lg p-3 my-5">
          <p className="py-5 text-orange flex gap-5">
            <span>پشتیبانی فروشگاه</span>
            <Link href={`tel:09112274967`}>09112274967</Link>
          </p>
          <p className="py-5 border-t-4 border-b-4 border-light flex gap-5">
            <span>ارسال به آدرس : {data?.data?.customerAddress}</span>
            <span></span>
          </p>
          <p className="py-5 flex gap-5">
            <span>روش پرداخت : {data?.data?.orderPayment}</span>
            <span></span>
          </p>
        </div>
      </div>
      <div className="w-2/6">
        <p className="mb-5">سبد خرید</p>
        <div className="border-4 border-light-green rounded-lg p-10">
          {data?.data?.productsList?.map((item) => (
            <div key={item.index} className="text-light mb-5">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <Image src={item.pathImage} width={56} height={56} alt="" />
                  <span>{item.name}</span>
                </div>
                <span>
                  <NumericFormat
                    thousandSeparator=","
                    displayType="text"
                    value={item.unitPrice}
                  />
                  <small className="text-xs pr-1">ریال</small>
                </span>
              </div>
              <p className="text-sm">{item.quantity}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
