/*
* Class Work
*
* ### Задача 2
*
* Модифицируйте код предыдущей задачи так, чтобы загрузка массива users происходила асинхронно.
* Файл с данными в формате JSON находится в папке Classwork.
*/

var React = require('react');
var ReactDOM = require('react-dom');
var ButtonApp = require('./components/buttonApp.jsx')

var Provider = require('react-redux').Provider;
var redux = require('redux');
var createStore = redux.createStore;
var combineReducers = redux.combineReducers; // Необходим в случае нескольких редюсеров
var applyMiddleware = redux.applyMiddleware;
var compose = redux.compose;

var thunk = require('redux-thunk').default; // redux-thunk - middleware-функция, позволяющая создавать actionCreators, которые возвращают функцию вместо action.
var usersReducer = require('./reducers/reducer.jsx');
var fetchUsers = require('./actions/actions.jsx').fetchUsers;

const middleware = applyMiddleware(thunk);
const store = createStore(usersReducer, compose(middleware))


store.dispatch(fetchUsers()) //загрузка файла

ReactDOM.render(
    <Provider store={store}>
        <ButtonApp />
    </Provider>,
    document.getElementById('root')
);
