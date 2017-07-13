/*
* Home Work
*
* ### Задача 2
*
* Модифицируйте код предыдущей задачи. Добавьте React компонент, содержащий поле ввода и кнопку Search. При нажатии на кнопку,  видимыми пользователю должны быть только элементы списка, соответствующие значению поля ввода.
*/

var React = require('react');
var ReactDOM = require('react-dom');

var App = require('./pages/App.jsx');

ReactDOM.render(<App/>, document.getElementById('root'));