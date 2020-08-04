<template>
  <div v-if="isShowOne" class="shopcart-bottom-bar">
    <div class="item-left">
      <div class="check-wrapper">
        <Check-Button @click.native="checkAllBtn" :isChecked="isSelectAll">
        </Check-Button>
        <span>全选</span>
      </div>
      <div class="count">
        合计:{{totalprice}}
      </div>
    </div>
    <div class="item-right" @click="calcBtn">
      去计算 ({{shopcartListCheckedProductLength}})
    </div>
  </div>
  <div v-else class="two">
    <div class="two-item-left" @click="cancelSomething">
      取消
    </div>
    <div class="two-item-right" @click="deleteSomething">
      删除({{shopcartListCheckedProductLength}})
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  import CheckButton from 'components/content/checkbutton/CheckButton.vue';
  import { Delete_Product } from 'store/mutations-types.js'
  export default {
    name: 'ShopCartBottomBar',
    components: {
      CheckButton,
    },
    data() {
      return {
      }
    },
    props: {
      isShowOne: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      ...mapGetters(['shopcartList']),
      shopcartListCheckedProductLength() {
        return this.$store.state.shopcartList.filter((item) => {
          return item.isChecked;
        }).length
      },
      totalprice() {
        return '￥' + this.$store.state.shopcartList.filter((item) => {
          return item.isChecked;
        }).reduce((prevalus, item) => {
          return prevalus + item.price * item.counter;
        }, 0).toFixed(2);
      },
      isSelectAll() {
        if (this.shopcartList.length === 0) {
          return false
        } else {
          return !this.shopcartList.some(function (item) {
            return !item.isChecked;
          });
        }
      }
    },
    methods: {
      checkAllBtn() {
        if (this.isSelectAll) {
          this.shopcartList.forEach((item) => {
            item.isChecked = false;
          });
        } else {
          this.shopcartList.forEach((item) => {
            item.isChecked = true;
          })
        }

      },
      calcBtn() {
        if (!this.isSelectAll) {
          this.$toast.show('您还未选中商品', 2000)
        }
      },
      cancelSomething() {
        this.isShowOne = !this.isShowOne;
        isChecked = !isChecked;
      },
      deleteSomething() {
        this.$store.commit(Delete_Product)
      }
    },
  }
</script>
<style scoped>
  .shopcart-bottom-bar {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 7;
    width: 100%;
    height: 49px;
    background-color: rgb(201, 198, 198);
  }

  .item-right {
    flex: 1;
    height: 49px;
    background-color: pink;
    text-align: center;
    line-height: 49px;
    font-size: 16px;
  }

  .item-left {
    display: flex;
    flex: 3;
    padding: 17px 10px;
    font-size: 16px;
  }

  .check-wrapper {
    display: flex;
  }

  .check-wrapper span {
    margin-left: 7px;
  }

  .count {
    padding-left: 25px;
  }

  .two {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 7;
    width: 100%;
    height: 49px;
  }

  .two-item-left {
    flex: 2;
    background-color: skyblue;
    text-align: center;
    line-height: 49px;
  }

  .two-item-right {
    flex: 3;
    background-color: rgb(248, 63, 63);
    text-align: center;
    line-height: 49px;
  }
</style>