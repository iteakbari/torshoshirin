import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CategoriesListLoading = () => {
  return (
    <>
      <div className="w-350 h-350 rounded-3xl overflow-hidden">
        <Skeleton height={350} width={350} />
      </div>
      <div className="w-350 h-350 rounded-3xl overflow-hidden">
        <Skeleton height={350} width={350} />
      </div>
      <div className="w-350 h-350 rounded-3xl overflow-hidden">
        <Skeleton height={350} width={350} />
      </div>
      <div className="w-350 h-350 rounded-3xl overflow-hidden">
        <Skeleton height={350} width={350} />
      </div>
      <div className="w-350 h-350 rounded-3xl overflow-hidden">
        <Skeleton height={350} width={350} />
      </div>
      <div className="w-350 h-350 rounded-3xl overflow-hidden">
        <Skeleton height={350} width={350} />
      </div>
      <div className="w-350 h-350 rounded-3xl overflow-hidden">
        <Skeleton height={350} width={350} />
      </div>
      <div className="w-350 h-350 rounded-3xl overflow-hidden">
        <Skeleton height={350} width={350} />
      </div>
    </>
  );
};

export default CategoriesListLoading;
