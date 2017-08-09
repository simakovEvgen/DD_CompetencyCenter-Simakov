/*
* ClassWork
*
* Задача 2
*
* Дополните код предыдущей задачи.
*
* С помощью socket.io сгенерируйте событие 'greet', которое передаст следующие данные: {text: 'Hello from Socket.IO'}.
*
* Создайте клиента socket.io. Установите обработчик события 'greet', которая выводит на экран данные,
* переданные через событие и генерирует событие 'receive_message'.
*
* На стороне сервера установите обработчик события 'receive_message', который выведет в консоль текст 'message received'.
*/


var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var path = require('path');

var port = process.env.port || 3000;

io.on('connection', function (socket) {

    console.log('user connected to socket');

    socket.emit('greet', {text: 'Hello from Socket.IO'});

    socket.on('receive_message',function (data) {
        console.log('Client response = ', data);
    });

    socket.on('connect_error',function (err) {
        console.log('connection error= ', err);
    });

    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

server.listen(port, function () {
    console.log('app running on port ' + port);
});