import request from "@/utils/request.js";
export const AdminLogin = params =>
  request({
    url: "/admin/user/login",
    data: params,
    method: "post",
    headers: {
      "content-type": "application/json"
    }
  });

export const AdminLogout = () =>
  request({
    url: "/admin/user/logout",
    method: "get",
    headers: {
      "content-type": "application/json"
    }
  });
