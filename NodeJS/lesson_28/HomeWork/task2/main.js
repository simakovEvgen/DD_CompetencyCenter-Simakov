/*
* #HomeWork
*
* ###Задача 2
*
* Рядом с файлом с задачами в папке Homework находится файл test.txt.
* Напишите код, который выведет в консоль с 10 по 15 байт этого файла.
*/

var fs = require('fs');

fs.open('test.txt', 'r', function (err, fd) {

    if (err) {
        console.log(err);
    }
    else {

        var arr = new Uint8Array(5);
        var buf = Buffer.from(arr.buffer);

        fs.read(fd, buf, 0, buf.length, 10, function (err) {

            if (err) throw err;

            console.log(buf);

            console.log(buf.toString('ascii', 0, 25));
        });

        // закрыть файл
        fs.close(fd, function (err) {
            if (err) throw err;
        })
    }
});
