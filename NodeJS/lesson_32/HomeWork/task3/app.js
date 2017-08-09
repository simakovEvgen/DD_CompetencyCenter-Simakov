/*
* HomeWork
*
* ###Задача 3
*
* Дополните код предыдущей задачи.
* Создайте страницу авторизации.
*
* Создайте страницу с полями ввода username, password и кнопкой log in.
* Если поля ввода не пустые, при нажатии на кнопку происходит проверка пароля и имени пользователя.
* При успешном исходе проверки пароля и имени пользователя, сохраните имя пользователя в качестве свойства сессии.
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

// создание сессии
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

app.get('/logIn', function(req, res) {

    res.sendFile(path.join(__dirname, './public/logIn.html'));
});

app.get('/singIn', function(req, res) {

    res.sendFile(path.join(__dirname, './public/singIn.html'));
});

app.post('/singIn', function(req, res) {

    let sql = 'INSERT INTO users (username, passwordHash) VALUES(?,?)';

    let hashedPass = passCrypt.encryptPassword (req.body.password);

    console.log(hashedPass);

    let values = [req.body.login, hashedPass];

    console.log(values);

    pool.getConnection(function(err, conn) {

        if (err) console.log(err.stack);

        conn.query (sql, values, function (err, result) {

            if (err) {
                if (err.code === "ER_DUP_ENTRY") {
                    let obj = '{"check": false, "message":"Логин или пароль уже существуют"}';
                    res.status(200).send(obj);
                } else {
                    console.log('err on post /registerUser= ', err);
                }
            } else {
                if (result && result.affectedRows > 0) {
                    let obj = '{"check": true, "message":"Спасибо за регистрацию, вы будете перенаправлены на страницу для входа"}';
                    res.status(200).send(obj);
                }
            }
            conn.release();
        });

    });

});

app.post('/logIn', function(req, res) {

    var result = passCrypt.checkPassword(req.body.password);

    var rows = [];

    result.on ('error', function () {
        res.status (500).send ('Some error during passwordHash check')
    });

    result.on ('result', function (row) {
        rows.push(row);
    });

    result.on ('end', function () {
        if (rows.length > 0 && rows[0].username === req.body.login) {
            req.session.username = rows[0].username;
            res.set('Content-Type', 'application/json');
            res.status (200).send('{"status":1, "sessionUserName":"' + req.session.username + '","sessionId":"' + req.session.id + '"}');
        } else {
            res.status (200).send ('Not Found');
        }
    });
});

app.get('/check', function(req, res) {
    if (req.session.username) {
        res.set('Content-Type', 'text/html');
        res.send('<h2>User ' + req.session.username + ' is logged in! </h2>')
    } else {
        res.send('not logged in');
    }
});

app.listen(port, function () {
    console.log('app running on port ' + port);
})

