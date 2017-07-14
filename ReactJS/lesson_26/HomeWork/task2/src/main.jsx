/*
* Home Work
*
* ### Задача 2
*
* Модифицируйте код предыдущей задачи таким образом, чтобы список заданий(todo List) загружался асинхронно. 
*/

var React = require('react');
var ReactDOM = require('react-dom');

var Provider = require('react-redux').Provider;
var createStore = require('redux').createStore;

var applyMiddleware = require('redux').applyMiddleware;

var thunk = require('redux-thunk').default;
var fetchUsers = require('./actions/async.jsx').fetchUsers;

var taskReducer = require('./reducers/taskReducer.jsx');
var App = require('./components/index.jsx');

const middleware = applyMiddleware(thunk);
const store = createStore(taskReducer, middleware);

store.dispatch(fetchUsers());

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);