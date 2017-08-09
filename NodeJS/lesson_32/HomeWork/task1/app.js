/*
* HomeWork
*
* Задача 1
*
* Дополните код 3-й задачи предыдущего урока. Добавьте в приложение возможность удалять и редактировать элементы.
*
* Реализуйте следующее:
* Добавьте на главную страницу приложения (страница, которая отображается при GET-запросе по пути '/'),
* поле ввода(для ввода id элемента) и 2 кнопки(Delete Item и Edit Item).
*
* Если поле ввода не пустое, при нажатии на кнопку Delete Item осуществляется поиск в базе данных элемента по
* указанному в поле ввода ID и, в случае, если элемент найден, его удаление.
*
* Если поле ввода не пустое, при нажатии на кнопку Edit Item осуществляется поиск в базе данных элемента по
* указанному в поле ввода ID и, в случае, если элемент найден,
* переход по пути '/editItem' и загрузка страницы редактирования элемента.
*
* На странице редактирования элемента находятся 2 поля ввода: name и info и кнопка Apply.
* Если поля ввода name и info не пустые, при нажатии на кнопку Apply осуществляется обновление элемента в базе данных.
*
* После обновления или удаления элемента происходит перенаправление на главную страницу приложения.
*/


var express  = require('express');
var app = express();
var path = require('path');
var http = require('http');
var mysql = require('mysql');
var cookieParser = require('cookie-parser');

var port = process.env.port || 3000;

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

app.use(cookieParser());

app.get('/', function(req, res) {
    res.status(200).sendFile(path.join(__dirname,'/public/index.html'));
});

app.post('/', function(req, res) {

    console.log(req.method, req.path);

    let data = [];

    req.on('data', function(id) {
        data[0] = Number(id.toString());

        res.cookie("editingItem", data[0], {
            expires: new Date(Date.now() + 9000000000000),
            httpOnly: true,
        });
    });

    pool.getConnection(function(err, conn) {

        console.log('search connection!');

        conn.query({
            sql: "SELECT * FROM `test_table` WHERE id=?",
            timeout: 10000,
            values: data
        }, function(err, result) {
            if (err) console.log(err);

            console.log(result);

            if(result[0]) {
                res.send(true);
            } else {
                res.send(false);
            }
            conn.release();
        });
    });
});

app.get('/items', function(req, res) {

    var data = [];

    pool.getConnection(function(err, conn) {

        console.log('get items connection!');

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
            conn.release();
        });

    });
});

app.delete('/items', function(req, res) {

    let data = [];

    req.on('data', function(id) {
        data[0] = id.toString();
    });

    pool.getConnection(function(err, conn) {

        console.log('delete connection!');

        conn.query({
                sql: 'DELETE FROM `test_table` WHERE id=?',
                timeout: 10000,
                values: data
                }, function(err, result) {
                        if (err) console.log(err);

                        res.end();
                        conn.release();
        });
    });
});

app.get('/editItem', function(req, res) {

    console.log(req.method, req.path);

    res.status(200).sendFile(path.join(__dirname,'/public/editItem.html'));
});

app.post('/editItem', function(req, res) {

    /*let data = ['22','11'];*/

    // переписать с айди в адрессной строке
    var item = {};

    console.log('edit put');

    var itemId = Number(req.cookies.editingItem);

    req.on('data', function(obj) {
        var jsonStr = JSON.parse(obj.toString());
        item.name = jsonStr.name;
        item.info = jsonStr.info;
    });

    pool.getConnection(function(err, conn) {

        console.log('put connection!');

        conn.query('UPDATE `test_table` SET ? WHERE ID = ?', [item, itemId], function(err, result) {
            if (err) console.log(err);

            res.status(200).sendFile(path.join(__dirname,'/public/index.html'));
            conn.release();

        });
    });
});

app.get('/addItem', function(req, res) {
    res.status(200).sendFile(path.join(__dirname,'/public/addItem.html'));
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

app.listen(port, function() {
    console.log('app listening on port ' + port);
});