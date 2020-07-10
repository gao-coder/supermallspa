<template>
  <div class="recommend">
    <div class="recommendItem" v-for="item in recommend">
      <a :href="item.link">
        <img :src="item.image" alt="error">
      </a>
      <div>
        {{item.title}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeRecommendView',
    components: {},
    data() {
      return {
      }
    },
    props: {
      recommend: {
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
  @import '~assets/css/home/childComps/homerecommendview.css';
</style>