/*
 * @Author: ze.wang@diact.com
 * @Date: 2024-05-09 15:30:31
 * @Function: Please Input Function
 */
import mitt, { Emitter } from 'mitt';

type MittType<T = any> = {
  [key: string]: T;
};
// 类型
const emitter: Emitter<MittType> = mitt<MittType>();

// 导出
export default emitter;