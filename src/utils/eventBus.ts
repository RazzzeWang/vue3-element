/*
 * @Author: ze.wang@diact.com
 * @Date: 2024-05-09 15:30:31
 * @Function: Please Input Function
 */
import mitt, { Emitter, EventType, Handler } from 'mitt';

export interface Mitter extends Emitter<Record<EventType, unknown>> {
  clearKey: (name: string) => void;
  once: (name: string, fn: Handler) => void;
}

const emitter: Mitter = mitt() as Mitter;

// 销毁指定事件
emitter.clearKey = (name) => {
  emitter.all.delete(name);
};

// 防止重复监听，只做单次监听，最后一次生效
emitter.once = (name, fn) => {
  emitter.clearKey(name);
  emitter.on(name, fn);
};

export default emitter;