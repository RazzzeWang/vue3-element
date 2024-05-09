/*
 * @Author: ze.wang@diact.com
 * @Date: 2024-05-09 14:18:03
 * @Function: Please Input Function
 */
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style.css'
import App from './App.vue'
import router from '/@/router'
import pinia from '/@/stores'

// // mockjs
if (import.meta.env.DEV && import.meta.env.VITE_API_MOCK === 'open') {
  import('/@/mock');
}
console.log('import', import.meta)

const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(ElementPlus)
app.mount('#app')
