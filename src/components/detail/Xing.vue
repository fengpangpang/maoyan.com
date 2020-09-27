<template>
  <div class="xing-wrap">
    <div class="xing-left">
      <img :src="pic" alt="" v-for="item in num" :key="item" />
    </div>
    <div class="xing-middle">
      <div class="xing-bg">
        <div
          class="xing-yellow"
          :style="{ width: (item / val) * 100 + '%' }"
        ></div>
      </div>
    </div>
    <div class="xing-right">
      <span>{{ ((item / val) * 100) | format }}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: ["item", "pic", "val", "num"],
  filters: {
    format(val) {
      return val.toFixed(2) + "%";
    },
  },
};
</script>
<style lang="less" scoped>
.xing-wrap {
  width: 180px;
  height: 17px;
  display: flex;
  .xing-left {
    width: 35px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    img {
      width: 5px;
      margin: 0 1px;
      opacity: 0.6;
    }
  }
  .xing-middle {
    width: 100px;
    margin: 0 5px;
    display: flex;
    align-items: center;
    .xing-bg {
      width: 100%;
      height: 5px;
      background: hsla(0, 0%, 100%, 0.05);
      position: relative;
      .xing-yellow {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        background: orange;
      }
    }
  }
  .xing-right {
    width: 35px;
    font-size: 12px;
    opacity: 0.4;
  }
}
</style>