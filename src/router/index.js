import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/about",
    component: () => import("../views/About.vue")
  },
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/index",
    name: "index",
    component: () => import("../views/Index.vue"),
    children: [
      {
        path: "/",
        name: "home",
        component: () => import("../views/Home.vue")
      },
      {
        path: "/addShop",
        component: () => import("../views/AddShop.vue"),
        meta: ["添加数据", "添加商铺"]
      },
      {
        path: "/addGoods",
        component: () => import("../views/AddGoods.vue"),
        meta: ["添加数据", "添加商品"]
      },
      {
        path: "/userList",
        component: () => import("../views/UserList.vue"),
        meta: ["数据管理", "用户列表"]
      },
      {
        path: "/shopList",
        component: () => import("../views/ShopList.vue"),
        meta: ["数据管理", "商家列表"]
      },
      {
        path: "/foodList",
        component: () => import("../views/FoodList.vue"),
        meta: ["数据管理", "食品列表"]
      },
      {
        path: "/orderList",
        component: () => import("../views/OrderList.vue"),
        meta: ["数据管理", "订单列表"]
      },
      {
        path: "/adminList",
        component: () => import("../views/AdminList.vue"),
        meta: ["数据管理", "管理员列表"]
      },
      {
        path: "/visitor",
        component: () => import("../views/Visitor.vue"),
        meta: ["图表", "用户分布"]
      },
      {
        path: "/newMember",
        component: () => import("../views/NewMember.vue"),
        meta: ["图表", "用户数据"]
      },
      {
        path: "/uploadImg",
        component: () => import("../views/UploadImg.vue"),
        meta: ["文本编辑", "MarkDown"]
      },
      {
        path: "/vueEdit",
        component: () => import("../views/VueEdit.vue"),
        meta: ["编辑", "文本编辑"]
      },
      {
        path: "/adminSet",
        component: () => import("../views/AdminSet.vue"),
        meta: ["设置", "管理员设置"]
      },
      {
        path: "/sendMessage",
        component: () => import("../views/SendMessage.vue"),
        meta: ["设置", "发送通知"]
      },
      {
        path: "/explain",
        component: () => import("../views/Explain.vue"),
        meta: ["说明", "说明"]
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
