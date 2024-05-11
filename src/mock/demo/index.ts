/*
 * @Author: ze.wang@diact.com
 * @Date: 2024-05-09 15:39:12
 * @Function: Please Input Function
 */
import Mock from 'mockjs';
const baseUrl = import.meta.env.VITE_IS_MICRO === 'true' ? import.meta.env.VITE_API_URL : import.meta.env.VITE_PUBLIC_PATH

Mock.mock(`${baseUrl}/test`, 'post', {
  p1: 'test1',
  p2: 'test2',
});