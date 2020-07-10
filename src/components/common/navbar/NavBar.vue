<template>
  <div class="navbar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'NavBar',
    components: {},
    data() {
      return {
      }
    },
    computed: {},
    methods: {},
  }
</script>
<style scoped>
  @import '~assets/css/navbar/navbar.css';
</style>