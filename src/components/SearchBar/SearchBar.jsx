import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";

export default function SearchBar() {
  return (
    <>
      <div></div>
      <div className="w-30 hidden lg:flex bg-transparent p-1 rounded-full border-solid border-2 border-color-green shadow-none ">
        <input
          type="text"
          placeholder="جستجو در محصولات"
          className="rounded-full outline-none px-3 bg-transparent"
        />
        <svg
          width="33"
          height="33"
          viewBox="0 0 33 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.75 21.6783L26.8638 23.7922C27.7121 24.6404 27.7121 26.0156 26.8638 26.8638C26.0156 27.7121 24.6404 27.7121 23.7922 26.8638L21.6783 24.75M5.5 14.85C5.5 9.68614 9.68613 5.5 14.85 5.5C20.0138 5.5 24.2 9.68614 24.2 14.85C24.2 20.0139 20.0138 24.2 14.85 24.2C9.68613 24.2 5.5 20.0139 5.5 14.85Z"
            stroke="#A6B2A8"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </>
  );
}
