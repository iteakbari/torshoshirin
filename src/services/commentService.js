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

export function blogPostComment({
  documentId,
  fullName,
  userName,
  commentText,
  token,
}) {
  return http
    .post(
      "/DocumentApi/CreateDocumentComment",
      {
        commentText,
        documentId,
        userName,
        fullName,
      },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    )
    .then(({ data }) => data);
}

export function suggestion({ flName, mobileNumber, description }) {
  return http
    .post("/HomeApi/CreateProductComment", {
      flName,
      mobileNumber,
      description,
    })
    .then(({ data }) => data);
}
