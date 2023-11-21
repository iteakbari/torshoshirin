import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();
  const path = window.location.pathname;

  useEffect(() => {
    Cookies.get("token") && setIsAuthenticated(true);
    !Cookies.get("token") &&
      path.startsWith("/dashboard") &&
      router.push("/sign");
  }, [isAuthenticated, path]);

  return { isAuthenticated };
};

export default useAuth;
