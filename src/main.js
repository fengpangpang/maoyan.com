import Vue from "vue";
//引入app.vue这个根组件
import App from "./App.vue";
import router from "./router";
// import store from './store'

//引入重置全局样式
import "./assets/style/public.less";

// 引入iconfont的css
import "./assets/font/iconfont.css";

//引入amfe-flexible插件
import "amfe-flexible";

//关闭开发环境的提示信息
Vue.config.productionTip = true;

new Vue({
  router,
  // store,
  render: (h) => h(App),
}).$mount("#app");
