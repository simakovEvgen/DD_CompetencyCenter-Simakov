/*
* Class Work
*
* Задача 1
*
* Создайте HTTP сервер, который при обработке всех HTTP запросов создает подписанный cookie,
* доступный только для сервера со сроком жизни 1 неделя.
*/

var express = require('express');
var http = require('http');
var app = express();

var port = process.env.port || 3000;

var cookieParser = require('cookie-parser');

app.use(cookieParser());

app.get('/', function (req, res) {

    res.cookie('myCookie', 'Hello', {
        expires: new Date(Date.now() + 604800000), // неделя
        httpOnly: true
    });

    console.log('Cookies: ', req.cookies);

    res.end(req.cookies.myCookie);
});

app.listen(port, function () {
    console.log('app running on port ' + port);
})