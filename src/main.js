import Vue from 'vue'
import App from './App.vue'
import Toast from 'components/common/toast/index.js';
import FastClick from 'fastclick';
import VueLazyLoad from 'vue-lazyload';
Vue.use(VueLazyLoad, {
  loading: require('./assets/img/common/timg.gif'),
});
FastClick.attach(document.body);
Vue.use(Toast);

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue();
new Vue({
  render: h => h(App),
}).$mount('#app')
