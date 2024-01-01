import Link from "next/link";

const NewBlog = () => {
  return (
    <Link
      href={`/blog/1`}
      className="text-center flex flex-col gap-3 p-7 border-b last:border-0"
    >
      <h6 className="font-bold">
        نحوه پوست کندن راحت میوه‌های تابستانه میوه‌های تابستانه
      </h6>
      <p className="text-light">توسط ادمین ترش‌وشیرین</p>
      <span className="text-light">آبان ۱۴۰۲</span>
    </Link>
  );
};

export default NewBlog;