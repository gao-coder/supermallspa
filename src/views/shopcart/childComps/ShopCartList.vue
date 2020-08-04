<template>
  <div class="shopcart-list">
    <Scroll class="shopcart-list-scroll" ref="scroll">
      <shop-cart-list-item v-for="(item,index) in $store.state.shopcartList" :product="item" :key="index">
      </shop-cart-list-item>
    </Scroll>
  </div>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll.vue';

  import ShopCartListItem from './ShopCartListItem.vue';

  export default {
    name: 'ShopCartList',
    components: {
      Scroll,
      ShopCartListItem,
    },
    data() {
      return {
      }
    },
    computed: {},
    methods: {},
    activated() {
      this.$refs.scroll.refresh();
    },
    props: {

    }
  }
</script>
<style scoped>
  .shopcart-list {
    position: relative;
    margin-top: 44px;
    height: calc(100% - 44px - 49px);
  }

  .shopcart-list-scroll {
    /* height: 100%;
    overflow: hidden; */
    position: fixed;
    top: 44px;
    left: 0;
    bottom: 49px;
    right: 0;
  }
</style>