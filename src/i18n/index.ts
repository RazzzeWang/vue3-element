import {createI18n} from 'vue-i18n';
import { IItemize, ILocale } from './types';

// element plus 自带国际化
import enLocale from 'element-plus/es/locale/lang/en';
import zhcnLocale from 'element-plus/es/locale/lang/zh-cn';
const element: ILocale = {'en': enLocale, 'zh-cn': zhcnLocale};

// 自动引入语言包
const itemize: IItemize = {'en': [], 'zh-cn': []};
const modules: Record<string, any> = import.meta.glob('./lang/*.ts', {eager: true});
for (const path in modules) {
  const key = path.match(/(\S+)\/(\S+).ts/);
  if (itemize[key![2]]) itemize[key![2]].push(modules[path].default);
  else itemize[key![2]] = modules[path];
}

// 合并数组对象（非标准数组对象，数组中对象的每项 key、value 都不同）
function mergeArrObj(list: IItemize, key: string) {
  let obj = {};
  list[key].forEach((i: EmptyObjectType) => {
      obj = Object.assign({}, obj, i);
  });
  return obj;
}

const messages: ILocale = {};
for (const key in itemize) {
  messages[key] = {
      name: key,
      el: element[key].el,
      ...mergeArrObj(itemize, key),
  };
}
 
// 导出语言国际化
const themeConfig = JSON.parse(localStorage.getItem('pigx-ui:themeConfig') || '{}')

export const i18n = createI18n({
  legacy: false,
  silentTranslationWarn: true,
  missingWarn: false,
  silentFallbackWarn: true,
  fallbackWarn: false,
  locale: themeConfig?.globalI18n,
  fallbackLocale: zhcnLocale.name,
  messages,
});
 
export default i18n;