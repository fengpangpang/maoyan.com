<template>
  <div class="top-rote">
    <p class="title">最受好评的电影</p>
    <div class="ul-wrap">
      <ul>
        <li
          v-for="item in topRatedList"
          :key="item.id"
          @click="toDetail(item.id)"
        >
          <div class="img-wrap">
            <img :src="item.img" alt />
          </div>
          <h5>{{ item.title }}</h5>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll";

export default {
  props: ["topRatedList"],
  watch: {
    async topRatedList() {
      await this.$nextTick();
      let bs = new BetterScroll(".ul-wrap", {
        // 允许纵向滚动
        scrollY: false,
        scrollX: true,
        click: true,
      });
    },
  },
  methods: {
    toDetail(id) {
      this.$router.push({
        name: "detail",
        params: { id: id },
      });
    },
  },
};
</script>

<style lang='less' scoped>
.top-rote {
  width: 100%;
  height: 200px;
  padding: 12px;
  background: #fff;

  .title {
    margin: 0;
    font-size: 14px;
    color: #333;
    margin-bottom: 12px;
  }

  .ul-wrap {
    width: 100%;
    height: 140px;
    overflow: hidden;
    ul {
      /*      width: 100%;
      height: 140px;
      display: flex;
      overflow: auto; */
      display: inline-flex;

      li {
        width: 85px;
        height: 140px;
        margin-right: 10px;
        flex-shrink: 0;

        .img-wrap {
          width: 85px;
          height: 115px;
          img {
            width: 100%;
            height: 100%;
          }
        }

        h5 {
          width: 100%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          margin-top: 5px;
          font-size: 13px;
          color: #222;
          margin-bottom: 3px;
        }
      }
    }
  }
}
</style>