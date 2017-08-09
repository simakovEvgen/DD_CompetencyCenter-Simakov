/*
 * Home Work
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
 *
 * Реализуйте следующее:
 *
 * При GET-запросе по пути /users массив users отображается на странице в виде списка(по свойству name).
 * При клике по каждому из элементов списка отправляется GET-запрос по пути /users/userID,
 * где userID - свойство id массива users, соответствующее элементу списка.
 *
 * При GET-запросе по пути /users/userID на странице отображается информация
 * о соответствующем пользователе - свойства элемента массива users - name и age.
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

    console.log('request to main page!');
    // res.redirect - перенаправление запроса

    res.sendFile(path.join(__dirname,'/public/index.html'));

});

app.get('/users', function(req, res) {

    console.log('users');
    res.sendFile(path.join(__dirname,'/public/users.html'));
    console.log('1');

});

app.get('/array', function(req, res) {
    console.log('3');
    res.send(users);
});

app.get('/users/:id', function(req, res) {
    console.log('view1 with param!');
    // доступ к параметрам маршрутизации осуществляется через объект req.params
    var arr = [];
    arr.push(users[req.params.id])
    console.log(arr);
    res.send(arr);
});

app.listen(port, function () {
    console.log('App listening on port ' + port);
});