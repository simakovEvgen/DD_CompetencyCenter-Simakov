/*
* HomeWork
*
* Задача 2
*
* Дополните код предыдущей задачи. Реализуйте следующее:
* При GET-запросе по пути '/addItem' открывается html страница с 2 полями ввода(name, info) и кнопкой.
* Если поля ввода(или одно из полей ввода) не пустые, при нажатии на кнопку выполняется добавление нового элемента в базу
* данных(данные полей ввода сохраняются в соответсвующих колонках таблицы базы данных).
* После завершения запроса добавления элемента в базу данных, происходит редирект на главную страницу(GET-запрос по пути '/').
*/

var express  = require('express');
var app = express();
var path = require('path');
var http = require('http');
var mysql = require('mysql');

var port = process.env.port || 3000;

app.use ('/public', express.static (__dirname + '/public'));

// соединения могут быть объединены для облегчения их многократного использования
// или использования больщого количесва соединений
var pool = mysql.createPool({
    connectionLimit: 2, // максимальное количество соединений, которые могут быть созданы одновременно
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

    pool.getConnection(function(err, conn) {

        console.log('second connection!!!!');

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

            conn.release();
        });

    });
});


app.get('/addItem', function(req, res) {
    /*pool.end(function(err) {
        console.log('pool closed');
    })*/
    res.status(200).sendFile(path.join(__dirname,'/public/index.html'));
});

app.post('/addItem', function(req, res) {

    pool.getConnection(function(err, conn) {

        req.on('data', function(data) {

            var toType = JSON.parse(data.toString());
            console.log(toType.name);
            console.log(toType.info);
            var values = [['err','err']];
            values[0][0] = toType.name;
            values[0][1] = toType.info;

            conn.query('INSERT INTO `test_table` (NAME, INFO) VALUES ?', [values],function(err) {

                if (err) console.log(err.stack);
                res.status(200).send();
                conn.release();

            });

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