<template>
  <div class="backscroll">
    <img src="~assets/img/common/top.png" alt="error">
  </div>
</template>

<script>
  export default {
    name: 'BackScroll',
    components: {},
    data() {
      return {
      }
    },
    computed: {},
    methods: {
    },
  }
</script>
<style scoped>
  .backscroll {
    position: fixed;
    right: 10px;
    bottom: 56px;
  }

  .backscroll img {
    width: 43px;
  }
</style>