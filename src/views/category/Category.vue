<template>
  <div class="category">
    <nav-bar class="nav-bar">
      <template v-slot:center>
        <div>
          商品分类
        </div>
      </template>
    </nav-bar>
    <div class="content">
      <Scroll class="scroll-left" ref="scroll1">
        <category-dropdown-bar @cdbiClickListenter="cdbiClick" ref="cdb" :categoriesCdb="categories">
        </category-dropdown-bar>
      </Scroll>
      <div class="right">
        <tab-control ref="tabcontrol2" v-show="isShowTabControl1" :titles="titleData" @tabClick="tabClickCategory">
        </tab-control>
        <Scroll class="scroll-right" :probeType="3" @scroll="cgscrollRight" ref="scroll">
          <category-image-list :categoryImageListData="categoryILD">
          </category-image-list>
          <tab-control :titles="titleData" @tabClick="tabClickCategory" ref="tabcontrol1"></tab-control>
          <good-list class="goodList" :goods="cgdetailData"></good-list>
        </Scroll>
        <back-top @click.native="backTopClick" v-show="isShowBackTop"></back-top>
      </div>
    </div>
  </div>
</template>

<script>
  import { getCategory, getSubCategory, getDatailCategory } from 'network/category.js';
  import { backtopMixin, itemListenerMixin } from 'common/mixin.js';

  import NavBar from 'components/common/navbar/NavBar.vue';
  import Scroll from 'components/common/scroll/Scroll.vue'
  import TabControl from 'components/content/tabcontrol/TabControl.vue';
  import GoodList from 'components/content/goodList/GoodList.vue';
  import BackTop from 'components/content/backtop/BackTop.vue'

  import CategoryDropdownBar from 'views/category/childComps/CategoryDropdownBar';
  import CategoryImageList from 'views/category/childComps/CategoryImageList.vue';
  export default {
    name: 'Category',
    components: {
      NavBar,
      Scroll,
      TabControl,
      GoodList,
      BackTop,

      CategoryDropdownBar,
      CategoryImageList
    },
    data() {
      return {
        categories: [],
        categoryData: [],
        currentIndex: 0,
        currentTabIndex: 0,
        categoryILD: {},
        cgdetailData: [],
        titleData: ['综合', '新品', '销量'],
        titles: ['pop', 'new', 'sell'],
        tabControlOffsetTop: 0,
        isShowTabControl1: false,
        count: 0,
        scrollY: 0,
        cgImageLoad: null,
      }
    },
    methods: {
      /* 
        网络请求方法
      */
      _getCategory(index) {
        getCategory().then((res) => {
          this.categories = res.data.category.list;
          for (let i = 0; i < this.categories.length; i++) {
            this.categoryData.push(
              {
                subcategoryData: null,
                categoryDetailData: {
                  'pop': [],
                  'new': [],
                  'sell': [],
                },
              }
            );
          }
          this._getSubCategory(index);
        });
      },
      _getSubCategory(index) {
        const maitKey = this.categories[index].maitKey;
        getSubCategory(maitKey).then((res) => {
          this.categoryData[index].subcategoryData = res;
          this._getDatailCategory(index, 'pop')
        })
      },
      _getDatailCategory(index, type) {
        const miniWallkey = this.categories[index].miniWallkey;
        getDatailCategory(miniWallkey, type).then((res) => {
          this.categoryData[index].categoryDetailData[type] = res;
          this.categoryILD = this.categoryData[this.currentIndex].subcategoryData;
          this.cgdetailData = this.categoryData[index].categoryDetailData[type];
        });
      },
      /* 
        事件监听方法
      */
      cdbiClick(index) {
        this.currentIndex = index;
        this._getCategory(index);
      },
      tabClickCategory(index) {
        this.currentTabIndex = index;
        this._getDatailCategory(this.currentIndex, this.titles[this.currentTabIndex]);
        this.$refs.tabcontrol2.currentItem = index;
        this.$refs.tabcontrol1.currentItem = index;
      },
      cgscrollRight(position) {
        if (this.tabControlOffsetTop != 0 && -position.y >= this.tabControlOffsetTop) {
          this.isShowTabControl1 = true;
        } else {
          this.isShowTabControl1 = false;
        }
        this.isToTopListener(position)
      }
    },
    created() {
      this._getCategory(0, 'pop');
      this.$nextTick(() => {
        this.$refs.scroll1 && this.$refs.scroll.refresh();
      });
    },
    mounted() {
      this.$bus.$on('cgiliilListenter', () => {
        this.count++;
        if (this.count == this.categoryILD.data.list.length) {
          this.tabControlOffsetTop = this.$refs.tabcontrol1.$el.offsetTop;
        }
      });
      this.cgImageLoad = function () {
        this.mixinNewRefresh();
      }
      this.$bus.$on('itemListenerMixin', this.cgImageLoad);
    },
    activated() {
      this.$refs.scroll.scrollTo(0, this.scrollY, 10);
      this.$refs.scroll.refresh();
    },
    deactivated() {
      this.$bus.$off(this.cgImageLoad);
      this.scrollY = this.$refs.scroll.getCurrentY()
    },
    mixins: [backtopMixin, itemListenerMixin]
  }
</script>
<style scoped>
  .category {
    height: 100vh;
  }

  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
  }

  .content {
    margin-top: 44px;
    height: calc(100% - 44px - 49px);
    display: flex;
    overflow: hidden;
  }

  .scroll-left {
    flex: 2;
    height: 100%;
    background-color: #eee;
    overflow: hidden;
    font-size: 13px;
  }

  .right {
    flex: 6;
    height: 100%;
    overflow: hidden;
    padding: 10px;
  }

  .scroll-right {
    height: calc(100% - 40px);
    overflow: hidden;
  }
</style>