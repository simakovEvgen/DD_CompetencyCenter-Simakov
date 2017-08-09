/*
* HomeWork
*
* Задача 1
*
* Создайте подключение к базе данных test через пул соединений.
* При GET-запросе по пути '/' выполните запрос к базе данных для выбора всех элементов таблицы test_table
* и отобразите их в виде таблицы.
*/

var express  = require('express');
var app = express();

var mysql = require('mysql');

var port = process.env.port || 3000;

// соединения могут быть объединены для облегчения их многократного использования
// или использования больщого количесва соединений
var pool = mysql.createPool({
    connectionLimit: 1, // максимальное количество соединений, которые могут быть созданы одновременно
    queueLimit: 10, // максимальное разрешенное количество соединений в очереди обработки
    aquireTimeout: 5000, // максимальное время ожидания при установке соединения
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'test',
    port: 8889
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

app.get('/', function(req, res) {

    var data = [];
    // создать соединение

    pool.getConnection(function(err, conn) {

        console.log('second connection');

        conn.query('SELECT * FROM `test_table`', function(err, result) {
            if (err) console.log(err);

            for(let i = 0; i<result.length; i++){
                var obj = {};
                obj.name = result[i].name;
                obj.id = result[i].id;
                obj.info = result[i].info;

                data.push(obj)
            }

            res.status(200).send(tableGenerator(data));

            // метод pool.end закрывает все соединения
            pool.end(function(err) {
                console.log('pool closed');
            })
        });

    });
});

// событие connection генерируется при установлении подключения
pool.on('connection', function() {
    console.log('connected');
});

// событие enqueue генерируется, когда в очереди обработки есть соединения, ожидающие подключения
pool.on('enqueue', function() {
    console.log('waiting for connection');
});

app.listen(port, function() {

    console.log('app listening on port ' + port);

});


