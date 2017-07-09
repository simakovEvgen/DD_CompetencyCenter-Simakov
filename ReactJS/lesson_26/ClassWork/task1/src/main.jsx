/*
* Class Work
*
* ### Задача 1
*
*  Создайте React компонент с полем ввода и элементом h1.
*  При изменении его значения (при вводе текста),
*  реализуйте отображение этого тектса в элементе h1.
*  Используйте Redux.
*/

var React = require('react');
var ReactDOM = require('react-dom');

var Provider = require('react-redux').Provider;
var createStore = require('redux').createStore;

var countReducer = require('./reducers/inputReducer.jsx');
var App = require('./components/app.jsx');

let store = createStore(countReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
