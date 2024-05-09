/*
 * @Author: ze.wang@diact.com
 * @Date: 2024-05-09 15:35:59
 * @Function: Please Input Function
 */
import axios, { AxiosResponse } from 'axios';

// 创建请求实例
const request = axios.create({
  baseURL: import.meta.env.VITE_APP_API_BASE_URL,
  timeout: 60000,
});

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.warn(error);
    return Promise.reject(error);
  }
);

// 响应拦截器
request.interceptors.response.use(
  (res: AxiosResponse<any>) => {
    if (res.status === 200) {
      return res.data;
    } else if (res.status === 401 || res.status === 403) {
      console.error('登录过期或权限不足, 请重新登陆!');
      return false;
    } else if (res.status === 500) {
      console.error('请求数据失败, 请重试!');
      return false;
    } else if (res.status === 406) {
      console.error('登陆超时请重新登录!');
      return false;
    } else {
      return false;
    }
  },
  (error) => {
    console.warn(error);

    const msg = error.message;
    const result = error.response;
    if (result) {
      const { data } = result;
      console.error(data.msg || data.enMsg || data.message);
    } else if (msg) {
      if (msg === 'Network Error') {
        console.error('网络错误,请检查网络!');
      } else {
        console.error(msg);
      }
    } else if (error.__CANCEL__) {
      // ignore message error
    } else {
      console.error('未知错误,请重试!');
    }
    return false;
  }
);

export default request;