<template>
  <div class="detail-wrap">
    <div v-if="loading">数据加载中。。。</div>
    <div v-else class="main">
      <p class="top">猫眼电影 > {{ movieInfo.nm }}</p>
      <div class="main-header">
        <img :src="movieInfo.img" alt="" class="h-img" />
        <div class="h-main">
          <h1>{{ movieInfo.nm }}</h1>
          <p>{{ movieInfo.enm }}</p>
          <p>
            <span v-for="(item, index) in movieInfo.tags" :key="index">
              {{ item }}
              {{ index === movieInfo.tags.length - 1 ? "" : "/" }}
            </span>
          </p>
          <p class="names">
            <span v-for="(item, index) in movieInfo.star" :key="index">
              {{ item }}
              {{ index === movieInfo.star.length - 1 ? "" : "/" }}
            </span>
          </p>
          <p>{{ movieInfo.showTime }}</p>
          <div class="btnbox">
            <button>
              <img
                alt="想看"
                src="//s0.meituan.net/bs/myfe/canary/file/asgard/images/movie/want-to-watch.png"
              /><span>想看</span>
            </button>

            <button>
              <img
                alt="看过"
                src="//s0.meituan.net/bs/myfe/canary/file/asgard/images/movie/star.png"
              />
              <span>看过</span>
            </button>
          </div>
        </div>
      </div>
      <div class="main-good">
        <div class="m-g-title">
          <div class="g-t-left">
            <img
              alt="logo"
              src="//s0.meituan.net/bs/myfe/canary/file/asgard/images/movie/logo.png"
            /><span>实时口碑</span>
          </div>
          <div class="g-t-right">
            <span class="onespan">{{ praise.watched }}</span>
            <span>看过</span>
            <span class="twospan">{{ praise.wish }}</span>
            <span>想看</span>
          </div>
        </div>
        <div class="main-good-main">
          <div class="m-g-m-l">
            <span>{{ praise.score }}</span>
            <p>{{ praise.evaluate }}人评</p>
          </div>
          <div class="m-g-m-r">
            <xing
              v-for="(item, index) in praise.mark"
              :key="index"
              :item="item"
              :pic="praise.starPic"
              :val="praise.evaluate"
              :num="5 - index"
            ></xing>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { detailList } from "../utils/api";
import Xing from "../components/detail/Xing";
export default {
  data() {
    return {
      loading: true,
      movieInfo: {},
      praise: {},
      discuss: [],
    };
  },
  components: {
    Xing,
  },
  mounted() {
    this.getMoveList();
  },
  methods: {
    async getMoveList() {
      this.loading = true;
      const res = await detailList({
        id: this.$route.params.id,
      });
      if (res.status === 0) {
        this.loading = false;
        this.movieInfo = res.movieInfo;
        this.praise = res.praise;
        this.discuss = res.discuss;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.detail-wrap {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 9;
  background: #385266;
  font-family: Arial, Helvetica, sans-serif;
  .main {
    padding: 21px 16px;
    .top {
      color: #ccc;
      font-size: 14px;
      margin-bottom: 15px;
    }
    .main-header {
      width: 100%;
      height: 138px;
      display: flex;
      .h-img {
        width: 100px;
        height: 138px;
      }
      .h-main {
        font-size: 12px;
        width: 243px;
        margin-left: 12px;
        color: #fff;

        > h1 {
          font-size: 20px;
          font-weight: bold;
        }
        > p {
          opacity: 0.6;
          line-height: 20px;
        }
        .names {
          width: 100%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-size: 12px;
        }
        .btnbox {
          width: 230px;
          display: flex;
          justify-content: space-between;
          margin-top: 5px;
          button {
            border: none;
            display: flex;
            justify-content: center;
            align-items: center;
            background: hsla(0, 0%, 100%, 0.35);
            box-shadow: 8px rgba(0, 0, 0, 0.1);
            border-radius: 0.08rem;
            font-size: 14px;
            width: 110px;
            height: 30px;
            color: #fff;
            img {
              width: 14px;
              height: 14px;
              margin-right: 6px;
            }
          }
        }
      }
    }
    .main-good {
      width: 100%;
      height: 176px;
      margin-top: 15px;
      padding: 10px 12px;
      background-color: rgba(0, 0, 0, 0.2);
      box-shadow: 0 0 0.06rem 0 hsla(0, 0%, 100%, 0.03);
      border-radius: 6px;
      font-size: 14px;
      color: #fff;
      .m-g-title {
        font-size: 12px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .g-t-left {
          img {
            width: 14px;
            height: 14px;
            margin-right: 4px;
            vertical-align: middle;
          }
        }
        .g-t-right {
          display: flex;
          align-items: center;
          font-size: 12px;
          opacity: 0.6;
          .onespan {
            margin-right: 4px;
          }
          .twospan {
            margin: 0px 4px 0px 10px;
          }
        }
      }
      .main-good-main {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px 0;
        .m-g-m-l {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-right: 20px;
          span {
            font-size: 34px;
            color: #ffb400;
            line-height: 40px;
          }
          p {
            font-size: 12px;
            opacity: 0.6;
          }
        }
      }
    }
  }
}
</style>