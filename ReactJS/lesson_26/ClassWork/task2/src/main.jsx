/*
* Class Work
*
* ### Задача 2
*
* Используя Redux, реализуйте следующее:
* Создайте React компонент, который содержит кнопку
* Создайте его дочерний компонент, который принимает в качестве свойства массив users и отображает его в виде
* списка при клике по кнопке первого компонента
*/

var React = require('react');
var ReactDOM = require('react-dom');

var Provider = require('react-redux').Provider;
var createStore = require('redux').createStore;

var reducer = require('./reducers/reducer.jsx');
var ButtonApp = require('./components/buttonApp.jsx');

let store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <ButtonApp />
    </Provider>,
    document.getElementById('root')
);
