/*
 * @Author: ze.wang@diact.com
 * @Date: 2024-05-09 14:18:03
 * @Function: Please Input Function
 */
import { defineConfig, loadEnv, ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx';
import path from 'path';
import qiankun from 'vite-plugin-qiankun';

// https://vitejs.dev/config/
export default defineConfig((mode: ConfigEnv) => {
  const env = loadEnv(mode.mode, process.cwd());
  return {
    plugins: [vue(), vueJsx(), 
      qiankun(env.VITE_MICRO_APP_NAME, { // 配置qiankun插件
        useDevMode: true
      })
    ],
    server: {
      host: '0.0.0.0', // 服务器地址
      port: env.VITE_PORT as unknown as number, // 服务器端口号
      open: env.VITE_OPEN === 'true', // 是否自动打开浏览器
      hmr: true, // 启用热更新
      headers: {			// 允许子应用跨域
        'Access-Control-Allow-Origin': '*',
      },
      proxy: {
        '/api/gen': {
          //单体架构下特殊处理代码生成模块代理
          target: env.VITE_IS_MICRO === 'true' ? env.VITE_ADMIN_PROXY_PATH : env.VITE_GEN_PROXY_PATH,
          changeOrigin: true,
          rewrite: (path: any) => path.replace(/^\/api/, ''),
        },
        '/api': {
          target: env.VITE_ADMIN_PROXY_PATH, // 目标服务器地址
          ws: true, // 是否启用 WebSocket
          changeOrigin: true, // 是否修改请求头中的 Origin 字段
          rewrite: (path: any) => path.replace(/^\/api/, ''),
        },
        '^/ws/info/.*': {
          target: env.VITE_ADMIN_PROXY_PATH, // 目标服务器地址
          ws: true, // 是否启用 WebSocket
          changeOrigin: true,
        },
        // '^/prod-api/admin': {
        // 	target: 'http://10.137.144.155:9999/admin', // 目标服务器地址
        // 	// target: 'https://uat-dia.diact.com',
        // 	ws: true, // 是否启用 WebSocket
        // 	changeOrigin: true, // 是否修改请求头中的 Origin 字段
        // 	rewrite: (path) => path.replace(/^\/prod-api/, ''),
        // },
        '^/local/channel': {
          target: 'http://10.137.147.36:30343', // 目标服务器地址
          // target: 'https://uat-dia.diact.com',
          ws: true, // 是否启用 WebSocket
          changeOrigin: true, // 是否修改请求头中的 Origin 字段
          rewrite: (path: any) => path.replace(/^\/local/, ''),
        }
        // '^/channel/tinymce': {
        // 	target: 'http://localhost:9100', // 目标服务器地址
        // 	ws: true, // 是否启用 WebSocket
        // 	changeOrigin: true, // 是否修改请求头中的 Origin 字段
        // 	rewrite: (path) => path.replace(/^\/channel\/tinymce/, ''),
        // }
      },
    },
    resolve: {
      alias: [
        {
          find: '/@',
          replacement: path.resolve(__dirname, './src/'),
        },
      ],
    },
  }
})
