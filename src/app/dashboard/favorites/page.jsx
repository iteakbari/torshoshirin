"use client";
import Cookies from "js-cookie";
import Image from "next/image";
import useLikedProducts from "@/hooks/useLikedProducts";
import ProductLoading from "@/components/Product/ProductLoading";
import Product from "@/components/Product/Product";

const Favorites = () => {
  const token = Cookies.get("token");
  const { data, isLoading } = useLikedProducts(token);
  // console.log(data?.data?.productlist);

  return (
    <>
      <h3 className="text-xl mb-10">علاقمندی‌ها</h3>

      <div>
        {isLoading ? (
          <ProductLoading />
        ) : data && data.length > 0 ? (
          <div className="grid grid-cols-3 gap-3">
            {data.data.productlist?.map((product) => (
              <Product key={product.id} {...product} />
            ))}
          </div>
        ) : (
          <div className="w-full h-full flex justify-start items-center flex-col">
            <Image
              src="https://admin.torshoshirin.com/files/react-img/Items.png"
              width={300}
              height={300}
              alt="basket image"
            />
            <p className="text-center text-xl font-bold mt-5">
              لیست علاقمندی‌هایتان خالیست.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Favorites;
