import axios from 'axios';

const request = axios.create({
  timeout: 0,
  headers: {
    'Content-Type': `application/json`,
    'X-Requested-With': `XMLHttpRequest`,
    'Cache-Control': `no-cache`,
  }
});

// 请求拦截
request.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
request.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    return response;
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);
export default request;
