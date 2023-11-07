import Image from "next/image";
import { NumericFormat } from "react-number-format";

const NewProducts = () => {
  return (
    <ul>
      <li>
        <div className="border-t border-r flex items-center p-3">
          <div className="flex justify-center items-center w-1/2">
            <Image width={100} height={100} alt="" src="/assets/img/fc1.png" />
          </div>
          <div className="w-1/2 flex items-center">
            <p className="price">
              <span>هر بسته</span>
              <NumericFormat
                displayType="text"
                value={123500}
                thousandSeparator=","
              />
              <span>تومان</span>
            </p>
          </div>
        </div>
      </li>
      <li>
        <div className="border-t border-r flex items-center p-3">
          <div className="flex justify-center items-center w-1/2">
            <Image width={100} height={100} alt="" src="/assets/img/fc1.png" />
          </div>
          <div className="w-1/2 flex items-center">
            <p className="price">
              <span>هر بسته</span>
              <NumericFormat
                displayType="text"
                value={123500}
                thousandSeparator=","
              />
              <span>تومان</span>
            </p>
          </div>
        </div>
      </li>
      <li>
        <div className="border-t border-r flex items-center p-3">
          <div className="flex justify-center items-center w-1/2">
            <Image width={100} height={100} alt="" src="/assets/img/fc1.png" />
          </div>
          <div className="w-1/2 flex items-center">
            <p className="price">
              <span>هر بسته</span>
              <NumericFormat
                displayType="text"
                value={123500}
                thousandSeparator=","
              />
              <span>تومان</span>
            </p>
          </div>
        </div>
      </li>
      <li>
        <div className="border-t border-r flex items-center p-3">
          <div className="flex justify-center items-center w-1/2">
            <Image width={100} height={100} alt="" src="/assets/img/fc1.png" />
          </div>
          <div className="w-1/2 flex items-center">
            <p className="price">
              <span>هر بسته</span>
              <NumericFormat
                displayType="text"
                value={123500}
                thousandSeparator=","
              />
              <span>تومان</span>
            </p>
          </div>
        </div>
      </li>
      <li>
        <div className="border-t border-r flex items-center p-3 ">
          <div className="flex justify-center items-center w-1/2">
            <Image width={100} height={100} alt="" src="/assets/img/fc1.png" />
          </div>
          <div className="w-1/2 flex items-center">
            <p className="price">
              <span>هر بسته</span>
              <NumericFormat
                displayType="text"
                value={123500}
                thousandSeparator=","
              />
              <span>تومان</span>
            </p>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default NewProducts;
