/*
 * @Author: ze.wang@diact.com
 * @Date: 2024-05-09 15:39:12
 * @Function: Please Input Function
 */
import Mock from 'mockjs';
Mock.mock('/test', 'post', {
  p1: 'test1',
  p2: 'test2',
});