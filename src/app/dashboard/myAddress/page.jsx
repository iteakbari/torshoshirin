"use client";
import useAddressList from "@/hooks/useAddressList";
import Cookies from "js-cookie";
import Image from "next/image";
import AddressLoading from "./AddressLoading";

const MyAddress = () => {
  const token = Cookies.get("token");
  const { data, isLoading } = useAddressList(token);

  return (
    <>
      <h3 className="text-xl mb-10">آدرس‌های من</h3>

      {isLoading ? (
        <AddressLoading />
      ) : data ? (
        data.data?.map((item) => (
          <div
            key={item.id}
            className="border lg:3/4 xl:w-2/4 p-5 rounded-lg mb-5"
          >
            {item.address}
          </div>
        ))
      ) : (
        <div className="w-full h-full flex justify-start items-center flex-col">
          <Image
            src="https://admin.torshoshirin.com/files/react-img/no-location.png"
            width={300}
            height={300}
            alt="basket image"
          />
          <p className="text-center text-xl font-bold mt-5">
            آدرسی از طرف شما ثبت نشده.
          </p>
        </div>
      )}
    </>
  );
};

export default MyAddress;
