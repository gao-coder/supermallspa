<template>
  <div class="category-dropdown-bar">
    <category-dropdown-bar-item @click.native="itemClick(index)" :class="{selectorItem: currentIndex==index}"
      v-for="(item,index) in categoriesCdb" :itemTitle="item.title" :key="index">

    </category-dropdown-bar-item>
  </div>
</template>

<script>
  import CategoryDropdownBarItem from './CategoryDropdownBarItem.vue';
  export default {
    name: 'CategoryDropdownBar',
    components: {
      CategoryDropdownBarItem,
    },
    data() {
      return {
        currentIndex: 0,
      }
    },
    computed: {},
    methods: {
      itemClick(index) {
        this.currentIndex = index;
        this.$emit('cdbiClickListenter', index);
      }
    },
    props: {
      categoriesCdb: {
        type: Array,
        default() {
          return [];
        }
      }
    }
  }
</script>
<style scoped>
  .category-dropdown-bar {
    display: flex;
    height: 120vh;
    flex-direction: column;
  }

  .selectorItem {
    background-color: #fff;
    border-left: 3px solid var(--color-tint);
    color: var(--color-tint);
  }
</style>