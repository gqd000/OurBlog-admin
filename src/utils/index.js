// 模块接口文件，暴漏给外部模块使用

// 导入核心模块
import { request } from "./core";
// 导入请求方式
import METHODS from "./methods";
// 导入请求接口
import URL from "./url";
import qs from "qs";
const API = {
  // 登录
  login(params) {
    return request(METHODS.POST, URL.LOGIN, params);
  },


  // 总注册用户
  users() {
    return request(METHODS.GET, URL.USERS);
  },
  // 总文章数
  articles() {
    return request(METHODS.GET, URL.ARTICLES);
  },
  // 总管理员
  admins() {
    return request(METHODS.GET, URL.ADMINS);
  },
  // 用户列表数据
  userlist(params) {
    return request(METHODS.GET, URL.USERLIST + qs.stringify(params));
  },
  // 商家列表总数
  shopcount() {
    return request(METHODS.GET, URL.SHOPCOUNT);
  },
  // 商家列表经纬度
  guess() {
    return request(METHODS.GET, URL.GUESS);
  },
  // 商家列表数据
  shoplist(params) {
    return request(METHODS.GET, URL.SHOPLIST + qs.stringify(params));
  },
  // 食品列表总数
  foodcount() {
    return request(METHODS.GET, URL.FOODCOUNT);
  },
  // 食品列表数据
  foodlist(params) {
    return request(METHODS.GET, URL.FOODLIST, params);
  }

  // 注册
  // register() {}
};

// export default API;
export default {
  // 将对象注入到Vue全局
  install(Vue) {
    Vue.prototype.$axios = API;
  }
};
