/*
* #Class Work
*
* ###Задача 3
*
* Напишите код, который создаст в текущей директории файл test с текстом, переданным в качестве аргумента командной строки.
*/

var fs = require('fs');

fs.writeFile('test.txt', process.argv[2], function (err) {

    if (err) {
        console.log(err)
    }

    fs.readFile('test.txt', function (err, data) {
        if (err) {
            console.log(err)
        }
        else {
            console.log(data.toString())
        }
    });
});