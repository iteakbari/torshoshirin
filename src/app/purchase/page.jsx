"use client";
import Counter from "@/common/Counter";
import OffCanvas from "@/common/OffCanvas";
import Basket from "@/components/Payment/Basket";
import Payment from "@/components/Payment/Payment";
import SelectReciveType from "@/components/Payment/SelectReciveType";
import { ShopContext } from "@/context/shopContext";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import { NumericFormat } from "react-number-format";

const tabData = [
  {
    id: 1,
    title: "سبد خرید",
    img: "/assets/img/Bucker.png",
    des: "basket image",
    customeClass: "w-9",
  },
  {
    id: 2,
    title: "اطلاعات ارسال",
    img: "/assets/img/marker.png",
    des: "marker image",
    customeClass: "w-7",
  },
  {
    id: 3,
    title: "پرداخت",
    img: "/assets/img/pos.png",
    des: "pos image",
    customeClass: "w-10",
  },
];

const Purchase = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [reciveType, setReciveType] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container lg:px-10 2xl:px-0 mx-auto">
      <div className="py-16">
        <div className="bg-white p-5">
          <div className="flex gap-3 ">
            {tabData?.map((tab) => (
              <div
                key={tab.id}
                className="flex justify-center items-center flex-1"
              >
                <div
                  className={`flex justify-center items-center gap-2 p-3 tab-item ${
                    tab.id === activeTab ? "active" : ""
                  }`}
                  tabId={1}
                >
                  <Image
                    src={tab.img}
                    width={30}
                    height={30}
                    alt={tab.des}
                    className={`${tab.customeClass}`}
                  />
                  <span className="text-base">{tab.title}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="pt-10 px-10 pb-5 h-3/4">
            {activeTab === 1 ? (
              <Basket setActiveTab={setActiveTab} />
            ) : activeTab === 2 ? (
              <SelectReciveType
                reciveType={reciveType}
                setReciveType={setReciveType}
                setActiveTab={setActiveTab}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
              />
            ) : (
              <Payment />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
