const ConfrimLogin = () => {
  return (
    <>
      <p className="mt-10">کد ارسال‌شده به موبایل خود را وارد کنید.</p>

      <div className="flex gap-5">
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </div>
      <button
        variant="contained"
        className="bg-green-950 w-full mt-5 h-14 text-white hover:bg-green-800 transition-all rounded-lg mb-20"
      >
        ارسال کد
      </button>
    </>
  );
};

export default ConfrimLogin;
