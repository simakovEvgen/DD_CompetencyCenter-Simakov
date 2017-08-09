/*
 * ClassWork
 *
 * Задача 3
 *
 * Добавьте в таблицу test_table базы данных test один элемент.
 */

var express  = require('express');
var app = express();

var port = process.env.port || 3000;

var mysql = require('mysql');

// параметры соединеня с бд
var connection = mysql.createConnection({
    host: 'localhost', // имя хоста базы данных
    user: 'root', // MySQL пользователь, под именем которого авторизоваться
    password: 'root', // пароль пользователя MySQL
    database: 'test', // имя базы данных
    port: 8889 // порт, на котором установлен MySQL сервер
});

function tableGenerator(data) {
    var items = '';
    var table = '';
    for (let i = 0; i < data.length; i++){
        items += "<tr><td>" + data[i].name + "</td><td>" + data[i].info + "</td><td>" + data[i].id + "</td></tr>"
    }
    table = "<table border='1' cellspacing='0'><tbody>" + items + "</tbody></table>";
    return table;
}

var values = [
    ['Item2', 'New stuff']
];

app.use(function(req, res) {

    if (req.url == '/') {

        var data = [];

        // подключение к базе данных
        connection.connect(function(err) {

            if (err) console.log(err.stack);

            console.log('connected as id ' + connection.threadId);
        });

        // запрос к базе данных
        connection.query('INSERT INTO `test_table` (NAME, INFO) VALUES ?', [values],function(err, rows) {

            if (err) console.log(err.stack);

            console.log('query to database successful');
            console.log(rows);
        });

        connection.query('SELECT * FROM `test_table`', function(err, result) {

            if (err) console.log(err.stack);

            console.log(result);
            console.log();

            for(let i = 0; i<result.length; i++){
              var obj = {};
              obj.name = result[i].name;
              obj.id = result[i].id;
              obj.info = result[i].info;

              data.push(obj)
            }

            console.log('query to database successful!!!!');

            res.status(200).send(tableGenerator(data));
        });

        res.on('finish', function() {

            // отключение от базы данных
            connection.end(function(err) {

                if (err) console.log(err.stack);

                console.log('disconnected from database');
            });

        })

    }
});

app.listen(port, function() {

    console.log('app listening on port ' + port);

});