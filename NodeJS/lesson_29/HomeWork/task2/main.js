/*
* HomeWork
*
* ### Задача 2
*
* Добавьте в предыдущую задачу код, отправляющий POST запрос по пути '/test'. Тело запроса - произвольный текст.
* Ответ сервера должен быть в формате JSON в следующем виде: '{"message": "ТЕКСТ ТЕЛА ЗАПРОСА"}'.
*/

var http = require('http');
var fs = require('fs');

const port = process.env.port || 1337;

var numberOfRequest = 1;
var nameOfFile= '1.txt';

function countUp() {
    ++numberOfRequest;
    nameOfFile = numberOfRequest + '.txt';
}

var server = http.createServer(function (request, response) {

    if (request.method) {
        var writerStream = fs.createWriteStream(nameOfFile);
        writerStream.write(request.rawHeaders.toString());
        countUp();
    }


    if(request.method == 'POST'){
        request.on('data', function (data) {


            body = data.toString();

            // создание тела ответа
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write('{"message":' + ' "' + body + '"' + '}');
            response.end();
        });
    }
    else {
        let response_text = ('<h1>Hello World</h1>');
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(response_text);
    }


});

server.listen(port, '127.0.0.1');

var postData = 'This is sample POST data!';

// Параметры создаваемого запроса
var options = {
    host: 'localhost',
    port: port,
    path: '/test',
    method: 'POST',
    headers: { 'Content-Type': 'text/plain' }
};


// сделать запрос на сервер
var req = http.request(options, (res) => {
        res.setEncoding('utf8');

        res.on('data', (chunk) => {
        console.log(`BODY: ${chunk}`);
        });
    });
req.write(postData); // запись данных в тело запроса
req.end();
