const Chat = require('./chat');

export default class ChatUI {

  constructor(socket) {
    this.socket = socket;
    this.chat = new Chat(socket);
    this.room = document.querySelector('#room');
    this.roomList = document.querySelector('#room-list');
    this.messageList = document.querySelector('#msg-list');
    this.input = document.querySelector('input');
    this.form = document.querySelector('form');
  }

  retrieveInput() {
    return this.input.value;
  }

  broadcastMessage() {
    this.chat.sendMessage(this.retrieveInput());
  }

  updateDisplay(message) {
    const newMessage = document.createElement('li');
    newMessage.textContent(message);
    this.messageList.appendChild(newMessage);
  }

}
