<template>
  <div id="app">
    <keep-alive exclude="Details">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
  import MainTabBar from './components/content/mainTabbar/MainTarBar.vue'
  import router from './router/index.js';
  export default {
    name: 'app',
    router,
    components: {
      MainTabBar,
    }
  }
</script>

<style>
  @import './assets/css/base.css';
</style>