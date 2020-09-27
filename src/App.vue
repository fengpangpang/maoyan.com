<template>
  <div id="app">
    <transition name="fade">
      <router-view v-if="$route.meta.need"></router-view>
    </transition>
    <router-view v-if="!$route.meta.need"></router-view>
    <my-footer /> 
  </div>
</template>

<script>
import MyFooter from "./components/public/Footer";
export default {
  components: {
    MyFooter,
  },
};
</script>
<style lang="less" scoped>
#app {
  background: #f5f5f5;
  .wrap {
    position: absolute;
    top: 100px;
    bottom: 50px;
    left: 0;
    right: 0;
    background: #f5f5f5;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateX(100%);
  }
}
</style>
