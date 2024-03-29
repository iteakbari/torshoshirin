import http from "./httpService";
import axios from "axios";

export function getProductsList({ queryKey }) {
  const { categoryId, pageSize, step, sortTypeId, keyWord, token } =
    queryKey[1];
  return http
    .post(`/ProductApi/SearchProduct`, {
      categoryId,
      pageSize,
      step,
      sortTypeId,
      keyWord,
    })
    .then(({ data }) => data.data.data);
}

export function getProduct({ queryKey }) {
  return http
    .get(
      `/ProductApi/ProductDetails?ProductId=${queryKey[1].productId}&VarianId=${queryKey[1].variantId}`
    )
    .then(({ data }) => data.data);
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
  return http
    .post("/ProductApi/SearchProduct", {
      categoryId,
      brandId,
      barcode,
      keyWord,
      step,
      pageSize,
      totalCount,
    })
    .then(({ data }) => data.data);
}

export function discountedProduct({
  categoryId,
  brandId,
  barcode,
  keyWord,
  step,
  pageSize,
  totalCount,
}) {
  return http
    .post("/ProductApi/GetProductdiscounts", {
      categoryId,
      brandId,
      barcode,
      keyWord,
      step,
      pageSize,
      totalCount,
    })
    .then(({ data }) => data.data);
}

export function newProducts() {
  return http.get("/ProductApi/CurrentProduct").then(({ data }) => data.data);
}

export function relatedProducts({ queryKey }) {
  return http
    .get(`/ProductApi/RelatedProduct?CategoryId=${queryKey[1]}`)
    .then(({ data }) => data.data);
}
