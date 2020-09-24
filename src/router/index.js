import Vue from "vue";
import VueRouter from "vue-router";

// 使用vue-router
Vue.use(VueRouter);

const routes = [
  {
    path: "/index",
    component: () => import("../views/Index.vue"),
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
];

const router = new VueRouter({
  routes,
});

export default router;
