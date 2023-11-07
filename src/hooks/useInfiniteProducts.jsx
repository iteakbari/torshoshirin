import { getProductsList } from "@/services/productService";
import { useInfiniteQuery } from "@tanstack/react-query";

const useInfiniteProducts = () => {
  return useInfiniteQuery({
    queryKey: ["products"],
    queryFn: ({ pageParam }) => getProductsList(pageParam),
    getNextPageParam: (_lastPage, pages) => {
      return pages.length + 1;
    },
  });
};

export default useInfiniteProducts;
