"use client";

import CitiesSelectBox from "@/common/CitiesSelectBox";
import StateSelectBox from "@/common/StateSelectBox";
import TextFieldInput from "@/common/TextFieldInput";
import Address from "@/components/Address/Address";
import useGetProfile from "@/hooks/useGetProfile";
import useStateList from "@/hooks/useStateList";
import { QueryCache, useQueryClient } from "@tanstack/react-query";
import { Formik, useFormik } from "formik";
import Mapir from "mapir-react-component";
import { useEffect, useState } from "react";
import * as Yup from "yup";

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
  const [markerArray, setMarkerArray] = useState([]);
  const [coord, setCoord] = useState([51.42, 35.72]);
  const [userAddress, setUserAddress] = useState("");
  const token = localStorage.getItem("temp_token");
  const { data } = useGetProfile(token);
  const { data: getSatatesList } = useStateList();
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    codePost: "",
    phoneNumber2: "",
    state: "",
    city: "",
  });

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
      .then((data) => setUserAddress(data.address));
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
    setUserAddress(e.target.value);
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("لطفا اطلاعات فیلد را تکمیل کنید"),
    lastName: Yup.string().required("لطفا اطلاعات فیلد را تکمیل کنید"),
    codePost: Yup.string().matches(
      /\b(?!(\d)\1{3})[13-9]{4}[1346-9][013-9]{5}\b/,
      "کدپستی نادرست است"
    ),
    phoneNumber2: Yup.string().matches(
      /^0\d{2}\d{8}$/,
      "فرمت شماره تلفن ثابت صحیح نیست"
    ),
    state: Yup.string().required("لطفا اطلاعات فیلد را تکمیل کنید"),
    city: Yup.string().required("لطفا اطلاعات فیلد را تکمیل کنید"),
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    codePost: "",
    phoneNumber2: "",
    state: "",
    city: "",
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: formValues || initialValues,
    onSubmit: () => {},
    validationSchema,
  });

  useEffect(() => {
    data &&
      setFormValues({
        firstName: data.data.firstName ? data.data.firstName : "",
        lastName: data.data.lastName ? data.data.lastName : "",
        phoneNumber: data.data.phoneNumber ? data.data.phoneNumber : "",
        codePost: data.data.codePost ? data.data.codePost : "",
        phoneNumber2: data.data.phoneNumber2 ? data.data.phoneNumber2 : "",
        state: "",
        city: "",
      });
  }, [data]);

  const selectedState =
    formik.values.state &&
    getSatatesList?.data?.statesList?.find(
      (state) => state.title === formik.values.state
    );

  const showCitiesList = getSatatesList?.data?.citiesList?.filter(
    (city) => city.parentId === selectedState.id
  );

  return (
    <>
      <h3 className="text-xl">تکمیل پروفایل</h3>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-wrap gap-10 mt-14"
      >
        <TextFieldInput
          label="نام"
          name="firstName"
          customClass="w-48"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          errorMessage={formik.errors.firstName}
          error={formik.touched.firstName && formik.errors.firstName}
          onBlur={formik.handleBlur}
        />
        <TextFieldInput
          label="نام‌خانواگی"
          name="lastName"
          customClass="w-48"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          errorMessage={formik.errors.lastName}
          error={formik.touched.lastName && formik.errors.lastName}
          onBlur={formik.handleBlur}
        />
        <TextFieldInput
          label="شماره موبایل"
          name="phoneNumber"
          customClass="w-48"
          value={formik.values.phoneNumber}
          onChange={formik.handleChange}
          readOnly={true}
        />
        <TextFieldInput
          label="کدپستی(اختیاری)"
          name="codePost"
          customClass="w-48"
          value={formik.values.codePost}
          onChange={formik.handleChange}
          errorMessage={formik.errors.codePost}
          error={formik.errors}
        />
        <TextFieldInput
          label="شماره تلفن ثابت(اختیاری)"
          name="phoneNumber2"
          customClass="w-48"
          value={formik.values.phoneNumber2}
          onChange={formik.handleChange}
          errorMessage={formik.errors.phoneNumber2}
          error={formik.errors}
        />
        <p className="w-full mt-3">
          *صرفاً استان‌ها و شهرهایی که در محدوده خدمات فروشگاه ما هستند، قابل
          انتخاب‌اند.
        </p>

        <StateSelectBox
          value={formik.values.state}
          statesList={getSatatesList?.data.statesList}
          onChange={(value) => formik.setFieldValue("state", value.value)}
        />

        <CitiesSelectBox
          value={formik.values.city}
          citiesList={showCitiesList}
          onChange={(value) => formik.setFieldValue("city", value.value)}
          customClass={selectedState ? "" : "disabled"}
        />

        <Address
          address={userAddress}
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
