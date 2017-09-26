const io = require('socket.io');

let chat;

const chatServer = {
  listen (server) {
    chat = io(server);

    chat.on('connection', (socket) => {
    });
  }
};

module.exports = chatServer;
