import http from "./httpService";

export function getProductsList({ queryKey }) {
  const { categoryId, pageSize, step, token } = queryKey[1];
  return http
    .post(
      `/ProductApi/SearchProduct`,
      { categoryId, pageSize, step },
      { headers: { Authorization: `Bearer ${token}` } }
    )
    .then(({ data }) => data.data.data);
}

export function getProduct({ queryKey }) {
  return http.get(
    `/ProductApi/ProductDetails?ProductId=${queryKey[1].productId}&VarianId=${queryKey[1].variantId}`
  );
}

export function searchProduct({
  categoryId,
  brandId,
  barcode,
  keyWord,
  step,
  pageSize,
  totalCount,
}) {
  return http.post("/ProductApi/SearchProduct", {
    categoryId,
    brandId,
    barcode,
    keyWord,
    step,
    pageSize,
    totalCount,
  });
}
