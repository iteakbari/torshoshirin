import useLastArticle from "@/hooks/useLastArticle";
import Link from "next/link";

const NewBlog = () => {
  const { data } = useLastArticle();

  return data?.documentsList?.map((item) => (
    <Link
      key={item.id}
      href={`/blog/${item.id}`}
      className="text-center flex flex-col gap-3 p-7 border-b last:border-0"
    >
      <h6 className="font-bold">{item.title}</h6>
      <p className="text-light">
        {item.authorName ? item.authorName : "توسط ادمین ترش‌وشیرین"}
      </p>
      <span className="text-light">{item.date}</span>
    </Link>
  ));
};

export default NewBlog;
