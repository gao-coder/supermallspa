<template>
  <div class="details">
    <detail-nav-bar @detailsItemListener="itemClick" ref="detailNavBar"></detail-nav-bar>
    <Scroll class="contentScroll" ref="scroll" :probe-type="3" @scroll="detailScroll">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shopInfo"></detail-shop-info>
      <detail-image-info :image-info="goodsInfo" @imageLoadListener="imageLoadItem"></detail-image-info>
      <detail-params-info ref="params" :item-params="itemParams"></detail-params-info>
      <detail-comment-info ref="comment" :comment-info="commentInfo"></detail-comment-info>
      <GoodList :goods="recommendInfo" ref="goodsList"></GoodList>
    </Scroll>
    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
    <back-top @click.native="backTopClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll.vue';
  // import Toast from 'components/common/toast/Toast.vue';

  import DetailNavBar from 'views/details/childComps/DetailNavBar';
  import DetailSwiper from './childComps/DetailSwiper.vue';
  import DetailBaseInfo from './childComps/DetailBaseInfo.vue';
  import DetailShopInfo from './childComps/DetailShopInfo.vue';
  import DetailImageInfo from './childComps/DetailImageInfo.vue';
  import DetailParamsInfo from './childComps/DetailParamsInfo.vue';
  import DetailCommentInfo from './childComps/DetailCommentInfo.vue';
  import DetailBottomBar from './childComps/DetailBottomBar.vue';


  import GoodList from 'components/content/goodList/GoodList.vue';

  import { getDetailsData, Goods, getRecommendData, } from 'network/details.js';
  import { itemListenerMixin, backtopMixin } from 'common/mixin.js';
  import { debounce } from 'common/utils.js';
  export default {
    name: 'Details',
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailImageInfo,
      DetailNavBar,
      DetailParamsInfo,
      DetailCommentInfo,
      DetailBottomBar,

      GoodList,

      Scroll,
      // Toast,
    },
    mixins: [itemListenerMixin, backtopMixin],
    data() {
      return {
        iid: '',
        topImages: null,
        goods: {},
        shopInfo: {},
        goodsInfo: {},
        itemParams: {},
        commentInfo: {},
        recommendInfo: [],
        detailImageLoad: null,
        newRefresh: null,
        toTopY: [],
        currentIndex: 0,

        // showToast: false,
        // msg: '',
      };
    },
    computed: {},
    methods: {
      imageLoadItem() {
        this.newRefresh()
      },
      //监听图片点击事件
      itemClick(currentIndex) {
        this.$refs.scroll.scrollTo(0, this.toTopY[currentIndex], 100);
      },
      // 监听详情页面滚动
      detailScroll(position) {
        this.isToTopListener(position);
        const positionY = -position.y;
        for (let i = 0; i < this.toTopY.length; i++) {
          if (i == this.toTopY.length - 1) {
            if (this.currentIndex != i && positionY >= -this.toTopY[i]) {
              this.currentIndex = i;
              this.$refs.detailNavBar.currentIndex = this.currentIndex;
              break;
            }
          } else {
            if (this.currentIndex != i && (positionY >= -this.toTopY[i] && positionY < -this.toTopY[i + 1])) {
              this.currentIndex = i;
              this.$refs.detailNavBar.currentIndex = this.currentIndex;
              break;
            }
          }
        }
      },
      // 监听购物车 
      addToCart() {
        //将购物车页面所要的数据传输过去
        const product = {};
        product.image = this.topImages[0];
        product.title = this.goods.title;
        product.desc = this.goods.desc;
        product.price = this.goods.realPrice;
        product.iid = this.iid;
        console.log("success");
        this.$store.dispatch('addShopCartProduct', product)
          .then((res) => {
            // this.msg = res;
            // this.showToast = true;
            // setTimeout(() => {
            //   this.showToast = false;
            // }, 2000);
            this.$toast.show(res, 2000);
          });
      }
    },
    created() {
      //保存iid
      this.iid = this.$route.params.iid;
      //通过iid 获取详情页数据
      getDetailsData(this.iid).then((res) => {
        //获取 轮播图数据
        this.topImages = res.result.itemInfo.topImages
        //获取基本信息的数据
        this.goods = new Goods(res.result.itemInfo, res.result.columns, res.result.shopInfo.services);
        //获取商店信息的数据
        this.shopInfo = res.result.shopInfo;
        //获取商品图片展示的数据
        this.goodsInfo = res.result.detailInfo;
        //获取商品详细参数的数据
        this.itemParams = res.result.itemParams;
        //获取评论信息数据

        this.commentInfo = res.result.rate.cRate != 0 ? res.result.rate.list[0] : {};
      });
      //获取推荐数据
      getRecommendData().then((res) => {
        this.recommendInfo = res.data.list;
      })
      this.newRefresh = debounce(() => {
        this.$refs.scroll && this.$refs.scroll.refresh()
        this.toTopY = []
        this.toTopY.push(0)
        this.$refs.params && this.toTopY.push(-this.$refs.params.$el.offsetTop)
        this.$refs.comment && this.toTopY.push(-this.$refs.comment.$el.offsetTop)
        this.$refs.goodsList && this.toTopY.push(-this.$refs.goodsList.$el.offsetTop)
        this.$nextTick(() => {
          this.$refs.scroll && this.$refs.scroll.refresh()
          this.toTopY = []
          this.toTopY.push(0)
          this.$refs.params && this.toTopY.push(-this.$refs.params.$el.offsetTop)
          this.$refs.comment && this.toTopY.push(-this.$refs.comment.$el.offsetTop)
          this.$refs.goodsList && this.toTopY.push(-this.$refs.goodsList.$el.offsetTop)
        })
        // this.toTopY.push(Number.MAX_VALUE);
      }, 100);
    },
    mounted() {
      this.detailImageLoad = () => {
        this.mixinNewRefresh()
      }
      this.$bus.$on('imageLoad', this.detailImageLoad);
    },
    destroyed() {
      this.$bus.$off('imageLoad', this.detailImageLoad)
    }
  }
</script>
<style scoped>
  .details {
    height: 100vh;
    position: relative;
    background-color: #fff;
  }

  .contentScroll {
    margin-top: 44px;
    background-color: #fff;
    height: calc(100% - 44px - 49px);
    overflow: hidden;
  }
</style>