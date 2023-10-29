import Counter from "@/common/Counter";
import Image from "next/image";
import Link from "next/link";
import { NumericFormat } from "react-number-format";
import Category from "../Category/Category";

const Product = ({
  favoriteHandler,
  favorite,
  pathImage,
  productId,
  salePrice,
  productName,
  unitCountingId,
  categoriId,
}) => {
  return (
    <div className="card bg-transparent relative">
      <label>
        <input
          type="checkbox"
          name="favorite"
          id=""
          value={favorite}
          onChange={() => favoriteHandler(productId)}
          className="hidden"
        />
        <svg
          width="35"
          height="32"
          viewBox="0 0 35 32"
          fill={`${favorite ? "#DB7267" : "none"}`}
          xmlns="http://www.w3.org/2000/svg"
          className="cursor-pointer absolute top-3 left-3"
        >
          <path
            d="M17.7077 5.19672C17.6042 5.33246 17.3961 5.33246 17.2927 5.19672C13.6238 0.382228 7.84966 -0.139009 4.26259 3.63301C0.607133 7.47693 0.607132 13.7092 4.26259 17.5531L15.5145 29.3852C16.6112 30.5384 18.3892 30.5384 19.4858 29.3852L30.7377 17.5531C34.3932 13.7092 34.3932 7.47693 30.7377 3.63301C27.1507 -0.139009 21.3766 0.382228 17.7077 5.19672Z"
            stroke="#DB7267"
            strokeWidth="2"
          />
        </svg>
      </label>
      <Link href="" className="flex justify-center">
        <Image width={200} height={200} alt="" src={pathImage} />
      </Link>
      <div className="flex justify-between items-center">
        <Link href={`/${categoriId}/${productId}`}>{productName}</Link>
        <p className="price">
          <span>
            هر{" "}
            {unitCountingId === 1
              ? "عدد"
              : unitCountingId === 2
              ? "کیلو"
              : "بسته"}
          </span>
          <NumericFormat
            displayType="text"
            value={salePrice}
            thousandSeparator=","
          />
          <span>تومان</span>
        </p>
      </div>
      <div className="bg-light-gray p-5 mt-3 rounded-xl h-56 flex flex-col justify-end">
        {unitCountingId === 1 ? (
          <>
            <p className="pb-7 text-color-light">تعداد</p>
            <Counter step={1} label="عدد" />
          </>
        ) : unitCountingId === 2 ? (
          <>
            <Counter step={1} label="کیلوگرم" />
            <Counter step={250} label="گرم" />
          </>
        ) : (
          <>
            <p className="pb-7 text-color-light">تعداد</p>
            <Counter step={1} label="بسته" />
          </>
        )}

        <button
          type="button"
          className="w-full bg-orange h-12 rounded-xl"
          onClick={() => addToBasketHandler()}
        >
          افزودن به سبد خرید
        </button>
      </div>
    </div>
  );
};

export default Product;
