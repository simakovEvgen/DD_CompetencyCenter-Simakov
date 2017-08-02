/*
 * ClassWork
 *
 * ### Задача 2
 *
 * Модифицируйте код предыдущей задачи. Добавьте код, который отправляет GET запрос по пути '/test'.
 */

var http = require('http');

const port = process.env.port || 1337;

var server = http.createServer(function (request, response) {

    console.log(request.method);
    console.log(request.url);





    response.writeHead(200, { 'Content-Type': 'text/html' });

    response.end('<h1>Hello World</h1>');



});

server.listen(port, '127.0.0.1');



console.log('Server running on port ' + port);

var options = {
    host: '127.0.0.1',
    port: port,
    path: '/test'
};

// callback используется для обработки ответа
var callback = function (response) {

    // Записывать данные в body по мере поступления
    var body = '';
    response.on('data', function (data) {
        body += data;
    });

    response.on('end', function () {
        // Данные полностью получены
        console.log(body);
    });
}

// Для создания запроса используется метод http.request(), который принимает в качестве аргумента объект конфигурации запроса
var req = http.request(options, callback);
req.end();