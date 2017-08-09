/*
* Home Work
*
* Задача 1
*
* Создайте файловый сервер с помощью Express, который будет получать все данные из директории 'public'.
*/

var express = require('express');
var app = express();

app.use(express.static('public'));

var port = process.env.port || 3000;

app.listen(port, function () {
    console.log('App listening on port ' + port);
});



