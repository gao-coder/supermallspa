import { Add_Counter, Add_Product, Delete_Product } from './mutations-types';
import Vue from 'vue';
export default {
  [Add_Counter](state, payload) {
    payload.counter += 1;
  },
  [Add_Product](state, payload) {
    payload.counter = 1;
    payload.isChecked = true;
    state.shopcartList.push(payload);

  },
  [Delete_Product](state) {
    const arr = []
    state.shopcartList.forEach((item, index) => {
      if (item.isChecked) {
        // state.shopcartList.splice(index, 1);
        // Vue.delete(state.shopcartList, index);
        arr.push(index);
      }
    });
    state.shopcartList.splice(arr[0], arr.length);
  }
}