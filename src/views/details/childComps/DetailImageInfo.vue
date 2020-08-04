<template>
  <div class="detail-image-info" v-if="Object.keys(imageInfo).length !=0">
    <div class="image-info-title clearfix">
      <div class="start">
      </div>
      <div class="center">
        {{imageInfo.desc}}
      </div>
      <div class="end">

      </div>
    </div>
    <div class="image-info-content" v-for="item in imageInfo.detailImage" v-if="imageInfo.detailImage.length !=0">
      {{item.key}}
      <img :src="item" v-for="item in item.list" @load="imageLoad">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailImageInfo',
    components: {},
    data() {
      return {
      }
    },
    computed: {},
    methods: {
      imageLoad() {
        this.$emit('imageLoadListener')
      }
    },
    props: {
      imageInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>
<style scoped>
  .detail-image-info {
    margin: 0 10px;
  }

  .start {
    position: relative;
    width: 70px;
    height: 2px;
    background-color: #ccc;
  }

  .start::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 5px;
    height: 5px;
    background-color: #000000;
  }

  .center {
    padding: 10px 0;
  }

  .end {
    float: right;
    position: relative;
    width: 90px;
    height: 2px;
    background-color: #ccc;
  }

  .end::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 5px;
    height: 5px;
    background-color: #000000;
  }

  .image-info-content {
    margin: 15px 0;
  }

  .image-info-content img {
    margin: 15px 5px;
    width: 97%;
  }
</style>