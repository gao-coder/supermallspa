import { debounce } from 'common/utils.js';
import BackTop from 'components/content/backtop/BackTop.vue';

export const itemListenerMixin = {
  data() {
    return {
      mixinNewRefresh: null
    }
  },
  mounted() {
    this.mixinNewRefresh = debounce(this.$refs.scroll.refresh, 100)
  }
}
export const backtopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false,
    }
  },
  methods: {
    backTopClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    isToTopListener(position) {
      (-position.y) > 1000 ? this.isShowBackTop = true : this.isShowBackTop = false;
    }
  }
}