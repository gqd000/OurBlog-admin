// import axios from "axios";

// import config from "../config/index";

// let { baseUrl } = config;

// console.log(baseUrl);

// const service = axios.create({
//   baseURL: baseUrl, // url = base api url + request url
//   withCredentials: true, // send cookies when cross-domain requests
//   timeout: 6000 // request timeout
// });

// service.interceptors.request.use(config => {
//   var token = sessionStorage.getItem("token");
//   if (token) {
//     config.headers.Authorization = token;
//     return config;
//   } else {
//     return config;
//   }
// });

// service.interceptors.response.use(response => {
//   return response;
// });

// export default service;
