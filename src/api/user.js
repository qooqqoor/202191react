import { baseURL } from "./service";


export const user = {
  login: function (data) {
    return baseURL({
      url: "/login",
      method: "post",
      data,
    });
  },
  register: function (data) {
    return baseURL({
      url: "/register",
      method: "post",
      data,
    });
  },
  authentication: function () {
    return baseURL({
      url: "/user",
      method: "get",
    });
  },

};
