import { discountedProduct, getProductsList } from "@/services/productService";
import { useQuery } from "@tanstack/react-query";

const useDiscounted = (options) => {
  // console.log(options);
  return useQuery({
    queryKey: ["discountedProducts", options],
    queryFn: discountedProduct,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  });
};

export default useDiscounted;
