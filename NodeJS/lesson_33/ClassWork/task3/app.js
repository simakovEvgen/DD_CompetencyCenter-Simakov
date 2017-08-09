/*
* ClassWork
*
* Задача 3
*
* Модифицируйте код предыдущей задачи. Реализуйте следующее:
*
* * При PUT-запросе по пути '/users/index', где index - индекс элемента в массиве users,
* элемент по указанному индексу заменяется на следующий объект: {name: 'updated name', age: 'updated age'}.
*
* * При DELETE-запросе по пути '/users/index', где index - индекс элемента в массиве users,
* происходит удаление элемента с указанным индексом из массива.
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

server.put('/users/:index', function (req, res) {
    if (req.params.index > users.length){
        res.send("user not found");
    } else {
        if (req.params.index == '0'){
            res.send("users count start at 1");
        } else {
            var obj = {name: 'updated name', age: 'updated age'};
            users[req.params.index-1] = obj;
            res.send("user replace");
            console.log(users);
        }
    }
});

server.del('/users/:index', function (req, res) {
    if (req.params.index > users.length){
        res.send("user not found");
    } else {
        if (req.params.index == '0'){
            res.send("users count start at 1");
        } else {
            users.splice(req.params.index-1,1);
            res.send("user deleted, now them: " + users.length);
            console.log(users);
        }
    }
});

server.on('Not Found', function () {
    res.status(404);
    res.send('This page does not exist.');
});

server.on('InternalServer', function (req, res, err) {
    err.body = 'Error on the server';
    res.send(err);
});

server.listen(port, function () {
    console.log('server running on port ' + port);
});