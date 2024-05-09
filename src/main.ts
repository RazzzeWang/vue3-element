/*
 * @Author: ze.wang@diact.com
 * @Date: 2024-05-09 14:18:03
 * @Function: Please Input Function
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import pinia from '/@/stores'

const app = createApp(App);

app.use(pinia)
app.mount('#app')
