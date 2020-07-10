import axios from 'axios';
export function request(config) {
  const instance = axios.create(
    {
      // baseURL: 'http://123.207.32.32:8000/api/v1',
      baseURL: 'http://152.136.185.210:8000/api/n3',
      timeout: 3000,
    }
  );
  // 3.请求拦截
  instance.interceptors.request.use(
    config => {
      //console.log(config);
      return config;
    },
    err => {
      console.log(err);
    }
  );
  // 4.响应拦截
  instance.interceptors.response.use(
    result => {
      //console.log(result);
      return result.data;
    },
    err => {
      console.log(err);
    }
  );
  return instance(config);
}
