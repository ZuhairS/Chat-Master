const io = require('socket.io');

let chat;
let guestNum = 1;
const nickNames = {};
const usedNames = [];

const chatServer = {
  assignDefaultName (socket) {
    const name = `Guest${guestNum}`;
    nickNames[socket.id] = name;
    usedNames.push(name);
    socket.emit('nameResult', {
      success: true,
      name
    });
    guestNum++;
  },
  handleNameChange (socket) {
    socket.on('nameChange', name => {
      if (name.toLowerCase().startsWith('guest')) {
        socket.emit('nameResult', {
          success: false,
          message: "Names cannot begin with Guest"
        });
      } else if (usedNames.includes(name)) {

      }
    });
  },
  listen (server) {
    chat = io(server);

    chat.on('connection', socket => {
      this.assignDefaultName(socket);
    });
  }
};

module.exports = chatServer;
