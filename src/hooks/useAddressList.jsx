import { getUserAddressList } from "@/services/authServices";
import { useQuery } from "@tanstack/react-query";

const useAddressList = (token) => {
  return useQuery({
    queryKey: ["get-addressList", token],
    queryFn: getUserAddressList,
    cacheTime: 100,
  });
};

export default useAddressList;
