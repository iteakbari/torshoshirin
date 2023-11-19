"use client";

import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function Logout() {
  const router = useRouter();

  function handleLogout() {
    Cookies.remove("token");
    if (window && window.location) window.location.reload();
    setTimeout(() => {
      router.push("/");
    }, 100);
  }

  return (
    <>
      <span onClick={handleLogout}>خروج</span>
    </>
  );
}
