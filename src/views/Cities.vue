<template>
  <div>城市</div>
</template>

<script>
import { getcityList } from "../utils/api";
export default {
  data() {
    return {};
  },
  mounted() {
    this.getList();
  },
  methods: {
    async getList() {
      const res = await getcityList();
      console.log(res);
    },
  },
};
</script>