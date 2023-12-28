import { NextResponse } from "next/server";

export async function middleware(req) {
  const url = req.url;
  const pathname = req.nextUrl.pathname;
  const token = req.cookies.get("token");
  if (!token || token === undefined) {
    if (
      pathname?.startsWith("/dashboard") ||
      pathname?.startsWith("/purchase")
    ) {
      return NextResponse.redirect(new URL("/sign", url));
      // try {
      //   const res = await fetch(
      //     `${process.env.NEXT_PUBLIC_API_URL}/AccountApi/GetProfile`,
      //     {
      //       headers: {
      //         Authorization: "Bearer " + token,
      //       },
      //     }
      //   );
      //   const data = await res.json();
      //   const { data: user } = data.data || {};
      //   if (!user) NextResponse.redirect(new URL("/sign", url));
      // } catch (error) {
      //   console.log(error);
      // }
    }
  }
}

export const config = {
  matcher: ["/dashboard", "/dashboard/:path*", "/purchase", "/sign"],
};
