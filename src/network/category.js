import { request } from './request.js';
function getCategory() {
  return request({
    url: '/category',
  });
};
function getSubCategory(maitKey) {
  return request({
    url: "/subcategory",
    params: {
      maitKey,
    }
  });
};
function getDatailCategory(miniWallkey, type) {
  return request({
    url: '/subcategory/detail',
    params: {
      miniWallkey,
      type
    }
  });
};
export { getCategory, getSubCategory, getDatailCategory };