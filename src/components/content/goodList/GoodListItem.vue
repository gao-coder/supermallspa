<template>
  <div class="goodlistitem" @click="itemClick">
    <img :src="goodsItem.show.img" alt="error" @load="imageLoad">
    <div>
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">
        <img src="~assets/img/common/collect.svg" alt="error">
        {{goodsItem.cfav}}
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GoodListItem',
    components: {
    },
    data() {
      return {
      }
    },
    props: {
      goodsItem: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    computed: {},
    methods: {
      imageLoad() {
        this.$bus.$emit('imageLoad');
      },
      itemClick() {
        this.$router.push('/details/' + this.goodsItem.iid);
      }
    },

  }
</script>
<style scoped>
  .goodlistitem {
    margin-top: 10px;
    width: 47%;
    font-size: 15px;
  }

  .goodlistitem img {
    width: 100%;
    margin-bottom: 5px;
    border-radius: 10px;
  }

  .goodlistitem p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-bottom: 5px;
  }

  .goodlistitem .price {
    color: var(--color-tint);
  }

  .collect {
    padding-left: 5px;
  }

  .collect img {
    width: 17px;
    height: 17px;
    vertical-align: middle;
  }
</style>