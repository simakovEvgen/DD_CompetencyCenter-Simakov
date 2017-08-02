/*
* #Class Work
*
* ###Задача 1
*
* Напишите код, который выводит в консоль сумму аргументов, переданных в командной строке при запуске файла.
*/
var res;
for(var i = 2; i < process.argv.length; i++){
    if(!res){
        res = Number(process.argv[i]);
    } else {
        res = res + Number(process.argv[i]);
    }
}

console.log(res);