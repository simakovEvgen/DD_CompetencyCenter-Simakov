/*
* Class Work
*
* Задача 2
*
* Дополните код предыдущей задачи. Напишите middleware-функцию, которая будет выводить в консоль путь и HTTP метод запроса.
*/

var express = require('express');
var app = express();

var port = process.env.port || 3000;

// middleware
app.use(function (req, res, next) {
    res.send('<h1>Hello from Express</h1>');
    next();
});

app.use(function (req, res, next) {
    console.log(req.method);
    console.log(req.url);
    next();
});

app.listen(port, function () {
    console.log('App listening on port ' + port);
});
