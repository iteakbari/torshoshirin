import { getProductsList } from "@/services/productService";
import { useQuery } from "@tanstack/react-query";

const useProducts = (options) => {
  return useQuery({
    queryKey: ["products", options],
    queryFn: getProductsList,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  });
};

export default useProducts;
