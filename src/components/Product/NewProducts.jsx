"use client";
import useNewProducts from "@/hooks/useNewProducts";
import Image from "next/image";
import { NumericFormat } from "react-number-format";
import Link from "next/link";

const NewProducts = () => {
  const { data, isLoading } = useNewProducts();

  return (
    <ul>
      {data?.data?.productlist?.map((item) => (
        <li key={item.productId}>
          <Link
            href={`/category/${item.categoryId}/${item.productId}-${item.variantId}`}
            className="border-t border-r flex items-center p-3"
          >
            <div className="flex justify-center items-center w-1/2">
              <Image width={100} height={100} alt="" src={item.pathImage} />
            </div>
            <div className="w-1/2 flex items-center flex-col">
              <span>{item.productName}</span>
              <p className="price">
                <span>
                  هر{" "}
                  {item.unitCountingId === 1
                    ? "عدد"
                    : item.unitCountingId === 2
                    ? "کیلو"
                    : "بسته"}
                </span>
                <NumericFormat
                  displayType="text"
                  value={item.salePrice}
                  thousandSeparator=","
                />
                <span>ریال</span>
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NewProducts;
