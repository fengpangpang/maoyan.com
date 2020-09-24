<template>
  <ul class="movie-list">
    <movie-list-item v-for="(item,index) in movieLists" :key="index" :item="item" />
    <p v-if="movieLists.length>=total">人家是有底线的....</p>
  </ul>
</template>

<script>
import MovieListItem from "./MovieListItem";

export default {
  props: ["movieLists", "total"],
  components: {
    MovieListItem,
  },
};
</script>

<style lang='less' scoped>
.movie-list {
  width: 100%;
  margin-top: 12px;
  background: #fff;
}
</style>