/*
* Class Work
*
* ### Задача 1
*
* Создайте папку app. В ней создайте файл index.html и папку src. В папке src создайте 2 файла:
* файл app.js с произвольным кодом
* файл main.js, который загрузит код файла app.js
* С помощью webpack свяжите эти страницы в файл bundle.js и подключите его к странице index.html.
*/

class Hello {
    constructor(){
        this.state = {str: "Hello!"}
    }
    sayHi(){
        console.log(this.state.str)
    }
}

module.exports = Hello;
