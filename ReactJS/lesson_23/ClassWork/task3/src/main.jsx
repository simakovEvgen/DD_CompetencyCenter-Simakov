/*
 * Class Work
 *
 * ### Задача 3
 *
 * Переделайте задание из предыдущей задачи с использованием browserify.
 * Реализуйте выполнение команд browserify через поле scripts файла package.json.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import App from './component.jsx'

var container = document.getElementById('root');

ReactDOM.render(<App />, container);