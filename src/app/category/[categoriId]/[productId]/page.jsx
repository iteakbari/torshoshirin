"use client";
import Comment from "@/components/Comment/Comment";
import HorizontalCard from "@/components/HorizontalCard/HorizontalCard";
import HorizontalCardLoading from "@/components/HorizontalCard/HorizontalCardLoading";
import NewProducts from "@/components/Product/NewProducts";
// import NewProductsLoading from "@/components/Product/NewProductsLoading";
import RelatedProducts from "@/components/Product/RelatedProducts";
import useProduct from "@/hooks/useProduct";
import Link from "next/link";

const ProductDetails = ({ params }) => {
  const para = params.productId.split("-");
  const { data, isLoading } = useProduct(para[0], para[1]);
  const product = data?.data;

  return (
    <div className="container lg:px-10 2xl:px-0 mx-auto pt-24">
      <div className="py-16 grid grid-cols-1 lg:grid-cols-4">
        <div className="col-span-3 bg-white py-7 px-5 md:px-12 shadow-sm rounded-lg">
          {isLoading ? (
            <HorizontalCardLoading />
          ) : (
            <HorizontalCard {...product} />
          )}

          <div className="mt-16">
            <div className="flex gap-5">
              <span className="text-xl">فواید</span>
              <p></p>
            </div>
            <div className="flex gap-5 mt-7">
              <span className="text-xl">ویژگی‌ها</span>
              <p></p>
            </div>
            <div className="flex gap-5 mt-7">
              <span className="text-xl">نحوه‌ی مصرف</span>
              <p></p>
            </div>
          </div>
        </div>
        <div className="md:hidden lg:block">
          <p className="py-8 text-center text-xl">محصولات جدید</p>
          <NewProducts />
        </div>
      </div>
      <p className="text-xl">محصولات مرتبط</p>
      <div className="mt-5 bg-white px-5">
        <RelatedProducts categoryId={product?.categoryId} />
      </div>

      <div className="mt-16 flex flex-col items-center">
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
        <Comment productId={para[0]} />
      </div>
    </div>
  );
};

export default ProductDetails;
