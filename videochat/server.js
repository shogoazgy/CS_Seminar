var express = require('express');

//インスタンスの作成
var app = express();

var http = require('http').Server(app);
const io = require('socket.io')(http);

//Web上で公開されてるならprocess.env.PORTの値を参照するが今回はローカルで実行のため8000番ポートを参照
const PORT = process.env.PORT || 8000;

// ルーティング
app.get('/' , (req, res)=>{
    res.sendFile(__dirname+'/index.html');
});

io.on('connection',(socket)=>{
    console.log('connection');
    socket.on('message',(msg)=>{
        socket.broadcast.emit('message', msg);
    });
    socket.on('disconnect',function(){
        console.log('disconnect');
    });
});

http.listen(PORT, ()=>{
    console.log('server listening. Port:' + PORT);
});