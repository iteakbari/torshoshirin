"use client";
import NewBlog from "@/components/BlogCard/NewBlog";
import Comment from "@/components/Comment/Comment";
import Image from "next/image";
import Link from "next/link";

const BlogDetails = ({ params }) => {
  // const para = params.productId.split("-");
  // const { data, isLoading } = useProduct(para[0], para[1]);
  // const product = data?.data;

  return (
    <div className="bg-light-green">
      <div className="container lg:px-10 2xl:px-0 mx-auto pt-24">
        <div className="py-16 grid grid-cols-1 lg:grid-cols-4">
          <div className="col-span-3 py-7 px-5 md:px-12 rounded-lg">
            <div className="sm:w-96 h-60 rounded-lg overflow-hidden">
              <Image
                width={400}
                height={250}
                alt="blog image"
                src="https://admin.torshoshirin.com/files/react-img/blog1.png"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h6 className="font-bold py-4">
                نحوه پوست کندن راحت میوه‌های تابستانه میوه‌های تابستانه
              </h6>
              <div className="w-2/3 h-2 rounded-xl bg-white"></div>
              <p className="py-4">
                <span className="text-light pl-10">توسط ادمین ترش‌وشیرین</span>
                <span className="text-light">آبان ۱۴۰۲</span>
              </p>

              <p className="leading-7 text-justify">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
                پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. لورم
                ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
                پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. لورم
                ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
                پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </p>
              <div className="w-2/3 h-2 rounded-xl bg-white my-5"></div>
            </div>
          </div>
          <div className="md:hidden lg:block">
            <p className="py-8 text-center text-xl">مطالب اخیر</p>
            <div className="bg-white">
              <NewBlog />
              <NewBlog />
              <NewBlog />
              <NewBlog />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center mt-16">
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
    </div>
  );
};

export default BlogDetails;
