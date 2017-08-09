/*
* HomeWork
*
* Задача 2
* Создайте страницу регистрации пользователей.
*
* База данных для сохранения сессий(таблица sessions) и пользователей(таблица users) находится в папке db рядом
* с файлом с задачами.
* Модуль для работы с паролем(его хэширования и проверки) находится в папке Homework рядом с файлом с задачами.
*
* Создайте страницу с полями ввода username и password и кнопкой sign up.
* Если поля ввода не пустые, при нажатии на кнопку sign up, пароль хэшируется.
* Хэш пароля и имя пользователя сохраняются в таблице users базы данных session_test.
*/


var express = require('express');
var app = express();

var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var mysql = require('mysql');

var passCrypt = require ('./modules/password-handler.js');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json());

var port = process.env.port || 3000;

// создание хранилища для сессий
var sessionHandler = require('./modules/session-handler');
var store = sessionHandler.createStore();

//pool
var pool = mysql.createPool({
    connectionLimit: 3, // максимальное количество соединений, которые могут быть созданы одновременно
    queueLimit: 10, // максимальное разрешенное количество соединений в очереди обработки
    aquireTimeout: 5000, // максимальное время ожидания при установке соединения
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'session_test',
    port: 8889
});

app.use(cookieParser());

app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true,
    store: store
}));

app.get('/', function(req, res) {

    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.post('/login', function(req, res) {

    let sql = 'INSERT INTO users (username, passwordHash) VALUES(?,?)';

    let hashedPass = passCrypt.encryptPassword (req.body.password);

    let values = [req.body.login, hashedPass];

    pool.getConnection(function(err, conn) {
        if (err) console.log(err.stack);

        conn.query (sql, values, function (err, result) {

            if (err) {
                if (err.code === "ER_DUP_ENTRY") {
                    res.send("Логин или пароль уже существуют");
                } else {
                    console.log ('err on post /registerUser= ', err);
                }
            } else {
                if (result && result.affectedRows > 0) {
                    res.send("Спасибо за регистрацию");
                }
            }

            conn.release();
        });

    });

});

app.listen(port, function () {
    console.log('app running on port ' + port);
});