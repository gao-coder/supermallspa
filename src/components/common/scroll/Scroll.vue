<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll';
  export default {
    name: 'Scroll',
    components: {},
    data() {
      return {
        scroll: null
      }
    },
    computed: {},
    methods: {
      scrollTo(x, y, time = 500) {
        this.scroll && this.scroll.scrollTo(x, y, time);
      },
      refresh() {
        this.scroll && this.scroll.refresh();
      },
      finishPullUp() {
        this.scroll.finishPullUp()
      }

    },
    props: {
      probeType: {
        type: Number,
        default: 0,
      },
      pullUpLoad: {
        type: Boolean,
        default: false,
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad,
      });
      this.scroll.on('scroll', (position) => {
        this.$emit('backTopScroll', position);
      })
      this.scroll.on('pullingUp', () => {
        this.$emit('pullUp');
        console.log('上拉加载更多');

      })
    }
  }
</script>
<style scoped>
</style>