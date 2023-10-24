import http from "./httpService";

export function getOtp({ phoneNumber }) {
  return http
    .post(`/AccountApi/SendValidateCodeToPhoneNumber`, { phoneNumber })
    .then(({ data }) => data.data);
}

export function checkOtp({ phoneNumber, phoneNumberCode }) {
  return http
    .post("/AccountApi/ConfirmSendedCode", { phoneNumber, phoneNumberCode })
    .then(({ data }) => data.data);
}

export function getUserProfile({ queryKey }) {
  return http
    .get("/AccountApi/GetProfile", {
      headers: {
        Authorization: "Bearer " + queryKey[1], //the token is a variable which holds the token
      },
    })
    .then(({ data }) => data.data);
}
