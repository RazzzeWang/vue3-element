/*
 * @Author: ze.wang@diact.com
 * @Date: 2024-05-10 19:47:25
 * @Function: Please Input Function
 */
import SvgIcon from './SvgIcon.vue';
import type { App } from 'vue';
export default {
	install: (app: App) => {
    app.component('SvgIcon', SvgIcon);
	},
};