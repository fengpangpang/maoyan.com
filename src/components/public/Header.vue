<template>
  <header class="my-header">
    <span class="back" v-if="showBack">&lt;</span>
    <h2>猫眼电影</h2>
    <span class="iconfont icon-caidan"></span>
  </header>
</template>

<script>
export default {
  props: ["showBack"],
};
</script>

<style lang="less" scoped>
.my-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background: #e54847;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: #fff;
  z-index: 1;

  .back {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
  }
  h2 {
    font-weight: 400;
  }
  .icon-caidan {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 20px;
  }
}
</style>