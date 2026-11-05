const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

function nowText() {
  return new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai', hour12: false });
}

app.get('/api/time', (req, res) => {
  res.json({ time: nowText(), timestamp: Date.now() });
});

app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Hello World · wangyang</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    min-height: 100vh; display: flex; align-items: center; justify-content: center;
    font-family: -apple-system, "PingFang SC", "Microsoft YaHei", sans-serif;
    background: linear-gradient(135deg, #1e293b 0%, #0f766e 100%);
    color: #f8fafc; padding: 24px;
  }
  .card {
    background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.18);
    backdrop-filter: blur(10px); border-radius: 20px;
    padding: 48px 40px; max-width: 640px; width: 100%; text-align: center;
    box-shadow: 0 20px 50px rgba(0,0,0,0.35);
  }
  h1 { font-size: 40px; line-height: 1.35; margin-bottom: 12px; letter-spacing: 1px; }
  h1 span { color: #5eead4; }
  .sub { font-size: 15px; color: #cbd5e1; margin-bottom: 32px; }
  .time-box { border-top: 1px dashed rgba(255,255,255,0.25); padding-top: 24px; }
  .label { font-size: 13px; color: #94a3b8; letter-spacing: 2px; margin-bottom: 8px; }
  .time { font-size: 26px; font-weight: 600; font-variant-numeric: tabular-nums; color: #fbbf24; }
  .date { margin-top: 6px; font-size: 13px; color: #94a3b8; }
</style>
</head>
<body>
  <div class="card">
    <h1>Hello World！我是<span>wangyang</span>，我的第一个AI开发的网站</h1>
    <p class="sub">Node.js + Express · 部署于 Vercel</p>
    <div class="time-box">
      <div class="label">当前服务器时间</div>
      <div class="time" id="time">${nowText()}</div>
      <div class="date" id="date">页面渲染时间（每 30 秒自动同步）</div>
    </div>
  </div>
<script>
  async function refresh() {
    try {
      const r = await fetch('/api/time');
      const d = await r.json();
      document.getElementById('time').textContent = d.time;
      document.getElementById('date').textContent = '最近同步于 ' + new Date(d.timestamp).toLocaleTimeString('zh-CN', { hour12: false });
    } catch (e) { /* 忽略网络波动 */ }
  }
  setInterval(refresh, 30000);
</script>
</body>
</html>`);
});

if (require.main === module) {
  app.listen(PORT, () => console.log('Server running at http://localhost:' + PORT));
}

module.exports = app;
