import { getUserProfile } from "@/services/authServices";
import { useQuery } from "@tanstack/react-query";

const useGetProfile = (token) => {
  return useQuery({
    queryKey: ["get-profile", token],
    enabled: !!token,
    queryFn: getUserProfile,
    refetchIntervalInBackground: false,
    refetchInterval: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};

export default useGetProfile;
