import TextFieldInput from "@/common/TextFieldInput";
import { NumericFormat } from "react-number-format";

const Payment = () => {
  return (
    <>
      <div className="flex justify-between">
        <div>
          <p className="text-xl font-bold">انتخاب روش پرداخت</p>
          <div className="mt-10">
            <div className="flex items-center gap-3 py-3">
              <input
                type="radio"
                name="reciveType"
                id="r1"
                onChange={(e) => setReciveType(e.target.value)}
                className="w-4 h-4"
              />
              <label htmlFor="r1" className="text-xl">
                پرداخت اینترنتی
              </label>
            </div>
            <div className="flex items-center gap-3 py-3">
              <input
                type="radio"
                name="reciveType"
                id="r2"
                onChange={(e) => setReciveType(e.target.value)}
                className="w-4 h-4"
              />
              <label htmlFor="r2" className="text-xl">
                پرداخت در محل
              </label>
            </div>
          </div>
          <form className="flex items-end gap-3 mt-10">
            <div className="input-box discount border rounded-md flex">
              <input
                type="text"
                className="h-14 bg-transparent text-right px-3"
                placeholder=" "
              />
              <label>کد تخفیف</label>
              <button className="px-5 border-r text-orange">اعمال</button>
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
                  value={45455211}
                />
                <small className="text-xs pr-1">تومان</small>
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
                  value={45455211}
                />
                <small className="text-xs pr-1">تومان</small>
              </span>
            </div>
          </div>
          <div className="py-5 border-b-4 border-light">
            <div className="flex justify-between items-center">
              <span>تخفیف:</span>
              <span>
                <NumericFormat
                  thousandSeparator=","
                  displayType="text"
                  value={45455211}
                />
                <small className="text-xs pr-1">تومان</small>
              </span>
            </div>
          </div>
          <div className="py-5 border-b-4 border-light-green">
            <div className="flex justify-between items-center">
              <span>سود شما از خرید:</span>
              <span>
                <NumericFormat
                  thousandSeparator=","
                  displayType="text"
                  value={45455211}
                />
                <small className="text-xs pr-1">تومان</small>
              </span>
            </div>
          </div>
          <div className="py-5">
            <div className="flex justify-between items-center">
              <span>قابل پرداخت:</span>
              <span>
                <NumericFormat
                  thousandSeparator=","
                  displayType="text"
                  value={45455211}
                />
                <small className="text-xs pr-1">تومان</small>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <button
          type="button"
          className="bg-orange text-white w-72 h-12 rounded-md mt-8"
          onClick={() => setActiveTab(3)}
        >
          پرداخت
        </button>
      </div>
    </>
  );
};

export default Payment;
