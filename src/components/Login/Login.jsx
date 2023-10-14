import ConfrimLogin from "./ConfrimLogin";

const { default: GetMobileNumber } = require("./GetNumber");

const Login = () => {
  return (
    <form action="" className="bg-white p-10 px-16 rounded-3xl shadow-sm">
      <p>اکانت اختصاصی</p>
      <p className="text-2xl">ورود | ثبت نام</p>

      {/* <GetMobileNumber /> */}
      <ConfrimLogin />
    </form>
  );
};

export default Login;
