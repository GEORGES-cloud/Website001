const express = require('express');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(publicDir, { extensions: ['html'], maxAge: '1h' }));

app.use(function (req, res) {
  res.sendFile(path.join(publicDir, 'index.html'));
});

app.listen(PORT, function () {
  console.log('Real de Cote — server listening on http://localhost:' + PORT);
});
