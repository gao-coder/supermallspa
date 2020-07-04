<template>
  <div class="tabbar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TabBarItem',
    components: {

    },
    data() {
      return {
      }
    },
    props: {
      path: String,
      activecolor: {
        type: String,
        default: 'red',
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) != -1
      },
      activeStyle() {
        return this.isActive ? { color: this.activecolor } : {}
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.path);
      }
    },
  }
</script>
<style scoped>
  @import '~assets/css/tarbar/tabbaritem.css';
</style>