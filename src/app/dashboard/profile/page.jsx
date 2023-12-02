"use client";

import CitiesSelectBox from "@/common/CitiesSelectBox";
import FormikTextInputField from "@/common/FormikTextInputField";
import StateSelectBox from "@/common/StateSelectBox";
// import TextFieldInput from "@/common/TextFieldInput";
// import TextareaFieldInput from "@/common/TextareaFieldInput";
// import Address from "@/components/Address/Address";
import useGetProfile from "@/hooks/useGetProfile";
import useStateList from "@/hooks/useStateList";
import { changeProfile } from "@/services/changeProfile";
import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import Cookies from "js-cookie";
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
  const token = Cookies.get("token");
  const { data } = useGetProfile(token);
  const { data: getSatatesList } = useStateList();
  const [selectedState, setSelectedState] = useState([]);
  const [showCities, setShowCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [userLocation, setUserLocation] = useState(["51.42047", "35.729054"]);
  const [formValues, setFormValues] = useState({
    id: null,
    firstName: "",
    lastName: "",
    phoneNumber: "",
    cityId: null,
    stateId: null,
    userName: "",
    longY: 0,
    latX: 0,
    address: "",
    codePost: "",
    phonNumber2: "",
    cityName: "",
    stateName: "",
  });

  const { data: profile, mutateAsync: updateProfile } = useMutation({
    mutationFn: changeProfile,
  });

  const reverseFunction = (map, e) => {
    var url = `https://map.ir/reverse/no?lat=${e?.lngLat?.lat}&lon=${e?.lngLat?.lng}`;
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key":
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjI4YjBkMWE5Zjg4YTIyZDk0ZGJhYzQ2MWI3ZGU3MjA3ZGRjY2RkYTRjMWRkZDZiODJmODI4NjlhM2IzMDMyN2U1NTEyZTc3ZTcwZTUyNTkzIn0.eyJhdWQiOiIyMTE4NCIsImp0aSI6IjI4YjBkMWE5Zjg4YTIyZDk0ZGJhYzQ2MWI3ZGU3MjA3ZGRjY2RkYTRjMWRkZDZiODJmODI4NjlhM2IzMDMyN2U1NTEyZTc3ZTcwZTUyNTkzIiwiaWF0IjoxNjc2ODc3NTIwLCJuYmYiOjE2NzY4Nzc1MjAsImV4cCI6MTY3OTI5NjcyMCwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.kLJGEv7gCNCMBZbSwuvumVTYX0ZbOkFaKt5uVsqIvrAXw2PLPQxXf_X0iFbpT5JJxCnqAcP1vBiaOZlxn4ObBIkNdNZzMMSWv-9FVoAlepY8B-9u5GcUmMQImt8GMebp839y1Mgmdq9bXTfsby2dz41u6QsQMPGgURvS9eBRrC309VQiV_GF-2KktTYrIyDnLdSd6SZ6Apc_NZNHVR5ma5uNKYC7_9GT6CPgOBG2uNa_U_OA9baDo42AFBW4WDJxriSHD6UlxznCg1SVmavIki_YwxT9zp7CXqvbIK_d0la1SSOvzlSSJaPQlrUCUhvl2At-kDY-fkMVbozn-cO-NA",
      },
    })
      .then((response) => response.json())
      .then((data) => setUserAddress(data?.address));
    const array = [];
    array.push(
      <Mapir.Marker
        coordinates={[e?.lngLat?.lng, e?.lngLat?.lat]}
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
    phonNumber2: Yup.string().matches(
      /^0\d{2}\d{8}$/,
      "فرمت شماره تلفن ثابت صحیح نیست"
    ),
    stateName: Yup.string().required("لطفا اطلاعات فیلد را تکمیل کنید"),
    cityName: Yup.string().required("لطفا اطلاعات فیلد را تکمیل کنید"),
    address: Yup.string().required("لطفا اطلاعات فیلد را تکمیل کنید"),
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    codePost: "",
    phonNumber2: "",
    stateName: "",
    cityName: "",
    address: "",
  };

  const submitHandler = async (values) => {
    const stateId = getSatatesList?.data.statesList.find(
      (s) => s.title === formik.values.stateName
    ).id;
    const cityId = getSatatesList?.data.citiesList.find(
      (c) => c.title === formik.values.cityName
    ).id;
    const latX = parseFloat(userLocation[0]);
    const longY = parseFloat(userLocation[1]);
    const id = data?.data.id;
    const userName = data?.data.phoneNumber;

    try {
      const data = await updateProfile({
        ...values,
        id,
        stateId,
        cityId,
        latX,
        longY,
        userName,
        token,
      });
    } catch (error) {
      console.log(error?.response?.data?.message);
    }
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: formValues || initialValues,
    onSubmit: submitHandler,
    validationSchema,
    validateOnMount: true,
  });

  useEffect(() => {
    data &&
      setFormValues({
        firstName: data.data.firstName ? data.data.firstName : "",
        lastName: data.data.lastName ? data.data.lastName : "",
        phoneNumber: data.data.phoneNumber ? data.data.phoneNumber : "",
        codePost: data.data.codePost ? data.data.codePost : "",
        phonNumber2: data.data.phonNumber2 ? data.data.phonNumber2 : "",
        stateName: data.data.stateName ? data.data.stateName : "",
        cityName: data.data.cityName ? data.data.cityName : "",
        address: data.data.address ? data.data.address : "",
      });
  }, [data]);

  useEffect(() => {
    setSelectedState(
      formik.values.stateName &&
        getSatatesList?.data?.statesList?.find(
          (state) => state.title === formik.values.stateName
        )
    );
  }, [formik.values.stateName]);

  useEffect(() => {
    setShowCities(
      selectedState &&
        getSatatesList?.data?.citiesList?.filter(
          (city) => city.parentId === selectedState.id
        )
    );
  }, [selectedState]);

  useEffect(() => {
    setTimeout(() => {
      formik.values.cityName
        ? setSelectedCity(
            showCities?.find((city) => city.title === formik.values.cityName)
          )
        : "";
    }, 3000);
  }, [formik.values.cityName]);

  useEffect(() => {
    setUserLocation(
      selectedCity?.location
        ? selectedCity?.location?.split(",")
        : ["51.42047", "35.729054"]
    );
  }, [selectedCity]);

  useEffect(() => {
    formik.setFieldValue("address", userAddress);
  }, [userAddress]);

  return (
    <>
      <h3 className="text-xl">تکمیل پروفایل</h3>
      <form onSubmit={formik.handleSubmit} className="flex flex-wrap gap-10">
        <FormikTextInputField
          label="نام"
          name="firstName"
          customClass="w-48"
          formik={formik}
        />
        <FormikTextInputField
          label="نام‌خانواگی"
          name="lastName"
          customClass="w-48"
          formik={formik}
        />
        <FormikTextInputField
          label="شماره موبایل"
          name="phoneNumber"
          customClass="w-48"
          formik={formik}
          readOnly={true}
        />
        <FormikTextInputField
          label="کدپستی(اختیاری)"
          name="codePost"
          customClass="w-48"
          formik={formik}
        />
        <FormikTextInputField
          label="شماره تلفن ثابت(اختیاری)"
          name="phonNumber2"
          customClass="w-48"
          formik={formik}
        />
        <p className="w-full mt-3">
          *صرفاً استان‌ها و شهرهایی که در محدوده خدمات فروشگاه ما هستند، قابل
          انتخاب‌اند.
        </p>

        <StateSelectBox
          value={formik.values.stateName}
          statesList={getSatatesList?.data.statesList}
          onChange={(value) => formik.setFieldValue("stateName", value.value)}
        />

        <CitiesSelectBox
          value={formik.values.cityName}
          citiesList={showCities}
          onChange={(value) => formik.setFieldValue("cityName", value.value)}
          customClass={selectedState ? "" : "disabled"}
        />

        <div className="pt-4 w-48">
          <FormikTextInputField
            label="آدرس"
            name="address"
            customClass="mt-3"
            formik={formik}
          />
        </div>
        <div className="w-48">
          <p className="pb-2">موقعیت مکانی آدرستان را روی نقشه مشخص کنید.</p>
          <Mapir
            Map={Map}
            className="w-100 h-200px overflow-hidden rounded-xl"
            onClick={reverseFunction}
            center={[parseFloat(userLocation[0]), parseFloat(userLocation[1])]}
          >
            {markerArray}
            <Mapir.Marker coordinates={[51.42047, 35.729054]} anchor="bottom" />
          </Mapir>
        </div>

        <div className="flex mt-5 justify-center w-100">
          <button
            disabled={!formik.isValid}
            type="submit"
            variant="contained"
            className={`bg-green-950 w-96 h-14 text-white hover:bg-green-800 transition-all rounded-lg ${
              !formik.isValid && "disabled-btn"
            }`}
          >
            ثبت
          </button>
        </div>
      </form>
    </>
  );
};

export default Profile;
