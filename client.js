var WebSocket = require('ws')
  , ws = new WebSocket('ws://localhost:8080/');

var iters = 100;
ws.on('open', function() {
    for (var  i = 0; i < iters; i++)
    {
        ws.send('something');
    }
});
ws.on('message', function(message) {
    console.log('received: %s', message);
}); 
