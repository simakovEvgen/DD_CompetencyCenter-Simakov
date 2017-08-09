/*
* ClassWork
*
* Задача 2
*
* Дано массив users:
* ```
* users = [
* { name: 'Jane', age: 23 }, { name: 'John', age: 30 }, { name: 'Vasya', age: 25 },
* { name: 'Yvonne', age: 34 }, { name: 'Will', age: 18 }, {name: 'Jack', age: 26}
* ]
* ```
* Реализуйте следующее:
* При GET-запросе по пути '/users' в ответе сервера отправляется массив users в формате JSON.
*/

var users = [
    { name: 'Jane', age: 23 }, { name: 'John', age: 30 }, { name: 'Vasya', age: 25 },
    { name: 'Yvonne', age: 34 }, { name: 'Will', age: 18 }, {name: 'Jack', age: 26}
];

var restify = require('restify'),
    fs = require('fs');


var port = process.env.port || 3000;

// создание сервера
var server = restify.createServer({
    name: 'myApp'
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

// middleware функции, используемые в restify, принимают те же параметры, что и в express
server.use(function (req, res, next) {
    console.log('method: ' + req.method + '\n\r' + 'url: ' + req.url );
    next();
})

// обработка get запроса по пути /
server.get('/', function (req, res, next) {
    res.send('This is a server created with restify! GET');
});

// обработка post запроса по пути /
server.post('/', function (req, res, next) {
    res.send('This is a server created with restify! POST');
});

// обработка get запроса по пути /test
server.get('/users', function (req, res, next) {
    res.header('content-type', 'json');
    res.send(users);
});

server.use(function () {
    res.send(404);
});

server.listen(port, function () {
    console.log('server running on port ' + port);
});