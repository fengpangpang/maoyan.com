<template>
  <nav class="my-tabs">
    <p @click="citiesHandler">北京 *</p>
    <ul>
      <li
        v-for="(item, index) in tabsList"
        :key="index"
        :class="{ active: activeIndex === index }"
        @click="tabsChange(index, item.url)"
      >
        {{ item.title }}
        <div class="underLine" v-if="activeIndex === index"></div>
      </li>
    </ul>
    <span class="iconfont icon-fangdajing"></span>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      tabsList: [
        {
          title: "热映",
          url: "/hot",
        },
        {
          title: "影院",
          url: "/cinema",
        },
        {
          title: "待映",
          url: "/daiying",
        },
        {
          title: "经典电影",
          url: "/jingdian",
        },
      ],
      activeIndex: 0,
    };
  },
  methods: {
    tabsChange(i, url) {
      this.activeIndex = i;
      this.$router.push(url);
    },
    citiesHandler() {
      this.$router.push("/Cities");
    },
  },
};
</script>

<style lang="less" scoped>
.my-tabs {
  width: 100%;
  height: 44px;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 15px;
  background: #fff;
  position: fixed;
  top: 50px;
  z-index: 1;
  p {
    color: #666;
  }

  ul {
    display: flex;
    align-items: center;
    color: #666;
    height: 100%;

    li {
      padding: 0 10px;
      height: 100%;
      line-height: 44px;
      position: relative;

      .underLine {
        position: absolute;
        width: 20px;
        height: 3px;
        border-radius: 1.5px;
        background: #e54847;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    .active {
      font-size: 18px;
      color: #000;
      font-weight: 900;
    }
  }
  .icon-fangdajing {
    font-size: 18px;
    color: #e54847;
    font-weight: 900;
  }
}
</style>