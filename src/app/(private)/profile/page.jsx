"use client";

import TextFieldInput from "@/common/TextFieldInput";
import Address from "@/components/Address/Address";
import Mapir from "mapir-react-component";
import { useState } from "react";

const options = [
  { value: "مازندران", label: "مازندران" },
  { value: "تهران", label: "تهران" },
  { value: "گیلان", label: "گیلان" },
  { value: "گلستان", label: "گلستان" },
  { value: "زنجان", label: "زنجان" },
  { value: "قزوین", label: "قزوین" },
  { value: "کرمان", label: "کرمان" },
];

const options2 = [
  { value: "ساری", label: "ساری" },
  { value: "آمل", label: "آمل" },
  { value: "بابل", label: "بابل" },
  { value: "نور", label: "نور" },
  { value: "محمودآباد", label: "محمودآباد" },
  { value: "رامسر", label: "رامسر" },
  { value: "نکا", label: "نکا" },
];

const Map = Mapir.setToken({
  transformRequest: (url) => {
    return {
      url: url,
      headers: {
        "x-api-key":
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjI4YjBkMWE5Zjg4YTIyZDk0ZGJhYzQ2MWI3ZGU3MjA3ZGRjY2RkYTRjMWRkZDZiODJmODI4NjlhM2IzMDMyN2U1NTEyZTc3ZTcwZTUyNTkzIn0.eyJhdWQiOiIyMTE4NCIsImp0aSI6IjI4YjBkMWE5Zjg4YTIyZDk0ZGJhYzQ2MWI3ZGU3MjA3ZGRjY2RkYTRjMWRkZDZiODJmODI4NjlhM2IzMDMyN2U1NTEyZTc3ZTcwZTUyNTkzIiwiaWF0IjoxNjc2ODc3NTIwLCJuYmYiOjE2NzY4Nzc1MjAsImV4cCI6MTY3OTI5NjcyMCwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.kLJGEv7gCNCMBZbSwuvumVTYX0ZbOkFaKt5uVsqIvrAXw2PLPQxXf_X0iFbpT5JJxCnqAcP1vBiaOZlxn4ObBIkNdNZzMMSWv-9FVoAlepY8B-9u5GcUmMQImt8GMebp839y1Mgmdq9bXTfsby2dz41u6QsQMPGgURvS9eBRrC309VQiV_GF-2KktTYrIyDnLdSd6SZ6Apc_NZNHVR5ma5uNKYC7_9GT6CPgOBG2uNa_U_OA9baDo42AFBW4WDJxriSHD6UlxznCg1SVmavIki_YwxT9zp7CXqvbIK_d0la1SSOvzlSSJaPQlrUCUhvl2At-kDY-fkMVbozn-cO-NA", //Mapir access token
        "Mapir-SDK": "reactjs",
      },
    };
  },
});

const Profile = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [markerArray, setMarkerArray] = useState([]);
  const [coord, setCoord] = useState([51.42, 35.72]);
  const [address, setAddress] = useState("");
  const reverseFunction = (map, e) => {
    var url = `https://map.ir/reverse/no?lat=${e.lngLat.lat}&lon=${e.lngLat.lng}`;
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key":
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjI4YjBkMWE5Zjg4YTIyZDk0ZGJhYzQ2MWI3ZGU3MjA3ZGRjY2RkYTRjMWRkZDZiODJmODI4NjlhM2IzMDMyN2U1NTEyZTc3ZTcwZTUyNTkzIn0.eyJhdWQiOiIyMTE4NCIsImp0aSI6IjI4YjBkMWE5Zjg4YTIyZDk0ZGJhYzQ2MWI3ZGU3MjA3ZGRjY2RkYTRjMWRkZDZiODJmODI4NjlhM2IzMDMyN2U1NTEyZTc3ZTcwZTUyNTkzIiwiaWF0IjoxNjc2ODc3NTIwLCJuYmYiOjE2NzY4Nzc1MjAsImV4cCI6MTY3OTI5NjcyMCwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.kLJGEv7gCNCMBZbSwuvumVTYX0ZbOkFaKt5uVsqIvrAXw2PLPQxXf_X0iFbpT5JJxCnqAcP1vBiaOZlxn4ObBIkNdNZzMMSWv-9FVoAlepY8B-9u5GcUmMQImt8GMebp839y1Mgmdq9bXTfsby2dz41u6QsQMPGgURvS9eBRrC309VQiV_GF-2KktTYrIyDnLdSd6SZ6Apc_NZNHVR5ma5uNKYC7_9GT6CPgOBG2uNa_U_OA9baDo42AFBW4WDJxriSHD6UlxznCg1SVmavIki_YwxT9zp7CXqvbIK_d0la1SSOvzlSSJaPQlrUCUhvl2At-kDY-fkMVbozn-cO-NA",
      },
    })
      .then((response) => response.json())
      .then((data) => setAddress(data.address));
    const array = [];
    array.push(
      <Mapir.Marker
        coordinates={[e.lngLat.lng, e.lngLat.lat]}
        anchor="bottom"
      />
    );
    setMarkerArray(array);
  };

  const addressHandler = (e) => {
    setAddress(e.target.value);
  };

  const profileHandler = () => {};

  return (
    <>
      <h3 className="text-xl">تکمیل پروفایل</h3>
      <form onSubmit={profileHandler} className="flex flex-wrap gap-10 mt-14">
        <TextFieldInput
          label="نام و نام‌خانواگی"
          name="name"
          customClass="w-48"
        />
        <TextFieldInput
          label="شماره موبایل"
          name="phoneNumber"
          customClass="w-48"
        />
        <TextFieldInput
          label="کدپستی(اختیاری)"
          name="phoneNumber"
          customClass="w-48"
        />
        <TextFieldInput
          label="شماره تلفن ثابت(اختیاری)"
          name="phoneNumber"
          customClass="w-48"
        />
        <p className="w-full mt-3">
          *صرفاً استان‌ها و شهرهایی که در محدوده خدمات فروشگاه ما هستند، قابل
          انتخاب‌اند.
        </p>
        <Address
          options={options}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          options2={options2}
          address={address}
          addressHandler={addressHandler}
          Map={Map}
          markerArray={markerArray}
          reverseFunction={reverseFunction}
        />
        <div className="flex mt-5 justify-center w-100">
          <button
            type="submit"
            variant="contained"
            className="bg-green-950 w-96 h-14 text-white hover:bg-green-800 transition-all rounded-lg"
          >
            ثبت
          </button>
        </div>
      </form>
    </>
  );
};

export default Profile;
