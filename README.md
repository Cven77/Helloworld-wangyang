# helloworld-wangyang

我的第一个 AI 开发的网站 —— 低代码开发技术课堂练习一。

- 访问地址：https://wangyang01.rangzijigenghao.online
- 技术栈：Node.js + Express，部署于 Vercel

## 目录结构

```
helloworld-wangyang/
├── server.js     # Express 服务：首页 HTML + /api/time 接口
├── vercel.json   # Vercel 构建与路由配置
└── package.json
```

## 本地运行

```bash
npm install
npm start
```

打开 http://localhost:3000

## 功能

- 显示「Hello World！我是 wangyang，我的第一个AI开发的网站」
- 显示当前服务器时间（服务端渲染 + 每 30 秒调用 /api/time 同步）

## 部署

```bash
npx vercel --prod
```
