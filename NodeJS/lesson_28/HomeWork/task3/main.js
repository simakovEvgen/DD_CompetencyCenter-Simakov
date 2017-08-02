/*
* #HomeWork
*
* ###Задача 3
*
* Используя потоки(Streams) прочитайте с 10 по 20 байт файла test.txt и сохраните результат в файле output.txt.
*/

var fs = require('fs');

var readerStream = fs.createReadStream('test.txt');

var data10 = new Buffer(10);

readerStream.on('data', function (data) {
    for (var i = 10; i < 21; i++){
        data10[i-10] = data[i];
    }
});
readerStream.on('end', function () {
    var writerStream = fs.createWriteStream('output.txt');
    writerStream.write(data10, 'utf-8');
});