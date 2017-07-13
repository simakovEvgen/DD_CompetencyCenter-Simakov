/*
* Home Work
*
* ### Задача 1
*
* Используя flux архитектуру :
* Создайте приложение todoList. Отображайте данные в виде списка
* Добавьте возможность удалять/добавлять элементы в список
*/

var React = require('react');
var ReactDOM = require('react-dom');

var App = require('./pages/App.jsx');

ReactDOM.render(<App/>, document.getElementById('root'));