import http from "./httpService";

export function addressFunc({
  id,
  cityId,
  stateId,
  receiverMyself,
  longY,
  latX,
  address,
  codePost,
  phoneNumber,
  mobileNumber,
  fname,
  lname,
  token,
}) {
  return http
    .post(
      "/AccountApi/CreateAddress",
      {
        id,
        cityId,
        stateId,
        receiverMyself,
        longY,
        latX,
        address,
        codePost,
        phoneNumber,
        mobileNumber,
        fname,
        lname,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then(({ data }) => data.data);
}

export function editAddressFunc({
  id,
  cityId,
  stateId,
  receiverMyself,
  longY,
  latX,
  address,
  codePost,
  phoneNumber,
  mobileNumber,
  fname,
  lname,
  token,
}) {
  console.log(address);
  return http
    .post(
      "/AccountApi/EditAddress",
      {
        id,
        cityId,
        stateId,
        receiverMyself,
        longY,
        latX,
        address,
        codePost,
        phoneNumber,
        mobileNumber,
        fname,
        lname,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then(({ data }) => data.data);
}
