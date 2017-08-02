/*
* ClassWork
*
* ### Задача 1
*
* Создайте HTTP сервер, который выводит в консоль HTTP методы запросов и их пути.
*/

var http = require('http');

const port = process.env.port || 1337;

var server = http.createServer(function (request, response) {

    console.log(request.method);
    console.log(request.url);

    response.writeHead(200, { 'Content-Type': 'text/html' });

    response.end('<h1>Hello World</h1>');

});

server.listen(port, '127.0.0.1');

console.log('Server running on port ' + port);

