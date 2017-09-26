const express = require('express');
const app = express();
const http = require('http').Server(app);
const path = require('path');
const chatServer = require('./lib/chatServer');

chatServer.listen(http);

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3000;

http.listen(PORT, () => {
  console.log('Listening on', PORT);
});
