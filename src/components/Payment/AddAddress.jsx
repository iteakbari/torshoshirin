"use client";
import Mapir from "mapir-react-component";
import { useEffect, useState } from "react";
import Address from "../Address/Address";
import FormikTextInputField from "@/common/FormikTextInputField";
import CitiesSelectBox from "@/common/CitiesSelectBox";
import StateSelectBox from "@/common/StateSelectBox";
import Cookies from "js-cookie";
import useStateList from "@/hooks/useStateList";
import * as Yup from "yup";
import { useFormik } from "formik";
import Switch from "@/common/Switch";
import { useMutation } from "@tanstack/react-query";
import { addressFunc, editAddressFunc } from "@/services/addressService";

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
const AddAddress = ({ selectedAddress, setIsOpen }) => {
  const [markerArray, setMarkerArray] = useState([]);
  const [coord, setCoord] = useState([51.42, 35.72]);
  const [userAddress, setUserAddress] = useState("");
  const token = Cookies.get("token");
  const { data: getSatatesList } = useStateList();
  const [selectedState, setSelectedState] = useState([]);
  const [showCities, setShowCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [userLocation, setUserLocation] = useState(["51.42047", "35.729054"]);
  const [reciver, setReciver] = useState(false);
  const [formValues, setFormValues] = useState({
    id: 0,
    cityId: null,
    stateId: null,
    receiverMyself: true,
    longY: 0,
    latX: 0,
    address: "",
    codePost: "",
    phoneNumber: "",
    mobileNumber: "",
    fname: "",
    lname: "",
  });

  const { data, mutateAsync: addressFunction } = useMutation({
    mutationFn: addressFunc,
  });

  const { mutateAsync: editAddressFunction } = useMutation({
    mutationFn: editAddressFunc,
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
      .then((data) => data);
    const array = [];
    array.push(
      <Mapir.Marker
        coordinates={[e.lngLat.lng, e.lngLat.lat]}
        anchor="bottom"
      />
    );
    setMarkerArray(array);
  };

  const validationSchema = Yup.object({
    codePost: Yup.string().matches(
      /\b(?!(\d)\1{3})[13-9]{4}[1346-9][013-9]{5}\b/,
      "کدپستی نادرست است"
    ),
    stateName: Yup.string().required("لطفا اطلاعات فیلد را تکمیل کنید"),
    cityName: Yup.string().required("لطفا اطلاعات فیلد را تکمیل کنید"),
    address: Yup.string().required("لطفا اطلاعات فیلد را تکمیل کنید"),
  });

  const initialValues = {
    id: 0,
    cityId: null,
    stateId: null,
    receiverMyself: true,
    longY: 0,
    latX: 0,
    address: "",
    codePost: "",
    phoneNumber: "",
    mobileNumber: "",
    fname: "",
    lname: "",
  };

  useEffect(() => {
    console.log(userAddress);
    selectedAddress &&
      setFormValues({
        id: selectedAddress.id,
        fname: selectedAddress.fname,
        lname: selectedAddress.lname,
        mobileNumber: selectedAddress.mobileNumber,
        codePost: selectedAddress.codePost,
        phonNumber: selectedAddress.phonNumber,
        stateName: selectedAddress.stateName,
        cityName: selectedAddress.cityName,
        address: selectedAddress.address,
      });
  }, [selectedAddress]);

  const submitHandler = async (values) => {
    console.log(values);
    const stateId = getSatatesList?.data.statesList.find(
      (s) => s.title === formik.values.stateName
    ).id;
    const cityId = getSatatesList?.data.citiesList.find(
      (c) => c.title === formik.values.cityName
    ).id;
    const latX = parseFloat(userLocation[0]);
    const longY = parseFloat(userLocation[1]);
    const id = data?.data.id;
    console.log(values.address);

    if (selectedAddress) {
      try {
        const data = await editAddressFunction({
          id: values.id,
          cityId,
          stateId,
          receiverMyself: !reciver,
          longY,
          latX,
          address: values.address,
          codePost: values.codePost,
          phoneNumber: values.phoneNumber,
          mobileNumber: values.mobileNumber,
          fname: values.fname,
          lname: values.lname,
          token,
        });

        if (data.success) {
          setFormValues("");
          setIsOpen(false);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const data = await addressFunction({
          id: 0,
          cityId,
          stateId,
          receiverMyself: !reciver,
          longY,
          latX,
          address: userAddress,
          codePost: "",
          phoneNumber: "",
          mobileNumber: "",
          fname: "",
          lname: "",
          token,
        });

        if (data.success) {
          setFormValues("");
          setIsOpen(false);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: selectedAddress ? formValues : initialValues,
    onSubmit: submitHandler,
    validationSchema,
    validateOnMount: true,
  });

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
    setUserAddress(formik.values.address);
  }, [formik.values.address]);

  useEffect(() => {
    formik.setFieldValue("address", userAddress);
  }, [userAddress]);

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="flex flex-wrap gap-5">
        <div className="flex gap-2 items-center w-full">
          <Switch
            reciver={reciver}
            setReciver={setReciver}
            checked={!reciver}
          />
          <span className={`${reciver ? "text-gray-500" : "text-gray-900"}`}>
            گیرنده سفارش خودم هستم
          </span>
        </div>
        {reciver && (
          <>
            <FormikTextInputField
              label="نام گیرنده"
              name="firstName"
              customClass="w-48"
              formik={formik}
            />
            <FormikTextInputField
              label="نام‌خانوادگی گیرنده"
              name="lastName"
              customClass="w-48"
              formik={formik}
            />
            <FormikTextInputField
              label="شماره موبایل گیرنده"
              name="phoneNumber"
              customClass="w-48"
              formik={formik}
            />
            <FormikTextInputField
              label="کدپستی(اختیاری) گیرنده"
              name="codePost"
              customClass="w-48"
              formik={formik}
            />
            <FormikTextInputField
              label="شماره تلفن ثابت(اختیاری) گیرنده"
              name="phonNumber2"
              customClass="w-48"
              formik={formik}
            />
          </>
        )}
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
    </div>
  );
};

export default AddAddress;
