<template>
  <div class="category-image-list-item">
    <div>
      <a :href="ciliData.link">
        <img :src="ciliData.image" @load="cgImageListItmeImageLoad">
      </a>
    </div>
    <div>
      {{ciliData.title}}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CategoryImageListItem',
    components: {},
    data() {
      return {
        count: 0,
      }
    },
    computed: {},
    methods: {
      cgImageListItmeImageLoad() {
        this.$bus.$emit('cgiliilListenter');
      }
    },
    props: {
      ciliData: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>
<style scoped>
  .category-image-list-item {
    width: 27%;
    font-size: 12px;
    text-align: center;
  }

  .category-image-list-item img {
    width: 100%;
    vertical-align: middle;
    margin: 10px 0;
  }
</style>