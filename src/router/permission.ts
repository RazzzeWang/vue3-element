/*
 * @Author: ze.wang@diact.com
 * @Date: 2024-05-09 15:54:45
 * @Function: Please Input Function
 */
import type { Router } from 'vue-router';

// 设置路由守卫
export const setupBeforeEach = (router: Router) => {
  router.beforeEach((to, from, next) => {
      next();
  });
};
