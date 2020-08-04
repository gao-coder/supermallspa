<template>
  <div v-if="Object.keys(shop).length!=0" class="detailshopinfo">
    <div class="shop-info-title">
      <img :src="shop.shopLogo" alt="error">
      <span>{{shop.name}}</span>
    </div>
    <div class="shop-info-item">
      <div class="shop-info-item-left">
        <div>
          <div class="cSells">{{shop.cSells|cSellsFilter}}</div>
          <div>总销量</div>
        </div>
        <div>
          <div class="cGoods">{{shop.cGoods}}</div>
          <div>全部宝贝</div>
        </div>
      </div>
      <div class="shop-info-item-right">
        <table>
          <tr v-for="item in shop.score">
            <td>{{item.name}}</td>
            <td :style="{color: item.isBetter ? 'red':'green'}">{{item.score}}</td>
            <td>
              <span v-show="item.isBetter" :style="{'background-color': item.isBetter ? 'red':'green'}">
                高
              </span>
              <span v-show="!item.isBetter" :style="{'background-color': item.isBetter ? 'red':'green'}">
                低
              </span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-info-bottom">
      进店逛逛
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailShopInfo',
    components: {},
    data() {
      return {
      }
    },
    props: {
      shop: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {},
    methods: {},
    filters: {
      cSellsFilter(data) {
        return (data / 10000).toFixed(1) + '万'
      }
    }
  }
</script>
<style scoped>
  .detailshopinfo {
    padding: 30px 15px 20px 15px;
  }

  .detailshopinfo img {
    width: 35px;
    height: 35px;
    vertical-align: middle;
    margin-right: 7px;
  }

  .shop-info-item {
    display: flex;
    width: 100%;
  }

  .shop-info-item div {
    flex: 1;
  }

  .shop-info-item-left {
    margin: 45px 15px 25px 30px;
    display: flex;
    border-right: solid 1px #ccc;
  }

  .shop-info-item-left div {
    flex: 1;
    text-align: center;
  }

  .cSells,
  .cGoods {
    font-size: 23px;
    margin-bottom: 5px;
  }

  .shop-info-item-right {
    margin-top: 27px;
  }

  .shop-info-item-right table td {
    padding: 3px;
  }

  .shop-info-bottom {
    width: 150px;
    margin: auto;
    background-color: #eee;
    text-align: center;
    padding: 10px 0;
    border-radius: 20px;
  }
</style>