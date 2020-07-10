<template>
  <div class="details">
    <detail-nav-bar></detail-nav-bar>
    <Scroll class="contentScroll">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shopInfo"></detail-shop-info>
    </Scroll>
  </div>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll.vue';

  import DetailNavBar from 'views/details/childComps/DetailNavBar';
  import DetailSwiper from './childComps/DetailSwiper.vue';
  import DetailBaseInfo from './childComps/DetailBaseInfo.vue';
  import DetailShopInfo from './childComps/DetailShopInfo.vue';

  import { getDetailsData, Goods } from 'network/details.js';
  export default {
    name: 'Details',
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,

      Scroll,
    },
    data() {
      return {
        iid: '',
        topImages: null,
        goods: {},
        shopInfo: {},
      };
    },
    computed: {},
    methods: {},
    created() {
      //保存iid
      this.iid = this.$route.params.iid;
      //通过iid 获取详情页数据
      getDetailsData(this.iid).then((res) => {
        //获取 轮播图数据
        this.topImages = res.result.itemInfo.topImages
        console.log(res);
        //获取基本信息的数据
        this.goods = new Goods(res.result.itemInfo, res.result.columns, res.result.shopInfo.services);
        //获取商店信息的数据
        this.shopInfo = res.result.shopInfo;
      });
    }
  }
</script>
<style scoped>
  .details {
    height: 100vh;
    position: relative;
    z-index: 9;
    background-color: #fff;
  }

  .contentScroll {
    background-color: #fff;
    height: calc(100% - 44px);
  }
</style>