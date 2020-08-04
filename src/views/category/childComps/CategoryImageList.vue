<template>
  <div class="category-image-list" v-if="Object.keys(categoryImageListData).length !=0">
    <category-image-list-item v-for=" (item,index) in categoryImageListData.data.list" :key="index" :ciliData="item">
    </category-image-list-item>
  </div>
</template>

<script>
  import CategoryImageListItem from './CategoryImageListItem.vue';
  export default {
    name: 'CategoryImageList',
    components: {
      CategoryImageListItem
    },
    data() {
      return {
      }
    },
    computed: {},
    methods: {},
    props: {
      categoryImageListData: {
        type: Object,
        default() {
          return {
          }
        }
      }
    }
  }
</script>
<style scoped>
  .category-image-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 15px;
  }
</style>