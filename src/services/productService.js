import http from "./httpService";

export function getProductsList({ categoryId, step, pageSize }) {
  console.log(categoryId, step, pageSize);
  return http
    .post(`/ProductApi/SearchProduct`, {
      categoryId,
      step,
      pageSize,
    })
    .then(({ data }) => data.data);
}
