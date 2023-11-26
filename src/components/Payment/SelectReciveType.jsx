import OffCanvas from "@/common/OffCanvas";
import Image from "next/image";
import { NumericFormat } from "react-number-format";
import Address from "../Address/Address";
import AddAddress from "./AddAddress";
import useAddressList from "@/hooks/useAddressList";
import Cookies from "js-cookie";
import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "@/context/shopContext";

const SelectReciveType = ({
  reciveType,
  setReciveType,
  setActiveTab,
  isOpen,
  setIsOpen,
}) => {
  const token = Cookies.get("token");
  const { data } = useAddressList(token);
  const { cartItems } = useContext(ShopContext);
  const [selectedAddress, setSelectedAddress] = useState(null);

  const editAddressHandler = (id) => {
    setSelectedAddress(data?.data.find((address) => address.id === id));
    setIsOpen(true);
  };

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
              value="0"
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
              value="1"
              onChange={(e) => setReciveType(e.target.value)}
              className="w-4 h-4"
            />
            <label htmlFor="r2" className="text-xl">
              ارسال به آدرس شما
            </label>
          </div>
        </div>

        {+reciveType === 1 && (
          <>
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
                  className="bi bi-plus-lg"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                  />
                </svg>
                افزودن آدرس
              </button>
            </p>
            <div>
              {data?.data?.map((data) => (
                <React.Fragment key={data.id}>
                  <div className="flex items-center gap-3 py-3">
                    <input
                      type="radio"
                      name="address"
                      id={data.id}
                      // onChange={(e) => setReciveType(e.target.value)}
                      className="w-4 h-4"
                    />
                    <label htmlFor={data.id} className="text-xl">
                      {data.address}
                    </label>
                  </div>
                  <button
                    type="button"
                    className="mr-7 text-orange flex items-center gap-1"
                    onClick={() => editAddressHandler(data.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="m13.26 3.6-8.21 8.69c-.31.33-.61.98-.67 1.43l-.37 3.24c-.13 1.17.71 1.97 1.87 1.77l3.22-.55c.45-.08 1.08-.41 1.39-.75l8.21-8.69c1.42-1.5 2.06-3.21-.15-5.3-2.2-2.07-3.87-1.34-5.29.16Z"
                        stroke="#DB7267"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M11.89 5.05a6.126 6.126 0 0 0 5.45 5.15M3 22h18"
                        stroke="#DB7267"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    ویرایش
                  </button>
                </React.Fragment>
              ))}
            </div>
          </>
        )}

        <button
          type="button"
          className="bg-orange text-white w-72 h-12 rounded-md mt-8"
          onClick={() => setActiveTab(3)}
        >
          ثبت
        </button>
      </div>
      <div className="bg-light-gray p-5 w-96 rounded-md">
        {cartItems?.map((item) => (
          <div key={item.id} className="text-light mb-5">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Image src={item.img} width={56} height={56} alt="" />
                <span>{item.name}</span>
              </div>
              <span>
                <NumericFormat
                  thousandSeparator=","
                  displayType="text"
                  value={item.totalPrice}
                />
                <small className="text-xs pr-1">تومان</small>
              </span>
            </div>
            <p className="text-sm">
              {item.UCI === 2 ? item.weight : item.count}
            </p>
          </div>
        ))}

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
            className="bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            />
          </svg>
        </button>
      </div>
      <OffCanvas
        origin="center"
        height="h-max"
        show={isOpen ? "show" : ""}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        customeClass="py-14"
      >
        <AddAddress selectedAddress={selectedAddress} setIsOpen={setIsOpen} />
      </OffCanvas>
    </div>
  );
};

export default SelectReciveType;