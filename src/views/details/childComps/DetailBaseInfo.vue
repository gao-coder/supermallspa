<template>
  <div v-if="Object.keys(goods).length != 0" class="detailbaseinfo">
    <div class="desc">
      <p>{{goods.title}}</p>
    </div>
    <div class="price">
      <span class="nowPrice">{{goods.price}}</span>
      <span class="oldPrice">
        <del>{{goods.oldPrice}}</del>
      </span>
      <span :style={background:goods.discountBgColor} class="discountPrice">{{goods.discountDesc}}</span>
    </div>
    <div class="shopInfo">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="shopService">
      <div v-for="count in goods.services.length-1" class="shopServiceItem">
        <img :src="goods.services[count-1].icon">
        <span>{{goods.services[count-1].name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailBaseInfo',
    components: {},
    data() {
      return {
      }
    },
    props: {
      goods: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {},
    methods: {},
  }
</script>
<style scoped>
  .desc {
    font-size: 17px;
    padding: 15px 5px 5px 5px;
  }

  .desc>p {
    color: #222;
  }

  .price {
    padding: 15px 5px 5px 5px;
  }

  .nowPrice {
    padding: 7px;
    font-size: 23px;
    color: var(--color-tint);
  }

  .oldPrice {
    font-size: 14px;
    color: #ccc;
  }

  .discountPrice {
    display: inline-block;
    height: 25px;
    border-radius: 10px;
    text-align: center;
    padding: 3px;
    margin-left: 10px;
    vertical-align: top;
  }

  .shopInfo {
    display: flex;
    padding: 15px 5px 5px 5px;
    justify-content: space-between;
    color: #bbb;
  }


  .shopService {
    border-top: solid 6px #eee;
    border-bottom: solid 6px #eee;
    padding: 20px, 15px, 5px, 20px;
    margin: 0 10px;
    display: flex;
  }

  .shopServiceItem {
    height: 60px;
    font-size: 14px;
    text-align: center;
    line-height: 60px;
    flex: 1;
  }

  .shopServiceItem img {
    width: 17px;
    vertical-align: middle;
  }
</style>