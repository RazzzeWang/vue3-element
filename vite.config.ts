/*
 * @Author: ze.wang@diact.com
 * @Date: 2024-05-09 14:18:03
 * @Function: Please Input Function
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx';
import path from 'path';
import qiankun from 'vite-plugin-qiankun';

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/MF_action', // 和基座中配置的activeRule一致
  plugins: [vue(), vueJsx(), 
    qiankun('MF_action', { // 配置qiankun插件
      useDevMode: true
    })
  ],
  resolve: {
    alias: [
      {
        find: '/@',
        replacement: path.resolve(__dirname, './src/'),
      },
    ],
  },
})
