<template>
  <div class="toast" v-show="isShowToast">
    {{message}}
  </div>
</template>

<script>
  export default {
    name: 'Toast',
    components: {},
    data() {
      return {
        message: '',
        isShowToast: false,
      }
    },
    computed: {},
    methods: {
      show(msg, duration) {
        this.message = msg;
        this.isShowToast = true;
        setTimeout(() => {
          this.isShowToast = false;
        }, duration);
      }
    },
    props: {
      // message: {
      //   type: String,
      //   default: '',
      // },
      // isShowToast: {
      //   type: Boolean,
      //   default: false,
      // }
    }
  }
</script>
<style scoped>
  .toast {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    padding: 10px;
    background-color: rgba(0, 0, 0, .7);
  }
</style>