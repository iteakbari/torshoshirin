import "./../../styles/globals.css";
import "./../../styles/dashboard.css";
import Footer from "@/components/Footer/Footer";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import Providers from "../(public)/Providers";
import Link from "next/link";
import Image from "next/image";
import SideBar from "@/components/SideBar/SideBar";
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

export const metadata = {
  title: "فروشگاه ترش و شیرین",
  description: "فروشگاه ترش و شیرین میوه و تره بار",
};

const iransans = localFont({
  src: [
    {
      path: "./../../../public/assets/fonts/IRANSans/fonts/woff2/IRANSansWeb(FaNum).woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "./../../../public/assets/fonts/IRANSans/fonts/woff2/IRANSansWeb(FaNum)_Bold.woff2",
      weight: "700",
      style: "bold",
    },
  ],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" />
      </head>
      <body className={`min-h-screen ${iransans.className}`}>
        <Providers>
          <Toaster />
          <Navbar />
          <div className="container mx-auto">
            <div className="grid grid-cols-7 gap-5 py-20">
              <SideBar />
              <div className="col-span-5 p-10 rounded-2xl bg-white shadow-md">
                {children}
              </div>
            </div>
          </div>
          <div className="flex justify-center py-5">
            <Link href="/">
              <Image
                src="/assets/img/logo.png"
                width={300}
                height={200}
                alt="logo"
              />
            </Link>
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
