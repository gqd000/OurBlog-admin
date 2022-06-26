import request from "@/utils/request.js";
export const TagsList = () =>
  request({
    url: "/admin/tagList",
    method: "get"
  });
