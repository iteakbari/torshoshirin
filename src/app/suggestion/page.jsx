import Comment from "@/components/Comment/Comment";
import Link from "next/link";

const Suggestaion = () => {
  return (
    <div className="container lg:px-10 2xl:px-0 mx-auto pt-24">
      <p className="text-2xl text-center py-16">انتقادات و پیشنهادات</p>
      <div className="flex flex-col items-center">
        <div className="rounded-xl bg-red-200 py-5 px-5 text-center sm:px-20 mb-10">
          برای ثبت نظر ابتدا باید به حساب کاربری خود{" "}
          <Link href="/sign" className="underline">
            وارد
          </Link>{" "}
          شوید.
        </div>
        <p className="text-center">
          نظرتون در مورد این محصول چیه؟ 🍊 با ما به اشتراک بگذارین!
        </p>
        <Comment />
      </div>
    </div>
  );
};

export default Suggestaion;
