/*
* Class Work
*
* ### Задача 1
*
* Используя flux архитектуру:
* Создайте React компонент, содержащий кнопку и элемент div
* При клике по кнопке присвойте элементу div произвольные стили.
*/

var React = require('react');
var ReactDOM = require('react-dom');

var App = require('./pages/App.jsx');

ReactDOM.render(<App/>, document.getElementById('root'));