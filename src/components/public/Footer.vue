<template>
  <div class="my-footer">
    <router-link
      v-for="(item, i) in newsList"
      :key="i"
      :to="item.url"
      tag="div"
      active-class="active"
    >
      <span :class="item.cl"></span>
      <span class="over" active-class="active">{{ item.name }}</span>
    </router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      index: 0,
      newsList: [
        {
          name: "电影/影院",
          cl: "iconfont icon-dianying",
          url: "/index",
        },
        {
          name: "视频",
          cl: "iconfont icon-shipin",
          url: "/video",
        },
        {
          name: "小视频",
          cl: "iconfont icon-xiaoshipin",
          url: "/mini-video",
        },
        {
          name: "演出",
          cl: "iconfont icon-yanchu",
          url: "/show",
        },
        {
          name: "我的",
          cl: "iconfont icon-wode",
          url: "/mine",
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.my-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 48px;
  background: #ffffff;
  display: flex;
  justify-content: space-around;
  //   align-items: center;
  color: #696969;
  z-index: 1;
  > div {
    float: left;
    width: 25px;
    height: 48px;
    box-sizing: border-box;
    position: relative;
    text-align: center;
    flex: 1;
    .iconfont {
      display: block;
      margin: auto;
      width: 25px;
      height: 25px;
      font-size: 25px;
      margin-top: 3px;
    }
    .over {
      line-height: 12px;
      position: absolute;
      top: 33px;
      left: 0;
      right: 0;
      font-size: 10px;
    }
  }
  .active {
    color: red !important;
  }
}
</style>