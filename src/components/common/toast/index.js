import Toast from 'components/common/toast/Toast.vue';
export default {
  install(Vue) {
    const ToastCon = Vue.extend(Toast);
    const toast = new ToastCon();
    toast.$mount();
    document.body.appendChild(document.createElement('div').appendChild(toast.$el));
    Vue.prototype.$toast = toast;
  },
}