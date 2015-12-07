var websockets = require("websockets");

var socket = new websockets.WebSocket('ws://localhost:3030');
socket.on('open', function() {
  socket.on('message', function(message) {
      console.log(message);
    });
});
