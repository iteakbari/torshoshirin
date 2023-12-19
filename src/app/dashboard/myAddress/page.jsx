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
          <div key={item.id} className="border w-2/4 p-5 rounded-lg mb-5">
            {item.address}
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

export default MyAddress;
