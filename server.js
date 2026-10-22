const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  // 获取当前服务器时间
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const serverTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

  res.send(`
    <!DOCTYPE html>
    <html lang="zh-CN">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Hello World - 我的第一个AI开发的网站</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Microsoft YaHei', Roboto, sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: #fff;
        }
        .container {
          text-align: center;
          padding: 60px 40px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          backdrop-filter: blur(10px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        }
        h1 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 24px;
          text-shadow: 0 4px 20px rgba(0,0,0,0.2);
          line-height: 1.4;
        }
        .name { color: #ffd700; }
        .time-box { margin-top: 20px; font-size: 1.2rem; opacity: 0.9; }
        .time-label {
          display: inline-block;
          background: rgba(255,255,255,0.2);
          padding: 8px 20px;
          border-radius: 999px;
          margin-bottom: 12px;
        }
        .time-value {
          font-size: 1.8rem;
          font-weight: 600;
          font-family: 'Courier New', monospace;
          letter-spacing: 2px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Hello World！<br>我是<span class="name">【豆包】</span>，<br>我的第一个AI开发的网站</h1>
        <div class="time-box">
          <div class="time-label">当前服务器时间</div>
          <div class="time-value">${serverTime}</div>
        </div>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`服务器已启动: http://localhost:${PORT}`);
});