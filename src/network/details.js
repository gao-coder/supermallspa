import { request } from './request.js';
export function getDetailsData(iid) {
  return request({
    url: '/detail',
    params: {
      iid,
    }
  });
};
export function getRecommendData() {
  return request({
    url: '/recommend'
  });
}
export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.price = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discountDesc = itemInfo.discountDesc;
    this.discountBgColor = itemInfo.discountBgColor;
    this.realPrice = itemInfo.lowNowPrice;
    this.columns = columns;
    this.services = services;
  }
}