import TextFieldInput from "@/common/TextFieldInput";
import useStateList from "@/hooks/useStateList";
import { useContext, useState } from "react";
import { NumericFormat } from "react-number-format";
import Image from "next/image";
import { useMutation } from "@tanstack/react-query";
import { getDiscount } from "@/services/discountService";
import Cookies from "js-cookie";
import useShowCartItems from "@/hooks/useShowCartItems";
import { setPaymentTypeOrder } from "@/services/paymentTypeService";
import { ShopContext } from "@/context/shopContext";

const Payment = ({ setActiveTab, setPaymentResult }) => {
  const token = Cookies.get("token");
  const { data: getSatatesList } = useStateList();
  const [paymentType, setPaymentType] = useState();
  const [discount, setDiscount] = useState("");
  const { resetCart } = useContext(ShopContext);
  const { data: discountData, mutateAsync: getDiscountFunc } = useMutation({
    mutationFn: getDiscount,
  });
  const { data: showCartItems, refetch } = useShowCartItems(token);
  const { mutateAsync: setPaymentTypeOrderFunc } = useMutation({
    mutationFn: setPaymentTypeOrder,
  });

  const discountHandler = async (e) => {
    e.preventDefault();
    const data = await getDiscountFunc({
      discountCode: discount,
      customerId: 0,
      token,
    });

    refetch();
  };

  const paymentTypeHandler = async () => {
    const data = await setPaymentTypeOrderFunc({
      receiverOrderId: 0,
      customerAddressId: 0,
      paymentTypeId: +paymentType,
      token,
    });
    // console.log(data);

    if (data?.data?.success) {
      setActiveTab(4);
      setPaymentResult(data?.data);
      resetCart();
    }
  };

  return (
    <>
      <div className="flex justify-between">
        <div>
          <p className="text-xl font-bold">انتخاب روش پرداخت</p>
          <div className="mt-10">
            {getSatatesList?.data?.paymentTypeList.map((p) => (
              <div key={p.id} className="flex items-center gap-3 py-3">
                <input
                  type="radio"
                  name="reciveType"
                  id={p.id}
                  value={p.id}
                  onChange={(e) => setPaymentType(e.target.value)}
                  className="w-4 h-4"
                />
                <label htmlFor={p.id} className="text-xl">
                  {/* <Image src={p.icont} width={50} height={50} alt={p.name} /> */}
                  {p.name}
                </label>
              </div>
            ))}
          </div>
          <form className="flex items-end gap-3 mt-10">
            <div className="input-box discount border rounded-md flex">
              <input
                type="text"
                className="h-14 bg-transparent text-right px-3"
                placeholder=" "
                onChange={(e) => setDiscount(e.target.value)}
              />
              <label>کد تخفیف</label>
              <button
                type="submit"
                className="px-5 border-r text-orange"
                onClick={(e) => discountHandler(e)}
              >
                اعمال
              </button>
            </div>
            {/*{error && (
                <p className="text-xs text-red-500  mt-1">{errorMessage}</p>
              )} */}
          </form>
        </div>
        <div className="bg-light-gray p-5 w-96 rounded-md">
          <div className="py-5 border-b-4 border-light">
            <div className="flex justify-between items-center">
              <span>قیمت کالاها:</span>
              <span>
                <NumericFormat
                  thousandSeparator=","
                  displayType="text"
                  value={showCartItems?.data?.data?.cartTotal}
                />
                <small className="text-xs pr-1">ریال</small>
              </span>
            </div>
          </div>
          <div className="py-5 border-b-4 border-light">
            <div className="flex justify-between items-center">
              <span>هزینه ارسال:</span>
              <span>
                <NumericFormat
                  thousandSeparator=","
                  displayType="text"
                  value={showCartItems?.data?.data?.cartShippingCostTotal}
                />
                <small className="text-xs pr-1">ریال</small>
              </span>
            </div>
          </div>
          <div className="py-5 border-b-4 border-light-green">
            <div className="flex justify-between items-center">
              <span>تخفیف:</span>
              <span>
                <NumericFormat
                  thousandSeparator=","
                  displayType="text"
                  value={showCartItems?.data?.data?.cartDiscountTotal}
                />
                <small className="text-xs pr-1">ریال</small>
              </span>
            </div>
          </div>
          {/* <div className="py-5 border-b-4 border-light-green">
            <div className="flex justify-between items-center">
              <span>سود شما از خرید:</span>
              <span>
                <NumericFormat
                  thousandSeparator=","
                  displayType="text"
                  value={45455211}
                />
                <small className="text-xs pr-1">ریال</small>
              </span>
            </div>
          </div> */}
          <div className="py-5">
            <div className="flex justify-between items-center">
              <span>قابل پرداخت:</span>
              <span>
                <NumericFormat
                  thousandSeparator=","
                  displayType="text"
                  value={
                    showCartItems?.data?.data?.cartTotal +
                    showCartItems?.data?.data?.cartShippingCostTotal -
                    showCartItems?.data?.data?.cartDiscountTotal
                  }
                />
                <small className="text-xs pr-1">ریال</small>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <button
          type="button"
          className="bg-orange text-white w-72 h-12 rounded-md mt-8"
          onClick={() => paymentTypeHandler()}
        >
          پرداخت
        </button>
      </div>
    </>
  );
};

export default Payment;
