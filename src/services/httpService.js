process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
process.env.Access_Control_Allow_Origin = "http://localhost:3000";

import axios from "axios";
import { config } from "process";

const https = require("https");
const agent = new https.Agent({
  rejectUnauthorized: false,
});

const app = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  httpsAgent: agent,
});

app.interceptors.request.use(
  (res) => res,
  (err) => Promise.reject(err)
);

app.interceptors.response.use(
  (res) => res,
  (err) => {
    const originalConfig = err.config;
    if (err.response && err.response.status === 401 && !originalConfig._retry) {
      originalConfig._retry = true;
      const tempToken = localStorage.getItem("temp_token");
      if (tempToken) {
        err.response.headers.Authorization = `${tempToken}`;
        // اینجا توکن از لوکال استوریج خوانده شده و به هدر اضافه شده است
      } else {
        // اگر توکن در لوکال استوریج وجود نداشته باشد، می‌توانید از اینجا دستوراتی برای مدیریت این موقعیت اضافه کنید
        console.log("توکن در لوکال استوریج موجود نیست.");
      }
    }
    return Promise.reject(err);
  }
);

const http = {
  get: app.get,
  post: app.post,
  delete: app.delete,
  put: app.put,
  patch: app.patch,
};

export default http;
