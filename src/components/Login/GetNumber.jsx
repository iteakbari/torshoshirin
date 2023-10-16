import TextFieldInput from "@/common/TextFieldInput";
import LoadingButton from "@mui/lab/LoadingButton";
import { CircularProgress } from "@mui/material";

const GetMobileNumber = ({ phoneNumber, onChange, onSubmit, isLoading }) => {
  return (
    <form onSubmit={onSubmit}>
      <TextFieldInput
        label="شماره موبایل"
        name="phoneNumber"
        value={phoneNumber}
        onChange={onChange}
      />
      <button
        type="submit"
        variant="contained"
        className="bg-green-950 w-full mt-5 h-14 text-white hover:bg-green-800 transition-all rounded-lg mb-20"
      >
        {isLoading ? <CircularProgress color="inherit" /> : "ارسال کد"}
      </button>
    </form>
  );
};

export default GetMobileNumber;
