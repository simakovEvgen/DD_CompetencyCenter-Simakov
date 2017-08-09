/*
* ClassWork
*
* Задача 1
*
* Создайте базовый сервер с помощью Restify. Реализуйте следующее:
* При GET-запросе по пути '/test' на странице отображаются заголовки запроса.
* При POST-запросе по пути '/test' на странице отображается тело запроса.
*/

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
server.get('/test', function (req, res, next) {
    res.send(req.headers);
});

// обработка post запроса по пути /test
server.post('/test', function (req, res, next) {
    res.send(req.body);
});

server.use(function () {
    res.send(404);
})

server.listen(port, function () {
    console.log('server running on port ' + port);
});