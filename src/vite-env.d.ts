/*
 * @Author: ze.wang@diact.com
 * @Date: 2024-05-09 14:18:03
 * @Function: Please Input Function
 */
/// <reference types="vite/client" />

// 环境变量
interface ImportMetaEnv {
  readonly VITE_APP_ROOT: string; // app baseUrl
  readonly VITE_APP_PUBLIC_PATH: string; // app静态资源路径
  readonly VITE_APP_API_BASE_URL: string; // api接口地址
  readonly VITE_MOCK: boolean; // 是否开启mock模式
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// 动态属性对象类型
declare type Indexable<T = any> = {
  [key: string]: T;
};

// vue模块
declare module '*.vue' {
  import { defineComponent } from 'vue';
  const Component: ReturnType<typeof defineComponent>;
  export default Component;
}

// mockjs模块
declare module 'mockjs';