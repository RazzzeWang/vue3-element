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
  app.mount('#app2')
}

renderWithQiankun({
  mount(props) {
    console.log('renderWithQiankun mount=============')
    render()
    props.onGlobalStateChange((state: any) => {
      console.log('子应用接收的参数', state)
      if (state.type === GLOBAL_STATE.themeColor) {
        const newPrimaryColor = state.data.primary
        console.log('主题色改变====', newPrimaryColor)
        // document.documentElement.style.setProperty('--el-color-primary-dark-2', `${getDarkColor(newPrimaryColor, 0.1)}`);
        document.documentElement.style.setProperty('--el-color-primary', newPrimaryColor);
        // 颜色变浅
        // for (let i = 1; i <= 9; i++) {
        //   document.documentElement.style.setProperty(`--el-color-primary-light-${i}`, `${getLightColor(newPrimaryColor, i / 10)}`);
        // }
      }
    }, true)
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
