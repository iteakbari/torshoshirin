"use client";
import useAddressList from "@/hooks/useAddressList";
import Cookies from "js-cookie";
import Image from "next/image";
import AddressLoading from "./AddressLoading";
import OffCanvas from "@/common/OffCanvas";
import AddAddress from "@/components/Payment/AddAddress";
import { useState } from "react";
import useStateList from "@/hooks/useStateList";
import { useMutation } from "@tanstack/react-query";
import { deleteAddress } from "@/services/addressService";

const MyAddress = () => {
  const token = Cookies.get("token");
  const { data, isLoading, refetch } = useAddressList(token);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const { data: getSatatesList } = useStateList();
  const [isOpen, setIsOpen] = useState(false);

  const { mutateAsync: deleteAddressfunc } = useMutation({
    mutationFn: deleteAddress,
  });

  const editAddressHandler = (id) => {
    setSelectedAddress(data?.data.find((address) => address.id === id));
    setIsOpen(true);
  };

  const deleteAddressHandler = async (id) => {
    try {
      const data = await deleteAddressfunc({ id, token });
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h3 className="text-xl mb-10">آدرس‌های من</h3>

      <button
        type="button"
        className="flex items-center gap-2 border py-2 px-5 text-sm text-orange rounded-md hover:shadow-sm transition-all duration-300 mb-5"
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

      {isLoading ? (
        <AddressLoading />
      ) : data ? (
        data.data?.map((item) => (
          <div
            key={item.id}
            className="border lg:3/4 xl:w-2/4 p-5 rounded-lg mb-5 flex flex-wrap gap-3 sm:gap-0"
          >
            <p className="w-4/5">{item.address}</p>
            <div className="flex gap-2">
              <button
                type="button"
                className="mr-5 text-orange flex items-center gap-1"
                onClick={() => editAddressHandler(item.id)}
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

              <button
                type="button"
                className="mr-5 text-orange flex items-center gap-1"
                onClick={() => deleteAddressHandler(item.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                حذف
              </button>
            </div>
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

      <OffCanvas
        origin="center"
        height="h-max"
        show={isOpen ? "show" : ""}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        customeClass="py-14 px-5"
      >
        <AddAddress
          refetch={refetch}
          selectedAddress={selectedAddress}
          setSelectedAddress={setSelectedAddress}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          getSatatesList={getSatatesList}
        />
      </OffCanvas>
    </>
  );
};

export default MyAddress;
