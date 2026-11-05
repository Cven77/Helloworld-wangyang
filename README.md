# helloworld-wangyang

我的第一个 AI 开发的网站 —— 低代码开发技术课堂练习一。

- 线上地址：https://helloworld-wangyang.vercel.app
- 技术栈：Node.js + Express，部署于 Vercel

## 目录结构

```
helloworld-wangyang/
├── server.js          # 本地运行的 Express 服务
├── api/time.js        # Vercel Serverless 函数：返回服务器时间
├── public/index.html  # 页面（浏览器端）
├── vercel.json        # Vercel 配置
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
- 显示当前服务器时间（由 /api/time 接口返回，每 30 秒同步一次）

## 部署

推送到 GitHub 后，在 Vercel 中 Import 本仓库，保持默认配置 Deploy 即可；也可用命令行：

```bash
npx vercel --prod
```
