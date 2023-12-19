import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const AddressLoading = () => {
  return (
    <>
      <div className="border w-2/4 p-5 rounded-lg mb-5">
        <Skeleton height={30} width={300} />
      </div>
      <div className="border w-2/4 p-5 rounded-lg mb-5">
        <Skeleton height={30} width={300} />
      </div>
      <div className="border w-2/4 p-5 rounded-lg mb-5">
        <Skeleton height={30} width={300} />
      </div>
    </>
  );
};

export default AddressLoading;
