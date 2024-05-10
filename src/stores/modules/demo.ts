/*
 * @Author: ze.wang@diact.com
 * @Date: 2024-05-09 15:26:46
 * @Function: demo仓库
 *
 * 使用：
 *  import { useDemoStore } from '@/stores/modules/demo'
 *
 *  const demoStore = useCounterStore()
 *  const { num } = storeToRefs(demoStore)
 *  const { addNum } = demoStore
 */
export const useDemoStore = defineStore('demo', () => {
  const num = ref<number>(0);
  const addNum = (n: number) => {
    num.value += n;
  };

  return {
    num,
    addNum,
  };
});