/*
* Class Work
*
* ### Задача 2
*
* Создайте конфигурацию webpack, которая позволяет работать с ReactJS и ES6.
* Создайте 2 страницы с произвольными React компонентами и файл main.js, который будет являться входной точкой приложения(entry point).
* С помощью webpack свяжите эти страницы в файл bundle.js и подключите его к html странице.
*/
import React from 'react'
import ReactDOM from 'react-dom'
import App from './component.jsx'

var container = document.getElementById('root');

ReactDOM.render(<App />, container);