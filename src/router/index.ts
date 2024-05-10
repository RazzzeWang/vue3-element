/*
 * @Author: ze.wang@diact.com
 * @Date: 2024-05-09 15:52:20
 * @Function: Please Input Function
 */
import { createRouter, createWebHashHistory } from 'vue-router';
import routes from './constRoutes';
import { setupBeforeEach } from './permission';
import { qiankunWindow } from "vite-plugin-qiankun/dist/helper";

const router = createRouter({
  history: createWebHashHistory(qiankunWindow.__POWERED_BY_QIANKUN__ ? `/#/${import.meta.env.VITE_MICRO_APP_NAME}` : '/'),
  routes: routes,
});

// 路由守卫 开启
setupBeforeEach(router);

export default router;