module.exports = (req, res) => {
  const now = new Date();
  const text = now.toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai', hour12: false });
  res.setHeader('Cache-Control', 'no-store');
  res.status(200).json({ time: text, timezone: 'Asia/Shanghai (UTC+8)', timestamp: now.getTime() });
};
