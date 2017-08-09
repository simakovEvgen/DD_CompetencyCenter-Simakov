/*
* Home Work
*
* Задача 3
*
* Модифицируйте код предыдущией задачи. Добавьте в код middleware-функцию для обработки ошибок.
*/

var express = require('express');
var path = require('path');
var http = require('http');
var app = express();

var users = [
    { name: 'Jane', age: 23 }, { name: 'John', age: 30 }, { name: 'Vasya', age: 25 },
    { name: 'Yvonne', age: 34 }, { name: 'Will', age: 18 }, {name: 'Jack', age: 26}
];

var port = process.env.port || 3000;

// express.Router - middleware функция, позволяющая вынести маршрутизауию в отдельный модуль


app.get('/', function(req, res) {

    res.sendFile(path.join(__dirname,'/public/index.html'));

});

app.get('/users', function(req, res) {

    res.sendFile(path.join(__dirname,'/public/users.html'));

});

app.get('/array', function(req, res) {

    res.send(users);
});

app.get('/users/:id', function(req, res) {

    // доступ к параметрам маршрутизации осуществляется через объект req.params
    var arr = [];
    arr.push(users[req.params.id])

    res.send(arr);
});

app.listen(port, function () {
    console.log('App listening on port ' + port);
});