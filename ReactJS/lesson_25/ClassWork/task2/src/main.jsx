/*
* Class Work
*
* ### Задача 2
*
* Используя flux архитектуру:
* Создайте страницу-таймер: React компонент, который будет выводить на экран количество секунд, прошедших с момента ее открытия.
* Добавьте на страницу три кнопки: start, stop, reset, выполняющие соответствующие функции
*/

var React = require('react');
var ReactDOM = require('react-dom');

var App = require('./pages/App.jsx');

ReactDOM.render(<App/>, document.getElementById('root'));