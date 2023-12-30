import Image from "next/image";
import Link from "next/link";

const BlogCard = () => {
  return (
    <Link href={`/blog/1`} className="rounded-xl overflow-hidden bg-white">
      <div className="h-48 overflow-hidden">
        <Image
          width={400}
          height={180}
          alt="blog"
          src="https://admin.torshoshirin.com/files/react-img/blog1.png"
          className="object-cover w-full"
        />
      </div>
      <div className="flex flex-col justify-center items-center p-5 text-center gap-3">
        <h6 className="font-bold">
          نحوه پوست کندن راحت میوه‌های تابستانه میوه‌های تابستانه
        </h6>
        <p className="text-light">توسط ادمین ترش‌وشیرین</p>
        <span className="text-light">آبان ۱۴۰۲</span>
      </div>
    </Link>
  );
};

export default BlogCard;
