"use client";
import Comment from "@/components/Comment/Comment";
import HorizontalCard from "@/components/HorizontalCard/HorizontalCard";
import HorizontalCardLoading from "@/components/HorizontalCard/HorizontalCardLoading";
import NewProducts from "@/components/Product/NewProducts";
import NewProductsLoading from "@/components/Product/NewProductsLoading";
import useProduct from "@/hooks/useProduct";

const ProductDetails = ({ params }) => {
  const para = params.productId.split("-");
  const { data, isLoading } = useProduct(para[0], para[1]);
  const product = data?.data;

  return (
    <div className="container lg:px-10 2xl:px-0 mx-auto">
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
          {/* <NewProducts /> */}
          <NewProductsLoading />
        </div>
      </div>
      <p className="text-xl">محصولات مرتبط</p>
      <div className="mt-5 bg-white"></div>

      <div className="flex flex-col items-center">
        <p className="mt-10 text-center">
          نظرتون در مورد این محصول چیه؟ 🍊 با ما به اشتراک بگذارین!
        </p>
        <Comment />
      </div>
    </div>
  );
};

export default ProductDetails;
