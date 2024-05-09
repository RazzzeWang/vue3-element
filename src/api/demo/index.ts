/*
 * @Author: ze.wang@diact.com
 * @Date: 2024-05-09 15:34:05
 * @Function: Please Input Function
 */
import request from '/@/utils/request';
import { IExampleApi } from './types';

export default <IExampleApi>{
  test: (data) => {
    const api = `/test`;
    return request.post(api, data);
  },
};