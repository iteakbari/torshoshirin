import http from "./httpService";

export function getOtp(data) {
  return http
    .post("/AccountApi/SendValidateCodeToPhoneNumber", data)
    .then(({ data }) => data.data);
}

export function checkOtp(data) {
  return http
    .post("/AccountApi/ConfirmSendedCode", data)
    .then(({ data }) => data.data);
}
