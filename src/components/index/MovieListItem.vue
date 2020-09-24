<template>
  <li class="movie-list-item">
    <img :src="item.img | format" alt />
    <div class="movie-main">
      <div class="movie-left">
        <p class="movie-left-title">{{item.nm}}</p>
        <p class="movie-left-ping" v-if="item.sc!==0">
          观众评:
          <span>{{item.sc}}</span>
        </p>
        <p class="movie-left-ping" v-else>
          <span>{{item.wish}}</span>人想看
        </p>
        <p class="movie-left-ren">主演:{{item.star}}</p>
        <p class="movie-left-ren">{{item.showInfo}}</p>
      </div>
      <div class="movie-right red" v-if="item.globalReleased==true">购票</div>
      <div class="movie-right blue" v-else>预售</div>
    </div>
  </li>
</template>

<script>
export default {
  props: ["item"],
  data() {
    return {};
  },
  filters: {
    format(value) {
      return value.replace("/w.h", "");
    },
  },
};
</script>

<style lang="less" scoped>
.movie-list-item {
  width: 100%;
  height: 114px;
  padding-left: 15px;
  display: flex;
  align-items: center;
  img {
    width: 64px;
    height: 90px;
  }
  .movie-main {
    padding: 12px 14px 12px 0;
    margin-left: 10px;
    height: 114px;
    // max-height: 90px;
    position: relative;
    .movie-left {
      padding-right: 5px;
      margin-right: 48px;
      overflow: hidden;
      .movie-left-title {
        max-height: 24px;
        margin-bottom: 7px;
        line-height: 24px;
        overflow: hidden;
        font-size: 17px;
        color: #333;
        font-weight: 700;
        padding-right: 5px;
        flex-shrink: 1;
      }
      .movie-left-ping {
        font-size: 13px;
        color: #666;
        > span {
          font-size: 15px;
          font-weight: 700;
          color: #faaf00;
        }
      }
      .movie-left-ren {
        width: 205px;
        font-size: 13px;
        color: #666;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-top: 5px;
      }
    }
    .movie-right {
      width: 47px;
      height: 27px;
      line-height: 28px;
      text-align: center;
      color: #fff;
      border-radius: 4px;
      white-space: nowrap;
      font-size: 12px;
      position: absolute;
      right: 15px;
      top: 50%;
      transform: translateY(-50%);
    }
    .red {
      background: #f03d37;
    }
    .blue {
      background: #3c9fe6;
    }
  }
}
</style>