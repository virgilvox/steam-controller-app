var websockets = require("websockets");
var steam = require('steam-controller');

var response;

var controller = new steam.steamController();

controller.connect();

controller.read(function(data){
  response = data;
});

var server = websockets.createServer();
server.on('connect', function(socket) {

  socket.on('open', function() {
    console.log('open');
  });
  socket.on('error', function() {
    console.log('error');
  });

  socket.on('message', function(data) {
    socket.send(JSON.stringify(response));
  });

  socket.on('close', function() {
    console.log('close');
  });

}).listen(3030);
