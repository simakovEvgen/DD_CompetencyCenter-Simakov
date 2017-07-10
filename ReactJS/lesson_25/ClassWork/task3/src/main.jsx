/*
* Class Work
*
* ### Задача 3
*
* Используя flux архитектуру создайте страницу-калькулятор: 2 поля ввода и 4 кнопки (*, /, +. -), выполняющие соответствующие
* математические операции над числами, записанные в поля ввода.
 */

var React = require('react');
var ReactDOM = require('react-dom');

var App = require('./pages/App.jsx');

ReactDOM.render(<App/>, document.getElementById('root'));