import http from "./httpService";

export function getProductsList({ queryKey }) {
  return http
    .post(`/ProductApi/SearchProduct`, queryKey[1])
    .then(({ data }) => data.data);
}

export function getProduct({ queryKey }) {
  return http.get(`/ProductApi/ProductDetails?ProductId=${queryKey[1]}`);
}
