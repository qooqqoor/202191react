import axios from "axios";
import { getToken, removeAll } from "../util/localStorage";
import {useHistory} from "react-router-dom"

import toast from "../components/Toast"
export const baseURL = axios.create({
  baseURL: " https://l8-upgrade-apis.vercel.app/api",
  headers: {
    "Content-type": "application/json",
  },
  timeout: 6000,
});
baseURL.interceptors.request.use(

  function (config) {
    const token = getToken()
    if (token) {
      config.headers["Content-Type"] = "application/json";
      config.headers["Authorization"] = 'Bearer ' + token;
    }
    return config;
  },
  function (error) {
    console.log(error);
    return Promise.reject(error);
  }
);

baseURL.interceptors.response.use(
  function (response) {
    const res = response.data;
    if (response.status === 200) {
      if (res.success) return response.data;
      return response.data;
    }
    return response;
  },
  function (error) {
    if (getToken()) {
      toast(error.response.data.message,'error');
      removeAll();
      window.location.href='/#/login';
      return;
    }
    toast(error.response.data.message,'error');
    return Promise.reject(error);
  }
);
