import { getUserProfile } from "@/services/authServices";
import { useQuery } from "@tanstack/react-query";

const useGetProfile = (token) => {
  return useQuery({
    queryKey: ["get-profile", token],
    queryFn: getUserProfile,
    cacheTime: 500,
  });
};

export default useGetProfile;