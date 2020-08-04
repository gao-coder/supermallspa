<template>
  <div class="shopcart">
    <!-- 导航部分 -->
    <nav-bar class="nav-bar">
      <template v-slot:left>
        <div>
          <img src="~assets/img/common/back.svg" class="shopcartnavbar-left" @click="cartNavBarLeftClick">
        </div>
      </template>
      <template v-slot:center>
        <div>
          购物车({{shopcartListLength}})
        </div>
      </template>
      <template v-slot:right>
        <div @click="cartManagerClick">
          管理
        </div>
      </template>
    </nav-bar>
    <!-- 商品展示 -->
    <shop-cart-list>

    </shop-cart-list>
    <!-- 底部 -->
    <shop-cart-bottom-bar :is-show-one="flagIsShowone"></shop-cart-bottom-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue';

  import ShopCartList from './childComps/ShopCartList.vue';
  import ShopCartBottomBar from './childComps/ShopCartBottomBar.vue';
  import { mapGetters } from 'vuex';
  export default {
    name: 'Shopcart',
    components: {
      NavBar,

      ShopCartList,
      ShopCartBottomBar
    },
    data() {
      return {
        isShowCheck: false,
        flagIsShowone: true,
      }
    },
    computed: {
      ...mapGetters(['shopcartListLength', 'shopcartList'])
    },
    methods: {
      cartManagerClick() {
        this.flagIsShowone = !this.flagIsShowone;
      },
      cartNavBarLeftClick() {
        this.$router.push('/home');
      }
    },
  }
</script>
<style scoped>
  .shopcart {
    height: 100vh;
  }

  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
  }

  .shopcartnavbar-left {
    vertical-align: middle;
  }
</style>