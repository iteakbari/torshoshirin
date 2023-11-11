import http from "./httpService";

export function likeProduct({ productId, token }) {
  return http
    .post(
      `/ProductApi/SaveFavorite?ProductId=${productId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then(({ data }) => data.data);
}
