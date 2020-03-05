let WebSocket = require('ws');
let wss = new WebSocket.Server({port:3000});
wss.on('connection',function(ws){
    ws.on('message',function(e){               //cnpm install ws
        console.log(e.data);
        ws.send('我是接受方');
    });
})