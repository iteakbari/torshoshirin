"use client";
import { useEffect, useState } from "react";
import GetMobileNumber from "./GetNumber";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { checkOtp, getOtp } from "@/services/authServices";
import ConfrimLogin from "./ConfrimLogin";
const RESEND_TIME = 90;

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState("");
  const [time, setTime] = useState(0);
  const {
    data: otpResponse,
    error,
    isLoading,
    mutateAsync: mutateGetOtp,
  } = useMutation({
    mutationFn: getOtp,
  });
  const { mutateAsync: mutateCheckOtp } = useMutation({
    mutationFn: checkOtp,
  });

  const phoneNumberHandler = (e) => {
    setPhoneNumber(e.target.value);
  };

  const onBack = () => {
    setStep((s) => s - 1);
  };

  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000);
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time]);

  const sendOTPHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await mutateGetOtp({ phoneNumber });
      toast.success(data.messageList);
      setStep(2);
      setTime(RESEND_TIME);
      setOtp("");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const confirmCodeSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await mutateCheckOtp({ phoneNumber, otp });
      toast.success(data.message);
      setStep(2);
    } catch (error) {
      toast.error(error?.response?.data?.message);
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
          />
        );
      case 2:
        return (
          <ConfrimLogin
            otp={otp}
            setOtp={setOtp}
            onSubmit={confirmCodeSubmit}
            time={time}
            onBack={onBack}
            onResendCode={sendOTPHandler}
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
