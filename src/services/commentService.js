import http from "./httpService";

export function productPostComment({
  fullName,
  userName,
  commentText,
  rateValue,
  parentId,
  kalCommentId,
  token,
}) {
  console.log(
    fullName,
    userName,
    commentText,
    rateValue,
    parentId,
    kalCommentId
  );
  return http
    .post(
      "/ProductApi/CreateProductComment",
      {
        fullName,
        userName,
        commentText,
        rateValue,
        parentId,
        kalCommentId,
      },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    )
    .then(({ data }) => data);
}
