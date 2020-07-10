<template>
  <div class="detailnavbar">
    <nav-bar>
      <template v-slot:left>
        <img src="~assets/img/common/back.svg" alt="error" class="detail-left" @click="leftClick">
      </template>
      <template v-slot:center>
        <div class="detail-center">
          <div @click="detailsitemClick(index)" v-for="(item,index) in title" class="centerItem"
            :class="{active:index==currentIndex}">
            {{item}}
          </div>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue';
  export default {
    name: 'App',
    components: {
      NavBar,
    },
    data() {
      return {
        title: ['商品', '参数', '评论', '推荐'],
        currentIndex: 0,
      }
    },
    computed: {},
    methods: {
      detailsitemClick(index) {
        this.currentIndex = index;
      },
      leftClick() {
        this.$router.back();
      }
    },
  }
</script>
<style scoped>
  .detailnavbar {
    height: 44px;
    position: relative;
    z-index: 3;
    background-color: #fff;
  }

  .detail-center {
    display: flex;
  }

  .centerItem {
    flex: 1;
  }

  .detail-left {
    text-align: center;
    vertical-align: middle;
  }

  .active {
    color: var(--color-tint);
  }
</style>