<template>
  <div class="index-page">
    <my-header :showBack="false" />
    <my-tabs />
    <router-view></router-view>
  </div>
</template>

<script>
import MyHeader from "../components/public/Header";
import MyTabs from "../components/index/Tabs";

export default {
  components: {
    MyHeader,
    MyTabs,
  },
};
</script>