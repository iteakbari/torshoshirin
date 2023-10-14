"use client";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { useState } from "react";
import { Drawer } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import SearchBar from "../SearchBar/SearchBar";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <AppBar
      position="sticky"
      className="top-0 navbar-bg lg:rounded-br-2xl lg:rounded-bl-2xl p-2 shadow-md"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters className="flex justify-between">
          <Link href="/">
            <Image
              src="/assets/img/logo.png"
              width={100}
              height={50}
              alt="logo"
            />
          </Link>

          <Box
            component="ul"
            className="hidden lg:flex flex-1 lg:gap-5 xl:gap-10 justify-center lg:text-lg xl:text-2xl"
          >
            <li>
              <Link href="/">خانه</Link>
            </li>
            <li>
              <Link href="/category" className="">
                دسته بندی
              </Link>
            </li>
            <li>
              <Link href="/blog" className="">
                بلاگ
              </Link>
            </li>
            <li>
              <Link href="/about" className="">
                درباره ما
              </Link>
            </li>
            <li>
              <Link href="/contactus" className="">
                تماس با ما
              </Link>
            </li>
            <li>
              <Link href="/sign" className="">
                ورود/ثبت نام
              </Link>
            </li>
          </Box>
          <Box component="div" className="flex gap-3 items-center">
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="34"
                viewBox="0 0 40 34"
                fill="none"
              >
                <path
                  d="M36.5 0.5H3.5C2.70435 0.5 1.94129 0.81607 1.37868 1.37868C0.81607 1.94129 0.5 2.70435 0.5 3.5V30.5C0.5 31.2956 0.81607 32.0587 1.37868 32.6213C1.94129 33.1839 2.70435 33.5 3.5 33.5H36.5C37.2956 33.5 38.0587 33.1839 38.6213 32.6213C39.1839 32.0587 39.5 31.2956 39.5 30.5V3.5C39.5 2.70435 39.1839 1.94129 38.6213 1.37868C38.0587 0.81607 37.2956 0.5 36.5 0.5ZM36.5 3.5V6.5H3.5V3.5H36.5ZM36.5 30.5H3.5V9.5H36.5V30.5ZM29 14C29 16.3869 28.0518 18.6761 26.364 20.364C24.6761 22.0518 22.3869 23 20 23C17.6131 23 15.3239 22.0518 13.636 20.364C11.9482 18.6761 11 16.3869 11 14C11 13.6022 11.158 13.2206 11.4393 12.9393C11.7206 12.658 12.1022 12.5 12.5 12.5C12.8978 12.5 13.2794 12.658 13.5607 12.9393C13.842 13.2206 14 13.6022 14 14C14 15.5913 14.6321 17.1174 15.7574 18.2426C16.8826 19.3679 18.4087 20 20 20C21.5913 20 23.1174 19.3679 24.2426 18.2426C25.3679 17.1174 26 15.5913 26 14C26 13.6022 26.158 13.2206 26.4393 12.9393C26.7206 12.658 27.1022 12.5 27.5 12.5C27.8978 12.5 28.2794 12.658 28.5607 12.9393C28.842 13.2206 29 13.6022 29 14Z"
                  fill="#20422A"
                />
              </svg>
              <span className="absolute flex w-6 h-6 rounded-full justify-center items-center -top-2 -right-3 bg-orange">
                1
              </span>
            </div>
            <SearchBar />
            <button className="lg:hidden">
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.75 21.6783L26.8638 23.7922C27.7121 24.6404 27.7121 26.0156 26.8638 26.8638C26.0156 27.7121 24.6404 27.7121 23.7922 26.8638L21.6783 24.75M5.5 14.85C5.5 9.68614 9.68613 5.5 14.85 5.5C20.0138 5.5 24.2 9.68614 24.2 14.85C24.2 20.0139 20.0138 24.2 14.85 24.2C9.68613 24.2 5.5 20.0139 5.5 14.85Z"
                  stroke="#1a3622"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <button
              className="xs:flex lg:hidden"
              onClick={toggleDrawer("right", true)}
            >
              <svg
                width="21"
                height="8"
                viewBox="0 0 21 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="21" height="2" rx="1" fill="#20422A" />
                <rect y="6" width="21" height="2" rx="1" fill="#20422A" />
              </svg>
            </button>
            <Drawer
              anchor="right"
              open={state["right"]}
              onClose={toggleDrawer("right", false)}
            >
              <ul className="w-28 bg-red-500">
                <li>first link</li>
                <li>first link</li>
                <li>first link</li>
                <li>first link</li>
                <li>first link</li>
              </ul>
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
