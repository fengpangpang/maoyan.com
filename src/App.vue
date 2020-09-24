<template>
  <div id="app">
    <!-- <my-header :showBack="false" />
    <my-tabs />
    <div class="wrap">
      <div>
        <top-rote :topRatedList="topRatedList" />
        <movie-list :movieLists="movieLists" :total="total" />
      </div>
    </div> -->
    <router-view></router-view>
    <my-footer />
  </div>
</template>

<script>
// import { getTopRated, getIndexList, pullUpLoadList } from "./utils/api";

// import MyHeader from "./components/index/Header";
// import MyTabs from "@/components/index/Tabs";
// import TopRote from "@/components/index/TopRote";
// import MovieList from "./components/index/MovieList";
import MyFooter from "./components/public/Footer";

// import BetterScroll from "better-scroll";
// let bs;
export default {
  data() {
    return {
      // topRatedList: [],
      // movieLists: [],
      // movieIds: [],
      // index: 12,
      // total: 0,
    };
  },
  components: {
    // MyHeader,
    // MyTabs,
    // MovieList,
    // TopRote,
    MyFooter,
  },
  // mounted() {
  //   this.getTopRatedList();
  //   this.getList();
  // },

  // methods: {
  //   async pullUpLoad() {
  //     console.log("a");
  //     const ids = this.movieIds.slice(this.index, this.index + 10);
  //     const str = ids.join();
  //     const res = await pullUpLoadList({
  //       ids: str,
  //     });
  //     this.index += 10;
  //     this.movieLists = this.movieLists.concat(res.result);
  //   },

  //   async getTopRatedList() {
  //     const res = await getTopRated();
  //     this.topRatedList = res.result.result;
  //   },
  //   async getList() {
  //     const res = await getIndexList();
  //     // 获取所有电影的ids
  //     this.movieIds = res.result.movieIds;
  //     // 获取总电影的条数
  //     this.total = res.result.total;
  //     // 获取当前这次的电影信息
  //     this.movieLists = res.result.movieList;

  //     await this.$nextTick();
  //     bs = new BetterScroll(".wrap", {
  //       // 允许纵向滚动
  //       scrollY: true,
  //       click: true,
  //       // 允许我们使用上拉加载
  //       pullUpLoad: true,
  //     });
  //     bs.on("pullingUp", async () => {
  //       if (this.movieLists.length < this.total) {
  //         await this.pullUpLoad();
  //         // 重新计算bette-scroll的高度
  //         bs.refresh();
  //         // 表示这次上拉结束，可以做下一次下拉了
  //         bs.finishPullUp();
  //       }
  //     });
  //   },
  // },
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
