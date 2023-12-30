import http from "./httpService";

export function productPostComment({ commentText, productId, token }) {
  return http
    .post(
      "/ProductApi/CreateProductComment",
      {
        commentText,
        productId,
      },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    )
    .then(({ data }) => data);
}
