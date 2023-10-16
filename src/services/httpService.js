import axios from "axios";

const https = require("https");
const agent = new https.Agent({
  rejectUnauthorized: false,
});

const app = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  widthCredentials: true,
  httpsAgent: agent,
});

const http = {
  get: app.get,
  post: app.post,
  delete: app.delete,
  put: app.put,
  patch: app.patch,
};

export default http;
