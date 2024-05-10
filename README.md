<!--
 * @Author: ze.wang@diact.com
 * @Date: 2024-05-09 14:18:03
 * @Function: Please Input Function
-->
# 子应用项目

## 简介
采用vite + Vue3 + ts

## 环境配置
node版本 20+
包管理工具npm yarn pnpm，推荐pnpm
IDE推荐vscode

## 开始
1. 子应用项目初始化
```
pnpm install
```

2. 子应用应用名定义
修改`.env`文件中`VITE_MICRO_APP_NAME`变量，作为子应用名

3. 子应用开发端口号定义
修改`.env.development`文件中`VITE_PORT`变量，作为开发运行时子应用的端口

4. <u>子应用在主应用中注册 - 待定</u>
在主应用`src/registerMicroAppsConfig.ts`文件中注册对应的子应用
```
{
    name: 'MF_file',
    entry: '//localhost:6600',
    container: '#qiankunContainer',
    activeRule: '/#/MF_file',
    loader,
},
```

5. 开启关闭接口mock模式
修改`.env.development`文件中`VITE_API_MOCK`变量，可选值`open | close`

6. 启动项目（注：子应用可独立运行，大多数情况下需同时启动主应用挂在到主应用下进行调试）
```
pnpm dev
```

## 规范
1. ts类型声明命名规范：interface命名以大写I开头，type命名以大写T开头
```
declare interface IResData {
    name: string;
    age: number;
}

declare type TResData = {
    name: string;
    age: number;
}
```

2. 代码格式化规范，建议ide使用vscode，并将格式化标准切换为**Prettier - code formatter**

3. git提交规范，建议全局安装`commitizen`，标准化commit message
```
npm install -g commitizen
```
提交前，使用`cz`替代`git commit`命令





