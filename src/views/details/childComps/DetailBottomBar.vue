<template>
  <div class="detail-bottom-bar">
    <div class="bar-item bar-item-left">
      <div class="service">
        <div class="service-icon">

        </div>
        <div class="service-content">
          客服
        </div>
      </div>
      <div class="shop">
        <div class="shop-icon">

        </div>
        <div class="shop-content">
          店铺
        </div>
      </div>
      <div class="collection">
        <div class="collection-icon">

        </div>
        <div class="collection-content">
          收藏
        </div>
      </div>
    </div>
    <div class="bar-item bar-item-right">
      <div class="shop-cart" @click="addToShopCart">
        加入购物车
      </div>
      <div class="buy">
        购买
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailBottomBar',
    components: {},
    data() {
      return {
      }
    },
    computed: {},
    methods: {
      addToShopCart() {
        this.$emit('addToCart')
      }
    },
  }
</script>
<style scoped>
  .detail-bottom-bar {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 49px;
    z-index: 7;
  }

  .bar-item-left {
    display: flex;
    flex: 5;
    background-color: skyblue;
    background-color: #fff;
  }

  .bar-item-right {
    flex: 4;
    display: flex;
  }

  .shop-cart {
    flex: 1;
    background-color: yellow;
    text-align: center;
    line-height: 49px;
    font-size: 14px;
  }

  .buy {
    flex: 1;
    text-align: center;
    line-height: 49px;
    background-color: var(--color-tint);
    color: #ffffff;
    font-size: 14px;
  }

  .service,
  .shop,
  .collection {
    flex: 1;
    font-size: 14px;
    padding: 7px 0px 7px 15px;
    color: #000000;
  }

  .service-icon,
  .shop-icon,
  .collection-icon {
    width: 20px;
    height: 20px;
    margin-left: 17px;
    text-align: center;
  }

  .service-content,
  .shop-content,
  .collection-content {
    padding-top: 5px;
    text-align: center;
  }

  .service-icon {
    background: url("~assets/img/detail/detail_bottom.png") no-repeat 0 -47px;
    background-size: 100%;
  }

  .shop-icon {
    background: url("~assets/img/detail/detail_bottom.png") no-repeat 0 -90px;
    background-size: 100%;
  }

  .collection-icon {
    background: url("~assets/img/detail/detail_bottom.png") no-repeat 0 0;
    background-size: 100%;

  }
</style>