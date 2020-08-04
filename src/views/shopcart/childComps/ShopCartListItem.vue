<template>
  <div class="shopcart-list-item">
    <div class="item-selector">
      <check-button class="checkbutton" :isChecked="product.isChecked" @click.native="btnCheckButton"></check-button>
    </div>
    <img :src="product.image" class="item-image">
    <div class="item-content clearfix">
      <div class="item-title">
        <p>{{product.title}}</p>
      </div>
      <div class="item-desc">
        <p>{{product.desc}}</p>
      </div>
      <div class="item-price">
        <P>{{product.price}}</P>
      </div>
      <div class="item-count">
        <p>x{{product.counter}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import CheckButton from 'components/content/checkbutton/CheckButton.vue';
  export default {
    name: 'ShopCartListItem',
    components: {
      CheckButton,
    },
    data() {
      return {
      }
    },
    computed: {},
    methods: {
      btnCheckButton() {
        this.product.isChecked = !this.product.isChecked;
      }
    },
    props: {
      product: {
        type: Object,
        default() {
          return {}
        }
      },
    }
  }
</script>
<style scoped>
  .shopcart-list-item {
    display: flex;
    width: 100%;
    padding: 10px;
    padding-left: 0px;
    height: 120px;
    border-bottom: 2px solid #ccc;
  }

  .item-selector {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .item-image {
    flex: 2;
    height: 100%;
    border-radius: 10px;
  }

  .item-content {
    flex: 6;
    overflow: hidden;
  }

  .item-desc,
  .item-title {
    width: 100%;
    padding: 10px;
  }

  .item-desc p,
  .item-title p {
    font-size: 13px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .item-desc {
    color: #666666;
  }

  .item-title p {
    font-size: 16px;
  }

  .item-price,
  .item-count {
    font-size: 13px;
  }

  .item-price {
    float: left;
    padding: 10px;
    color: red;
  }

  .item-count {
    float: right;
    padding: 10px;
    color: red;

  }
</style>