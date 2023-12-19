"use client";
import Cookies from "js-cookie";
import Image from "next/image";
import useLikedProducts from "@/hooks/useLikedProducts";
import ProductLoading from "@/components/Product/ProductLoading";
import Product from "@/components/Product/Product";

const Favorites = () => {
  const token = Cookies.get("token");
  const { data, isLoading } = useLikedProducts(token);
  console.log(data?.data);

  return (
    <>
      <h3 className="text-xl mb-10">علاقمندی‌ها</h3>

      <div className="grid grid-cols-3 gap-3">
        {isLoading ? (
          <ProductLoading />
        ) : data ? (
          data.data?.map((product) => <Product key={product.id} {...product} />)
        ) : (
          <div className="w-full h-full flex justify-center items-center flex-col">
            <p className="text-center mb-10 text-light text-xl">
              محصولی در این دسته بندی ثبت نشده است.
            </p>
            <Image
              src="https://admin.torshoshirin.com/files/react-img/b2.png"
              width={300}
              height={300}
              alt="basket image"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Favorites;
