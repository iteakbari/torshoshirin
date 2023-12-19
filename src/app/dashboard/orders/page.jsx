"use client";
import useOrdersList from "@/hooks/useOrdersList";
import Cookies from "js-cookie";
import Link from "next/link";
import OrderLoading from "./OrderLoading";
import Image from "next/image";

const Orders = () => {
  const token = Cookies.get("token");
  const { data, isLoading } = useOrdersList(token);

  return (
    <>
      <h3 className="text-xl mb-10">سفارش‌ها</h3>

      {isLoading ? (
        <OrderLoading />
      ) : data && data.length > 0 ? (
        data.map((item) => (
          <div key={item.id} className=" py-7 border-b last:border-0">
            <div className="flex justify-between">
              <p>
                وضعیت سفارش :‌{" "}
                {item.orderStatusId === 1 ? (
                  <span className="text-orange">در مرحله سبد خرید</span>
                ) : item.orderStatusId === 2 ? (
                  <span className="text-orange">پیش فاکتور شده</span>
                ) : item.orderStatusId === 3 ? (
                  <span className="text-orange">در انتظار بررسی</span>
                ) : item.orderStatusId === 4 ? (
                  <span className="text-orange">در انتظار پرداخت</span>
                ) : item.orderStatusId === 5 ? (
                  <span className="text-orange">ارسال سفارش</span>
                ) : item.orderStatusId === 6 ? (
                  <span className="text-orange">ثبت از کارما</span>
                ) : item.orderStatusId === 7 ? (
                  <span className="text-orange">ثبت مرجوعی</span>
                ) : item.orderStatusId === 8 ? (
                  <span className="text-orange">کنسل شده</span>
                ) : (
                  <span className="text-orange">پرداخت شد</span>
                )}
              </p>
              <p>
                تاریخ سفارش :‌{" "}
                <time dateTime={item.orderDate}>{item.orderDate}</time>
              </p>
              <p className="w-1/3 flex items-center">
                <span className="w-56 inline-block">ارسال به آدرس : </span>
                <span className="inline-block truncate">
                  {item.customerAddress}
                </span>
              </p>
            </div>
            <Link
              href={`/dashboard/orders/${item.id}`}
              className="font-bold mt-5 inline-block"
            >
              رفتن به صفحه جزئیات سفارش
            </Link>
          </div>
        ))
      ) : (
        <div className="w-full h-full flex justify-center items-center flex-col">
          <p className="text-center mb-10 text-light text-xl">
            محصولی در این دسته بندی ثبت نشده است.
          </p>
          <Image
            src="https://admin.torshoshirin.com/files/react-img/b2.png"
            width={300}
            height={300}
            alt="basket image"
          />
        </div>
      )}
    </>
  );
};

export default Orders;
