import axios from "axios";
import { getUserLocalStorage } from "../context/AuthProvider/util";

export const Api = axios.create({
  baseURL: "https://reqres.in/api/"
});

Api.interceptors.request.use(
  (config) => {
    const user = getUserLocalStorage()

    // config.headers = {
    //   Authorization: user?.token
    // }

    // Dessa forma, você garante que não está ignorando/substituindo o headers objeto que pode vir do axios.{post/get/delete/etc}(url, config) chamadas.
    
    if(!config.headers) {
      config.headers = {};
    }
    config.headers.Authorization = user?.token;
    return config;
  },
  (error) => {
    return Promise.reject(error)
  }
)