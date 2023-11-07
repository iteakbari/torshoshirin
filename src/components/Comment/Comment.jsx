import TextFieldInput from "@/common/TextFieldInput";
import TextareaFieldInput from "@/common/TextareaFieldInput";

const Comment = () => {
  return (
    <form action="" className="w-72 sm:w-96 mt-8 mb-20">
      <TextFieldInput label="نام و نام‌خانوادگی" customClass="mb-7" />
      <TextFieldInput label="شماره موبایل" customClass="mb-7" />
      <TextareaFieldInput label="پیام شما" customClass="mb-7" />
      <div className="flex justify-center">
        <button className="bg-green w-2/3 text-white h-12 rounded-lg">
          ثبت
        </button>
      </div>
    </form>
  );
};

export default Comment;
