"use client";
import { useEffect, useState } from "react";
import GetMobileNumber from "./GetNumber";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { checkOtp, getOtp } from "@/services/authServices";
import ConfrimLogin from "./ConfrimLogin";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
// import { cookies } from "next/headers";
const RESEND_TIME = 90;

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [step, setStep] = useState(1);
  const [phoneNumberCode, setPhoneNumberCode] = useState("");
  const [time, setTime] = useState(0);
  const [error, setError] = useState(false);
  // const [token, setToken] = useState("");
  const router = useRouter();
  const {
    data: otpResponse,
    isError,
    isLoading,
    mutateAsync: mutateGetOtp,
  } = useMutation({
    mutationFn: getOtp,
  });
  const { mutateAsync: mutateCheckOtp, isLoading: isCheckingOtp } = useMutation(
    {
      mutationFn: checkOtp,
    }
  );

  const phoneNumberHandler = (e) => {
    const phoneNumberFormat = /^09\d{2}\d{7}$/;
    const val = e.target.value;
    val?.match(phoneNumberFormat) ? setError(false) : setError(true);
    setPhoneNumber(e.target.value);
  };

  const onBack = () => {
    setStep((s) => s - 1);
    setPhoneNumber("");
  };

  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000);
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time]);

  const sendOTPHandler = async (e) => {
    e.preventDefault();
    if (!error) {
      try {
        const data = await mutateGetOtp({ phoneNumber });
        if (data.success) {
          toast.success(data.messageList);
          toast.success(data.params1, { duration: 7000 });
          setStep(2);
          setTime(RESEND_TIME);
          setPhoneNumberCode("");
        } else {
          setPhoneNumber("");
          toast.success(data.messageList);
        }
      } catch (error) {
        toast.error(error?.response?.data?.message);
      }
      return;
    }
  };

  // const cookiesStore = cookies();
  // console.log(cookiesStore);

  const confirmCodeSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await mutateCheckOtp({ phoneNumber, phoneNumberCode });
      if (phoneNumberCode && time) {
        Cookies.set("token", data.data.jwToken);
        toast.success(data.messageList);
        if (data.success) {
          if (!data.data.firstName) {
            router.push("/dashboard/profile");
          } else {
            router.push("/");
          }

          setTimeout(() => {
            if (typeof window !== "undefined") window.location.reload();
          }, 100);
        }

        // setToken(data.data.jwToken);
        console.log(data);
      } else {
        toast.error(data.messageList);
      }
    } catch (error) {
      toast.error(error?.response?.data?.messageList);
    }
  };

  const renderSteps = () => {
    switch (step) {
      case 1:
        return (
          <GetMobileNumber
            phoneNumber={phoneNumber}
            onChange={phoneNumberHandler}
            isLoading={isLoading}
            onSubmit={sendOTPHandler}
            error={error}
          />
        );
      case 2:
        return (
          <ConfrimLogin
            phoneNumberCode={phoneNumberCode}
            setPhoneNumberCode={setPhoneNumberCode}
            onSubmit={confirmCodeSubmit}
            time={time}
            onBack={onBack}
            phoneNumber={phoneNumber}
            onResendCode={sendOTPHandler}
            isCheckingOtp={isCheckingOtp}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white p-10 px-16 rounded-3xl shadow-sm">
      <p>اکانت اختصاصی</p>
      <p className="text-2xl">ورود | ثبت نام</p>
      {renderSteps()}
    </div>
  );
};

export default Login;
