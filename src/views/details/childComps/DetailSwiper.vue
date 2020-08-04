<template>
  <div class="detailswiper">
    <swiper>
      <swiper-item v-for="(item,index) in topImages" :key="index" class="detailswiperitem">
        <img :src="item" alt="error">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import { Swiper, SwiperItem } from 'components/common/swiper/index.js';
  export default {
    name: 'DetailSwiper',
    components: {
      Swiper,
      SwiperItem,
    },
    data() {
      return {
      }
    },
    props: {
      topImages: {
        type: Array,
        default() {
          return []
        }
      }
    },
    computed: {},
    methods: {},
  }
</script>
<style scoped>
  .detailswiperitem {
    width: 100%;
    height: 300px;
  }

  .detailswiperitem img {
    width: 100%;
  }
</style>