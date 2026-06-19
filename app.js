const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname, { extensions: ['html'], maxAge: '1h' }));

app.use(function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, function () {
  console.log('Real de Cote — server listening on http://localhost:' + PORT);
});
