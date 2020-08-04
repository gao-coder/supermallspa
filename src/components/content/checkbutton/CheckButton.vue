<template>
  <div class="checkbutton" :class="{check:isChecked}">
    <img src="~assets/img/cart/tick.svg">
  </div>
</template>

<script>
  export default {
    name: 'CheckButton',
    components: {},
    data() {
      return {
      }
    },
    computed: {},
    methods: {},
    props: {
      isChecked: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
<style scoped>
  .checkbutton {
    width: 19px;
    height: 19px;
    border-radius: 50%;
    border: 2px solid #ccc;
    text-align: center;
  }

  .check-button img {
    width: 100%;
  }

  .check {
    border-color: pink;
    background-color: pink;
  }
</style>