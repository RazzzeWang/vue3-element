/*
 * @Author: ze.wang@diact.com
 * @Date: 2024-05-09 15:52:20
 * @Function: Please Input Function
 */
import { createRouter, createWebHistory } from 'vue-router';
import routes from './constRoutes';
import { setupBeforeEach } from './permission';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

// 路由守卫 开启
setupBeforeEach(router);

export default router;