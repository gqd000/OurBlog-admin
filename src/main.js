import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
// 导入请求
import API from "./utils/index";
// Vue.prototype.$axios = API;
// 挂载到Vue
axios.defaults.baseURL = "/api";

Vue.use(API);
Vue.config.productionTip = false;
// element-ui全局引入
import ElementUI from "element-ui";
// element-ui按需引入
// import ElementUI from "./element/element";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
// 导入公共样式
import "../public/scss/mixin.scss";
// 样式清除
import "../public/scss/reset.scss";

// import service from "./http/request";
// Vue.prototype.$axios = service;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
