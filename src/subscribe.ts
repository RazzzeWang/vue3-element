/*
 * @Author: ze.wang@diact.com
 * @Date: 2024-05-10 15:47:11
 * @Function: 订阅中心，接受主应用的发布内容
 */
import { QiankunProps } from 'vite-plugin-qiankun/dist/helper'
import { useChangeColor } from '/@/utils/theme'

const GLOBAL_STATE = window.MicroFrontends?.GLOBAL_STATE || {}
const useSubscribe = function(props: QiankunProps){
  props.onGlobalStateChange((state: any) => {
    console.log('子应用接收的参数', state)
    
    if (state.type === GLOBAL_STATE.themeColor) {
      // ————————————————1、主题色切换——————————————
      const { getDarkColor, getLightColor } = useChangeColor()
      const newPrimaryColor = state.data.primary
      console.log('主题色改变====', newPrimaryColor)
      document.documentElement.style.setProperty('--el-color-primary-dark-2', `${getDarkColor(newPrimaryColor, 0.1)}`);
      document.documentElement.style.setProperty('--el-color-primary', newPrimaryColor);
      // 颜色变浅
      for (let i = 1; i <= 9; i++) {
        document.documentElement.style.setProperty(`--el-color-primary-light-${i}`, `${getLightColor(newPrimaryColor, i / 10)}`);
      }
    }
  }, true)
}

export default useSubscribe
