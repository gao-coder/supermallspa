<template>
  <div class="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>
          购物街
        </div>
      </template>
    </nav-bar>
    <tab-control class="tabControl" :titles="['流行','新款','精选']" @tabClick="tabClickItem" ref="tabControl1"
      v-show="isShowTabControl">
    </tab-control>
    <Scroll class="content" ref='scroll' :probeType="3" :pullUpLoad="true" @scroll="scrollContent" @pullUp="loadMore">
      <home-swiper :banners="banner" @swiperImageLoad="swiperImageLoad"></home-swiper>
      <home-recommend-view :recommend="recommend"></home-recommend-view>
      <feature-view></feature-view>
      <tab-control :titles="['流行','新款','精选']" @tabClick="tabClickItem" ref="tabControl2">
      </tab-control>
      <good-list :goods="getGoods"></good-list>
    </Scroll>
    <back-top @click.native="backTopClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
  import HomeSwiper from 'views/home/childComps/HomeSwiper.vue';
  import HomeRecommendView from 'views/home/childComps/HomeRecommendView.vue';

  import NavBar from 'components/common/navbar/NavBar.vue';
  import FeatureView from 'views/home/childComps/FeatureView.vue';
  import TabControl from 'components/content/tabcontrol/TabControl.vue';
  import GoodList from 'components/content/goodList/GoodList.vue';
  import Scroll from 'components/common/scroll/Scroll.vue';

  import { getHomeMultiData, getHomeData } from 'network/home.js';
  import { itemListenerMixin, backtopMixin } from 'common/mixin.js';
  export default {
    name: 'Home',
    components: {
      HomeSwiper,
      HomeRecommendView,

      NavBar,
      FeatureView,
      TabControl,
      GoodList,
      Scroll,
    },
    mixins: [itemListenerMixin, backtopMixin],
    data() {
      return {
        banner: [],
        recommend: [],
        goods: {
          pop: {
            page: 0,
            list: [],
          },
          new: {
            page: 0,
            list: [],
          },
          sell: {
            page: 0,
            list: [],
          }
        },
        currentType: "pop",
        tabbarOffsetTop: 0,
        isShowTabControl: false,
        saveY: 0,
        homeImageLoader: null,
      }
    },
    computed: {
      getGoods() {
        return this.goods[this.currentType].list
      }
    },
    methods: {
      /* 
        网络请求相关的方法
      */
      getHomeMultiData() {
        getHomeMultiData().then(res => {
          this.banner = res.data.banner.list
          this.recommend = res.data.recommend.list
        });
      },
      getHomeData(type) {
        getHomeData(type, this.goods[type].page + 1).then(res => {
          res && this.goods[type] && this.goods[type].list.push(...res.data.list);
          res && this.goods[type] && (this.goods[type].page += 1);
          this.$refs.scroll.finishPullUp();
        });
      },
      /* 
      事件监听相关的方法
      */
      tabClickItem(item) {
        switch (item) {
          case 0:
            this.currentType = 'pop'
            break;
          case 1:
            this.currentType = 'new'
            break;
          case 2:
            this.currentType = 'sell'
            break;
          default:
            break;
        }
        this.$refs.tabControl1.currentItem = item;
        this.$refs.tabControl2.currentItem = item;
      },
      scrollContent(position) {
        if ((-position.y) > this.tabbarOffsetTop) {
          this.isShowTabControl = true;
        } else {
          this.isShowTabControl = false;
        }
        this.isToTopListener(position);
      },
      loadMore() {
        this.getHomeData(this.currentType)
      },
      swiperImageLoad() {
        this.tabbarOffsetTop = this.$refs.tabControl2.$el.offsetTop;
      }

    },
    created() {
      /* 
        请求多行数据
      */
      this.getHomeMultiData();
      /* 
        请求商品列表数据
       */
      this.getHomeData('pop');
      this.getHomeData('sell');
      this.getHomeData('new');
    },
    mounted() {
      this.homeImageLoader = () => {
        this.mixinNewRefresh()

      }
      //手动代码点击tab-control
      this.tabClickItem(0)
    },
    activated() {
      this.$refs.scroll.scrollTo(0, this.saveY, 10);
      this.$bus.$on('imageLoad', this.homeImageLoader);
      this.$refs.scroll && this.$refs.scroll.refresh();
    },
    deactivated() {
      //保存滚动的距离y值
      this.saveY = this.$refs.scroll.getCurrentY();
      //取消事件处理函数
      this.$bus.$off('imageLoad', this.homeImageLoader);
    },
  }
</script>
<style scoped>
  @import '~assets/css/home/home.css';

  .home {
    height: calc(100vh - 44px);
    position: relative;
  }

  /* .content {
    height: calc(100% - 49px);
    overflow: hidden;
  } */

  .content {
    position: absolute;
    top: 0px;
    bottom: 49px;
    left: 0;
    right: 0;
  }

  .tabControl {
    position: relative;
    top: 0;
    left: 0;
    z-index: 3;
  }

  /* .fixedTC {
    position: fixed;
    top: 44px;
    left: 0;
  } */
</style>