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
    meta: { title: "猫眼电影" },
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
    meta: { title: "猫眼视频" },
  },
  {
    path: "/mini-video",
    component: () => import("../views/MiniVideo.vue"),
    meta: { title: "猫眼小视频" },
  },
  {
    path: "/show",
    component: () => import("../views/Show.vue"),
    meta: { title: "猫眼演出" },
  },
  {
    path: "/Mine",
    component: () => import("../views/Mine.vue"),
    meta: { title: "我的" },
  },
  {
    path: "/detail/:id",
    name: "detail",
    meta: { need: true, title: "猫眼详情" },
    component: () => import("../views/Detail"),
  },
  {
    path: "/Cities",
    component: () => import("../views/Cities.vue"),
  },
  {
    path: "*",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = new VueRouter({
  routes,
});

//全局前置守卫
// 挂载路由守卫
router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? to.meta.title : "猫眼电影";
  next();
});
export default router;
