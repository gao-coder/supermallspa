<template>
  <div class="category-dropdown-bar-item">
    {{itemTitle}}
  </div>
</template>
<script>
  export default {
    name: 'CategoryDropdownBarItem',
    components: {

    },
    data() {
      return {
        currentIndex: 0,
      }
    },
    computed: {},
    methods: {},
    props: {
      itemTitle: {
        type: String,
        default: '',
      }
    }
  }
</script>
<style scoped>
  .category-dropdown-bar-item {
    flex: 1;
    padding: 19px 0 0 0;
    text-align: center;
  }
</style>