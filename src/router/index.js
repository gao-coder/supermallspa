import Vue from 'vue';
import VueRouter from 'vue-router';
const Home = () => import('views/home/Home.vue');
const Category = () => import('views/category/Category.vue');
const Shopcart = () => import('views/shopcart/Shopcart.vue');
const Profile = () => import('views/profile/Profile.vue');
const Details = () => import('views/details/Details.vue');
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err);
};
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
}
Vue.use(VueRouter);
const routes = [
  {
    path: '',
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/category',
    component: Category,
  },
  {
    path: '/shopcart',
    component: Shopcart,
  },
  {
    path: '/profile',
    component: Profile,
  },
  {
    path: '/details/:iid',
    component: Details
  }

];
const router = new VueRouter({
  routes,
  mode: 'history'
});
export default router