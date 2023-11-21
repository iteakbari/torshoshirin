import http from "./httpService";

export function sendCart({ variantId, count }) {
  return http
    .post(`/ShoppingCart/AddToCart?VariantId=${variantId}&Quantity=${count}`)
    .then(({ data }) => data.data);
}
