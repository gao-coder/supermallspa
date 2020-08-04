import { Add_Counter, Add_Product } from './mutations-types';
export default {
  addShopCartProduct(context, payload) {

    return new Promise(function (resolve, reject) {
      const oldProduct = context.state.shopcartList.find(function (item) {
        return item.iid == payload.iid;
      });
      if (oldProduct) {
        context.commit(Add_Counter, oldProduct);
        resolve('购物车已存在此商品,商品数量加一');
      } else {
        context.commit(Add_Product, payload);
        resolve('商品添加到购物车成功');
      }
    });
  }
}