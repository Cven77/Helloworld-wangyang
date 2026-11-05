const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/time', require('./api/time'));
app.use(express.static(path.join(__dirname, 'public')));

if (require.main === module) {
  app.listen(PORT, () => console.log('Server running at http://localhost:' + PORT));
}

module.exports = app;
