<template>
  <div class="goodlist">
    <good-list-item v-for="item in goods" :goodsItem="item"></good-list-item>
  </div>
</template>

<script>
  import GoodListItem from "./GoodListItem";
  export default {
    name: 'GoodList',
    components: {
      GoodListItem,
    },
    data() {
      return {
      }
    },
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    },
    computed: {},
    methods: {},
  }
</script>
<style scoped>
  .goodlist {
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
</style>