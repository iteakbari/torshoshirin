import TextFieldInput from "@/common/TextFieldInput";

const GetMobileNumber = ({ phoneNumber, onChange, onSubmit, isLoading }) => {
  return (
    <form onSubmit={onSubmit}>
      <TextFieldInput
        label="شماره موبایل"
        name="phoneNumber"
        value={phoneNumber}
        onChange={onChange}
      />
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <button
          type="submit"
          variant="contained"
          className="bg-green-950 w-full mt-5 h-14 text-white hover:bg-green-800 transition-all rounded-lg mb-20"
        >
          ارسال کد
        </button>
      )}
    </form>
  );
};

export default GetMobileNumber;
