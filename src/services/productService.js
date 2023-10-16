import http from "./httpService";

export function getProducts() {
  return http.get("/CategoryApi/Index", data).then(({ data }) => data.data);
}
