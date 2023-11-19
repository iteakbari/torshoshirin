import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    Cookies.get("token") && setIsAuthenticated(true);
    !Cookies.get("token") && router.push("/sign");
  }, [router, isAuthenticated]);

  return { isAuthenticated };
};

export default useAuth;
