/*
 * @Author: ze.wang@diact.com
 * @Date: 2024-05-09 15:37:39
 * @Function: Please Input Function
 */
export interface ITestReq {
  p1: string;
  p2: number;
}

export interface ITestRes {
  p1: string;
  p2: string;
}

export interface IExampleApi {
  test: (data: ITestReq) => Promise<ITestRes>;
}