import Vue from "vue";
import VueRouter from "vue-router";

// 去除重复点击时的警告
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

// 使用vue-router
Vue.use(VueRouter);

const routes = [
  {
    // 重定向
    path: "/",
    redirect: "/index",
  },
  {
    path: "/index",
    component: () => import("../views/Index.vue"),
    children: [
      {
        path: "/index",
        redirect: "/hot",
      },
      {
        path: "/hot",
        component: () => import("../components/index/Hot.vue"),
      },
      {
        path: "/cinema",
        component: () => import("../components/index/Cinema.vue"),
      },
      {
        path: "/daiying",
        component: () => import("../components/index/DaiYing.vue"),
      },
      {
        path: "/jingdian",
        component: () => import("../components/index/JingDian.vue"),
      },
    ],
  },
  {
    path: "/video",
    component: () => import("../views/Video.vue"),
  },
  {
    path: "/mini-video",
    component: () => import("../views/MiniVideo.vue"),
  },
  {
    path: "/show",
    component: () => import("../views/Show.vue"),
  },
  {
    path: "/Mine",
    component: () => import("../views/Mine.vue"),
  },
  {
    path: "*",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
