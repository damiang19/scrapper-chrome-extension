import api from "./axiosinterceptor";

export const ShopService = {
//   registerAuthorizedUser,
  getShopList
};

function getShopList() { 
  const requestOptions = {
    headers: { "Content-Type": "application/json" },
  };
  debugger;
  return api
    .get(`/shops`, requestOptions)
    .then((response) => response.data);
}

// function registerAuthorizedUser(payload) {
//   const requestOptions = {
//     headers: { "Content-Type": "application/json" },
//   };
//   return api
//     .post("/api/authorizedUser/register/pl", payload, requestOptions)
//     .then((response) => response.data);
// }
