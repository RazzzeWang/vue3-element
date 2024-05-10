/*
 * @Author: ze.wang@diact.com
 * @Date: 2024-05-09 14:18:03
 * @Function: Please Input Function
 */
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import './style.css'
import App from './App.vue'
import router from '/@/router'
import pinia from '/@/stores'
import i18n from '/@/i18n';
import useSubscribe from '/@/subscribe'

// 子应用相关
import {
  renderWithQiankun,
  qiankunWindow
} from 'vite-plugin-qiankun/dist/helper.js';

// 注册基座中的公共组件
// const { Pagination } = window.MicroFrontends?.VUEComponents || {}

// 基座中的共用数据
const GLOBAL_STATE = window.MicroFrontends?.GLOBAL_STATE || {}

// // mockjs
if (import.meta.env.DEV && import.meta.env.VITE_API_MOCK === 'open') {
  import('/@/mock');
}

console.log('import', import.meta)

let app:any = null
function render() {
  app = createApp(App)
  // 全局变量
  app.config.globalProperties.GLOBAL_STATE = GLOBAL_STATE;

  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(`ele-${key}`, component)
  }
  app.use(router)
  app.use(pinia)
  app.use(ElementPlus)
  app.use(i18n) // 国际化
  app.mount(`#${import.meta.env.VITE_MICRO_APP_NAME}`)
}

renderWithQiankun({
  mount(props) {
    console.log('renderWithQiankun mount=============')
    render()
    // 初始化子应用的事件订阅
    useSubscribe(props)
  },
  bootstrap() {
    console.log('%c%s', 'color: green;', 'vue3.0 app bootstraped')
  },
  unmount() {
    app.unmount()
    app._container.innerHTML = ''
    app = null
  },
  update() {
    console.log('update')
  }
})

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render()
}
