import { request } from './request.js';
export function getDetailsData(iid) {
  return request({
    url: '/detail',
    params: {
      iid,
    }
  });
};
export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.price = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discountDesc = itemInfo.discountDesc;
    this.discountBgColor = itemInfo.discountBgColor;
    this.columns = columns;
    this.services = services;
  }
}