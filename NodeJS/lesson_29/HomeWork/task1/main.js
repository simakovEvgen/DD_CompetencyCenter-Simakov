/*
* HomeWork
*
* ### Задача 1
*
* Создайте HTTP сервер, который записывает заголовки каждого запроса в отдельный файл,
* имя которого - номер запроса(1 - для первого запроса, 2 - для второго и т.д.).
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

    var response_text = ('<h1>Hello World</h1>');
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(response_text);

});

server.listen(port, '127.0.0.1');

console.log('Server running on port ' + port);
