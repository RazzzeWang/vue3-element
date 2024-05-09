/*
 * @Author: ze.wang@diact.com
 * @Date: 2024-05-09 15:55:30
 * @Function: Please Input Function
 */
import { defineComponent } from 'vue';


export type Component<T extends any = any> =
  | ReturnType<typeof defineComponent>
  | (() => Promise<typeof import('*.vue')>)
  | (() => Promise<T>);

export interface IRouterMeta {
  title: string;
  keepAlive?: boolean;
  icon?: any;
  permission?: Array<string>;
  target?: string;
  hidden?: boolean;
  hiddenHeaderContent?: boolean;
  hideHeader?: boolean;
  blank?: boolean;
}

export interface IRouter {
  name: string;
  path: string;
  redirect?: string;
  meta?: IRouterMeta;
  component?: Component | string;
  children?: IRouter[];
  hidden?: boolean;
  hideChildrenInMenu?: boolean;
}

export interface IGenerateResult {
  generatedRoutes: IRouter[];
}