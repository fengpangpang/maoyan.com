<template>
  <div id="app">
    <router-view></router-view>
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
}
</style>
