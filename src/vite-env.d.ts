/*
 * @Author: ze.wang@diact.com
 * @Date: 2024-05-09 14:18:03
 * @Function: Please Input Function
 */
/// <reference types="vite/client" />

// 环境变量
interface ImportMetaEnv {
  readonly VITE_PUBLIC_PATH: string; // 前端访问前缀
  readonly VITE_API_URL: string; // 后端请求前缀
  readonly VITE_MOCK: boolean; // 是否开启mock模式
  readonly VITE_MICRO_APP_NAME: string; // 微前端子应用名
  readonly VITE_ADMIN_PROXY_PATH: string; // ADMIN 服务地址
  readonly VITE_GEN_PROXY_PATH: string; // 代码生成服务地址 (单体架构有效)
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// 动态属性对象类型
declare type Indexable<T = any> = {
  [key: string]: T;
};

// 申明 数组
declare type EmptyArrayType<T = any> = T[];

// 申明 对象
declare type EmptyObjectType<T = any> = {
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
declare module 'js-cookie';
declare module 'qs';

// window对象
interface Window {
  MicroFrontends: any;
}