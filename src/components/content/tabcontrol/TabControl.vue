<template>
  <div class="tabcontrol">
    <div v-for="(item,index) in titles" :key="item" class="tabcontrol-item" :class="{activeItem:currentItem==index}"
      @click="tabcontrolClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TabControl',
    components: {},
    data() {
      return {
        currentItem: 0,
      }
    },
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    computed: {
    },
    methods: {
      tabcontrolClick(index) {
        this.currentItem = index;
        this.$emit('tabClick', index);
      }
    },
  }
</script>
<style scoped>
  @import '~assets/css/tabcontrol/tabcontrol.css';
</style>